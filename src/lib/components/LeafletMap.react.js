/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
// react核心
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { MapContainer, ScaleControl } from 'react-leaflet';
import L from 'leaflet';
import "@geoman-io/leaflet-geoman-free";
import 'proj4leaflet';
import "./utils/leaflet-measure-path";
import 'leaflet-measure/dist/leaflet-measure.cn';
import {
    markerIcon,
    marker2xIcon,
    markerShadow
} from './utils/exportImages.react';
import { AutoViewCorrection } from './utils/UtilsComponents';
import './utils/SmoothWheelZoom';
// 辅助库
import { useSize } from 'ahooks';
import { v4 as uuidv4 } from 'uuid';
import { omitBy, isUndefined } from 'lodash';
import { useLoading } from '../utils';
// 样式
import 'leaflet/dist/leaflet.css';
import "./utils/leaflet-measure-path.css";
import "./styles.css";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import 'leaflet-measure/dist/leaflet-measure.css';

const customTranslation = {
    "tooltips": {
        "placeText": "点击放置文字"
    },
    "buttonTitles": {
        "rotateButton": "旋转图层",
        "drawTextButton": "绘制文字"
    }
}

const extractDrawnShapes = (item, i, drawnShapeFormat) => {

    // 直接返回GeoJSON格式要素数据
    if ( drawnShapeFormat === 'geojson' ) {
        return item.pm._layer.toGeoJSON();
    };

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
    }
    // 构造自定义坐标系
    return new L.Proj.CRS(
        crs.code,
        crs.proj4def,
        crs.options
    );
}

/**
 * 地图容器组件LeafletMap
 */
const LeafletMap = ({
    id,
    style,
    className,
    children,
    center = { lng: 0, lat: 0 },
    crs = 'EPSG3857',
    zoom = 3,
    doubleClickZoom = true,
    dragging = true,
    closePopupOnClick = true,
    minZoom = 0,
    maxZoom = 18,
    zoomDelta = 1,
    zoomControl = true,
    wheelPxPerZoomLevel = 60,
    scrollWheelZoom = true,
    smoothWheelZoom = false,
    scaleControl = false,
    scaleControlOptions,
    maxBounds,
    maxBoundsViscosity = 0,
    maxBoundsDelay = 0,
    editToolbar = false,
    editToolbarControlsOptions,
    drawnShapeFormat = 'default',
    showMeasurements = false,
    maxDrawnShapes = null,
    measureControl = false,
    measureControlOptions,
    viewAutoCorrection = false,
    setProps
}) => {

    const divRef = useRef(null);
    const scaleRef = useRef(null);
    const size = useSize(divRef);

    useEffect(() => {
        if (scaleRef.current) {
            scaleRef.current._updateMetric = function (maxMeters) {
                const meters = this._getRoundNum(maxMeters),
                    label = meters < 1000 ? `${meters} 米` : `${meters / 1000} 千米`;

                this._updateScale(this._mScale, label, meters / maxMeters);
            }
            scaleRef.current._update();
        }
    }, [scaleRef.current])

    return (
        <div id={id}
            style={style}
            className={className}
            ref={divRef}
            data-dash-is-loading={useLoading()}>
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
                maxBoundsViscosity={maxBoundsViscosity}
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
                            }
                        });
                        const measureControl = L.control.measure(
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
                                    secondaryAreaUnit: 'sqkilometers'
                                }
                            }
                        );
                        measureControl.addTo(map);
                    }

                    if (maxBounds) {
                        setTimeout(() => {
                            map.fitBounds(L.latLngBounds(
                                L.latLng(maxBounds.miny, maxBounds.minx),
                                L.latLng(maxBounds.maxy, maxBounds.maxx)
                            ))
                            // 强制更新minZoom
                            map.setMinZoom(
                                map.getBoundsZoom(
                                    L.latLngBounds(
                                        L.latLng(maxBounds.miny, maxBounds.minx),
                                        L.latLng(maxBounds.maxy, maxBounds.maxx)
                                    )
                                )
                            );
                        }, maxBoundsDelay)
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
                                        return extractDrawnShapes(item, i, drawnShapeFormat)
                                    }

                                );
                            // 更新当前已绘制的所有矢量要素
                            setProps({ _drawnShapes: drawnShapes })

                            e.layer.on('pm:edit', function (x) {
                                const drawnShapes = map.pm.getGeomanDrawLayers().map(
                                    (item, i) => {
                                        return extractDrawnShapes(item, i, drawnShapeFormat)
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
                {scaleControl ? <ScaleControl ref={scaleRef} {...scaleControlOptions} /> : null}
            </MapContainer>
        </div>
    );
}

LeafletMap.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，地图内部组件
     */
    children: PropTypes.node,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名
     */
    className: PropTypes.string,

    /**
     * 地图默认中心坐标，格式：`{'lng': xxx, 'lat': xxx}`
     * 默认值：`{'lng': 0, 'lat': 0}`
     */
    center: PropTypes.exact({
        /**
         * 经度
         */
        lng: PropTypes.number,
        /**
         *纬度
         */
        lat: PropTypes.number
    }),

    /**
     * 为当前地图配置坐标参考系，当传入字符型时可选项有`'EPSG3857'`、`'EPSG4326'`、`'simple'`，
     * 当传入字典时，用于构造自定义坐标系参数
     * 默认值：`'EPSG3857'`
     */
    crs: PropTypes.oneOfType([
        PropTypes.oneOf(['EPSG3857', 'EPSG4326', 'simple']),
        PropTypes.exact({
            /**
             * 坐标系代码
             */
            code: PropTypes.string,
            /**
             * 坐标系`def`字符串
             */
            proj4def: PropTypes.string,
            /**
             * 坐标系其他配置参数
             */
            options: PropTypes.object
        })
    ]),

    /**
     * 地图默认缩放级别
     * 默认值：`3`
     */
    zoom: PropTypes.number,

    /**
     * 是否允许鼠标双击地图进行放大
     * 默认值：`true`
     */
    doubleClickZoom: PropTypes.bool,

    /**
     * 是否允许鼠标拖拽移动地图
     * 默认值：`true`
     */
    dragging: PropTypes.bool,

    /**
     * 是否允许鼠标点击地图空白处关闭已打开的`leafletPopup`弹出层
     * 默认值：`true`
     */
    closePopupOnClick: PropTypes.bool,

    /**
     * 地图最小缩放级别
     * 默认值：`0`
     */
    minZoom: PropTypes.number,

    /**
     * 地图最大缩放级别
     * 默认值：`18`
     */
    maxZoom: PropTypes.number,

    /**
     * 地图单次缩放变化对应的缩放级别步长
     * 默认值：`1`
     */
    zoomDelta: PropTypes.number,

    /**
     * 是否显示地图缩放组件
     * 默认值：`true`
     */
    zoomControl: PropTypes.bool,

    /**
     * 是否允许通用鼠标滚轮缩放地图，当传入`'center'`时会在允许鼠标滚轮缩放地图时无视鼠标实际位置，以地图当前中心作为缩放依据的中心
     * 默认值：`true`
     */
    scrollWheelZoom: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['center'])
    ]),

    /**
     * 控制鼠标滚轮滚动多少像素会触发一个单位`zoomDelta`级别的地图缩放
     * 默认值：`60`
     */
    wheelPxPerZoomLevel: PropTypes.number,

    /**
     * 针对鼠标滚轮缩放地图是否开启丝滑模式，当传入`'center'`时会在允许鼠标滚轮缩放地图时无视鼠标实际位置，以地图当前中心作为丝滑缩放依据的中心
     * 默认值：`false`
     */
    smoothWheelZoom: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['center'])
    ]),

    /**
     * 是否显示地图比例尺
     * 默认值：`false`
     */
    scaleControl: PropTypes.bool,

    /**
     * 配置地图比例尺相关参数
     */
    scaleControlOptions: PropTypes.exact({
        /**
         * 设置比例尺方位，可选项有`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`
         */
        position: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),
        /**
         * 是否显示英制单位
         */
        imperial: PropTypes.bool
    }),

    /**
     * 限制地图可移动坐标矩形范围
     */
    maxBounds: PropTypes.exact({
        /**
         * 矩形范围左下角经度
         */
        minx: PropTypes.number,
        /**
         * 矩形范围左下角纬度
         */
        miny: PropTypes.number,
        /**
         * 矩形范围右上角经度
         */
        maxx: PropTypes.number,
        /**
         * 矩形范围右上角纬度
         */
        maxy: PropTypes.number
    }),

    /**
     * 当`maxBounds`参数有效时，控制地图被拖拽出限制边界范围的牢固程度，取值在`0`到`1`之间，`1`表示完全不允许拖拽出限制范围
     * 默认值：`0`
     */
    maxBoundsViscosity: PropTypes.number,

    /**
     * `maxBounds`参数初始化生效延时，单位：毫秒
     * 默认值：`0`
     */
    maxBoundsDelay: PropTypes.number,

    /**
     * 是否显示编辑模式工具栏
     * 默认值：`false`
     */
    editToolbar: PropTypes.bool,

    /**
     * 配置编辑模式工具栏
     */
    editToolbarControlsOptions: PropTypes.exact({
        /**
         * 设置编辑模式工具栏方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
         * 默认值：`'topleft'`
         */
        position: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),
        /**
         * 是否开启“标记点绘制”功能
         * 默认值：`true`
         */
        drawMarker: PropTypes.bool,
        /**
         * 是否开启“圆形标记点”绘制功能
         * 默认值：`true`
         */
        drawCircleMarker: PropTypes.bool,
        /**
         * 是否开启“折线”绘制功能
         * 默认值：`true`
         */
        drawPolyline: PropTypes.bool,
        /**
         * 是否开启“矩形”绘制功能
         * 默认值：`true`
         */
        drawRectangle: PropTypes.bool,
        /**
         * 是否开启“多边形”绘制功能
         * 默认值：`true`
         */
        drawPolygon: PropTypes.bool,
        /**
         * 是否开启“圆形”绘制功能
         * 默认值：`true`
         */
        drawCircle: PropTypes.bool,
        /**
         * 是否开启“文字”绘制功能
         * 默认值：`false`
         */
        drawText: PropTypes.bool,
        /**
         * 是否开启“编辑要素”功能
         * 默认值：`true`
         */
        editMode: PropTypes.bool,
        /**
         * 是否开启“拖拽要素”功能
         * 默认值：`true`
         */
        dragMode: PropTypes.bool,
        /**
         * 是否开启“裁剪要素”功能
         * 默认值：`false`
         */
        cutPolygon: PropTypes.bool,
        /**
         * 是否开启“移除要素”功能
         * 默认值：`true`
         */
        removalMode: PropTypes.bool,
        /**
         * 是否开启“旋转要素”功能
         * 默认值：`true`
         */
        rotateMode: PropTypes.bool,
        /**
         * 各功能按钮是否集成在同一个容器中
         * 默认值：`false`
         */
        oneBlock: PropTypes.bool
    }),

    /**
     * 对应`_drawnShapes`中各要素的格式类型，可选项有`'default'`、`'geojson'`
     * 默认值：`'default'`
     */
    drawnShapeFormat: PropTypes.oneOf(['default', 'geojson']),

    /**
     * 监听编辑模式下已绘制矢量信息
     */
    _drawnShapes: PropTypes.array,

    /**
     * 是否为编辑模式下创建的矢量要素添加长度、面积标注
     * 默认值：`false`
     */
    showMeasurements: PropTypes.bool,

    /**
     * 针对编辑模式，设置最多允许绘制的矢量要素个数，默认无限制
     */
    maxDrawnShapes: PropTypes.number,

    /**
     * 是否显示测量工具栏
     * 默认值：`false`
     */
    measureControl: PropTypes.bool,

    /**
     * 配置测量工具
     */
    measureControlOptions: PropTypes.exact({
        /**
         * 设置测量工具栏方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
         * 默认值：`'topleft'`
         */
        position: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),
        /**
         * 测量工具所绘制要素颜色
         * 默认值：`'#f1c40f'`
         */
        activeColor: PropTypes.string,
        /**
         * 测量工具绘制完成后的要素颜色
         * 默认值：`'#e74c3c'`
         */
        completedColor: PropTypes.string
    }),

    /**
     * 是否开启视角自动校正，譬如地图所在容器像素尺寸发生变化后，会自动校正地图的视角
     * 默认值：`false`
     */
    viewAutoCorrection: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletMap);