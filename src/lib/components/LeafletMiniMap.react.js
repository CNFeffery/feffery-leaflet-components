/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// react核心
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import MiniMap from 'leaflet-minimap';
import "leaflet-minimap/dist/Control.MiniMap.min.css";
// 辅助库
import { isUndefined, omitBy } from 'lodash';
// 参数类型
import { pathOptionsPropTypes } from './BasePropTypes.react';

/**
 * 迷你地图组件LeafletMiniMap
 */
const LeafletMiniMap = (props) => {
    const {
        url,
        attribution,
        opacity,
        zIndex,
        minZoom,
        maxZoom,
        position,
        width,
        height,
        collapsedWidth,
        collapsedHeight,
        zoomLevelOffset,
        zoomLevelFixed,
        zoomAnimation,
        toggleDisplay,
        autoToggleDisplay,
        aimingRectOptions,
        shadowRectOptions,
        minimized,
        loading_state,
        setProps
    } = props;

    const map = useMap()

    useEffect(() => {
        new MiniMap(
            new L.TileLayer(
                url,
                {
                    minZoom: minZoom,
                    maxZoom: maxZoom,
                    attribution: attribution,
                    opacity: opacity,
                    zIndex: zIndex
                }),
            // 利用lodash移除所有值为undefined的属性
            omitBy(
                {
                    strings: {
                        hideText: '折叠迷你图',
                        showText: '展开迷你图'
                    },
                    position: position,
                    width: width,
                    height: height,
                    collapsedWidth: collapsedWidth,
                    collapsedHeight: collapsedHeight,
                    zoomLevelOffset: zoomLevelOffset,
                    zoomLevelFixed: zoomLevelFixed,
                    zoomAnimation: zoomAnimation,
                    toggleDisplay: toggleDisplay,
                    autoToggleDisplay: autoToggleDisplay,
                    aimingRectOptions: aimingRectOptions,
                    shadowRectOptions: shadowRectOptions,
                    minimized: minimized
                },
                isUndefined))
            .addTo(map);
    }, [])

    return <></>;
}

LeafletMiniMap.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 迷你地图瓦片地图服务地址
     */
    url: PropTypes.string,

    /**
     * 迷你地图瓦片地图服务`attribution`信息
     */
    attribution: PropTypes.string,

    /**
     * 迷你地图瓦片地图服务透明度
     */
    opacity: PropTypes.number,

    /**
     * 迷你地图瓦片地图服务`z`轴层级
     */
    zIndex: PropTypes.number,

    /**
     * 缩放级别下限
     */
    minZoom: PropTypes.number,

    /**
     * 缩放级别上限
     */
    maxZoom: PropTypes.number,

    /**
     * 迷你地图显示方位，可选的有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
     * 默认值：`'bottomright'`
     */
    position: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),

    /**
     * 迷你地图整体像素宽度
     * 默认值：`150`
     */
    width: PropTypes.number,

    /**
     * 迷你地图整体像素高度
     * 默认值：`150`
     */
    height: PropTypes.number,

    /**
     * 迷你地图折叠状态下的像素宽度
     * 默认值：`19`
     */
    collapsedWidth: PropTypes.number,

    /**
     * 迷你地图折叠状态下的像素高度
     * 默认值：`19`
     */
    collapsedHeight: PropTypes.number,

    /**
     * 迷你地图与主体地图的缩放级别偏差
     * 默认值：`-5`
     */
    zoomLevelOffset: PropTypes.number,

    /**
     * 迷你地图强制锁定的缩放级别
     */
    zoomLevelFixed: PropTypes.number,

    /**
     * 迷你地图是否启用缩放变化动画
     * 默认值：`false`
     */
    zoomAnimation: PropTypes.bool,

    /**
     * 是否渲染迷你地图折叠按钮
     * 默认值：`false`
     */
    toggleDisplay: PropTypes.bool,

    /**
     * 当参数`zoomLevelFixed`有效，且主体地图范围不再适应迷你地图时，是否自动隐藏迷你地图
     * 默认值：`false`
     */
    autoToggleDisplay: PropTypes.bool,

    /**
     * 迷你地图范围标识框要素样式
     */
    aimingRectOptions: pathOptionsPropTypes,

    /**
     * 迷你地图范围标识框阴影要素样式
     */
    shadowRectOptions: pathOptionsPropTypes,

    /**
     * 迷你地图初始化时是否处于折叠状态
     */
    minimized: PropTypes.bool,

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

LeafletMiniMap.defaultProps = {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    opacity: 1
}

export default React.memo(LeafletMiniMap);