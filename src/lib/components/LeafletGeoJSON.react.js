/* eslint-disable no-undefined */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isUndefined } from 'lodash';
import { GeoJSON, MapConsumer } from 'react-leaflet';

// 定义默认状态下的默认style样式
const _defaultStyle = {
    stroke: true,
    color: '#3388ff',
    weight: 3,
    opacity: 1,
    lineCap: 'round',
    lineJoin: 'round',
    dashArray: null,
    dashOffset: null,
    fill: true,
    fillColor: '#3388ff',
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
}

// 定义GeoJSON图层组件LeafletGeoJSON，api参数参考
export default class LeafletGeoJSON extends Component {

    constructor(props) {
        super(props);
        this.geoJsonRef = React.createRef();
    }

    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            data,
            fitBounds,
            clickFeatureZoom,
            featureIdField,
            selectMode,
            selectedFeatureIds,
            featureValueField,
            editable,
            hoverable,
            defaultStyle,
            hoverStyle,
            selectedStyle,
            featureColourParams,
            setProps,
            loading_state
        } = this.props;

        // 预处理defaultStyle、hoverStyle、selectedStyle
        defaultStyle = { ..._defaultStyle, ...defaultStyle };
        hoverStyle = { ..._hoverStyle, ...hoverStyle };
        selectedStyle = { ..._selectedStyle, ...selectedStyle };

        // 返回定制化的前端组件
        return (
            <MapConsumer >
                {(map) => {
                    return (
                        <GeoJSON
                            id={id}
                            className={className}
                            style={(feature) => {
                                // 检查是否开启要素选择模式
                                // 若为要素选择模式，则忽略由featureColourParams所设置的要素着色功能
                                if (selectMode) {

                                    // 检查当前要素的featureIdField指定属性字段是否在selectedFeatureIds中
                                    // 从而设置相应的选中状态样式
                                    if (selectedFeatureIds.indexOf(feature.properties[featureIdField]) !== -1) {
                                        return selectedStyle;
                                    }
                                } else if (featureColourParams) {
                                    // 否则若featureColourParams参数存在，则使用featureColourParams中的要素着色功能
                                    let currentFeatureValue = feature.properties[featureValueField];
                                    // 检查要素内有无此字段
                                    if (isUndefined(currentFeatureValue)) {
                                        // 若无，则使用默认样式作为缺省样式
                                        return defaultStyle;
                                    }
                                    for (let i = 0; i < featureColourParams.bins.length; i++) {
                                        // 若为右闭模式
                                        if (featureColourParams.closed === 'right') {
                                            if (currentFeatureValue > featureColourParams.bins[i][0] && currentFeatureValue <= featureColourParams.bins[i][1]) {
                                                return {
                                                    ...defaultStyle,
                                                    ...{
                                                        color: featureColourParams.colors[i],
                                                        fillColor: featureColourParams.colors[i]
                                                    }
                                                }
                                            }
                                        } else {
                                            if (currentFeatureValue >= featureColourParams.bins[i][0] && currentFeatureValue < featureColourParams.bins[i][1]) {
                                                return {
                                                    ...defaultStyle,
                                                    ...{
                                                        color: featureColourParams.colors[i],
                                                        fillColor: featureColourParams.colors[i]
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                                // 否则，按照常规方式返回样式
                                return defaultStyle;
                            }}
                            data={data}
                            onEachFeature={(feature, layer) => {
                                // 鼠标移入事件
                                layer.on('mouseover', (e) => {
                                    if (hoverable) {
                                        e.target.setStyle({
                                            ...e.target.options,
                                            ...hoverStyle
                                        });
                                    }
                                })
                                // 鼠标移出事件
                                layer.on('mouseout', (e) => {
                                    if (hoverable) {
                                        e.target.setStyle({
                                            ...e.target.options,
                                            ...defaultStyle
                                        });
                                    }
                                })
                                // 鼠标点击事件
                                layer.on('click', (e) => {
                                    if (clickFeatureZoom) {
                                        map.fitBounds(e.target.getBounds());
                                    }
                                })
                            }}
                            eventHandlers={{
                                add: () => {
                                    // 处理是否对当前的GeoJSON层进行fitBounds操作
                                    if (fitBounds) {
                                        map.fitBounds(this.geoJsonRef.current.getBounds());
                                    }

                                    // 处理当前的GeoJSON图层是否可编辑
                                    if (!editable) {
                                        this.geoJsonRef.current.setStyle({ pmIgnore: true });
                                    }
                                },
                                click: (e) => {
                                    // 处理要素选择事件
                                    if (selectMode) {
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

    // 要素点击选择模式，可选的有'single'（单选模式）及'multiple'（多选模式），默认为null时不开启要素点击选择功能
    selectMode: PropTypes.oneOf(['single', 'multiple']),

    // 记录&设置当前已选中要素id
    selectedFeatureIds: PropTypes.array,

    // 配置色彩映射功能所需的分段区间数组及分段对应色彩值参数
    featureColourParams: PropTypes.exact({
        // 分段区间数组，每个元素格式为[左区间值, 右区间值]
        bins: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),

        // 设置与区间一一对应的色彩值数组
        colors: PropTypes.arrayOf(PropTypes.string),

        // 设置区间是左闭还是右闭，默认为'left'
        closed: PropTypes.oneOf(['left', 'right'])
    }),

    // 设置当前GeoJSON矢量图层是否可编辑，默认为false
    editable: PropTypes.bool,

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
    selectedFeatureIds: [],
    editable: false,
    hoverable: false,
    clickFeatureZoom: false
}
