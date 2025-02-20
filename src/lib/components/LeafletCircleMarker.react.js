/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// react核心
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { CircleMarker } from 'react-leaflet';
// 参数类型
import { pathOptionsPropTypes } from './BasePropTypes.react';
// 辅助库
import { useLoading } from '../utils';

/**
 * 圆形标记图层组件LeafletCircleMarker
 */
const LeafletCircleMarker = ({
    id,
    className,
    children,
    center,
    radius = 10,
    pathOptions,
    editable = false,
    nClicks = 0,
    mouseOverCount = 0,
    setProps
}) => {

    const circleMarkerRef = useRef(null);

    useEffect(() => {
        if (circleMarkerRef.current && editable) {
            // 支持geoman可编辑特性
            circleMarkerRef.current.on('pm:edit', function (e) {
                // 更新圆心坐标
                setProps({
                    center: e.layer._latlng
                })
            });
        }
    }, [editable])

    return (
        <CircleMarker id={id}
            className={className}
            center={center}
            radius={radius}
            pathOptions={{
                ...pathOptions,
                pmIgnore: !editable
            }}
            ref={circleMarkerRef}
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
        >{children}</CircleMarker>
    );
}

LeafletCircleMarker.propTypes = {
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
     * 必填项，圆形标记中心坐标
     */
    center: PropTypes.exact({
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
     * 圆形标记像素半径
     * 默认值：`10`
     */
    radius: PropTypes.number,

    /**
     * 矢量样式配置参数
     */
    pathOptions: pathOptionsPropTypes,

    /**
     * 当前要素是否可编辑
     * 默认值：`false`
     */
    editable: PropTypes.bool,

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

LeafletCircleMarker.defaultProps = {
    radius: 10,
    editable: false,
    nClicks: 0,
    mouseOverCount: 0
}

export default React.memo(LeafletCircleMarker);