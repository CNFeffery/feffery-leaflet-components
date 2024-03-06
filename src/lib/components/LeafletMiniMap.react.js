/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import MiniMap from 'leaflet-minimap';
import "leaflet-minimap/dist/Control.MiniMap.min.css";
import { pathOptionsPropTypes } from './BasePropTypes.react';
import { isUndefined, omitBy } from 'lodash';

// 定义迷你图组件LeafletMiniMap
const LeafletMiniMap = (props) => {

    // 取得必要属性或参数
    const {
        id,
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

    // 返回定制化的前端组件
    return <></>;
}

// 定义参数或属性
LeafletMiniMap.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * 强制刷新用
     */
    key: PropTypes.string,

    // 设置地图服务的url参数
    url: PropTypes.string,

    // 设置attribution参数
    attribution: PropTypes.string,

    // 设置图层透明度，默认为1
    opacity: PropTypes.number,

    // 设置z轴层级
    zIndex: PropTypes.number,

    // 设置zoom级别下限
    minZoom: PropTypes.number,

    // 设置zoom级别上限
    maxZoom: PropTypes.number,

    // 设置迷你图的方位，可选的有'topleft'、'topright'、'bottomleft'、'bottomright'
    // 默认为'bottomright'
    position: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),

    // 设置迷你图的像素宽度，默认为150
    width: PropTypes.number,

    // 设置迷你图的像素高度，默认为150
    height: PropTypes.number,

    // 设置折叠状态下迷你图的像素宽度，默认为19
    collapsedWidth: PropTypes.number,

    // 设置折叠状态下迷你图的像素高度，默认为19
    collapsedHeight: PropTypes.number,

    // 设置迷你图与主体地图的zoom级别偏差，默认为-5
    zoomLevelOffset: PropTypes.number,

    // 设置迷你图的强制缩放级别，会导致迷你图zoom级别锁定
    zoomLevelFixed: PropTypes.number,

    // 设置迷你图是否渲染缩放变化动画，默认为false
    zoomAnimation: PropTypes.bool,

    // 设置是否渲染迷你图折叠按钮，默认为false
    toggleDisplay: PropTypes.bool,

    // 当zoomLevelFixed参数被设置且主体地图的bounds范围不再适应迷你图时
    // 是否自动隐藏迷你图，默认为false
    autoToggleDisplay: PropTypes.bool,

    // 为迷你图目标范围标识框设置要素样式
    aimingRectOptions: pathOptionsPropTypes,

    // 为迷你图目标范围标识框的阴影设置要素样式
    shadowRectOptions: pathOptionsPropTypes,

    // 设置迷你图初始化时是否处于折叠状态
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

// 设置默认参数
LeafletMiniMap.defaultProps = {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    opacity: 1
}

export default React.memo(LeafletMiniMap);