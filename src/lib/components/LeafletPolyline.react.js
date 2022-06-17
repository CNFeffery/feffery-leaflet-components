/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import 'leaflet-arrowheads';
import { useMap, Polyline } from 'react-leaflet';
import { pathOptionsPropTypes } from './BasePropTypes.react';

// 定义折线图层组件LeafletPolyline
const LeafletPolyline = (props) => {

    // 取得必要属性或参数
    const {
        id,
        children,
        positions,
        pathOptions,
        arrowheads,
        arrowheadsPathOptions,
        loading_state,
        setProps
    } = props;

    const polylineRef = useRef(null);

    useEffect(() => {
        if (polylineRef.current) {
            if (arrowheads) {
                if (typeof arrowheads !== 'boolean') {
                    // 装填参数
                    polylineRef.current.arrowheads(
                        {
                            ...arrowheads,
                            ...arrowheadsPathOptions
                        }
                    )
                    polylineRef.current._update()
                } else {
                    polylineRef.current.arrowheads()
                    polylineRef.current._update()
                }
            } else {
                polylineRef.current.deleteArrowheads()
            }

        }
    }, [arrowheads])

    // 返回定制化的前端组件
    return (
        <Polyline id={id}
            positions={positions}
            pathOptions={{
                ...pathOptions,
                pmIgnore: true
            }}
            ref={polylineRef}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</Polyline>
    );
}

// 定义参数或属性
LeafletPolyline.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 传入tooltip、popup组件
    children: PropTypes.node,

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

    // 设置arrowheads效果
    arrowheads: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            // 设置箭头开合角度，默认为60
            yawn: PropTypes.number,

            // 设置是否绘制实心箭头，默认为false
            fill: PropTypes.bool,

            // 设置箭头尺寸，默认为'15%'
            size: PropTypes.oneOfType([
                // 数值型输入表示米为单位
                PropTypes.number,
                // 字符型输入表示以附着polyline为主体的百分比尺寸
                // 或css像素尺寸输入
                PropTypes.string
            ]),

            // 设置箭头在线要素上的绘制频率，默认为'allvertices'
            frequency: PropTypes.oneOfType([
                // 策略名称，'allvertices'表示每个折点对应1个箭头
                // 'endonly'表示只在线要素末端绘制1个箭头
                PropTypes.oneOf(['allvertices', 'endonly']),
                // 等间距绘制固定数量的箭头
                PropTypes.number,
                // 以'm'结尾定义间隔若干米绘制每个箭头，如'100m'
                // 以'px'结尾定义间隔若干像素绘制每个箭头，如'100px'
                PropTypes.string
            ]),

            // 当size设置为百分比时，用于设置针对多段线要素
            // 的百分比分母从平均分段线长度变为所有线要素长度之和
            // 默认为false
            proportionalToTotal: PropTypes.bool,
        })
    ]),

    // 为箭头设置优先级更高的要素样式
    arrowheadsPathOptions: pathOptionsPropTypes,

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