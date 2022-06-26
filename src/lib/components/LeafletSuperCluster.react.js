/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import "@geoman-io/leaflet-geoman-free";
import { useMap, Marker, Tooltip } from 'react-leaflet';
import { omit, omitBy, isUndefined } from 'lodash';
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
const fetchIcon = (count, size, clusterOptions) => {
    let clusterStyle = `width: ${size}px; height: ${size}px; font-size: ${size * clusterOptions.clusterTextSizeFactor}px;`
    if (clusterOptions) {
        if (clusterOptions.clusterBackground) {
            clusterStyle = clusterStyle.concat(`background: ${clusterOptions.clusterBackground};`)
        }

        if (clusterOptions.clusterBorder) {
            clusterStyle = clusterStyle.concat(`border: ${clusterOptions.clusterBorder};`)
        }

        if (clusterOptions.clusterTextColor) {
            clusterStyle = clusterStyle.concat(`color: ${clusterOptions.clusterTextColor};`)
        }
    }


    if (!icons[count]) {
        icons[count] = L.divIcon({
            html: `<div class="cluster-marker" style="${clusterStyle}">
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
        clusterBackground,
        clusterBorder,
        clusterTextColor,
        clusterIconBaseSize,
        clusterIconExtraSizeFactor,
        clusterTextSizeFactor,
        minZoom,
        maxZoom,
        minPoints,
        radius,
        extent,
        nodeSize,
        iconOptions,
        tooltipSticky,
        loading_state,
        setProps
    } = props;

    // 统一地图视角参数用于减少重复绘制
    const [boundsZoom, setBoundsZoom] = useState({});
    const map = useMap();

    const updateMap = () => {
        const b = map.getBounds();
        setBoundsZoom({
            bounds: [
                b.getSouthWest().lng,
                b.getSouthWest().lat,
                b.getNorthEast().lng,
                b.getNorthEast().lat,
            ],
            zoom: map.getZoom()
        })
    }

    const onZoom = useCallback(() => {
        updateMap();
    }, [map]);

    useEffect(() => {
        updateMap();
    }, [map]);

    useEffect(() => {
        map.on("moveend", onZoom);
        return () => {
            map.off("moveend", onZoom);
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
        // 当前地图视野范围
        bounds: boundsZoom.bounds,
        // 当前地图缩放级别
        zoom: boundsZoom.zoom,
        // 其他功能参数
        options: omitBy(
            {
                minZoom,
                maxZoom,
                minPoints,
                radius,
                extent,
                nodeSize
            },
            isUndefined
        ),
    });

    return (
        <div id={id}
            data-dash-is-loading={
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
                                // 自定义聚类簇尺寸计算规则
                                clusterIconBaseSize + (pointCount / points.length) * clusterIconExtraSizeFactor,
                                {
                                    clusterBackground,
                                    clusterBorder,
                                    clusterTextColor,
                                    clusterTextSizeFactor
                                }
                            )}
                            eventHandlers={{
                                // 为聚类簇标记点配置点击展开事件
                                click: () => {
                                    const expansionZoom = supercluster.getClusterExpansionZoom(cluster.id);
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
                        icon={iconOptions ? L.icon(iconOptions) : L.icon(defaultIconOptions)}
                    >{
                            cluster.properties.tooltip ?
                                <Tooltip
                                    sticky={tooltipSticky}
                                    eventHandlers={{
                                        add: (e) => {
                                            e.sourceTarget.setContent(cluster.properties.tooltip)
                                        }
                                    }}
                                /> : null
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

    // 聚类簇背景，同css中的background属性
    clusterBackground: PropTypes.string,

    // 聚类簇轮廓，同css中的border属性
    clusterBorder: PropTypes.string,

    // 聚类簇文字色彩，同css中的color属性
    clusterTextColor: PropTypes.string,

    // 设置聚类簇的基础像素尺寸，默认为10
    // 聚类簇像素尺寸计算方式：clusterIconBaseSize+(簇内点数量/图层点总数)*clusterIconExtraSizeFactor
    clusterIconBaseSize: PropTypes.number,

    // 设置聚类簇的额外像素尺寸系数，默认为40
    clusterIconExtraSizeFactor: PropTypes.number,

    // 设置聚类簇中的文字尺寸占簇尺寸的比例，默认为0.4
    clusterTextSizeFactor: PropTypes.number,

    // 设置生成聚类簇的最小缩放级别，默认为0
    minZoom: PropTypes.number,

    // 设置生成聚类簇的最大缩放级别，默认为16
    maxZoom: PropTypes.number,

    // 设置形成聚类簇至少需要的点数量，默认为2
    minPoints: PropTypes.number,

    // 设置聚类簇像素半径，默认为40
    radius: PropTypes.number,

    // 设置当前地图中使用的瓦片地图像素边长，默认为512
    extent: PropTypes.number,

    // 设置聚类过程中生成的KD-树节点尺寸，默认为64
    nodeSize: PropTypes.number,

    // 自定义图标参数
    iconOptions: PropTypes.exact({
        // 图标图片url
        iconUrl: PropTypes.string,
        // 设置图标图片主体尺寸
        iconSize: PropTypes.arrayOf(PropTypes.number),
        // 设置图标图片尖端坐标，以图片左上角为原点参照
        iconAnchor: PropTypes.arrayOf(PropTypes.number),
        // 设置popup打开的锚点，以iconAnchor为原点参照
        popupAnchor: PropTypes.arrayOf(PropTypes.number),
        // 设置tooltip打开的锚点，以iconAnchor为原点参照
        tooltipAnchor: PropTypes.arrayOf(PropTypes.number),
        // 设置阴影图片url
        shadowUrl: PropTypes.string,
        // 设置阴影图片的尺寸
        shadowSize: PropTypes.arrayOf(PropTypes.number),
        // 设置阴影图片的尖端坐标，以图片左上角为原点参照
        shadowAnchor: PropTypes.arrayOf(PropTypes.number),
        // 设置标记图标css类
        className: PropTypes.string
    }),

    // 设置tooltip是否开启粘性显示，默认为false
    tooltipSticky: PropTypes.bool,

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
    clusterIconBaseSize: 10,
    clusterIconExtraSizeFactor: 40,
    clusterTextSizeFactor: 0.4
}

export default React.memo(LeafletSuperCluster);