/* eslint-disable no-empty */
/* eslint-disable no-eval */
/* eslint-disable prefer-const */
/* eslint-disable no-undefined */
// react核心
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.vectorgrid';
// 辅助库
import { isEqual, isUndefined, clone } from 'lodash';

/**
 * 矢量切片图层组件LeafletVectorTile
 */
const LeafletVectorTile = ({
    id,
    url,
    minZoom = 1,
    maxZoom = 18,
    interactive = false,
    featureIdField = 'id',
    vectorTileLayerStyles,
    extraProps,
    renderer = 'svg',
    setProps
}) => {

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

    return <></>;
}

LeafletVectorTile.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 切片服务地址
     */
    url: PropTypes.string,

    /**
     * 当前地图服务允许加载的最小缩放级别
     * 默认值：`0`
     */
    minZoom: PropTypes.number,

    /**
     * 当前地图服务允许加载的最大缩放级别
     * 默认值：`18`
     */
    maxZoom: PropTypes.number,

    /**
     * 当前图层是否允许交互功能
     * 默认值：`false`
     */
    interactive: PropTypes.bool,

    /**
     * 切片数据要素属性中作为图层唯一识别`id`的字段
     * 默认值：`'id'`
     */
    featureIdField: PropTypes.string,

    /**
     * 针对不同切片图层设置样式，键：图层名称，值：样式字典或`javascript`控制函数字符串
     */
    vectorTileLayerStyles: PropTypes.oneOfType([
        PropTypes.objectOf(
            PropTypes.string
        ),
        PropTypes.objectOf(
            PropTypes.exact({
                func: PropTypes.string
            })
        )
    ]),

    /**
     * 额外自定义参数
     */
    extraProps: PropTypes.object,

    /**
     * 渲染方式，可选项有`'svg'`、`'canvas'`
     * 默认值：`'svg'`
     */
    renderer: PropTypes.oneOf(['svg', 'canvas']),

    /**
     * 监听当前服务中已加载的全部图层名称
     */
    _layerNames: PropTypes.array,

    /**
     * 监听要素点击事件
     */
    _clickedFeature: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

const preventUpdateProps = ['_layerNames', '_clickedFeature'];

export default React.memo(LeafletVectorTile, (prevProps, nextProps) => {
    // 计算发生变化的参数名
    const changedProps = Object.keys(nextProps).filter(key => !isEqual(prevProps[key], nextProps[key])).filter(key => key !== 'setProps');

    // changedProps中全部变化的prop都在preventUpdateProps中声明时
    // 阻止本次重绘
    return changedProps.every(propName => preventUpdateProps.includes(propName));
});