/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMap, CircleMarker } from 'react-leaflet';
import { pathOptionsPropTypes } from './BasePropTypes.react';

// 定义圆圈标志图层组件LeafletCircleMarker
const LeafletCircleMarker = (props) => {

    // 取得必要属性或参数
    const {
        id,
        center,
        radius,
        pathOptions,
        loading_state,
        setProps
    } = props;

    // const map = useMap();

    // useEffect(() => {
    // }, [])

    // 返回定制化的前端组件
    return (
        <CircleMarker id={id}
            center={center}
            radius={radius}
            pathOptions={pathOptions}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        ></CircleMarker>
    );
}

// 定义参数或属性
LeafletCircleMarker.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 设置圆心坐标，必填
    center: PropTypes.exact({
        // 经度
        lng: PropTypes.number,

        // 纬度
        lat: PropTypes.number
    }).isRequired,

    // 设置半径，单位米，必填
    radius: PropTypes.number.isRequired,

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
LeafletCircleMarker.defaultProps = {
}

export default LeafletCircleMarker;