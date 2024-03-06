/* eslint-disable no-empty */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
/* eslint-disable no-undefined */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import "leaflet-lasso";
import { GeoJSON, useMap } from 'react-leaflet';
import { isUndefined, omitBy, isEqual } from 'lodash';
import { pathOptionsPropTypes } from './BasePropTypes.react';
import {
    markerIcon,
    marker2xIcon,
    markerShadow
} from './utils/exportImages.react';

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

// 定义默认状态下的默认style样式
const _defaultStyle = {
    color: '#3388ff',
    fillColor: '#3388ff',
    opacity: 1,
    fillOpacity: 0.2
}

// 定义鼠标悬停要素状态下的style样式
const _hoverStyle = {
    fillOpacity: 0.6
}

// 定义选中要素状态下的style样式
const _selectedStyle = {
    color: '#f5222d',
    fillColor: '#f5222d',
    fillOpacity: 0.2,
    opacity: 1
}

// 定义GeoJSON图层组件LeafletGeoJSON，api参数参考
const LeafletGeoJSON = (props) => {
    // 取得必要属性或参数
    let {
        id,
        data,
        mode,
        fitBounds,
        fitBoundsOptions,
        clickFeatureZoom,
        featureIdField,
        selectMode,
        disableClickSelect,
        selectedFeatureIds,
        featureValueField,
        featureCategoryField,
        featureTooltipField,
        showTooltip,
        hoverable,
        defaultStyle,
        hoverStyle,
        selectedStyle,
        featureValueToStyles,
        featureCategoryToStyles,
        tooltipDirection,
        tooltipPermanent,
        tooltipSticky,
        tooltipClassName,
        lassoSelect,
        lassoType,
        lassoResetSelectedFeatureIds,
        lassoButtonPosition,
        lassoStyle,
        pointRenderMode,
        circleMarkerRadius,
        setProps,
        loading_state
    } = props;

    if (!data) {
        return null;
    }

    const geoJsonRef = useRef(null);
    const [initialized, setInitialized] = useState(false);
    const map = useMap();

    // 预处理defaultStyle、hoverStyle、selectedStyle
    defaultStyle = { ..._defaultStyle, ...defaultStyle };
    hoverStyle = { ..._hoverStyle, ...hoverStyle };
    selectedStyle = { ..._selectedStyle, ...selectedStyle };

    // 定义分层设色功能函数
    const choroplethFunc = (feature) => {
        // 取出当前要素的featureValueField属性值
        let currentFeatureValue = feature.properties[featureValueField];

        // 检查currentFeatureValue是否为空
        if (isUndefined(currentFeatureValue)) {
            // 若为空，则返回defaultStyle
            return {
                ...defaultStyle,
                ...{
                    pmIgnore: false,
                }
            };
        }

        // 否则，基于featureValueToStyles参数进行分层样式渲染
        for (let i = 0; i < featureValueToStyles.bins.length; i++) {
            // 若区间开闭方式为“右闭”
            if (featureValueToStyles.closed === 'right') {
                // 判断currentFeatureValue是否大于当前区间范围的左边界且小于等于当前区间范围的右边界
                if (currentFeatureValue > featureValueToStyles.bins[i][0] &&
                    currentFeatureValue <= featureValueToStyles.bins[i][1]) {
                    // 若匹配，则返回对应的styles参数样式
                    return {
                        ...featureValueToStyles.styles[i],
                        ...{
                            pmIgnore: false,
                        }
                    };
                }
            } else {
                // 否则一律视作“左闭”
                if (currentFeatureValue >= featureValueToStyles.bins[i][0] &&
                    currentFeatureValue < featureValueToStyles.bins[i][1]) {
                    // 若匹配，则返回对应的styles参数样式
                    return {
                        ...featureValueToStyles.styles[i],
                        ...{
                            pmIgnore: false,
                        }
                    };
                }
            }
        }

        // 否则，将defaultStyle作为缺省样式予以返回
        return {
            ...defaultStyle,
            ...{
                pmIgnore: false,
            }
        };
    }

    const categoryFunc = (feature) => {
        return {
            ...featureCategoryToStyles[`${feature.properties[featureCategoryField]}`],
            ...{
                pmIgnore: false,
            }
        };
    }

    useEffect(() => {
        if (geoJsonRef.current) {
            // 更新图层数据
            geoJsonRef.current.clearLayers().addData(data)
            if (fitBounds) {
                map.fitBounds(
                    geoJsonRef.current.getBounds(),
                    fitBoundsOptions
                )
            }
        }
    }, [data])

    useEffect(() => {
        if (map && mode === 'selectable' && selectMode === 'multiple' && lassoSelect) {
            if (!initialized) {
                L.control.lasso(
                    omitBy(
                        {
                            position: lassoButtonPosition,
                            intersect: lassoType === 'intersect',
                            contain: lassoType === 'contain',
                            title: '套圈选择',
                            polygon: lassoStyle
                        },
                        isUndefined
                    )
                ).addTo(map)
                setInitialized(true);
            }
            map.off('lasso.finished')
            map.off('lasso.enabled')
            map.on('lasso.finished', (e) => {
                // 将已选要素置于顶层
                e.layers.forEach(layer => layer.bringToFront && layer.bringToFront())

                // 将当前套中的要素添加到selectedFeatureIds中
                setProps({
                    selectedFeatureIds: Array.from(
                        new Set(
                            selectedFeatureIds.concat(e.layers.map(layer => layer.feature.properties[featureIdField]))
                        )
                    )
                })
            })
            if (lassoResetSelectedFeatureIds) {
                map.on('lasso.enabled', () => {
                    // 新的套索开启前，将selectedFeatureIds清空
                    setProps({
                        selectedFeatureIds: []
                    })
                })
            }
        }
    }, [map, selectedFeatureIds, initialized])

    return (
        <GeoJSON
            id={id}
            style={(feature) => {
                // 若mode为'default'，则渲染defaultStyle
                if (mode === 'default') {
                    return {
                        ...defaultStyle,
                        ...{
                            pmIgnore: false,
                        }
                    };
                } else if (mode === 'selectable') {
                    // 若mode为'selectable'，则迎合要素点击渲染模式
                    // 根据当前selectedFeatureIds中已选的要素id
                    // 控制不同要素返回defaultStyle或selectedStyle
                    if (selectedFeatureIds.indexOf(feature.properties[featureIdField]) === -1) {
                        return {
                            ...defaultStyle,
                            ...{
                                pmIgnore: false,
                            }
                        };
                    } else {
                        return {
                            ...selectedStyle,
                            ...{
                                pmIgnore: false,
                            }
                        };
                    }
                } else if (mode === 'choropleth') {
                    // 若mode为'choropleth'，则基于featureValueToStyles参数进行渲染
                    // 根据当前要素的featureValueField属性值，根据其在featureValueToStyles.bins
                    // 中的区间分布情况，返回对应的styles参数样式

                    return choroplethFunc(feature);
                } else if (mode === 'category') {
                    // 若mode为'category'，则基于featureCategoryToStyles参数进行渲染
                    return categoryFunc(feature);
                }
                // 否则，将defaultStyle作为缺省样式予以返回
                return {
                    ...defaultStyle,
                    ...{
                        pmIgnore: false,
                    }
                };
            }}
            data={data}
            onEachFeature={(feature, layer) => {
                // 绑定各监听事件
                layer.on({
                    // 鼠标点击事件
                    click: (e) => {
                        // 若clickFeatureZoom为true，则点击要素时进行聚焦缩放
                        if (clickFeatureZoom) {
                            map.fitBounds(e.target.getBounds());
                        }

                        // 尝试图层置顶
                        try {
                            e.target.bringToFront();
                        } catch (error) { }

                        // 更新_clickedFeature信息
                        setProps({
                            _clickedFeature: {
                                featureId: e.target.feature.properties[featureIdField],
                                feature: e.target.feature.properties,
                                timestamp: Date.now()
                            }
                        })
                    },
                    add: (e) => {
                        // 将处于选择状态的要素置顶
                        if (e.target.feature.properties && selectedFeatureIds.indexOf(e.target.feature.properties[featureIdField]) !== -1) {
                            if (e.target.bringToFront) {
                                e.target.bringToFront();
                            }
                        } else {
                            if (e.target.bringToBack) {
                                e.target.bringToBack();
                            }
                        }
                    }
                });
                // 为每个要素添加tooltip
                // 检查是否存在featureTooltipField指定的字段
                if (showTooltip && feature.properties[featureTooltipField]) {
                    layer.bindTooltip(
                        feature.properties[featureTooltipField],
                        {
                            direction: tooltipDirection,
                            permanent: tooltipPermanent,
                            sticky: tooltipSticky,
                            className: tooltipClassName
                        }
                    )
                } else {
                    layer.unbindTooltip();
                }

            }}
            eventHandlers={{
                // 鼠标移入事件
                mouseover: (e) => {
                    // 若开启要素悬浮模式
                    if (hoverable) {
                        // 则更新要素的样式
                        e.layer.setStyle({
                            ...e.layer.options,
                            ...hoverStyle
                        });

                        // 图层置顶
                        if (e.layer.bringToFront) {
                            e.layer.bringToFront()
                        }

                        // 更新_hoveredFeature信息
                        setProps({
                            _hoveredFeature: {
                                featureId: e.layer.feature.properties[featureIdField],
                                feature: e.layer.feature.properties,
                                timestamp: Date.now()
                            }
                        })
                    }
                },
                mouseout: (e) => {
                    if (hoverable) {
                        if (mode === 'selectable') {
                            // 若当前鼠标移出的要素未处于选中状态
                            if (selectedFeatureIds.indexOf(e.layer.feature.properties[featureIdField]) === -1) {
                                geoJsonRef.current.resetStyle(e.layer);
                            } else {
                                // 否则，更新要素的样式
                                e.layer.setStyle({
                                    ...e.layer.options,
                                    ...selectedStyle
                                });
                            }
                        } else if (mode === 'choropleth') {
                            e.layer.setStyle(choroplethFunc(e.layer.feature));
                        } else if (mode === 'category') {
                            e.layer.setStyle(categoryFunc(e.layer.feature));
                        } else {
                            geoJsonRef.current.resetStyle(e.layer);
                        }
                    }
                },
                add: () => {

                    // 处理是否对当前的GeoJSON层进行fitBounds操作
                    if (fitBounds) {
                        map.fitBounds(
                            geoJsonRef.current.getBounds(),
                            fitBoundsOptions
                        );
                    }
                },
                click: (e) => {
                    // 处理要素选择事件
                    if (mode === 'selectable' && !disableClickSelect) {
                        // 单选模式
                        if (selectMode === 'single') {
                            if (selectedFeatureIds.indexOf(e.layer.feature.properties[featureIdField]) === -1) {
                                // 更新选中的单个要素为当前要素
                                setProps({
                                    selectedFeatureIds: [e.layer.feature.properties[featureIdField]]
                                })
                            } else {
                                // 否则视作反选操作
                                // 清空selectedFeatureIds
                                setProps({
                                    selectedFeatureIds: []
                                })
                            }
                        } else {
                            // 多选模式
                            if (selectedFeatureIds.indexOf(e.layer.feature.properties[featureIdField]) === -1) {
                                // 将当前要素添加到selectedFeatureIds中
                                setProps({
                                    selectedFeatureIds: selectedFeatureIds.concat([e.layer.feature.properties[featureIdField]])
                                })
                            } else {
                                // 否则从现有selectedFeatureIds中移除当前要素id

                                setProps({
                                    selectedFeatureIds: selectedFeatureIds.filter(
                                        (id) => id !== e.layer.feature.properties[featureIdField]
                                    )
                                })
                            }
                        }
                    }
                }
            }}
            pointToLayer={
                (feature, latlng) => {
                    // 若pointRenderMode为marker模式
                    if (pointRenderMode === 'marker') {
                        if (showTooltip && feature.properties[featureTooltipField]) {
                            return L.marker(latlng, { icon: defaultIcon }).bindTooltip(
                                feature.properties[featureTooltipField],
                                {
                                    direction: tooltipDirection,
                                    permanent: tooltipPermanent,
                                    sticky: tooltipSticky,
                                    className: tooltipClassName
                                }
                            )
                        }
                        return L.marker(latlng, { icon: defaultIcon })
                    }
                    // 否则均视为circle-marker模式
                    if (showTooltip && feature.properties[featureTooltipField]) {
                        return L.circleMarker(latlng, { radius: circleMarkerRadius }).bindTooltip(
                            feature.properties[featureTooltipField],
                            {
                                direction: tooltipDirection,
                                permanent: tooltipPermanent,
                                sticky: tooltipSticky,
                                className: tooltipClassName
                            }
                        )
                    }
                    return L.circleMarker(latlng, { radius: circleMarkerRadius })
                }
            }
            ref={geoJsonRef}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

// 定义参数或属性
LeafletGeoJSON.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * 强制刷新用
     */
    key: PropTypes.string,

    // 传入GeoJSON格式数据
    data: PropTypes.object.isRequired,

    /* 基础参数 */
    // 设置功能模式，可选的有'default'、'selectable'（选择模式）、'choropleth'（分层设色模式）以及'category'（分类设色模式）
    mode: PropTypes.oneOf(['default', 'selectable', 'choropleth', 'category']),

    // 设置是否开启要素鼠标悬浮效果，默认为false
    hoverable: PropTypes.bool,

    // 定义要素默认样式
    defaultStyle: pathOptionsPropTypes,

    // 定义要素鼠标悬浮样式（需设置hoverable=true）
    hoverStyle: pathOptionsPropTypes,

    // 定义要素选中样式（需设置selectMode='single'或'multiple'）
    selectedStyle: pathOptionsPropTypes,

    // 设置是否fitBounds，默认为true
    fitBounds: PropTypes.bool,

    // fitBounds动作相关参数
    fitBoundsOptions: PropTypes.exact({
        /**
         * 执行fitBounds动作后的地图最大缩放级别
         */
        maxZoom: PropTypes.number,
        /**
         * fitBounds过程是否开启动画
         */
        animate: PropTypes.bool,
        /**
         * 对于开启过渡动画效果的gitBounds动作，设置动画持续时长，单位：秒
         * 默认：0.25
         */
        duration: PropTypes.number,
        /**
         * 为fitBounds动作调整后的视角，设置四周额外的像素大小留白空间，格式如[上下留白, 左右留白]
         */
        padding: PropTypes.arrayOf(PropTypes.number)
    }),

    // 设置是否允许点击要素后将地图缩放以适应被点击的要素bounds范围，默认为false
    clickFeatureZoom: PropTypes.bool,

    // 设置是否允许tooltip渲染，默认为false
    showTooltip: PropTypes.bool,

    // 配置要素选择功能
    // 设置作为唯一识别id的字段名，默认为'id'
    featureIdField: PropTypes.string,

    // 设置作为要素数值的字段名，默认为'value'
    featureValueField: PropTypes.string,

    // 设置作为要素类别的字段名，默认为'category'
    featureCategoryField: PropTypes.string,

    // 设置作为要素鼠标悬浮tooltip信息的字段名，默认为'tooltip'
    featureTooltipField: PropTypes.string,

    // 要素点击选择模式，可选的有'single'（单选模式）及'multiple'（多选模式）
    // 默认为'single'
    selectMode: PropTypes.oneOf(['single', 'multiple']),

    // 设置是否禁用主动点击选择要素功能，默认为false
    disableClickSelect: PropTypes.bool,

    // 记录&设置当前已选中要素id
    selectedFeatureIds: PropTypes.array,

    // 配置分层设色模式所需的分段区间数组及分段对应色彩值参数
    featureValueToStyles: PropTypes.exact({
        // 分段区间数组，每个元素格式为[左区间值, 右区间值]
        bins: PropTypes.arrayOf(
            PropTypes.arrayOf(PropTypes.number)
        ),

        // 设置与区间一一对应的样式对象数组
        styles: PropTypes.arrayOf(pathOptionsPropTypes),

        // 设置区间是左闭还是右闭，默认为'left'
        closed: PropTypes.oneOf(['left', 'right'])
    }),

    // 配置分类设色模式所需的分类数组及分类对应色彩值参数
    featureCategoryToStyles: PropTypes.objectOf(
        pathOptionsPropTypes
    ),

    // 设置要素的tooltip展开方位，可选的有'right'、'left'、'top'、'bottom'、'center'与'auto'
    // 默认为'auto'，其中'auto'会自动根据方位在'left'与'right'之间进行切换
    tooltipDirection: PropTypes.oneOf(['right', 'left', 'top', 'bottom', 'center', 'auto']),

    // 设置是否永久展开要素的tooltip而无需鼠标悬浮触发，默认为false
    tooltipPermanent: PropTypes.bool,

    // 设置要素的tooltip是否跟随鼠标，默认为false
    tooltipSticky: PropTypes.bool,

    // 设置要素的tooltip对应的css类
    tooltipClassName: PropTypes.string,

    // 多选模式下设置是否开启lasso套圈选择功能，默认为false
    lassoSelect: PropTypes.bool,

    // 定义lasso套圈功能的拓扑检查方式，可选的有'contain'（包含检查）及'intersect'（相交检查）
    // 默认为'intersect'
    lassoType: PropTypes.oneOf(['contain', 'intersect']),

    // 当套圈选择开启时，每次新点击套索按钮时是否重置selectedFeatureIds，默认为false
    lassoResetSelectedFeatureIds: PropTypes.bool,

    // 设置套圈选择触发按钮的位置，默认为'topleft'，可选的有'topleft'，'topright'，'bottomleft'，'bottomright'
    lassoButtonPosition: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),

    // 设置套圈的矢量样式
    lassoStyle: pathOptionsPropTypes,

    // 用于设置针对点要素的渲染策略，可选的有'marker'、'circle-marker'，默认为'circle-marker'
    pointRenderMode: PropTypes.oneOf(['marker', 'circle-marker']),

    // 针对circle-marker模式，设置像素半径，默认为10
    circleMarkerRadius: PropTypes.number,

    // 要素常规事件记录
    // 要素点击事件
    _clickedFeature: PropTypes.object,

    // 要素鼠标悬浮事件
    _hoveredFeature: PropTypes.object,

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
LeafletGeoJSON.defaultProps = {
    fitBounds: true,
    featureIdField: 'id',
    featureValueField: 'value',
    featureCategoryField: 'category',
    featureTooltipField: 'tooltip',
    selectedFeatureIds: [],
    showTooltip: false,
    mode: 'default',
    selectMode: 'single',
    hoverable: false,
    clickFeatureZoom: false,
    disableClickSelect: false,
    lassoSelect: false,
    lassoType: 'intersect',
    lassoResetSelectedFeatureIds: false,
    lassoButtonPosition: 'topleft',
    pointRenderMode: 'circle-marker',
    circleMarkerRadius: 10,
    tooltipDirection: 'auto',
    tooltipPermanent: false
}

const preventUpdateProps = ['_clickedFeature', '_hoveredFeature'];

export default React.memo(LeafletGeoJSON, (prevProps, nextProps) => {
    // 计算发生变化的参数名
    const changedProps = Object.keys(nextProps).filter(key => !isEqual(prevProps[key], nextProps[key]))

    // changedProps中全部变化的prop都在preventUpdateProps中声明时
    // 阻止本次重绘
    return changedProps.every(propName => preventUpdateProps.includes(propName));
});