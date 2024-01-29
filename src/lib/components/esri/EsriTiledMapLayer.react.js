/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { tiledMapLayer } from "esri-leaflet";
import { useMap } from 'react-leaflet';

// 定义ESRI tiledMapLayer图层组件
const EsriTiledMapLayer = (props) => {

    // 取得必要属性或参数
    const {
        id,
        key,
        url,
        opacity,
        loading_state,
        setProps
    } = props;

    const map = useMap();

    // 初始化当前组件需要展示的单个或多个图层服务
    useEffect(() => {
        if (map && url) {
            tiledMapLayer({
                url: url,
                opacity: opacity
            }).addTo(map)
        }
    }, [])

    return <></>;
}

// 定义参数或属性
EsriTiledMapLayer.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 强制刷新用
    key: PropTypes.string,

    // 设置需要加载的esri TileLayer地图服务地址
    url: PropTypes.string,

    // 设置当前图层的透明程度
    opacity: PropTypes.number,

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
EsriTiledMapLayer.defaultProps = {
}

export default React.memo(EsriTiledMapLayer);