/* eslint-disable consistent-return */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { tiledMapLayer } from "esri-leaflet";
import { useMap } from 'react-leaflet';
import useEsriStore from '../store/esriStore';

// 定义ESRI tiledMapLayer图层组件
const EsriTiledMapLayer = (props) => {

    // 取得必要属性或参数
    const {
        id,
        url,
        opacity,
        zIndex,
        zoomOffset,
        identifyConfig,
        debug,
        loading_state,
        setProps
    } = props;

    const map = useMap();
    const layerRef = useRef(null);

    const identifyRequesting = useEsriStore(state => state.identifyRequesting);
    const updateIdentityRequesting = useEsriStore(state => state.updateIdentityRequesting);

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
                // 若当前不存在正在执行标识服务请求的图层
                if (!identifyRequesting) {
                    updateIdentityRequesting(true)
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
                                updateIdentityRequesting(false)
                                setProps({
                                    identifyResult: {
                                        featureCollection: featureCollection,
                                        timestamp: Date.now()
                                    }
                                })
                            })
                    } catch (error) {
                        updateIdentityRequesting(false)
                    }
                }
            }
            setProps({
                identifyConfig: null
            })
        }
    }, [identifyConfig])

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

    /**
     * 设置当前图层的zIndex层级
     */
    zIndex: PropTypes.number,

    /**
     * 缩放级别调整量
     * 默认：0
     */
    zoomOffset: PropTypes.number,

    /**
     * 用于配置触发每一次的要素标识操作，每次操作完整后会自动重置为空
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
     * 最近一次标识操作查询到的要素信息
     */
    identifyResult: PropTypes.object,

    /**
     * 是否开启debug模式
     * 默认：false
     */
    debug: PropTypes.bool,

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
    zoomOffset: 0,
    debug: false
}

export default React.memo(EsriTiledMapLayer);