/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CircleMarker } from 'react-leaflet';
import { pathOptionsPropTypes } from './BasePropTypes.react';

// 定义圆圈标志图层组件LeafletCircleMarker
const LeafletCircleMarker = (props) => {

    // 取得必要属性或参数
    const {
        id,
        key,
        children,
        center,
        radius,
        pathOptions,
        editable,
        nClicks,
        mouseOverCount,
        loading_state,
        setProps
    } = props;

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
            key={key}
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
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</CircleMarker>
    );
}

// 定义参数或属性
LeafletCircleMarker.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 强制刷新用
    key: PropTypes.string,

    // 传入tooltip、popup组件
    children: PropTypes.node,

    // 设置圆心坐标，必填
    center: PropTypes.exact({
        // 经度
        lng: PropTypes.number,

        // 纬度
        lat: PropTypes.number
    }).isRequired,

    // 设置显示半径，单位像素，默认为10
    radius: PropTypes.number,

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
LeafletCircleMarker.defaultProps = {
    radius: 10,
    editable: false,
    nClicks: 0,
    mouseOverCount: 0
}

export default React.memo(LeafletCircleMarker);