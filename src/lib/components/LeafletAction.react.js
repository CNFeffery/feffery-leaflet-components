import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMap } from 'react-leaflet';

// 定义文件上传组件AntdUpload，api参数参考https://ant.design/components/upload-cn/
const LeafletAction = (props) => {

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
            if (mapActionConfig.type === 'zoom-in') {
                map.zoomIn(mapActionConfig.zoomInOffset);
            } else if (mapActionConfig.type === 'zoom-out') {
                // zoom-out动作
                map.zoomOut(mapActionConfig.zoomOutOffset);
            } else if (mapActionConfig.type === 'set-view') {
                // set-view动作
                const lat = mapActionConfig.center.lat
                const lng = mapActionConfig.center.lng
                const zoom = mapActionConfig.zoom

                map.setView([lat, lng], zoom);
            } else if (mapActionConfig.type === 'fly-to') {
                // fly-to动作
                const lat = mapActionConfig.center.lat
                const lng = mapActionConfig.center.lng
                const zoom = mapActionConfig.zoom
                map.flyTo([lat, lng], zoom);
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
                    )
                );
            }
        }

    }, [mapActionConfig])



    // 基于mapActionConfig参数执行地图动作
    // 若地图动作配置参数中的动作类型存在
    // if (mapActionConfig?.type) {
    //     // zoom-in动作
    //     if (mapActionConfig.type === 'zoom-in') {
    //         map.zoomIn(mapActionConfig.zoomInOffset);
    //     } else if (mapActionConfig.type === 'zoom-out') {
    //         // zoom-out动作
    //         map.zoomOut(mapActionConfig.zoomOutOffset);
    //     } else if (mapActionConfig.type === 'set-view') {
    //         // set-view动作
    //         map.setView(mapActionConfig.center || map.get, mapActionConfig.zoom);
    //     } else if (mapActionConfig.type === 'pan-to') {
    //         // pan-to动作
    //         map.panTo(mapActionConfig.center);
    //     } else if (mapActionConfig.type === 'fly-to') {
    //         // fly-to动作
    //         map.flyTo(mapActionConfig.center, mapActionConfig.zoom);
    //     } else if (mapActionConfig.type === 'fly-to-bounds') {
    //         // fly-to-bounds动作
    //         map.flyToBounds(
    //             L.latLngBounds(
    //                 L.latLng(mapActionConfig.bounds.miny, mapActionConfig.bounds.minx),
    //                 L.latLng(mapActionConfig.bounds.maxy, mapActionConfig.bounds.maxx)
    //             )
    //         );
    //     } else if (mapActionConfig.type === 'stop') {
    //         // stop动作
    //         map.stop();
    //     }
    // }

    // 返回定制化的前端组件
    return (
        <div />
    );
}

// 定义参数或属性
LeafletAction.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 用于编排一次新的地图动作
    mapActionConfig: PropTypes.exact({
        // 设置地图视角切换动作类型，可选值：'zoom-in'/'zoom-out'/'set-view'/'pan-to'/'fly-to'/'fly-to-bounds'/'stop'
        // 'zoom-in'：在当前地图zoom基础上，放大设定的级别，受zoomInOffset参数控制
        // 'zoom-out'：在当前地图zoom基础上，缩小设定的级别，受zoomOutOffset参数控制
        // 'set-view'：以自动模式改变地图视角，受center参数控制目标中心坐标、受zoom参数设置目标缩放级别
        // 'fly-to'：强制以飞行模式改变地图视角，受center参数控制目标中心坐标、受zoom参数设置目标缩放级别
        // 'fly-to-bounds'：强制以飞行模式改变地图视角，受bounds参数控制目标视角范围
        type: PropTypes.oneOf(['zoom-in', 'zoom-out', 'set-view', 'fly-to', 'fly-to-bounds']),

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
        })
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
LeafletAction.defaultProps = {
}

export default LeafletAction;