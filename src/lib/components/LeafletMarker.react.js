/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-leaflet';
import L from 'leaflet';
import {
    markerIcon,
    marker2xIcon,
    markerShadow
} from './utils/exportImages.react';

// 修正全局默认marker图标不显示的问题
const defaultIconOptions = {
    iconUrl: markerIcon,
    iconRetinaUrl: marker2xIcon,
    shadowUrl: markerShadow,
    iconAnchor: [12, 41],
    iconSize: [25, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
}

// 定义标志图层组件LeafletMarker
const LeafletMarker = (props) => {

    // 取得必要属性或参数
    const {
        id,
        key,
        children,
        iconOptions,
        position,
        draggable,
        opacity,
        editable,
        zIndexOffset,
        riseOnHover,
        autoPan,
        nClicks,
        mouseOverCount,
        loading_state,
        setProps
    } = props;

    const markerRef = useRef(null);

    useEffect(() => {
        if (markerRef.current && editable) {
            // 支持geoman可编辑特性
            markerRef.current.on('pm:edit', function (e) {
                // 更新点坐标
                setProps({
                    position: e.layer._latlng
                })
            });
        }
    }, [editable])

    useEffect(() => {
        if (markerRef.current && draggable) {
            // 监听可拖拽事件
            markerRef.current.on('dragend', function (e) {
                // 更新点坐标
                setProps({
                    position: {
                        lng: e.target._latlng.lng,
                        lat: e.target._latlng.lat
                    }
                })
            });
        }
    }, [draggable])

    return (
        <Marker id={id}
            key={key}
            icon={iconOptions ? L.icon(iconOptions) : L.icon(defaultIconOptions)}
            position={position}
            draggable={draggable}
            opacity={opacity}
            pmIgnore={!editable}
            zIndexOffset={zIndexOffset}
            riseOnHover={riseOnHover}
            autoPan={autoPan}
            ref={markerRef}
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
        >{children}</Marker>
    );
}

// 定义参数或属性
LeafletMarker.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * 强制刷新用
     */
    key: PropTypes.string,

    // 传入tooltip、popup组件
    children: PropTypes.node,

    // 设置标记坐标，必填
    position: PropTypes.exact({
        // 经度
        lng: PropTypes.number,
        // 纬度
        lat: PropTypes.number
    }).isRequired,

    // 设置是否可进行拖拽，默认为false
    draggable: PropTypes.bool,

    // 自定义图标参数
    iconOptions: PropTypes.exact({
        // 图标图片url
        iconUrl: PropTypes.string,
        // 设置图标图片主体尺寸
        iconSize: PropTypes.arrayOf(PropTypes.number),
        // 设置图标图片尖端坐标，以图片左上角为原点参照
        iconAnchor: PropTypes.arrayOf(PropTypes.number),
        // 设置popup打开的锚点，以iconAnchor为原点参照
        popupAnchor: PropTypes.arrayOf(PropTypes.number),
        // 设置tooltip打开的锚点，以iconAnchor为原点参照
        tooltipAnchor: PropTypes.arrayOf(PropTypes.number),
        // 设置阴影图片url
        shadowUrl: PropTypes.string,
        // 设置阴影图片的尺寸
        shadowSize: PropTypes.arrayOf(PropTypes.number),
        // 设置阴影图片的尖端坐标，以图片左上角为原点参照
        shadowAnchor: PropTypes.arrayOf(PropTypes.number),
        // 设置标记图标css类
        className: PropTypes.string
    }),

    // 设置透明度，默认为1
    opacity: PropTypes.number,

    // 设置是否可编辑，默认为false
    editable: PropTypes.bool,

    // 设置zIndexOffset
    zIndexOffset: PropTypes.number,

    // 设置当鼠标悬浮于当前标记上时，是否自动调整图层至顶层，默认为false
    riseOnHover: PropTypes.bool,

    // 当拖拽标记至地图边缘时，设置是否允许地图自动移动以适应边缘，默认为false
    autoPan: PropTypes.bool,

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
LeafletMarker.defaultProps = {
    editable: false,
    nClicks: 0,
    mouseOverCount: 0
}

export default React.memo(LeafletMarker);