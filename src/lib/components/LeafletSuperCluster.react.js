/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import "@geoman-io/leaflet-geoman-free";
import { useMap, Marker, Tooltip } from 'react-leaflet';
import { omit } from 'lodash';
import L from 'leaflet';
import {
    markerIcon,
    marker2xIcon,
    markerShadow
} from './utils/exportImages.react';
import useSupercluster from 'use-supercluster';

// 修正全局默认marker图标不显示的问题
const defaultIconOptions = {
    iconUrl: markerIcon,
    iconRetinaUrl: marker2xIcon,
    shadowUrl: markerShadow,
    iconAnchor: [12, 41],
    iconSize: [25, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
}

const icons = {};
const fetchIcon = (count, size) => {
    if (!icons[count]) {
        icons[count] = L.divIcon({
            html: `<div class="cluster-marker" style="width: ${size}px; height: ${size}px;">
        ${count}
      </div>`,
        });
    }
    return icons[count];
};

// 定义巨量标记聚类图层组件LeafletSuperCluster
const LeafletSuperCluster = (props) => {

    // 取得必要属性或参数
    const {
        id,
        positions,
        loading_state,
        setProps
    } = props;

    const maxZoom = 22;
    const [bounds, setBounds] = useState(null);
    const [zoom, setZoom] = useState(12);
    const map = useMap();

    const updateMap = () => {
        const b = map.getBounds();
        setBounds([
            b.getSouthWest().lng,
            b.getSouthWest().lat,
            b.getNorthEast().lng,
            b.getNorthEast().lat,
        ]);
        setZoom(map.getZoom());
    }

    const onZoom = useCallback(() => {
        updateMap();
    }, [map]);

    useEffect(() => {
        updateMap();
    }, [map]);

    useEffect(() => {
        map.on("zoom move", onZoom);
        return () => {
            map.off("zoom move", onZoom);
        };
    }, [map, onZoom]);

    const points = positions.map((point) => ({
        type: "Feature",
        properties: {
            ...omit(point, ['lng', 'lat']),
            cluster: false
        },
        geometry: {
            type: "Point",
            coordinates: [
                point.lng,
                point.lat,
            ],
        },
    }));

    const { clusters, supercluster } = useSupercluster({
        points: points,
        bounds: bounds,
        zoom: zoom,
        options: { radius: 75, maxZoom: 17 },
    });

    return (
        <div data-dash-is-loading={
            (loading_state && loading_state.is_loading) || undefined
        }>
            {clusters.map((cluster) => {
                // 提取聚类簇中心坐标
                const [lng, lat] = cluster.geometry.coordinates;
                // 提取判断是否为聚类簇的标识值，以及聚类簇中的点数量
                const {
                    cluster: isCluster,
                    point_count: pointCount
                } = cluster.properties;

                // 若当前对象为聚类簇，则使用聚类簇的点数量作为标记图标的大小
                if (isCluster) {
                    return (
                        <Marker
                            position={{
                                lng: lng,
                                lat: lat
                            }}
                            icon={fetchIcon(
                                pointCount,
                                10 + (pointCount / points.length) * 40
                            )}
                            eventHandlers={{
                                // 为聚类簇标记点配置点击展开事件
                                click: () => {
                                    const expansionZoom = Math.min(
                                        supercluster.getClusterExpansionZoom(cluster.id),
                                        maxZoom
                                    );
                                    map.setView({
                                        lng: lng,
                                        lat: lat
                                    }, expansionZoom, {
                                        animate: true,
                                    });
                                },
                            }}
                        />
                    );
                }

                // 若当前对象为单点，则绘制单标记
                return (
                    <Marker
                        position={{
                            lng: lng,
                            lat: lat
                        }}
                        icon={L.icon(defaultIconOptions)}
                    >{
                            cluster.properties.tooltip ?
                                <Tooltip sticky={true}>{
                                    cluster.properties.tooltip
                                }</Tooltip> : null
                        }</ Marker>
                );
            })}
        </ div>
    );
}

// 定义参数或属性
LeafletSuperCluster.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 设置标记信息对象数组，必填
    positions: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
LeafletSuperCluster.defaultProps = {
}

export default LeafletSuperCluster;