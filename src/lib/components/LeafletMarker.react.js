/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import "@geoman-io/leaflet-geoman-free";
import { useMap, Marker } from 'react-leaflet';
import L, { icon } from 'leaflet';
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
        children,
        iconOptions,
        position,
        draggable,
        opacity,
        editable,
        zIndexOffset,
        riseOnHover,
        autoPan,
        loading_state,
        setProps
    } = props;

    const markerRef = useRef(null);

    useEffect(() => {
        if (markerRef.current) {
            markerRef.current.on('pm:edit', function (e) {
                // 更新坐标集合
                setProps({
                    position: e.layer._latlng
                })
            });
        }
    })

    // 返回定制化的前端组件
    return (
        <Marker id={id}
            icon={iconOptions ? L.icon(iconOptions) : L.icon(defaultIconOptions)}
            position={position}
            draggable={draggable}
            opacity={opacity}
            pmIgnore={!editable}
            zIndexOffset={zIndexOffset}
            riseOnHover={riseOnHover}
            autoPan={autoPan}
            ref={markerRef}
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
    editable: false
}

export default React.memo(LeafletMarker);