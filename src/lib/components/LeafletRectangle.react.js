/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import L from "leaflet";
import { useMap, Rectangle } from 'react-leaflet';
import { pathOptionsPropTypes } from './BasePropTypes.react';

// 定义矩形图层组件LeafletRectangle
const LeafletRectangle = (props) => {

    // 取得必要属性或参数
    const {
        id,
        children,
        bounds,
        pathOptions,
        loading_state,
        setProps
    } = props;

    // 返回定制化的前端组件
    return (
        <Rectangle id={id}
            bounds={L.latLngBounds(
                L.latLng(bounds.miny, bounds.minx),
                L.latLng(bounds.maxy, bounds.maxx)
            )}
            pathOptions={{
                ...pathOptions,
                pmIgnore: true
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
}

export default LeafletRectangle;