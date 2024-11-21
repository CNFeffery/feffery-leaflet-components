/* eslint-disable no-unused-vars */
/* eslint-disable no-undefined */
// react核心
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import L from "leaflet";
import "leaflet.heat";
import { useMap } from 'react-leaflet';

/**
 * 热力图层组件LeafletHeatMap
 */
const LeafletHeatMap = (props) => {
    const {
        points,
        minOpacity,
        max,
        radius,
        blur,
        gradient,
        setProps,
        loading_state
    } = props;

    const map = useMap()
    const heatmapLayerRef = useRef(null)

    useEffect(() => {
        if (map) {
            // 初始化热力图层
            const heatmapLayer = L.heatLayer(points.map(item => {
                return item.weight ? [item.lat, item.lng, item.weight] : [item.lat, item.lng];
            }), {
                minOpacity,
                max,
                radius,
                blur,
                gradient,
                // _heatmapId: id
            })
            heatmapLayerRef.current = heatmapLayer
            heatmapLayer.addTo(map);
        }
    }, [map])

    useEffect(() => {
        return () => map.removeLayer(heatmapLayerRef.current);
    }, [])

    return <></>
}

LeafletHeatMap.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 热力点数据
     */
    points: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 当前热力点经度
             */
            lng: PropTypes.number,
            /**
             * 当前热力点纬度
             */
            lat: PropTypes.number,
            /**
             * 当前热力点权重
             */
            weight: PropTypes.number
        })
    ),

    /**
     * 透明度下限，取值应在`0`到`1`之间
     * 默认值：`0`
     */
    minOpacity: PropTypes.number,

    /**
     * 权重上限范围
     * 默认值：`1`
     */
    max: PropTypes.number,

    /**
     * 热力点像素半径
     * 默认值：`25`
     */
    radius: PropTypes.number,

    /**
     * 热力点模糊程度
     * 默认值：`15`
     */
    blur: PropTypes.number,

    /**
     * 颜色分段规则，譬如：`{0.4: 'blue', 0.65: 'lime', 1: 'red'}`
     */
    gradient: PropTypes.object,

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

LeafletHeatMap.defaultProps = {
    minOpacity: 0,
    max: 1,
    radius: 25,
    blur: 15
}

export default React.memo(LeafletHeatMap);