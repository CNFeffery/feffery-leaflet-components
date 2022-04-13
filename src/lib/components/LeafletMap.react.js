/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "@geoman-io/leaflet-geoman-free";
import "./utils/leaflet-measure-path";
import "./utils/leaflet-measure-path.css";
import {
    markerIcon,
    marker2xIcon,
    markerShadow
} from './utils/exportImages.react';
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import { transform, isEqual, isObject, intersection } from 'lodash';

// 计算两个对象之间的属性名差异数组
const difference = (object, base) => {
    const changes = (object, base) => {
        return transform(object, function (result, value, key) {
            if (!isEqual(value, base[key])) {
                result[key] = (isObject(value) && isObject(base[key])) ? changes(value, base[key]) : value;
            }
        });
    }
    return changes(object, base);
}

const extractDrawnShapes = (item, i) => {
    const drawnShape = {};
    drawnShape.type = item.pm._shape;

    if (item.pm._shape === 'Marker' || item.pm._shape === 'CircleMarker') {
        drawnShape.geometry = {
            latlng: item._latlng
        }
    } else if (item.pm._shape === 'Line' || item.pm._shape === 'Rectangle') {
        drawnShape.geometry = {
            latlngs: item._latlngs
        }
    } else if (item.pm._shape === 'Polygon') {
        if (Object.prototype.hasOwnProperty(item, 'feature')) {
            drawnShape.geometry = {
                feature: item.feature
            }
        } else {
            drawnShape.geometry = {
                latlngs: item._latlngs
            }
        }
    } else {
        drawnShape.geometry = {
            latlng: item._latlng,
            radius: item._mRadius
        }
    }

    return drawnShape;
}

// 定义不触发render()逻辑的props数组
const preventUpdateProps = ['_center', '_zoom', '_clickedLatLng', '_drawnShapes'];

class LeafletMap extends Component {
    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
    }

    shouldComponentUpdate(nextProps) {

        // 计算发生变化的参数名
        const changedProps = Object.keys(difference(this.props, nextProps))

        // 若无变化的props，则不触发重绘
        if (changedProps.length === 0) {
            return false;
        }

        // 计算发生变化的参数名与需要阻止重绘的参数名数组的交集
        const changedPreventUpdateProps = intersection(
            changedProps,
            preventUpdateProps
        )

        // 若有交集，则不触发重绘
        if (changedPreventUpdateProps.length !== 0) {
            return false;
        }

        return true;
    }

    render() {

        const {
            id,
            style,
            className,
            children,
            center,
            zoom,
            useFlyTo,
            doubleClickZoom,
            dragging,
            closePopupOnClick,
            minZoom,
            maxZoom,
            zoomDelta,
            zoomControl,
            wheelPxPerZoomLevel,
            scrollWheelZoom,
            editToolbar,
            editToolbarControlsOptions,
            showMeasurements,
            maxDrawnShapes,
            setProps,
            loading_state
        } = this.props;

        return (
            <MapContainer
                id={id}
                style={style}
                className={className}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
                center={center}
                zoom={zoom}
                doubleClickZoom={doubleClickZoom}
                dragging={dragging}
                closePopupOnClick={closePopupOnClick}
                minZoom={minZoom}
                maxZoom={maxZoom}
                zoomDelta={zoomDelta}
                zoomSnap={zoomDelta}
                wheelPxPerZoomLevel={wheelPxPerZoomLevel}
                zoomControl={zoomControl}
                scrollWheelZoom={scrollWheelZoom}
                whenCreated={map => {
                    // 绑定ref
                    this.mapRef.current = map

                    // 修正全局默认marker图标不显示的问题
                    const defaultIcon = L.icon({
                        iconUrl: markerIcon,
                        iconRetinaUrl: marker2xIcon,
                        shadowUrl: markerShadow,
                        iconAnchor: [12, 41],
                        iconSize: [25, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    })
                    map.pm.setGlobalOptions({
                        markerStyle: {
                            icon: defaultIcon
                        }
                    })

                    // 初始化各项基础事件监听
                    map.on('click zoomend moveend', (e) => {

                        const currentBounds = map.getBounds()

                        if (e.type === 'click') {

                            setProps({
                                _zoom: map.getZoom(),
                                _center: map.getCenter(),
                                _clickedLatLng: e.latlng,
                                _bounds: {
                                    minx: currentBounds._southWest.lng,
                                    miny: currentBounds._southWest.lat,
                                    maxx: currentBounds._northEast.lng,
                                    maxy: currentBounds._northEast.lat
                                }
                            })
                        } else {
                            setProps({
                                _zoom: map.getZoom(),
                                _center: map.getCenter(),
                                _bounds: {
                                    minx: currentBounds._southWest.lng,
                                    miny: currentBounds._southWest.lat,
                                    maxx: currentBounds._northEast.lng,
                                    maxy: currentBounds._northEast.lat
                                }
                            })
                        }
                    })

                    if (editToolbar) {
                        // 测试，添加可编辑要素功能
                        map.pm.addControls({
                            ...{
                                cutPolygon: false
                            },
                            ...editToolbarControlsOptions
                        })

                        // 设置显示文字语言为中文
                        map.pm.setLang('zh')

                        map.on('pm:create pm:cut pm:remove', function (e) {
                            if (showMeasurements && e.layer.showMeasurements) {
                                e.layer.showMeasurements();
                            }

                            const drawnShapes = map.pm
                                .getGeomanDrawLayers()
                                .filter((item, i, arr) => {
                                    if (maxDrawnShapes === null) {
                                        return true
                                    }
                                    if (arr.length > maxDrawnShapes) {
                                        if (i < arr.length - maxDrawnShapes) {
                                            // 移除先前的图层
                                            map.removeLayer(item)
                                            return false;
                                        }
                                    }
                                    return true;
                                })
                                .map(
                                    (item, i) => {
                                        return extractDrawnShapes(item, i)
                                    }

                                );
                            // 更新当前已绘制的所有矢量要素
                            setProps({ _drawnShapes: drawnShapes })

                            e.layer.on('pm:edit', function (x) {
                                const drawnShapes = map.pm.getGeomanDrawLayers().map(
                                    (item, i) => {
                                        return extractDrawnShapes(item, i)
                                    }

                                );
                                // 更新当前已绘制的所有矢量要素
                                setProps({ _drawnShapes: drawnShapes })
                            });
                        });
                    };
                }
                }
            >
                {children}
            </MapContainer>
        );
    }
}


// 定义参数或属性
LeafletMap.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 内嵌文字的文本内容
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 地图通用控制类参数

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

    // 设置center或zoom主动设置从而改变地图视角时是否启用'FlyTo'模式，默认为false
    useFlyTo: PropTypes.bool,

    // 设置是否允许双击地图进行放大，默认为true
    doubleClickZoom: PropTypes.bool,

    // 设置是否允许鼠标拖拽地图，默认为true
    dragging: PropTypes.bool,

    // 设置是否允许用户鼠标点击地图空白处来关闭popup卡片，默认为true
    closePopupOnClick: PropTypes.bool,

    // 设置zoom级别下限
    minZoom: PropTypes.number,

    // 设置zoom级别上限
    maxZoom: PropTypes.number,

    // 设置地图缩放级别变化的步长，默认为1
    zoomDelta: PropTypes.number,

    // 设置是否显示地图缩放组件，默认为true
    zoomControl: PropTypes.bool,

    // 设置是否允许用户鼠标滚轮缩放地图，默认为true
    // 亦可传入'center'使得地图无视鼠标实际位置，仅以地图当前中心作为缩放依据的中心
    scrollWheelZoom: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['center'])
    ]),

    // 设置鼠标滚轮滚动多少像素会触发一个单位zoomDelta的缩放，默认为60
    wheelPxPerZoomLevel: PropTypes.number,

    // 地图编辑模式配置类参数

    // 设置是否渲染编辑模式工具栏，默认为false
    editToolbar: PropTypes.bool,

    // 设置与编辑模式工具栏显示内容相关的参数
    editToolbarControlsOptions: PropTypes.exact({
        // 设置编辑模式工具栏的方位，可选的有'topleft'、'topright'、'bottomleft'、'bottomright'
        // 默认为'topleft'
        editToolbarPosition: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),

        // 设置是否渲染“添加标记点”绘制按钮，默认为true
        drawMarker: PropTypes.bool,

        // 设置是否渲染“圆形标记点”绘制按钮，默认为true
        drawCircleMarker: PropTypes.bool,

        // 设置是否渲染“折线”绘制按钮，默认为true
        drawPolyline: PropTypes.bool,

        // 设置是否渲染“矩形”绘制按钮，默认为true
        drawRectangle: PropTypes.bool,

        // 设置是否渲染“多边形”绘制按钮，默认为true
        drawPolygon: PropTypes.bool,

        // 设置是否渲染“圆形”绘制按钮，默认为true
        drawCircle: PropTypes.bool,

        // 设置是否渲染“编辑要素”按钮，默认为true
        editMode: PropTypes.bool,

        // 设置是否渲染“拖拽要素”按钮，默认为true
        dragMode: PropTypes.bool,

        // 设置是否渲染“剪切要素”按钮，默认为false
        cutPolygon: PropTypes.bool,

        // 设置是否渲染“移除要素”按钮，默认为true
        removalMode: PropTypes.bool,

        // 设置是否渲染“旋转要素”按钮，默认为true
        rotateMode: PropTypes.bool,

        // 设置是否将所有按钮放置于同一容器内，默认为false
        oneBlock: PropTypes.bool
    }),

    // 设置是否为编辑模式下创建的矢量要素添加长度、面积标注，默认为true
    showMeasurements: PropTypes.bool,

    // 设置最大同时存在的已绘制矢量要素，默认为null不限制
    maxDrawnShapes: PropTypes.number,

    // 事件监听类属性值
    _drawnShapes: PropTypes.any,

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
LeafletMap.defaultProps = {
    center: { lng: 0, lat: 0 },
    zoom: 3,
    doubleClickZoom: true,
    dragging: true,
    closePopupOnClick: true,
    minZoom: 0,
    maxZoom: 18,
    zoomDelta: 1,
    wheelPxPerZoomLevel: 60,
    zoomControl: true,
    scrollWheelZoom: true,
    editToolbar: false,
    showMeasurements: true,
    maxDrawnShapes: null,
    useFlyTo: false
}


export default LeafletMap;