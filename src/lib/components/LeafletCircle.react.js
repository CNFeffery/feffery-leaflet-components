/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useMap, Circle } from 'react-leaflet';
import { pathOptionsPropTypes } from './BasePropTypes.react';

// 定义圆圈图层组件LeafletCircle
const LeafletCircle = (props) => {

    // 取得必要属性或参数
    const {
        id,
        children,
        center,
        radius,
        pathOptions,
        editable,
        loading_state,
        setProps
    } = props;

    const circleRef = useRef(null);

    useEffect(() => {
        if (circleRef.current) {
            circleRef.current.on('pm:edit', function (e) {
                // 更新坐标集合
                setProps({
                    center: e.layer._latlng,
                    radius: e.layer._mRadius
                })
            });
        }
    })

    // 返回定制化的前端组件
    return (
        <Circle id={id}
            center={center}
            radius={radius}
            pathOptions={{
                ...pathOptions,
                pmIgnore: !editable
            }}
            ref={circleRef}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</Circle>
    );
}

// 定义参数或属性
LeafletCircle.propTypes = {
    // 组件id
    id: PropTypes.string,

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

    // 设置半径，单位米，必填
    radius: PropTypes.number.isRequired,

    // 设置样式相关参数
    pathOptions: pathOptionsPropTypes,

    // 设置是否可编辑，默认为false
    editable: PropTypes.bool,

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
LeafletCircle.defaultProps = {
    editable: false
}

export default React.memo(LeafletCircle);