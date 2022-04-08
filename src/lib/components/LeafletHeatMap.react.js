/* eslint-disable no-undefined */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import L from "leaflet";
import "leaflet.heat";
import { MapConsumer } from 'react-leaflet';

const addressPoints = [];

// 定义热力图层组件LeafletHeatMap，api参数参考
export default class LeafletHeatMap extends Component {

    constructor(props) {
        super(props);
        this.geoJsonRef = React.createRef();
    }

    render() {
        // 取得必要属性或参数
        const {
            id,
            className,
            style,
            setProps,
            loading_state
        } = this.props;

        // 返回定制化的前端组件
        return (
            <MapConsumer >
                {(map) => {

                    const points = addressPoints
                        ? addressPoints.map((p) => {
                            return [p[0], p[1]];
                        })
                        : [];

                    console.log(L.heatLayer)
                    L.heatLayer(points).addTo(map);
                    console.log('热力图渲染完成')

                    return null;
                }}
            </MapConsumer>
        );
    }
}

// 定义参数或属性
LeafletHeatMap.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

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
}
