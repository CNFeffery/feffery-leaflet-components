/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undefined */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import L from "leaflet";
import "leaflet-webgl-heatmap";
import "./utils/webgl-heatmap";
import { omitBy, isUndefined } from 'lodash';
import { MapConsumer } from 'react-leaflet';

// 定义静态热力图层组件LeafletStaticHeatMap，api参数参考
class LeafletStaticHeatMap extends Component {

    render() {
        // 取得必要属性或参数
        const {
            id,
            points,
            multiplyFactor,
            size,
            opacity,
            alphaRange,
            setProps,
            loading_state
        } = this.props;

        // 返回定制化的前端组件
        return (
            <MapConsumer
                id={id}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                } >
                {(map) => {

                    // 检查是否有已存在的_heatmapId对应图层，如果有则进行移除
                    map.eachLayer(layer => {
                        if (layer.options._staticHeatmapId === id) {
                            map.removeLayer(layer);
                        }
                    })

                    const staticHeatmap = L.webGLHeatmap(
                        omitBy(
                            {
                                size: size,
                                units: 'm',
                                alphaRange: alphaRange,
                                opacity: opacity,
                                _staticHeatmapId: id
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

                    return null;
                }}
            </MapConsumer>
        );
    }
}

// 定义参数或属性
LeafletStaticHeatMap.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 设置热力图渲染所需点数据，格式为由{lng: xxx, lat: xxx, weight: xxx}
    // 所组成的数组，其中weight可选，表示权重
    points: PropTypes.arrayOf(
        PropTypes.exact({
            lng: PropTypes.number,
            lat: PropTypes.number,
            weight: PropTypes.number
        })
    ),

    // 设置针对所有点的weight统一乘以的变换系数
    multiplyFactor: PropTypes.number,

    // 设置热力点距离半径（单位：米），默认为30000
    size: PropTypes.number,

    // 设置热力点透明度，默认为1
    opacity: PropTypes.number,

    // 设置weight阈值上限，合法取值在0到1之间
    alphaRange: PropTypes.number,

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
LeafletStaticHeatMap.defaultProps = {
}

export default React.memo(LeafletStaticHeatMap);