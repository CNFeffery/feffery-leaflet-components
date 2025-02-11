/* eslint-disable no-undefined */
// react核心
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { TileLayer } from 'react-leaflet';
// 辅助库
import { useLoading } from '../utils';

/**
 * 瓦片服务图层组件LeafletTileLayer
 */
const LeafletTileLayer = ({
    id,
    url = "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
    attribution,
    opacity = 1,
    zIndex,
    tileSize = 256,
    minZoom = 0,
    maxZoom = 18,
    minNativeZoom,
    maxNativeZoom,
    tms = false
}) => {

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
            data-dash-is-loading={useLoading()}
        />
    );
}

LeafletTileLayer.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 地图服务地址，默认显示高德地图公共图层
     */
    url: PropTypes.string,

    /**
     * 地图服务`attribution`属性
     */
    attribution: PropTypes.string,

    /**
     * 图层透明度
     * 默认值：`1`
     */
    opacity: PropTypes.number,

    /**
     * 当前图层`z`轴顺序
     */
    zIndex: PropTypes.number,

    /**
     * 瓦片服务图片像素边长
     * 默认值：`256`
     */
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

    /**
     * 设置当前地图服务是否符合`tms`类型
     * 默认值：`false`
     */
    tms: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletTileLayer);