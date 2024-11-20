/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// react核心
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import L from "leaflet";
import { Rectangle } from 'react-leaflet';
// 辅助库
import { useRequest } from 'ahooks';
// 参数类型
import { pathOptionsPropTypes } from './BasePropTypes.react';

/**
 * 矩形图层组件LeafletRectangle
 */
const LeafletRectangle = (props) => {
    const {
        id,
        className,
        children,
        bounds,
        pathOptions,
        editable,
        nClicks,
        mouseOverCount,
        loading_state,
        setProps
    } = props;

    const rectangleRef = useRef(null);

    const { run: onDebounceChange } = useRequest(
        (e) => {
            // 更新矩形左下角、右上角坐标
            setProps({
                bounds: {
                    minx: e.layer._bounds._southWest.lng,
                    miny: e.layer._bounds._southWest.lat,
                    maxx: e.layer._bounds._northEast.lng,
                    maxy: e.layer._bounds._northEast.lat
                }
            })
        },
        {
            throttleWait: 0,
            manual: true
        }
    )

    useEffect(() => {
        if (rectangleRef.current && editable) {
            // 支持geoman可编辑特性
            rectangleRef.current.on('pm:change', function (e) {
                onDebounceChange(e)
            });
        }
    }, [editable])

    return (
        <Rectangle id={id}
            className={className}
            bounds={L.latLngBounds(
                L.latLng(bounds.miny, bounds.minx),
                L.latLng(bounds.maxy, bounds.maxx)
            )}
            pathOptions={{
                ...pathOptions,
                pmIgnore: !editable
            }}
            ref={rectangleRef}
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
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</Rectangle>
    );
}

LeafletRectangle.propTypes = {
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
     * 必填项，定义矩形左下角、右上角坐标
     */
    bounds: PropTypes.exact({
        /**
         * 矩形左下角经度
         */
        minx: PropTypes.number.isRequired,
        /**
         * 矩形左下角纬度
         */
        miny: PropTypes.number.isRequired,
        /**
         * 矩形右上角经度
         */
        maxx: PropTypes.number.isRequired,
        /**
         * 矩形右上角纬度
         */
        maxy: PropTypes.number.isRequired
    }).isRequired,

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

LeafletRectangle.defaultProps = {
    editable: false,
    nClicks: 0,
    mouseOverCount: 0
}

export default React.memo(LeafletRectangle);