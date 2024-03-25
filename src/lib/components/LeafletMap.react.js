/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { MapContainer } from 'react-leaflet';
import L from 'leaflet';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';
import "@geoman-io/leaflet-geoman-free";
import "./utils/leaflet-measure-path";
import "./utils/leaflet-measure-path.css";
import "./styles.css";
import {
    markerIcon,
    marker2xIcon,
    markerShadow
} from './utils/exportImages.react';
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import { v4 as uuidv4 } from 'uuid';
import 'leaflet-measure/dist/leaflet-measure.cn';
import { omitBy, isUndefined } from 'lodash';
import 'leaflet-measure/dist/leaflet-measure.css';
import { AutoViewCorrection } from './utils/UtilsComponents';
import './utils/SmoothWheelZoom';
import { useSize } from 'ahooks';

const customTranslation = {
    "tooltips": {
        "placeText": "点击放置文字"
    },
    "buttonTitles": {
        "rotateButton": "旋转图层",
        "drawTextButton": "绘制文字"
    }
}

const extractDrawnShapes = (item, i) => {

    const drawnShape = {
        id: item._leaflet_id,
        createdTimestamp: item._createdTimestamp || new Date().getTime()
    };

    // 若当前要素可以获取到bounds
    if (item.pm._layer.getBounds) {
        drawnShape.bounds = {
            minx: item.pm._layer.getBounds()._southWest.lng,
            miny: item.pm._layer.getBounds()._southWest.lat,
            maxx: item.pm._layer.getBounds()._northEast.lng,
            maxy: item.pm._layer.getBounds()._northEast.lat
        }
    }

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
        drawnShape.geometry = {
            latlngs: item._latlngs
        }
    } else if (item.pm._shape === 'Circle') {
        drawnShape.geometry = {
            latlng: item._latlng,
            radius: item._mRadius
        }
    }

    return drawnShape;
}

// 处理坐标参考系参数的解析
const parseCRS = (crs) => {
    if (crs === 'EPSG3857') {
        return L.CRS.EPSG3857;
    } else if (crs === 'EPSG4326') {
        return L.CRS.EPSG4326;
    } else if (crs === 'simple') {
        return L.CRS.Simple;
    } else {
        // 构造自定义坐标系
        return new L.Proj.CRS(
            crs.code,
            crs.proj4def,
            crs.options
        );
    }
}

const LeafletMap = (props) => {
    const {
        id,
        key,
        style,
        className,
        children,
        center,
        crs,
        zoom,
        doubleClickZoom,
        dragging,
        closePopupOnClick,
        minZoom,
        maxZoom,
        zoomDelta,
        zoomControl,
        wheelPxPerZoomLevel,
        scrollWheelZoom,
        smoothWheelZoom,
        maxBounds,
        editToolbar,
        editToolbarControlsOptions,
        showMeasurements,
        maxDrawnShapes,
        measureControl,
        measureControlOptions,
        viewAutoCorrection,
        setProps,
        loading_state
    } = props;

    const divRef = useRef(null);
    const size = useSize(divRef);

    return (
        <div id={id}
            key={key}
            style={style}
            className={className}
            ref={divRef}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            <MapContainer
                style={{
                    height: '100%'
                }}
                center={center}
                crs={crs && parseCRS(crs)}
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
                // smoothWheelZoom=true时强制关闭自带的滚轮放大功能
                scrollWheelZoom={smoothWheelZoom ? false : scrollWheelZoom}
                smoothWheelZoom={smoothWheelZoom}
                maxBounds={
                    maxBounds ? L.latLngBounds(
                        L.latLng(maxBounds.miny, maxBounds.minx),
                        L.latLng(maxBounds.maxy, maxBounds.maxx)
                    ) : undefined
                }
                whenCreated={map => {
                    if (measureControl) {
                        // https://github.com/ljagis/leaflet-measure/issues/171#issuecomment-1137483548
                        // 修复测量过程地图异常移动的问题
                        L.Control.Measure.include({
                            _setCaptureMarkerIcon: function () {
                                this._captureMarker.options.autoPanOnFocus = false;
                                this._captureMarker.setIcon(
                                    L.divIcon({
                                        iconSize: this._map.getSize().multiplyBy(2)
                                    })
                                );
                            },
                        });
                        let measureControl = L.control.measure(
                            {
                                ...{
                                    position: 'topleft',
                                    activeColor: '#f1c40f',
                                    completedColor: '#e74c3c'
                                },
                                ...omitBy(measureControlOptions, isUndefined),
                                ...{
                                    units: {
                                        sqkilometers: {
                                            factor: 0.000001,
                                            display: '平方千米',
                                            decimals: 3
                                        }
                                    },
                                    primaryLengthUnit: 'meters',
                                    secondaryLengthUnit: 'kilometers',
                                    primaryAreaUnit: 'sqmeters',
                                    secondaryAreaUnit: 'sqkilometers',
                                    thousandsSep: ' '
                                }
                            }
                        );
                        measureControl.addTo(map);
                    }

                    if (maxBounds) {
                        map.fitBounds(L.latLngBounds(
                            L.latLng(maxBounds.miny, maxBounds.minx),
                            L.latLng(maxBounds.maxy, maxBounds.maxx)
                        ))
                    }

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

                    if (editToolbar) {
                        // 测试，添加可编辑要素功能
                        map.pm.addControls({
                            ...{
                                cutPolygon: false,
                                drawText: false
                            },
                            ...editToolbarControlsOptions
                        })

                        // 设置显示文字语言为中文
                        map.pm.setLang('customWithZh', customTranslation, 'zh')

                        const getCircleDrawRadius = () => {
                            if (map.pm.Draw.Circle._layer.getRadius() !== 0) {
                                map.pm.Draw.Circle._hintMarker._tooltip.setContent(
                                    `单击完成圆形，当前半径：${map.pm.Draw.Circle._layer.getRadius().toFixed(1)}米`
                                )
                            }
                        }

                        map.on('pm:drawstart', (e) => {
                            if (map.pm.Draw.Circle._hintMarker && e.shape === "Circle") {
                                map.pm.Draw.Circle._hintMarker.on('move', getCircleDrawRadius);
                            }
                        })
                        map.on('pm:drawend', () => {
                            if (map.pm.Draw.Circle._hintMarker) {
                                map.pm.Draw.Circle._hintMarker.off('move', getCircleDrawRadius)
                            }
                        })

                        map.on('pm:create pm:cut pm:remove', function (e) {

                            // 若当前事件为pm:create，则为layer添加唯一uid信息
                            if (e.type === 'pm:create') {
                                e.layer._uuid = uuidv4()
                                e.layer._createdTimestamp = new Date().getTime()
                            }

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
                {viewAutoCorrection ? <AutoViewCorrection size={size} /> : null}
            </MapContainer>
        </div>
    );
}

// 定义参数或属性
LeafletMap.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * 强制刷新用
     */
    key: PropTypes.string,

    // 定义当前地图容器下属所有图层元素
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 地图通用控制类参数

    // 设置地图中心坐标，格式：{lng: xxx, lat: xxx}
    // 默认为{lng: 0, lat: 0}
    center: PropTypes.exact({
        // 经度
        lng: PropTypes.number,

        // 纬度
        lat: PropTypes.number
    }),

    /**
     * 为当前地图配置坐标参考系
     * 当传入字符串时，表示内置的几种基础坐标参考系，可选的有'EPSG3857'、'EPSG4326'、'simple'
     * 当传入字典时，用于使用自定义坐标参考系
     * 默认：'EPSG3857'
     */
    crs: PropTypes.oneOfType([
        PropTypes.oneOf(['EPSG3857', 'EPSG4326', 'simple']),
        // 自定义坐标系
        PropTypes.exact({
            /**
             * 坐标系代码，如EPSG:4490
             */
            code: PropTypes.string,
            /**
             * 坐标系def字符串
             */
            proj4def: PropTypes.string,
            /**
             * 其他坐标系参数
             */
            options: PropTypes.object
        })
    ]),

    // 设置地图的缩放级别，默认为3
    zoom: PropTypes.number,

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

    // 设置是否开启丝滑滑轮放缩效果，默认为false
    // 亦可传入'center'使得地图无视鼠标实际位置，仅以地图当前中心作为丝滑缩放依据的中心
    smoothWheelZoom: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['center'])
    ]),

    // 设置地图可移动的bounds范围
    maxBounds: PropTypes.exact({
        minx: PropTypes.number,
        miny: PropTypes.number,
        maxx: PropTypes.number,
        maxy: PropTypes.number
    }),

    // 地图编辑模式配置类参数

    // 设置是否渲染编辑模式工具栏，默认为false
    editToolbar: PropTypes.bool,

    // 设置与编辑模式工具栏显示内容相关的参数
    editToolbarControlsOptions: PropTypes.exact({
        // 设置编辑模式工具栏的方位，可选的有'topleft'、'topright'、'bottomleft'、'bottomright'
        // 默认为'topleft'
        position: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),

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

        // 设置是否渲染“文字”绘制按钮，默认为false
        drawText: PropTypes.bool,

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

    // 设置是否为编辑模式下创建的矢量要素添加长度、面积标注，默认为false
    showMeasurements: PropTypes.bool,

    // 设置最大同时存在的已绘制矢量要素，默认不限制
    maxDrawnShapes: PropTypes.number,

    // 设置是否添加测量工具栏，默认为false
    measureControl: PropTypes.bool,

    // 配置测量工具相关参数
    measureControlOptions: PropTypes.exact({
        // 设置测量工具栏的方位，可选的有'topleft'、'topright'、'bottomleft'、'bottomright'
        // 默认为'topleft'
        position: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),

        // 设置测量工具绘制时的要素颜色，默认为'#f1c40f'
        activeColor: PropTypes.string,

        // 设置测量工具绘制完成时的要素颜色，默认为'#e74c3c'
        completedColor: PropTypes.string
    }),

    // 设置是否启用自动视角校正，会带来性能上的一些压力，默认为false
    viewAutoCorrection: PropTypes.bool,

    // 事件监听类属性值
    _drawnShapes: PropTypes.array,

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
    crs: 'EPSG3857',
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
    showMeasurements: false,
    maxDrawnShapes: null,
    measureControl: false,
    viewAutoCorrection: false,
    smoothWheelZoom: false
}

export default React.memo(LeafletMap);