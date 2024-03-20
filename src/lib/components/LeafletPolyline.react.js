/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import 'leaflet-arrowheads';
import { Polyline } from 'react-leaflet';
import { isBoolean } from 'lodash';
import { pathOptionsPropTypes } from './BasePropTypes.react';

// 定义折线图层组件LeafletPolyline
const LeafletPolyline = (props) => {

    // 取得必要属性或参数
    const {
        id,
        key,
        className,
        children,
        positions,
        pathOptions,
        arrowheads,
        arrowheadsPathOptions,
        editable,
        nClicks,
        mouseOverCount,
        loading_state,
        setProps
    } = props;

    const polylineRef = useRef(null);

    useEffect(() => {
        if (polylineRef.current) {
            // 若开启箭头效果
            if (arrowheads) {
                if (!isBoolean(arrowheads)) {
                    // 装填参数
                    polylineRef.current.arrowheads(
                        {
                            ...arrowheads,
                            ...arrowheadsPathOptions
                        }
                    )
                } else {
                    polylineRef.current.arrowheads()
                }
                // 更新箭头折线图层
                polylineRef.current._update()
            } else {
                // 否则移除先前的箭头图层
                polylineRef.current.deleteArrowheads()
            }
        }
    }, [arrowheads])

    useEffect(() => {
        if (polylineRef.current && editable) {
            // 支持geoman可编辑特性
            polylineRef.current.on('pm:edit', function (e) {
                // 更新折线坐标数组
                setProps({
                    positions: e.layer._latlngs
                })
            });
        }
    }, [editable])

    return (
        <Polyline id={id}
            key={key}
            className={className}
            positions={positions}
            pathOptions={{
                ...pathOptions,
                pmIgnore: !editable
            }}
            ref={polylineRef}
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
        >{children}</Polyline>
    );
}

// 定义参数或属性
LeafletPolyline.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * 强制刷新用
     */
    key: PropTypes.string,

    /**
     * 为当前矢量设置className
     */
    className: PropTypes.string,

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
    ]).isRequired,

    // 设置样式相关参数
    pathOptions: pathOptionsPropTypes,

    // 设置arrowheads效果，默认为false
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

    // 设置是否可编辑，默认为false
    editable: PropTypes.bool,

    // 监听当前折线的被点击次数，默认为0
    nClicks: PropTypes.number,

    // 监听当前折线发生鼠标移入事件次数，默认为0
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
LeafletPolyline.defaultProps = {
    arrowheads: false,
    editable: false,
    nClicks: 0,
    mouseOverCount: 0
}

export default React.memo(LeafletPolyline);