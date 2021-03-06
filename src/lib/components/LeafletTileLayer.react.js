/* eslint-disable no-undefined */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TileLayer } from 'react-leaflet';

// 定义底图图层组件LeafletTileLayer，api参数参考https://react-leaflet.js.org/docs/api-components/#tilelayer
const LeafletTileLayer = (props) => {

    // 取得必要属性或参数
    const {
        id,
        url,
        attribution,
        opacity,
        zIndex,
        loading_state
    } = props;

    const tileLayerRef = useRef(null);

    useEffect(() => {
        if (tileLayerRef.current) {
            tileLayerRef.current.setUrl(url);
        }
    }, [url]);

    // 返回定制化的前端组件
    return (
        <TileLayer
            id={id}
            attribution={attribution}
            url={url}
            opacity={opacity}
            zIndex={zIndex}
            ref={tileLayerRef}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

// 定义参数或属性
LeafletTileLayer.propTypes = {
    // 组件id
    id: PropTypes.string,

    key: PropTypes.string,

    // 设置地图服务的url参数
    url: PropTypes.string,

    // 设置attribution参数
    attribution: PropTypes.string,

    // 设置图层透明度，默认为1
    opacity: PropTypes.number,

    // 设置z轴层级
    zIndex: PropTypes.number,

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
LeafletTileLayer.defaultProps = {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    opacity: 1
}


export default React.memo(LeafletTileLayer);