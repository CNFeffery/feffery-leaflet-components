/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMap, Circle } from 'react-leaflet';
import L from 'leaflet';
import MiniMap from 'leaflet-minimap';
import "leaflet-minimap/dist/Control.MiniMap.min.css";

// 定义迷你图组件LeafletMiniMap
const LeafletMiniMap = (props) => {

    // 取得必要属性或参数
    const {
        id,
        loading_state,
        setProps
    } = props;

    const map = useMap()

    useEffect(() => {
        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data &copy; OpenStreetMap contributors';
        var osm = new L.TileLayer(osmUrl, { minZoom: 5, maxZoom: 18, attribution: osmAttrib });
        var osm2 = new L.TileLayer(osmUrl, { minZoom: 0, maxZoom: 13, attribution: osmAttrib });
        new MiniMap(osm2, { toggleDisplay: true }).addTo(map);
    }, [])

    // 返回定制化的前端组件
    return <></>;
}

// 定义参数或属性
LeafletMiniMap.propTypes = {
    // 组件id
    id: PropTypes.string,

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
LeafletMiniMap.defaultProps = {
}

export default LeafletMiniMap;