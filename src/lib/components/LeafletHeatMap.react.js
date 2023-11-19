/* eslint-disable no-unused-vars */
/* eslint-disable no-undefined */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import L from "leaflet";
import "leaflet.heat";
import { useMap } from 'react-leaflet';

// 定义热力图层组件LeafletHeatMap
const LeafletHeatMap = (props) => {
    // 取得必要属性或参数
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

// 定义参数或属性
LeafletHeatMap.propTypes = {
    // 组件id
    id: PropTypes.string,

    key: PropTypes.string,

    // 设置热力图渲染所需点数据，格式为由{lng: xxx, lat: xxx, weight: xxx}
    // 所组成的数组，其中weight可选，表示权重
    points: PropTypes.arrayOf(
        PropTypes.exact({
            lng: PropTypes.number,
            lat: PropTypes.number,
            weight: PropTypes.number
        })
    ),

    // 设置最小透明度，取值在0~1之间，0表示完全透明
    minOpacity: PropTypes.number,

    // 设置权重的上限，默认为1.0
    max: PropTypes.number,

    // 设置每个热力点的半径大小，默认为25
    radius: PropTypes.number,

    // 设置每个热力点的模糊程度，默认为15
    blur: PropTypes.number,

    // 自定义色彩过渡断点规则，例如：{0.4: 'blue', 0.65: 'lime', 1: 'red'}
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

// 设置默认参数
LeafletHeatMap.defaultProps = {
    minOpacity: 0,
    max: 1,
    radius: 25,
    blur: 15
}

export default React.memo(LeafletHeatMap);