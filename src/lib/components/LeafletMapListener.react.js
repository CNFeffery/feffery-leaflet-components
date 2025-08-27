/* eslint-disable no-unused-vars */
// react核心
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { useMap } from 'react-leaflet';

/**
 * 地图事件监听组件LeafletMapListener
 */
const LeafletMapListener = ({
    id,
    _center,
    _zoom,
    _clickedLatLng,
    _bounds,
    debug = false,
    initUpdate = true,
    setProps
}) => {

    const map = useMap();

    useEffect(() => {
        if (debug) {
            console.log({
                _center,
                _zoom,
                _clickedLatLng,
                _bounds
            })
        }
    }, [_center, _zoom, _clickedLatLng, _bounds])

    useEffect(() => {
        if (initUpdate && map) {
            const currentBounds = map.getBounds()
            const zoom = map.getZoom()
            const center = map.getCenter()
            setProps({
                _zoom: zoom,
                _center: center,
                _bounds: {
                    minx: currentBounds._southWest.lng,
                    miny: currentBounds._southWest.lat,
                    maxx: currentBounds._northEast.lng,
                    maxy: currentBounds._northEast.lat
                }
            })
        }

    }, [map])

    useEffect(() => {
        map.on('click', (e) => {

            setProps({
                _clickedLatLng: e.latlng
            })
        })

        map.on('zoomend', (e) => {

            const currentBounds = map.getBounds()
            const zoom = map.getZoom()
            const center = map.getCenter()

            setProps({
                _zoom: zoom,
                _center: center,
                _bounds: {
                    minx: currentBounds._southWest.lng,
                    miny: currentBounds._southWest.lat,
                    maxx: currentBounds._northEast.lng,
                    maxy: currentBounds._northEast.lat
                }
            })
        })

        map.on('moveend', (e) => {

            const currentBounds = map.getBounds()
            const center = map.getCenter()

            setProps({
                _center: center,
                _bounds: {
                    minx: currentBounds._southWest.lng,
                    miny: currentBounds._southWest.lat,
                    maxx: currentBounds._northEast.lng,
                    maxy: currentBounds._northEast.lat
                }
            })
        })

    }, [])

    return <></>;
}

LeafletMapListener.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 监听当前地图中心点坐标
     */
    _center: PropTypes.exact({
        /**
         * 中心点经度
         */
        lng: PropTypes.number,
        /**
         * 中心点纬度
         */
        lat: PropTypes.number
    }),

    /**
     * 监听当前地图缩放级别
     */
    _zoom: PropTypes.number,

    /**
     * 监听地图鼠标点击事件
     */
    _clickedLatLng: PropTypes.exact({
        /**
         * 点击位置对应经度
         */
        /**
         * 点击位置对应纬度
         */
        lat: PropTypes.number
    }),

    /**
     * 监听当前地图矩形区域坐标范围
     */
    _bounds: PropTypes.exact({
        /**
         * 矩形区域最小经度
         */
        minx: PropTypes.number,
        /**
         * 矩形区域最小纬度
         */
        miny: PropTypes.number,
        /**
         * 矩形区域最大经度
         */
        maxx: PropTypes.number,
        /**
         * 矩形区域最大纬度
         */
        maxy: PropTypes.number
    }),

    /**
     * 是否开启调试模式，开启后浏览器控制台中将实时打印相关地图事件结果
     * 默认值：`false`
     */
    debug: PropTypes.bool,

    /**
     * 是否在地图初始化时获取相关地图视角状态信息
     * 默认值：`true`
     */
    initUpdate: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletMapListener);