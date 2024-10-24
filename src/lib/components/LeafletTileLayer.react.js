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
        tileSize,
        minZoom,
        maxZoom,
        tms,
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
            tileSize={tileSize}
            minZoom={minZoom}
            maxZoom={maxZoom}
            tms={tms}
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

    /**
     * 强制刷新用
     */
    key: PropTypes.string,

    // 设置地图服务的url参数
    url: PropTypes.string,

    // 设置attribution参数
    attribution: PropTypes.string,

    // 设置图层透明度，默认为1
    opacity: PropTypes.number,

    // 设置z轴层级
    zIndex: PropTypes.number,

    // 设置瓦片地图像素边长，默认为256
    tileSize: PropTypes.number,

    /**
     * 当前瓦片地图服务允许加载的最小缩放级别
     * 默认值：`0`
     */
    minZoom: PropTypes.number,

    /**
     * 当前瓦片地图服务允许加载的最大缩放级别
     * 默认值：`18`
     */
    maxZoom: PropTypes.number,

    // 设置当前瓦片地图服务是否属于TMS
    // 默认：false
    tms: PropTypes.bool,

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
    url: "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
    opacity: 1,
    tileSize: 256,
    minZoom: 0,
    maxZoom: 18,
    tms: false
}

export default React.memo(LeafletTileLayer);