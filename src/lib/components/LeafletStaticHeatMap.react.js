/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undefined */
// react核心
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import L from "leaflet";
import "leaflet-webgl-heatmap";
import "./utils/webgl-heatmap";
import { useMap } from 'react-leaflet';
// 辅助库
import { omitBy, isUndefined } from 'lodash';

/**
 * 静态热力图层组件LeafletStaticHeatMap
 */
const LeafletStaticHeatMap = ({
    points,
    multiplyFactor = 1,
    size = 30000,
    opacity = 1,
    alphaRange,
    setProps
}) => {

    const map = useMap()

    useEffect(() => {
        if (map) {
            const staticHeatmap = L.webGLHeatmap(
                omitBy(
                    {
                        size: size,
                        units: 'm',
                        alphaRange: alphaRange,
                        opacity: opacity
                    },
                    isUndefined
                )
            );

            staticHeatmap.setData(points.map(item => {
                return item.weight ? [item.lat, item.lng, item.weight] : [item.lat, item.lng];
            }));

            if (multiplyFactor) {
                staticHeatmap.multiply(multiplyFactor);
            }

            map.addLayer(staticHeatmap);
        }
    }, [map])

    return <></>
}

LeafletStaticHeatMap.propTypes = {
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
             * 热力点经度
             */
            lng: PropTypes.number,
            /**
             * 热力点纬度
             */
            lat: PropTypes.number,
            /**
             * 热力点权重
             */
            weight: PropTypes.number
        })
    ),

    /**
     * 热力权重全局变换系数，将原始的各热力点权重值变为`权重 * multiplyFactor`
     * 默认值：`1`
     */
    multiplyFactor: PropTypes.number,

    /**
     * 热力点半径，单位：米
     * 默认值：`30000`
     */
    size: PropTypes.number,

    /**
     * 热力点透明度
     * 默认值：`1`
     */
    opacity: PropTypes.number,

    /**
     * 权重比例阈值上限，取值应在`0`到`1`之间
     */
    alphaRange: PropTypes.number,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletStaticHeatMap);