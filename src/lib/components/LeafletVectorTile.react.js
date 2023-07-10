/* eslint-disable no-empty */
/* eslint-disable no-eval */
/* eslint-disable prefer-const */
/* eslint-disable no-undefined */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMap } from 'react-leaflet';
import { isEqual, isUndefined, clone } from 'lodash';
import L from 'leaflet';
import 'leaflet.vectorgrid';


// 定义矢量切片组件LeafletVectorTile，api参数参考https://github.com/Leaflet/Leaflet.VectorGrid
const LeafletVectorTile = (props) => {

    // 取得必要属性或参数
    const {
        id,
        url,
        minZoom,
        maxZoom,
        interactive,
        featureIdField,
        vectorTileLayerStyles,
        extraProps,
        renderer,
        setProps
    } = props;

    const map = useMap()
    const vectorGridRef = useRef(null);

    useEffect(() => {
        return () => {
            if (vectorGridRef.current) {
                // 卸载时移除当前矢量切片图层
                vectorGridRef.current.removeFrom(map)
            }
        }
    }, [])

    useEffect(() => {
        // 预处理vectorTileLayerStyles
        let _vectorTileLayerStyles = isUndefined(vectorTileLayerStyles) ? {} : clone(vectorTileLayerStyles)
        for (let key of Object.keys(_vectorTileLayerStyles)) {
            // 解析自定义样式映射规则js回调函数字符串
            if ('func' in _vectorTileLayerStyles[key]) {
                _vectorTileLayerStyles[key] = eval(_vectorTileLayerStyles[key].func)
            }
        }

        if (!vectorGridRef.current) {
            vectorGridRef.current = L.vectorGrid.protobuf(
                url,
                {
                    rendererFactory: renderer === 'canvas' ? L.canvas.tile : L.svg.tile,
                    minZoom: minZoom,
                    maxZoom: maxZoom,
                    interactive: interactive,
                    getFeatureId: (e) => e.properties[featureIdField],
                    vectorTileLayerStyles: _vectorTileLayerStyles,
                    tileId: id,
                    pane: 'overlayPane',
                    ...extraProps
                }
            )

            // 矢量切片底图加载完成事件
            vectorGridRef.current.on('load', function () {
                // 获取当前存在的图层名称信息
                let layerNames = vectorGridRef.current.getDataLayerNames();
                console.log(layerNames)
                // 更新到_layerNames属性中
                setProps({
                    _layerNames: layerNames
                })
            })

            // 点击事件
            vectorGridRef.current.on('click', function (e) {
                setProps({
                    _clickedFeature: {
                        feature: e.layer.properties,
                        timestamp: Date.now()
                    }
                })

                // L.popup()
                //     .setContent('示例要素')
                //     .setLatLng(e.latlng)
                //     .openOn(map)
            })

            // 添加到地图实例中
            vectorGridRef.current.addTo(map)
        } else {
            // 更新样式规则
            vectorGridRef.current.options.vectorTileLayerStyles = _vectorTileLayerStyles
            vectorGridRef.current.redraw();
        }
    }, [vectorTileLayerStyles])

    // 返回定制化的前端组件
    return <></>;
}

// 定义参数或属性
LeafletVectorTile.propTypes = {
    // 组件id
    id: PropTypes.string,

    key: PropTypes.string,

    // 设置切片服务url地址，必填
    url: PropTypes.string,

    // 设置最小缩放层级
    minZoom: PropTypes.number,

    // 设置最大缩放层级
    maxZoom: PropTypes.number,

    // 设置是否开启交互功能，默认为false
    interactive: PropTypes.bool,

    // 设置切片数据要素属性中作为图层唯一识别id的字段
    // 默认为'id'
    featureIdField: PropTypes.string,

    // 设置针对不同切片图层的样式映射js回调函数
    // 格式为layer: js函数字符串
    vectorTileLayerStyles: PropTypes.oneOfType([
        PropTypes.objectOf(
            PropTypes.string
        ),
        PropTypes.objectOf(
            PropTypes.exact({
                // 用于自定义样式规则的js回调函数
                func: PropTypes.string
            })
        )
    ]),

    // 设置额外的自定义属性
    extraProps: PropTypes.object,

    // 设置渲染方式，可选的有'svg'、'canvas'，默认为'svg'
    renderer: PropTypes.oneOf(['svg', 'canvas']),

    // 监听最新状态下矢量切片数据中全部的图层名称
    _layerNames: PropTypes.array,

    // 要素常规事件记录
    // 要素点击事件
    _clickedFeature: PropTypes.object,

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
LeafletVectorTile.defaultProps = {
    minZoom: 1,
    maxZoom: 18,
    interactive: false,
    featureIdField: 'id',
    renderer: 'svg'
}

const preventUpdateProps = ['_layerNames', '_clickedFeature'];

export default React.memo(LeafletVectorTile, (prevProps, nextProps) => {
    // 计算发生变化的参数名
    const changedProps = Object.keys(nextProps).filter(key => !isEqual(prevProps[key], nextProps[key]))

    // changedProps中全部变化的prop都在preventUpdateProps中声明时
    // 阻止本次重绘
    return changedProps.every(propName => preventUpdateProps.includes(propName));
});