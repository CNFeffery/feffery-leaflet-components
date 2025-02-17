/* eslint-disable no-empty */
/* eslint-disable consistent-return */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// react核心
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { tiledMapLayer } from "esri-leaflet";
import { useMap } from 'react-leaflet';

/**
 * ESRI tiledMapLayer图层组件
 */
const EsriTiledMapLayer = ({
    id,
    url,
    opacity,
    zIndex,
    zoomOffset = 0,
    identifyConfig,
    debug = false,
    setProps
}) => {

    const map = useMap();
    const layerRef = useRef(null);

    // 初始化当前组件需要展示的单个或多个图层服务
    useEffect(() => {
        if (map && url) {
            const currentLayer = tiledMapLayer({
                url: url,
                opacity: opacity,
                zIndex: zIndex,
                zoomOffset: zoomOffset
            })
            layerRef.current = currentLayer;
            currentLayer.addTo(map)

            // 组件卸载时移除对应图层
            return () => {
                map.removeLayer(currentLayer);
                layerRef.current = null;
            }
        }
    }, [url, opacity, zIndex])

    useEffect(() => {
        if (identifyConfig) {
            if (layerRef.current) {
                try {
                    layerRef.current
                        .identify()
                        .on(map)
                        .at([identifyConfig.position.lat, identifyConfig.position.lng])
                        .run((error, featureCollection, response) => {
                            if (debug) {
                                console.log(
                                    `identifyResult of : ${id}\n`,
                                    {
                                        featureCollection: featureCollection,
                                        timestamp: Date.now()
                                    }
                                )
                            }
                            setProps({
                                identifyResult: {
                                    featureCollection: featureCollection,
                                    timestamp: Date.now()
                                }
                            })
                        })
                } catch (error) { }
            }
            setProps({
                identifyConfig: null
            })
        }
    }, [identifyConfig])

    return <></>;
}

EsriTiledMapLayer.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * esri TileLayer地图服务地址
     */
    url: PropTypes.string,

    /**
     * 当前图层透明度
     */
    opacity: PropTypes.number,

    /**
     * 当前图层`z`轴层级
     */
    zIndex: PropTypes.number,

    /**
     * 缩放级别偏移量
     * 默认值：`0`
     */
    zoomOffset: PropTypes.number,

    /**
     * 配置触发要素标识操作，每次操作完成后会自动重置为空值
     */
    identifyConfig: PropTypes.exact({
        /**
         * 标识位置坐标
         */
        position: PropTypes.exact({
            /**
             * 标识位置经度
             */
            lng: PropTypes.number,
            /**
             * 标识位置纬度
             */
            lat: PropTypes.number
        })
    }),

    /**
     * 监听标识查询结果
     */
    identifyResult: PropTypes.object,

    /**
     * 是否开启debug模式
     * 默认值：`false`
     */
    debug: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(EsriTiledMapLayer);