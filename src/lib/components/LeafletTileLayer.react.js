/* eslint-disable no-undefined */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TileLayer } from 'react-leaflet';

/**
 * 瓦片服务图层组件LeafletTileLayer
 */
const LeafletTileLayer = (props) => {
    const {
        id,
        url,
        attribution,
        opacity,
        zIndex,
        tileSize,
        minZoom,
        maxZoom,
        minNativeZoom,
        maxNativeZoom,
        tms,
        loading_state
    } = props;

    const tileLayerRef = useRef(null);

    useEffect(() => {
        if (tileLayerRef.current) {
            tileLayerRef.current.setUrl(url);
        }
    }, [url]);

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
            minNativeZoom={minNativeZoom}
            maxNativeZoom={maxNativeZoom}
            tms={tms}
            ref={tileLayerRef}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

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

    /**
     * 瓦片地图服务可用的最小缩放级别。如果指定了该值，所有低于`minNativeZoom`的缩放级别上的瓦片将从最小原生缩放级别加载并自动缩放
     */
    minNativeZoom: PropTypes.number,

    /**
     * 瓦片地图服务可用的最大缩放级别。如果指定了该值，所有高于`maxNativeZoom`的缩放级别上的瓦片将从最大原生缩放级别加载并自动缩放
     */
    maxNativeZoom: PropTypes.number,

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