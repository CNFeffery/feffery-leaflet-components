/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import L from "leaflet";
import { useRequest } from 'ahooks';
import { Rectangle } from 'react-leaflet';
import { pathOptionsPropTypes } from './BasePropTypes.react';

// 定义矩形图层组件LeafletRectangle
const LeafletRectangle = (props) => {

    // 取得必要属性或参数
    const {
        id,
        key,
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
            key={key}
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

// 定义参数或属性
LeafletRectangle.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * 强制刷新用
     */
    key: PropTypes.string,

    // 传入tooltip、popup组件
    children: PropTypes.node,

    // 设置矩形左下角、右上角坐标点，必填
    bounds: PropTypes.exact({
        // 矩形左下角经度
        minx: PropTypes.number.isRequired,
        // 矩形左下角纬度
        miny: PropTypes.number.isRequired,
        // 矩形右上角经度
        maxx: PropTypes.number.isRequired,
        // 矩形右上角纬度
        maxy: PropTypes.number.isRequired
    }).isRequired,

    // 设置样式相关参数
    pathOptions: pathOptionsPropTypes,

    // 设置是否可编辑，默认为false
    editable: PropTypes.bool,

    // 监听当前圆圈标志的被点击次数，默认为0
    nClicks: PropTypes.number,

    // 监听当前圆圈标志发生鼠标移入事件次数，默认为0
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

// 设置默认参数
LeafletRectangle.defaultProps = {
    editable: false,
    nClicks: 0,
    mouseOverCount: 0
}

export default React.memo(LeafletRectangle);