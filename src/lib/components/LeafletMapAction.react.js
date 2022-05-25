/* eslint-disable no-undef */
/* eslint-disable dot-notation */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMap } from 'react-leaflet';

const speedMap = {
    instant: 0.02,
    fast: 0.5,
    normal: 1,
    slow: 2,
    auto: 0
}

const LeafletMapAction = (props) => {

    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        mapActionConfig,
        loading_state,
        setProps
    } = props;

    const map = useMap();

    useEffect(() => {

        if (mapActionConfig && mapActionConfig.type) {
            if (mapActionConfig.type === 'set-zoom') {
                map.setZoom(mapActionConfig.zoom);
            } else if (mapActionConfig.type === 'zoom-in') {
                map.zoomIn(mapActionConfig.zoomInOffset);
            } else if (mapActionConfig.type === 'zoom-out') {
                // zoom-out动作
                map.zoomOut(mapActionConfig.zoomOutOffset);
            } else if (mapActionConfig.type === 'fly-to') {
                // fly-to动作
                const lat = mapActionConfig.center.lat
                const lng = mapActionConfig.center.lng
                const zoom = mapActionConfig.zoom || map.getZoom()
                map.flyTo([lat, lng], zoom,
                    {
                        duration: mapActionConfig.flyToDuration ?
                            speedMap[mapActionConfig.flyToDuration] : speedMap['auto']
                    });
            } else if (mapActionConfig.type === 'fly-to-bounds') {
                // fly-to-bounds动作
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
            }
        }

    }, [mapActionConfig])

    // 返回定制化的前端组件
    return <div id={id} />;
}

// 定义参数或属性
LeafletMapAction.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 用于编排一次新的地图动作
    mapActionConfig: PropTypes.exact({
        // 设置地图视角切换动作类型，可选值：'set-zoom'/'zoom-in'/'zoom-out'/'fly-to'/'fly-to-bounds'
        // 'set-zoom'：改变地图缩放级别，受参数zoom控制
        // 'zoom-in'：在当前地图zoom基础上，放大设定的级别，受zoomInOffset参数控制
        // 'zoom-out'：在当前地图zoom基础上，缩小设定的级别，受zoomOutOffset参数控制
        // 'fly-to'：强制以飞行模式改变地图视角，受center参数控制目标中心坐标、受zoom参数设置目标缩放级别
        // 'fly-to-bounds'：强制以飞行模式改变地图视角，受bounds参数控制目标视角范围
        type: PropTypes.oneOf(['set-zoom', 'zoom-in', 'zoom-out', 'fly-to', 'fly-to-bounds']),

        // 设置地图视角切换对应的中心点坐标信息，若无，则使用地图当前中心点
        center: PropTypes.exact({
            // 经度
            lng: PropTypes.number,
            // 纬度
            lat: PropTypes.number
        }),

        // 设置地图视角切换对应的缩放级别，不设置则切换地图视角过程中不会改变地图缩放级别
        zoom: PropTypes.number,

        // 'zoom-in'模式下可用，用于设定地图放大级别的偏移量
        zoomInOffset: PropTypes.number,

        // 'zoom-out'模式下可用，用于设定地图缩小级别的偏移量
        zoomOutOffset: PropTypes.number,

        // 'fly-to-bounds'模式下可用，用于设定地图矩形视角范围
        bounds: PropTypes.exact({
            minx: PropTypes.number,
            miny: PropTypes.number,
            maxx: PropTypes.number,
            maxy: PropTypes.number
        }),

        // 'fly-to'、'fly-to-bounds'模式下可用，用于设定地图飞行动画时间，单位：秒
        flyToDuration: PropTypes.oneOf(['instant', 'fast', 'normal', 'slow', 'auto']),
    }),

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
LeafletMapAction.defaultProps = {
}

export default LeafletMapAction;