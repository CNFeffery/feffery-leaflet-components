/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// react核心
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import tileSelectIcon from "./images/tile-select-icon.png";
// 辅助库
import { useLoading } from '../utils';

/**
 * 瓦片底图选择组件LeafletTileSelect
 */
const LeafletTileSelect = ({
    id,
    className,
    style,
    containerClassName,
    containerStyle,
    containerItemClassName,
    containerItemStyle,
    urls,
    center = { lng: 0, lat: 0 },
    zoom = 3,
    selectedUrl,
    containerVisible = true,
    setProps
}) => {

    const divRef = useRef(null);

    useEffect(() => {
        L.DomEvent.disableClickPropagation(divRef.current);
        L.DomEvent.disableScrollPropagation(divRef.current);
    });

    return (
        <div id={id}
            ref={divRef}
            style={{ ...style }}
            className={className ? `leaflet-tile-select ${className}` : 'leaflet-tile-select'}
            data-dash-is-loading={useLoading()}
        >
            {<div
                style={{
                    ...containerStyle,
                    display: 'flex',
                    transition: containerVisible ? 'opacity 0.25s ease' : 'transform 0.25s ease',
                    transform: containerVisible ? 'none' : 'translateY(-9999px)',
                    opacity: containerVisible ? 1 : 0
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
                                    smoothWheelZoom={false}
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

LeafletTileSelect.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 当前组件css类名
     */
    className: PropTypes.string,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 图层选择卡片容器css类名
     */
    containerClassName: PropTypes.string,

    /**
     * 图层选择卡片容器css样式
     */
    containerStyle: PropTypes.object,

    /**
     * 图层选择子项css类名
     */
    containerItemClassName: PropTypes.string,

    /**
     * 图层选择子项css样式
     */
    containerItemStyle: PropTypes.object,

    /**
     * 配置瓦片地图服务选项
     */
    urls: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 当前瓦片地图服务地址
             */
            url: PropTypes.string
        })
    ),

    /**
     * 地图中心坐标
     */
    center: PropTypes.exact({
        /**
         * 经度
         */
        lng: PropTypes.number,
        /**
         * 纬度
         */
        lat: PropTypes.number
    }),

    /**
     * 地图缩放级别
     * 默认值：`1`
     */
    zoom: PropTypes.number,

    /**
     * 监听或设置已选中的瓦片地图服务
     */
    selectedUrl: PropTypes.string,

    /**
     * 监听或设置选择卡片是否展开
     * 默认值：`false`
     */
    containerVisible: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletTileSelect);