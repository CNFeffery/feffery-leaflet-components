/* eslint-disable no-undefined */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GeoJSON, MapConsumer } from 'react-leaflet';

// 定义GeoJSON图层组件LeafletGeoJSON，api参数参考
export default class LeafletGeoJSON extends Component {

    constructor(props) {
        super(props);
        this.geoJsonRef = React.createRef();
    }

    render() {
        // 取得必要属性或参数
        const {
            id,
            className,
            style,
            data,
            fitBounds,
            featureIdField,
            selectMode,
            selectedFeatureIds,
            setProps,
            loading_state
        } = this.props;

        // 返回定制化的前端组件
        return (
            <MapConsumer >
                {(map) => {
                    return (
                        <GeoJSON
                            id={id}
                            className={className}
                            style={(feature) => {
                                // 检查当前要素的featureIdField指定属性字段是否在selectedFeatureIds中
                                // 从而设置相应的选中状态样式
                                if (selectedFeatureIds.indexOf(feature.properties[featureIdField]) !== -1) {
                                    return {
                                        'color': 'red'
                                    }
                                }
                                return {
                                    'color': 'blue'
                                }
                            }}
                            data={data}
                            // onEachFeature={(feature, layer) => {
                            //     layer.on('mouseover', (e) => {
                            //         e.target.setStyle({
                            //             color: 'white'
                            //         })
                            //     })

                            //     layer.on('mouseout', (e) => {
                            //         this.geoJsonRef.current.resetStyle(e.target);
                            //     })
                            // }}
                            eventHandlers={{
                                add: () => {
                                    // 处理是否对当前的GeoJSON层进行fitBounds操作
                                    if (fitBounds) {
                                        map.fitBounds(this.geoJsonRef.current.getBounds());
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

// 定义参数或属性
LeafletGeoJSON.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    data: PropTypes.object,

    // 设置是否fitBounds，默认为true
    fitBounds: PropTypes.bool,

    // 配置要素选择功能
    // 设置作为唯一识别id的字段名，默认为'id'
    featureIdField: PropTypes.string,

    // 要素点击选择模式，可选的有'single'（单选模式）及'multiple'（多选模式），默认为null时不开启要素点击选择功能
    selectMode: PropTypes.oneOf(['single', 'multiple']),

    // 记录&设置当前已选中要素id
    selectedFeatureIds: PropTypes.array,

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
    selectedFeatureIds: []
}
