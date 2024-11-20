/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// react核心
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import 'leaflet-arrowheads';
import { Polyline } from 'react-leaflet';
// 辅助库
import { isBoolean } from 'lodash';
// 参数类型
import { pathOptionsPropTypes } from './BasePropTypes.react';

/**
 * 折线图层组件LeafletPolyline
 */
const LeafletPolyline = (props) => {
    const {
        id,
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

LeafletPolyline.propTypes = {
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
     * 必填，定义折线坐标
     */
    positions: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.exact({
                /**
                 * 经度
                 */
                lng: PropTypes.number,
                /**
                 * 纬度
                 */
                lat: PropTypes.number
            })
        ),
        PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.exact({
                    /**
                     * 经度
                     */
                    lng: PropTypes.number,
                    /**
                     * 纬度
                     */
                    lat: PropTypes.number
                })
            )
        )
    ]).isRequired,

    /**
     * 矢量样式配置参数
     */
    pathOptions: pathOptionsPropTypes,

    /**
     * 配置额外箭头效果
     * 默认值：`false`
     */
    arrowheads: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 箭头开合角度
             * 默认值：`60`
             */
            yawn: PropTypes.number,
            /**
             * 是否绘制实心箭头
             * 默认值：`false`
             */
            fill: PropTypes.bool,
            /**
             * 箭头尺寸比例，传入数值型是以米为单位，传入字符串时表示对应所附着折线的百分比，或css格式尺寸值
             * 默认值：`'15%'`
             */
            size: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]),
            /**
             * 箭头在折线上的绘制频率，可选项有`'allvertices'`（每个折点对应1个箭头）、`'endonly'`（只在线要素末端绘制1个箭头）
             * 当传入以`'m'`结尾的字符串时表示以米为单位的间隔，传入以`'px'`结尾的字符串时表示以像素为单位的间隔
             * 传入数值型时表示以等间距方式绘制固定数量的箭头
             * 默认值：`'allvertices'`
             */
            frequency: PropTypes.oneOfType([
                PropTypes.oneOf(['allvertices', 'endonly']),
                PropTypes.number,
                PropTypes.string
            ]),
            /**
             * 当`size`设置为百分比形式时，针对多段折线要素，是否以整体折线长度总和为百分比对应的单位1
             * 默认值：`false`
             */
            proportionalToTotal: PropTypes.bool,
        })
    ]),

    /**
     * 箭头样式配置参数，默认沿用`pathOptions`
     */
    arrowheadsPathOptions: pathOptionsPropTypes,

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

LeafletPolyline.defaultProps = {
    arrowheads: false,
    editable: false,
    nClicks: 0,
    mouseOverCount: 0
}

export default React.memo(LeafletPolyline);