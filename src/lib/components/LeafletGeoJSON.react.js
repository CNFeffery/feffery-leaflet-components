/* eslint-disable no-undefined */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GeoJSON, MapConsumer } from 'react-leaflet';
import { transform, isEqual, isObject, intersection, isUndefined } from 'lodash';

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
    opacity: 1,
}

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

// 定义不触发render()逻辑的props数组
const preventUpdateProps = ['_clickedFeature', '_hoveredFeature'];

// 定义GeoJSON图层组件LeafletGeoJSON，api参数参考
export default class LeafletGeoJSON extends Component {

    constructor(props) {
        super(props);
        this.geoJsonRef = React.createRef();
    }

    shouldComponentUpdate(nextProps) {

        // 计算发生变化的参数名
        const changedProps = Object.keys(difference(this.props, nextProps))

        // 检查changedProps中是否包含data参数
        if (changedProps.indexOf('data') !== -1) {
            // 移除旧图层数据
            this.geoJsonRef.current.clearLayers()
            // 新增新图层数据
            this.geoJsonRef.current.addData(nextProps.data)

            return true;
        }

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
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            data,
            mode,
            fitBounds,
            clickFeatureZoom,
            featureIdField,
            selectMode,
            selectedFeatureIds,
            featureValueField,
            featureCategoryField,
            featureTooltipField,
            showTooltip,
            editable,
            hoverable,
            defaultStyle,
            hoverStyle,
            selectedStyle,
            featureValueToStyles,
            featureCategoryToStyles,
            setProps,
            loading_state
        } = this.props;

        if (!data) {
            return null;
        }

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
                        pmIgnore: !editable,
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
                                pmIgnore: !editable,
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
                                pmIgnore: !editable,
                            }
                        };
                    }
                }
            }

            // 否则，将defaultStyle作为缺省样式予以返回
            return {
                ...defaultStyle,
                ...{
                    pmIgnore: !editable,
                }
            };
        }

        const categoryFunc = (feature) => {
            return {
                ...featureCategoryToStyles[`${feature.properties[featureCategoryField]}`],
                ...{
                    pmIgnore: !editable,
                }
            };
        }

        // 返回定制化的前端组件
        return (
            <MapConsumer >
                {(map) => {
                    return (
                        <GeoJSON
                            id={id}
                            className={className}
                            style={(feature) => {
                                // 若mode为'default'，则渲染defaultStyle
                                if (mode === 'default') {
                                    return {
                                        ...defaultStyle,
                                        ...{
                                            pmIgnore: !editable,
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
                                                pmIgnore: !editable,
                                            }
                                        };
                                    } else {
                                        return {
                                            ...selectedStyle,
                                            ...{
                                                pmIgnore: !editable,
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
                                        pmIgnore: !editable,
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

                                        // 图层置顶
                                        e.target.bringToFront();

                                        // 更新_clickedFeature信息
                                        setProps({
                                            _clickedFeature: {
                                                featureId: e.target.feature.properties[featureIdField],
                                            }
                                        })
                                    },

                                    add: (e) => {
                                        // 将处于选择状态的要素置顶
                                        if (selectedFeatureIds.indexOf(e.target.feature.properties[featureIdField]) !== -1) {
                                            e.target.bringToFront();
                                        } else {
                                            e.target.bringToBack();
                                        }
                                    }
                                });

                                // 为每个要素添加tooltip
                                // 检查是否存在featureTooltipField指定的字段
                                if (feature.properties[featureTooltipField] && showTooltip) {
                                    layer.bindTooltip(feature.properties[featureTooltipField])
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
                                        e.layer.bringToFront();

                                        // 更新_hoveredFeature信息
                                        setProps({
                                            _hoveredFeature: {
                                                featureId: e.layer.feature.properties[featureIdField],
                                            }
                                        })
                                    }
                                },
                                mouseout: (e) => {
                                    if (hoverable) {

                                        if (mode === 'selectable') {
                                            // 若当前鼠标移出的要素未处于选中状态
                                            if (selectedFeatureIds.indexOf(e.layer.feature.properties[featureIdField]) === -1) {
                                                this.geoJsonRef.current.resetStyle(e.layer);
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
                                            this.geoJsonRef.current.resetStyle(e.layer);
                                        }
                                    }
                                },
                                add: () => {

                                    // 处理是否对当前的GeoJSON层进行fitBounds操作
                                    if (fitBounds) {
                                        map.fitBounds(this.geoJsonRef.current.getBounds());
                                    }
                                },
                                click: (e) => {
                                    // 处理要素选择事件
                                    if (mode === 'selectable') {
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
                            ref={this.geoJsonRef}
                            data-dash-is-loading={
                                (loading_state && loading_state.is_loading) || undefined
                            }
                        />
                    );
                }}
            </MapConsumer>
        );
    }
}

const geoJsonStylePropType = PropTypes.exact({
    // 设置是否绘制多边形轮廓线，默认为true
    stroke: PropTypes.bool,
    // 设置多边形轮廓线颜色，默认为#3388ff
    color: PropTypes.string,
    // 设置多边形轮廓线像素宽度，默认为3
    weight: PropTypes.number,
    // 设置多边形轮廓线透明度，默认为1
    opacity: PropTypes.number,
    // 设置多边形轮廓线的line-cap属性，参考：https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-linecap
    // 默认为'round'
    lineCap: PropTypes.string,
    // 设置多边形轮廓线的line-join属性，参考：https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-linejoin
    // 默认为'round'
    lineJoin: PropTypes.string,
    // 设置多边形轮廓线的dash-array属性，参考：https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray
    // 默认为null
    dashArray: PropTypes.string,
    // 设置多边形轮廓线的dash-offset属性，参考：https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dashoffset
    // 默认为null
    dashOffset: PropTypes.string,
    // 设置是否绘制多边形填充颜色，默认为true
    fill: PropTypes.bool,
    // 设置多边形填充颜色，默认为#3388ff
    fillColor: PropTypes.string,
    // 设置多边形填充透明度，默认为0.2
    fillOpacity: PropTypes.number
});

// 定义参数或属性
LeafletGeoJSON.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义样式映射规则，可传入统一的对象类型的样式表
    // 亦可传入字符串格式的js函数体来灵活映射样式
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),

    // 设置是否开启要素鼠标悬浮效果，默认为false
    hoverable: PropTypes.bool,

    // 定义要素默认样式
    defaultStyle: geoJsonStylePropType,

    // 定义要素鼠标悬浮样式（需设置hoverable=true）
    hoverStyle: geoJsonStylePropType,

    // 定义要素选中样式（需设置selectMode='single'或'multiple'）
    selectedStyle: geoJsonStylePropType,

    data: PropTypes.object,

    // 设置是否fitBounds，默认为true
    fitBounds: PropTypes.bool,

    // 设置是否允许点击要素后将地图缩放以适应被点击的要素bounds范围，默认为false
    clickFeatureZoom: PropTypes.bool,

    // 配置要素选择功能
    // 设置作为唯一识别id的字段名，默认为'id'
    featureIdField: PropTypes.string,

    // 设置作为要素数值的字段名，默认为'value'
    featureValueField: PropTypes.string,

    // 设置作为要素类别的字段名，默认为'category'
    featureCategoryField: PropTypes.string,

    // 设置作为要素鼠标悬浮tooltip信息的字段名，默认为'tooltip'
    featureTooltipField: PropTypes.string,

    // 设置绘图模式，可选的有'default'、'selectable'（选择模式）、'choropleth'（分层设色模式）以及'category'（分类设色模式）
    mode: PropTypes.oneOf(['default', 'selectable', 'choropleth', 'category']),

    // 要素点击选择模式，可选的有'single'（单选模式）及'multiple'（多选模式），默认为null时不开启要素点击选择功能
    selectMode: PropTypes.oneOf(['single', 'multiple']),

    // 设置是否允许tooltip渲染，默认为true
    showTooltip: PropTypes.bool,

    // 记录&设置当前已选中要素id
    selectedFeatureIds: PropTypes.array,

    // 配置分层设色模式所需的分段区间数组及分段对应色彩值参数
    featureValueToStyles: PropTypes.exact({
        // 分段区间数组，每个元素格式为[左区间值, 右区间值]
        bins: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),

        // 设置与区间一一对应的样式对象数组
        styles: PropTypes.arrayOf(geoJsonStylePropType),

        // 设置区间是左闭还是右闭，默认为'left'
        closed: PropTypes.oneOf(['left', 'right'])
    }),

    // 配置分类设色模式所需的分类数组及分类对应色彩值参数
    featureCategoryToStyles: PropTypes.objectOf(geoJsonStylePropType),

    // 设置当前GeoJSON矢量图层是否可编辑，默认为false
    editable: PropTypes.bool,

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
    showTooltip: true,
    mode: 'default',
    selectMode: 'single',
    editable: false,
    hoverable: false,
    clickFeatureZoom: false
}
