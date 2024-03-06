/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Polygon } from 'react-leaflet';
import { pathOptionsPropTypes } from './BasePropTypes.react';

// 定义多边形图层组件LeafletPolygon
const LeafletPolygon = (props) => {

    // 取得必要属性或参数
    const {
        id,
        key,
        children,
        positions,
        pathOptions,
        editable,
        nClicks,
        mouseOverCount,
        loading_state,
        setProps
    } = props;

    const polygonRef = useRef(null);

    useEffect(() => {
        if (polygonRef.current && editable) {
            // 支持geoman可编辑特性
            polygonRef.current.on('pm:edit', function (e) {
                // 更新多边形坐标数组
                setProps({
                    positions: e.layer._latlngs
                })
            });
        }
    })

    return (
        <Polygon id={id}
            key={key}
            positions={positions}
            pathOptions={{
                ...pathOptions,
                pmIgnore: !editable
            }}
            ref={polygonRef}
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
        >{children}</Polygon>
    );
}

// 定义参数或属性
LeafletPolygon.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * 强制刷新用
     */
    key: PropTypes.string,

    // 传入tooltip、popup组件
    children: PropTypes.node,

    // 设置多边形中折点坐标数组，必填
    positions: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.exact({
                // 经度
                lng: PropTypes.number,

                // 纬度
                lat: PropTypes.number
            }),
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
        ])
    ).isRequired,

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
LeafletPolygon.defaultProps = {
    editable: false,
    nClicks: 0,
    mouseOverCount: 0
}

export default React.memo(LeafletPolygon);