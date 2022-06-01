/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMap } from 'react-leaflet';

// 定义地图事件监听组件LeafletMapListener
const LeafletMapListener = (props) => {

    // 取得必要属性或参数
    const {
        id,
        setProps
    } = props;

    const map = useMap();

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

    // 返回定制化的前端组件
    return <div id={id} />;
}

// 定义参数或属性
LeafletMapListener.propTypes = {
    // 组件id
    id: PropTypes.string,

    _center: PropTypes.exact({
        // 经度
        lng: PropTypes.number,

        // 纬度
        lat: PropTypes.number
    }),

    _zoom: PropTypes.number,

    // 记录地图点击事件对应的经纬度坐标
    _clickedLatLng: PropTypes.exact({
        // 经度
        lng: PropTypes.number,

        // 纬度
        lat: PropTypes.number
    }),

    // 获取当前地图矩形区域坐标范围信息
    _bounds: PropTypes.exact({
        minx: PropTypes.number,
        miny: PropTypes.number,
        maxx: PropTypes.number,
        maxy: PropTypes.number
    }),

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
LeafletMapListener.defaultProps = {
}

export default LeafletMapListener;