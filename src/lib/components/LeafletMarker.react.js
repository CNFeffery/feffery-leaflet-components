/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// react核心
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { Marker } from 'react-leaflet';
import L from 'leaflet';
import {
    markerIcon,
    marker2xIcon,
    markerShadow
} from './utils/exportImages.react';
// 辅助库
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

/**
 * 标记图层组件LeafletMarker
 */
const LeafletMarker = ({
    id,
    className,
    children,
    iconOptions,
    position,
    draggable,
    opacity,
    editable = false,
    zIndexOffset,
    riseOnHover,
    autoPan,
    nClicks = 0,
    mouseOverCount = 0,
    setProps
}) => {

    const markerRef = useRef(null);

    useEffect(() => {
        if (markerRef.current && editable) {
            // 支持geoman可编辑特性
            markerRef.current.on('pm:edit', function (e) {
                // 更新点坐标
                setProps({
                    position: e.layer._latlng
                })
            });
        }
    }, [editable])

    useEffect(() => {
        if (markerRef.current && draggable) {
            // 监听可拖拽事件
            markerRef.current.on('dragend', function (e) {
                // 更新点坐标
                setProps({
                    position: {
                        lng: e.target._latlng.lng,
                        lat: e.target._latlng.lat
                    }
                })
            });
        }
    }, [draggable])

    return (
        <Marker id={id}
            className={className}
            icon={iconOptions ? L.icon(iconOptions) : L.icon(defaultIconOptions)}
            position={position}
            draggable={draggable}
            opacity={opacity}
            pmIgnore={!editable}
            zIndexOffset={zIndexOffset}
            riseOnHover={riseOnHover}
            autoPan={autoPan}
            ref={markerRef}
            eventHandlers={{
                // 监听点击事件
                click: () => {
                    setProps({ nClicks: nClicks + 1 })
                },
                // 监听鼠标移入事件
                mouseover: () => {
                    setProps({ mouseOverCount: mouseOverCount + 1 })
                }
            }}
            data-dash-is-loading={useLoading()}
        >{children}</Marker>
    );
}

LeafletMarker.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 当前图层css类名
     */
    className: PropTypes.string,

    /**
     * 要传入的`LeafletTooltip`、`LeafletPopup`组件，配合当前图层使用
     */
    children: PropTypes.node,

    /**
     * 必填项，标记中心坐标
     */
    position: PropTypes.exact({
        /**
         * 经度
         */
        lng: PropTypes.number,
        /**
         * 纬度
         */
        lat: PropTypes.number
    }).isRequired,

    /**
     * 当前标记是否可拖拽
     * 默认值：`false`
     */
    draggable: PropTypes.bool,

    /**
     * 配置图标参数
     */
    iconOptions: PropTypes.exact({
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
     * 图标透明度
     * 默认值：`1`
     */
    opacity: PropTypes.number,

    /**
     * 当前要素是否可编辑
     * 默认值：`false`
     */
    editable: PropTypes.bool,

    /**
     * 当前图层`z`轴偏移单位
     */
    zIndexOffset: PropTypes.number,

    /**
     * 当鼠标悬浮于当前标记上时，是否自动调整图层至顶层
     * 默认值：`false`
     */
    riseOnHover: PropTypes.bool,

    /**
     * 当拖拽标记至地图边缘时，设置是否允许地图自动移动以适应边缘
     * 默认值：`false`
     */
    autoPan: PropTypes.bool,

    /**
     * 监听当前要素累计点击次数
     * 默认值：`0`
     */
    nClicks: PropTypes.number,

    /**
     * 监听当前要素鼠标移入事件累计次数
     * 默认值：`0`
     */
    mouseOverCount: PropTypes.number,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletMarker);