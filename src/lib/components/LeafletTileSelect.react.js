/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import tileSelectIcon from "./images/tile-select-icon.png";

// 定义瓦片底图选择组件LeafletTileSelect
const LeafletTileSelect = (props) => {

    // 取得必要属性或参数
    const {
        id,
        className,
        style,
        containerClassName,
        containerStyle,
        containerItemClassName,
        containerItemStyle,
        urls,
        center,
        zoom,
        selectedUrl,
        containerVisible,
        loading_state,
        setProps
    } = props;

    const divRef = useRef(null);

    useEffect(() => {
        L.DomEvent.disableClickPropagation(divRef.current);
        L.DomEvent.disableScrollPropagation(divRef.current);
    });

    // 返回定制化的前端组件
    return (
        <div id={id}
            ref={divRef}
            style={{ ...style }}
            className={className ? `leaflet-tile-select ${className}` : 'leaflet-tile-select'}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >
            {<div
                style={{
                    ...containerStyle,
                    display: 'flex',
                    transition: containerVisible ? 'opacity 0.25s ease' : 'transform 0.25s ease',
                    transform: containerVisible ? 'none' : 'translateY(-9999px)',
                    opacity: containerVisible ? 1: 0
                }}
                className={containerClassName ?
                    `leaflet-tile-select-container ${containerClassName}` :
                    'leaflet-tile-select-container'}>
                {
                    urls ? (
                        urls.map(item =>
                        (
                            <div
                                key={item.url}
                                onClick={() => {
                                    setProps({
                                        selectedUrl: item.url
                                    })
                                }}
                                style={{
                                    ...containerItemStyle
                                }}
                                className={
                                    item.url === selectedUrl ?
                                        (
                                            containerItemClassName ?
                                                `leaflet-tile-select-container-item ${containerItemClassName} leaflet-tile-select-container-item-selected` :
                                                'leaflet-tile-select-container-item leaflet-tile-select-container-item-selected'
                                        )
                                        : (
                                            containerItemClassName ?
                                                `leaflet-tile-select-container-item ${containerItemClassName}` :
                                                'leaflet-tile-select-container-item'
                                        )
                                }>
                                <MapContainer
                                    style={{ height: '100%' }}
                                    doubleClickZoom={false}
                                    closePopupOnClick={false}
                                    dragging={false}
                                    zoomSnap={false}
                                    zoomDelta={false}
                                    trackResize={false}
                                    touchZoom={false}
                                    scrollWheelZoom={false}
                                    zoomControl={false}
                                    center={center}
                                    zoom={zoom}
                                >
                                    <TileLayer url={item.url} />
                                </MapContainer>
                            </div>
                        )
                        )
                    ) : null
                }
            </div>}
            <button
                className={'leaflet-tile-select-btn'}
                onClick={() => {
                    setProps({
                        containerVisible: !containerVisible
                    })
                }}
                title={"切换底图"}>
                <img src={tileSelectIcon} style={{ width: 19, height: 19 }}></img>
            </button>
        </div>
    );
}

// 定义参数或属性
LeafletTileSelect.propTypes = {
    // 组件id
    id: PropTypes.string,

    key: PropTypes.string,

    // 设置各组成部分样式
    // 整体容器
    className: PropTypes.string,

    style: PropTypes.object,

    // 图层选择卡片容器
    containerClassName: PropTypes.string,

    containerStyle: PropTypes.object,

    // 图层选择子项
    containerItemClassName: PropTypes.string,

    containerItemStyle: PropTypes.object,

    // 设置待选的瓦片地图服务url数组
    urls: PropTypes.arrayOf(
        PropTypes.exact({
            // 当前瓦片地图服务url
            url: PropTypes.string
        })
    ),

    // 设置地图中心坐标，格式：[纬度, 经度]
    // 默认为[0, 0]
    center: PropTypes.exact({
        // 经度
        lng: PropTypes.number,

        // 纬度
        lat: PropTypes.number
    }),

    // 设置地图的缩放级别，默认为1
    zoom: PropTypes.number,

    // 对应被选中的底图url值
    selectedUrl: PropTypes.string,

    // 对应选择卡片是否展开，默认为false
    containerVisible: PropTypes.bool,

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
LeafletTileSelect.defaultProps = {
    center: { lng: 0, lat: 0 },
    zoom: 3,
    containerVisible: true
}

export default React.memo(LeafletTileSelect);