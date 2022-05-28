/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMap, Polyline } from 'react-leaflet';
import { pathOptionsPropTypes } from './BasePropTypes.react';

// 定义折线图层组件LeafletPolyline
const LeafletPolyline = (props) => {

    // 取得必要属性或参数
    const {
        id,
        positions,
        pathOptions,
        loading_state,
        setProps
    } = props;

    // const map = useMap();

    // useEffect(() => {
    // }, [])

    // 返回定制化的前端组件
    return (
        <Polyline id={id}
            positions={positions}
            pathOptions={pathOptions}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        ></Polyline>
    );
}

// 定义参数或属性
LeafletPolyline.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 设置折线中折点坐标数组，必填
    positions: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.exact({
                // 经度
                lng: PropTypes.number,

                // 纬度
                lat: PropTypes.number
            })
        ),
        PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.exact({
                    // 经度
                    lng: PropTypes.number,

                    // 纬度
                    lat: PropTypes.number
                })
            )
        )
    ]),

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
LeafletPolyline.defaultProps = {
}

export default LeafletPolyline;