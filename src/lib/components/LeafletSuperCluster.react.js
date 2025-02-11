/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// react核心
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import "@geoman-io/leaflet-geoman-free";
import { useMap, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import {
    markerIcon,
    marker2xIcon,
    markerShadow
} from './utils/exportImages.react';
import useSupercluster from 'use-supercluster';
// 辅助库
import { omit, omitBy, isUndefined } from 'lodash';
import { useLoading } from '../utils';

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

/**
 * 巨量标记聚类图层组件LeafletSuperCluster
 */
const LeafletSuperCluster = ({
    id,
    positions,
    clusterBackground,
    clusterBorder,
    clusterTextColor,
    clusterIconBaseSize = 10,
    clusterIconExtraSizeFactor = 40,
    clusterTextSizeFactor = 0.4,
    minZoom,
    maxZoom,
    minPoints,
    radius,
    extent,
    nodeSize,
    iconOptions,
    tooltipField = 'tooltip',
    tooltipSticky,
    categoryField = 'category',
    setProps
}) => {

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
            ...omit(point, ['lng']),
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
            data-dash-is-loading={useLoading()}>
            {clusters.map((cluster, index) => {
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
                            key={index}
                            pmIgnore={true}
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
                        key={index}
                        pmIgnore={true}
                        position={{
                            lng: lng,
                            lat: lat
                        }}
                        icon={
                            iconOptions ?
                                (
                                    iconOptions[cluster.properties[categoryField]] ?
                                        // 启用对应的映射图标参数
                                        L.icon(iconOptions[cluster.properties[categoryField]]) :
                                        L.icon(iconOptions)
                                ) :
                                L.icon(defaultIconOptions)
                        }
                        eventHandlers={{
                            // 监听点击事件
                            click: () => {
                                setProps({
                                    clickedPoint: {
                                        feature: cluster,
                                        timestamp: Date.now()
                                    }
                                })
                            }
                        }}
                    >
                        {
                            cluster.properties[tooltipField] ?
                                <Tooltip
                                    sticky={tooltipSticky}
                                    eventHandlers={{
                                        add: (e) => {
                                            e.sourceTarget.setContent(cluster.properties[tooltipField])
                                        }
                                    }}
                                /> : null
                        }
                    </ Marker>
                );
            })}
        </ div>
    );
}

LeafletSuperCluster.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 必填，定义标记点坐标
     */
    positions: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired,

    /**
     * 聚类簇背景，同css中的``background``属性
     */
    clusterBackground: PropTypes.string,

    /**
     * 聚类簇边框，同css中的`border`属性
     */
    clusterBorder: PropTypes.string,

    /**
     * 聚类簇文字颜色，同css中的`color`属性
     */
    clusterTextColor: PropTypes.string,

    /**
     * 聚类簇基础像素尺寸
     * 各聚类簇实际尺寸计算方式：`clusterIconBaseSize+(簇内点数量/图层点总数)*clusterIconExtraSizeFactor`
     * 默认值：`10`
     */
    clusterIconBaseSize: PropTypes.number,

    /**
     * 聚类簇尺寸扩张系数，具体计算规则见参数`clusterIconBaseSize`说明
     * 默认值：`40`
     */
    clusterIconExtraSizeFactor: PropTypes.number,

    /**
     * 聚类簇文字尺寸占对应簇整体尺寸的比例
     * 默认值：`0.4`
     */
    clusterTextSizeFactor: PropTypes.number,

    /**
     * 聚类簇生成对应的最小缩放级别
     * 默认值：`0`
     */
    minZoom: PropTypes.number,

    /**
     * 聚类簇生成对应的最大缩放级别
     * 默认值：`16`
     */
    maxZoom: PropTypes.number,

    /**
     * 形成聚类簇所需的最小标记点数量
     * 默认值：`2`
     */
    minPoints: PropTypes.number,

    /**
     * 聚类簇像素半径
     * 默认值：`40`
     */
    radius: PropTypes.number,

    /**
     * 当前地图中使用的瓦片地图像素边长
     * 默认值：`512`
     */
    extent: PropTypes.number,

    /**
     * 控制聚类过程`KD`树节点尺寸
     * 默认值：`64`
     */
    nodeSize: PropTypes.number,

    /**
     * 配置图标，支持分类独立控制
     */
    iconOptions: PropTypes.oneOfType([
        PropTypes.exact({
            /**
             * 图标图片地址
             */
            iconUrl: PropTypes.string,
            /**
             * 图标像素尺寸，格式：`[width, height]`
             */
            iconSize: PropTypes.arrayOf(PropTypes.number),
            /**
             * 图标尖端坐标，以图片左上角为原点，格式：`[x, y]`
             */
            iconAnchor: PropTypes.arrayOf(PropTypes.number),
            /**
             * 弹出卡片展开锚点，以`iconAnchor`为原点参照，格式：`[x, y]`
             */
            popupAnchor: PropTypes.arrayOf(PropTypes.number),
            /**
             * 信息框展开锚点，以`iconAnchor`为原点参照，格式：`[x, y]`
             */
            tooltipAnchor: PropTypes.arrayOf(PropTypes.number),
            /**
             * 阴影图片地址
             */
            shadowUrl: PropTypes.string,
            /**
             * 阴影图片像素尺寸，格式：`[width, height]`
             */
            shadowSize: PropTypes.arrayOf(PropTypes.number),
            /**
             * 阴影图片的尖端坐标，以图片左上角为原点参照，格式：`[x, y]`
             */
            shadowAnchor: PropTypes.arrayOf(PropTypes.number),
            /**
             * 标记图标css类
             */
            className: PropTypes.string
        }),
        /**
         * 以类别为键，分别配置不同类别的图标参数
         */
        PropTypes.objectOf(
            PropTypes.exact({
                /**
                 * 图标图片地址
                 */
                iconUrl: PropTypes.string,
                /**
                 * 图标像素尺寸，格式：`[width, height]`
                 */
                iconSize: PropTypes.arrayOf(PropTypes.number),
                /**
                 * 图标尖端坐标，以图片左上角为原点，格式：`[x, y]`
                 */
                iconAnchor: PropTypes.arrayOf(PropTypes.number),
                /**
                 * 弹出卡片展开锚点，以`iconAnchor`为原点参照，格式：`[x, y]`
                 */
                popupAnchor: PropTypes.arrayOf(PropTypes.number),
                /**
                 * 信息框展开锚点，以`iconAnchor`为原点参照，格式：`[x, y]`
                 */
                tooltipAnchor: PropTypes.arrayOf(PropTypes.number),
                /**
                 * 阴影图片地址
                 */
                shadowUrl: PropTypes.string,
                /**
                 * 阴影图片像素尺寸，格式：`[width, height]`
                 */
                shadowSize: PropTypes.arrayOf(PropTypes.number),
                /**
                 * 阴影图片的尖端坐标，以图片左上角为原点参照，格式：`[x, y]`
                 */
                shadowAnchor: PropTypes.arrayOf(PropTypes.number),
                /**
                 * 标记图标css类
                 */
                className: PropTypes.string
            })
        )
    ]),

    /**
     * 标记点数据作为信息框内容的字段
     * 默认值：`'tooltip'`
     */
    tooltipField: PropTypes.string,

    /**
     * 信息框是否跟随鼠标位置
     * 默认值：`false`
     */
    tooltipSticky: PropTypes.bool,

    /**
     * 标记点数据作为类别的字段
     * 默认值：`'category'`
     */
    categoryField: PropTypes.string,

    /**
     * 监听标记点点击事件
     */
    clickedPoint: PropTypes.exact({
        /**
         * 被点击要素数据
         */
        feature: PropTypes.object,
        /**
         * 事件对应时间戳
         */
        timestamp: PropTypes.number
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletSuperCluster);