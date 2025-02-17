/* eslint-disable no-undef */
/* eslint-disable dot-notation */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// react核心
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { useMap } from 'react-leaflet';

const speedMap = {
    instant: 0.02,
    fast: 0.5,
    normal: 1,
    slow: 2,
    auto: 0
}

/**
 * 地图动作组件LeafletMapAction
 */
const LeafletMapAction = ({
    mapActionConfig
}) => {

    const map = useMap();

    useEffect(() => {
        if (mapActionConfig && mapActionConfig.type) {
            if (mapActionConfig.type === 'set-zoom') {
                // set-zoom动作
                setTimeout(
                    () => {
                        map.setZoom(mapActionConfig.zoom);
                    },
                    mapActionConfig.delay || 0
                )
            } else if (mapActionConfig.type === 'zoom-in') {
                // zoom-in动作
                setTimeout(
                    () => {
                        map.zoomIn(mapActionConfig.zoomInOffset);
                    },
                    mapActionConfig.delay || 0
                )
            } else if (mapActionConfig.type === 'zoom-out') {
                // zoom-out动作
                setTimeout(
                    () => {
                        map.zoomOut(mapActionConfig.zoomOutOffset);
                    },
                    mapActionConfig.delay || 0
                )
            } else if (mapActionConfig.type === 'set-view') {
                // set-view动作
                setTimeout(
                    () => {
                        const lat = mapActionConfig.center.lat
                        const lng = mapActionConfig.center.lng
                        const zoom = mapActionConfig.zoom || map.getZoom()
                        map.setView([lat, lng], zoom);
                    },
                    mapActionConfig.delay || 0
                )
            } else if (mapActionConfig.type === 'pan-to') {
                // set-view动作
                setTimeout(
                    () => {
                        const lat = mapActionConfig.center.lat
                        const lng = mapActionConfig.center.lng
                        map.panTo([lat, lng]);
                    },
                    mapActionConfig.delay || 0
                )
            } else if (mapActionConfig.type === 'fly-to') {
                // fly-to动作
                setTimeout(
                    () => {
                        const lat = mapActionConfig.center.lat
                        const lng = mapActionConfig.center.lng
                        const zoom = mapActionConfig.zoom || map.getZoom()
                        map.flyTo([lat, lng], zoom,
                            {
                                duration: mapActionConfig.flyToDuration ?
                                    speedMap[mapActionConfig.flyToDuration] : speedMap['auto']
                            });
                    },
                    mapActionConfig.delay || 0
                )
            } else if (mapActionConfig.type === 'fly-to-bounds') {
                // fly-to-bounds动作
                setTimeout(
                    () => {
                        const minx = mapActionConfig.bounds.minx
                        const miny = mapActionConfig.bounds.miny
                        const maxx = mapActionConfig.bounds.maxx
                        const maxy = mapActionConfig.bounds.maxy
                        map.flyToBounds(
                            L.latLngBounds(
                                L.latLng(miny, minx),
                                L.latLng(maxy, maxx)
                            ),
                            {
                                duration: mapActionConfig.flyToDuration ?
                                    speedMap[mapActionConfig.flyToDuration] : speedMap['auto']
                            }
                        );
                    },
                    mapActionConfig.delay || 0
                )
            } else if (mapActionConfig.type === 'invalidate-size') {
                // 执行invalidate-size动作
                map.invalidateSize();
            }
        }

    }, [mapActionConfig])

    // 返回定制化的前端组件
    return <></>;
}

LeafletMapAction.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 编排触发新的地图动作
     */
    mapActionConfig: PropTypes.exact({
        /**
         * 地图动作类型，可选项有`'set-zoom'`、`'zoom-in'`、`'zoom-out'`、`'set-view'`、`'pan-to'`、`'fly-to'`、`'fly-to-bounds'`、`'invalidate-size'`，其中
         * `'set-zoom'`模式用于更新地图缩放级别；
         * `'zoom-in'`用于在当前地图缩放级别基础上，放大设定的级别；
         * `'zoom-out'`用于在当前地图缩放级别基础上，缩小设定的级别;
         * `'set-view'`用于更新地图视角；
         * `'pan-to'`用于移动地图中心点位置；
         * `'fly-to'`用于以飞行动画模式更新地图视角;
         * `'fly-to-bounds'`用于以飞行动画模式令地图视角自适应目标矩形区域范围;
         * `'invalidate-size'`用于手动刷新矫正地图视角；
         */
        type: PropTypes.oneOf(['set-zoom', 'zoom-in', 'zoom-out', 'set-view', 'pan-to', 'fly-to', 'fly-to-bounds', 'invalidate-size']),

        /**
         * 地图动作目标中心点坐标，适用的地图动作类型：`'set-view'`、`'pan-to'`、`'fly-to'`
         */
        center: PropTypes.exact({
            /**
             * 目标中心点经度
             */
            lng: PropTypes.number,
            /**
             * 目标中心点纬度
             */
            lat: PropTypes.number
        }),

        /**
         * 地图动作目标缩放级别，若不设置，相关地图动作动画过程将不会改变地图缩放级别，适用的地图动作类型：`'set-zoom'`、`'set-view'`、`'fly-to'`
         */
        zoom: PropTypes.number,

        /**
         * 地图动作目标放大层级单位数量，适用的地图动作类型：`'zoom-in'`
         */
        zoomInOffset: PropTypes.number,

        /**
         * 地图动作目标缩小层级单位数量，适用的地图动作类型：`'zoom-out'`
         */
        zoomOutOffset: PropTypes.number,

        /**
         * 地图动作目标矩形范围坐标，适用的地图动作类型：`'fly-to-bounds'`
         */
        bounds: PropTypes.exact({
            /**
             * 目标矩形区域最小经度
             */
            minx: PropTypes.number,
            /**
             * 目标矩形区域最小纬度
             */
            miny: PropTypes.number,
            /**
             * 目标矩形区域最大经度
             */
            maxx: PropTypes.number,
            /**
             * 目标矩形区域最大纬度
             */
            maxy: PropTypes.number
        }),

        /**
         * 地图飞行类动画对应过渡时长，单位：秒，适用的地图动作类型：`'fly-to'`、`'fly-to-bounds'`
         */
        flyToDuration: PropTypes.oneOf(['instant', 'fast', 'normal', 'slow', 'auto']),

        /**
         * 地图动作目标执行延时，单位：毫秒
         * 默认值：`0`
         */
        delay: PropTypes.number
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletMapAction);