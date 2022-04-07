/* eslint-disable no-undefined */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GeoJSON, useMap } from 'react-leaflet';

// 定义GeoJSON图层组件LeafletGeoJSON，api参数参考https://react-leaflet.js.org/docs/api-components/#geojson
const LeafletGeoJSON = (props) => {
    // 取得必要属性或参数
    const {
        id,
        children,
        className,
        style,
        data,
        idFieldName,
        selectMode,
        selectedFeatureStyle,
        selectedFeatureIds,
        fitBounds,
        editable,
        loading_state,
        setProps
    } = props;

    console.log({ selectedFeatureIds })

    const states = [{
        "type": "Feature",
        "properties": { "party": "Republican" },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[
                [-104.05, 48.99],
                [-97.22, 48.98],
                [-96.58, 45.94],
                [-104.03, 45.94],
                [-104.05, 48.99]
            ]]
        }
    }, {
        "type": "Feature",
        "properties": { "party": "Democrat" },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[
                [-109.05, 41.00],
                [-102.06, 40.99],
                [-102.03, 36.99],
                [-109.04, 36.99],
                [-109.05, 41.00]
            ]]
        }
    }];

    const map = useMap()

    // 返回定制化的前端组件
    return (
        <GeoJSON
            id={id}
            className={className}
            // style={
            //     (feature) => {

            //         // 检查当前要素是否在selectedFeatureIds中
            //         if (selectedFeatureIds.indexOf(feature.properties[idFieldName]) !== -1) {
            //             return selectedFeatureStyle;
            //         }

            //         return {
            //             color: '#f00',
            //             weight: 2,
            //             fillColor: '#0f0',
            //             fillOpacity: 0.5
            //         }
            //     }
            // }
            data={data || states}
            eventHandlers={{
                // 图层初始化加载事件
                add: (e) => {
                    if (!editable) {
                        e.target.setStyle({ pmIgnore: true })
                    }

                    if (fitBounds) {
                        map.fitBounds(e.target.getBounds())
                    }
                },

                // 点击事件
                click: (e) => {
                    // 检查是否开启要素点击选择模式
                    if (selectMode) {
                        // 默认单选模式
                        if (selectMode === 'default') {
                            // 检查当前要素是否是已选中的单个要素
                            if (selectedFeatureIds.indexOf(e.sourceTarget.feature.properties[idFieldName]) !== -1) {
                                // 执行反选操作，清空selectedFeatureIds
                                // setProps({
                                //     selectedFeatureIds: []
                                // })
                            } else {
                                // 执行常规要素单选操作，更新selectedFeatureIds
                                console.log([e.sourceTarget.feature.properties[idFieldName]])
                                // setProps({
                                //     selectedFeatureIds: [e.sourceTarget.feature.properties[idFieldName]]
                                // })
                            }
                        } else {
                            // 多选模式
                            // 检查当前要素是否已在selectedFeatureIds中
                            if (selectedFeatureIds.indexOf(e.sourceTarget.feature.properties[idFieldName]) !== -1) {
                                // 执行反选操作，过滤当前要素
                                // setProps({
                                //     selectedFeatureIds: selectedFeatureIds.filter(
                                //         (item) => item !== e.sourceTarget.feature.properties[idFieldName]
                                //     )
                                // })
                            } else {
                                // 执行常规要素多选操作，更新selectedFeatureIds
                                selectedFeatureIds.push(e.sourceTarget.feature.properties[idFieldName])
                                // setProps({
                                //     selectedFeatureIds: selectedFeatureIds
                                // })
                            }
                        }
                    }
                    console.log({ e })
                }
            }}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >
            {children}
        </GeoJSON>
    );
}

// 定义参数或属性
LeafletGeoJSON.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 内嵌文字的文本内容
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置要渲染的GeoJSON数据对象
    data: PropTypes.object,

    // 设置当前GeoJSON要素中充当唯一标识id的字段名称
    idFieldName: PropTypes.string,

    // 设置要素点击选择模式，可选的有'default'、'multiple'，默认为null即不开启点击选择模式
    selectMode: PropTypes.oneOf(['default', 'multiple']),

    // 设置&记录处于选中状态的要素id字段数组
    selectedFeatureIds: PropTypes.array,

    // 设置处于选中状态的要素样式
    selectedFeatureStyle: PropTypes.object,

    // 设置是否在矢量初始化渲染时令地图自适应矢量的bounds，默认为false
    fitBounds: PropTypes.bool,

    // 设置当前图层是否可编辑，默认为false
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
    idFieldName: 'id',
    fitBounds: false,
    editable: false,
    selectMode: null,
    selectedFeatureIds: [],
    selectedFeatureStyle: {
        color: '#ff0000'
    }
}

export default LeafletGeoJSON;
