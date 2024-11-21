/* eslint-disable new-cap */
// react核心
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { useMap } from 'react-leaflet';
import L from "leaflet";
import "./utils/leaflet.migrationLayer";
// 辅助库
import * as Color from 'color'

/**
 * 流线图层组件LeafletMigrationLayer
 */
const LeafletFlowLayer = (props) => {
    const {
        id,
        flowData,
        pulseRadius,
        pulseBorderWidth,
        arcWidth,
        maxWidth,
        arcLabel,
        arcLabelFontSize,
        arcLabelFontFamily,
        keepUniqueLabels,
        setAction,
        setProps
    } = props;

    const map = useMap();

    // 存储流线图层状态
    const flowLayerRef = useRef(null);

    useEffect(() => {
        if (map && flowData) {
            // 将flowData加工为流线地图所需data格式
            const data = flowData.map(item => {
                return {
                    from: [item.from.lng, item.from.lat],
                    to: [item.to.lng, item.to.lat],
                    labels: [item.labels?.from || null, item.labels?.to || null],
                    color: Color(item.color || '#3498db').hex(),
                    value: item.value || 1
                };
            })

            if (keepUniqueLabels) {
                // 保存所有标签唯一值数组
                const labels = [];
                // 记录data中各记录起点、重点label唯一值
                for (let i = 0; i < data.length; i++) {
                    if (!labels.includes(data[i].labels[0])) {
                        labels.push(data[i].labels[0])
                    } else {
                        data[i].labels[0] = null
                    }

                    if (!labels.includes(data[i].labels[1])) {
                        labels.push(data[i].labels[1])
                    } else {
                        data[i].labels[1] = null
                    }
                }
            }

            // 若当前流线图层已存在
            if (flowLayerRef.current) {
                // 动态更新数据
                flowLayerRef.current.setData(data);
            } else {
                const flowLayer = L.migrationLayer({
                    map: map,
                    data: data,
                    pulseRadius: pulseRadius,
                    pulseBorderWidth: pulseBorderWidth,
                    arcWidth: arcWidth,
                    maxWidth: maxWidth,
                    arcLabel: arcLabel,
                    arcLabelFont: `${arcLabelFontSize} ${arcLabelFontFamily}`,
                    _migrationId: id
                })

                // 添加迁徙图层到地图
                flowLayer.addTo(map)

                // 更新迁徙图层引用
                flowLayerRef.current = flowLayer;
            }
        }
    }, [map, flowData])

    // 执行动作
    useEffect(() => {
        if (setAction && flowLayerRef.current) {
            if (setAction === 'pause') {
                flowLayerRef.current.pause();
            } else if (setAction === 'play') {
                flowLayerRef.current.play();
            } else if (setAction === 'hide') {
                flowLayerRef.current.hide();
            } else if (setAction === 'show') {
                flowLayerRef.current.show();
            }
            setProps({
                setAction: null
            })
        }
    }, [setAction])

    // 并在组件即将卸载前对flowLayer实例进行销毁
    useEffect(() => {
        return () => {
            if (flowLayerRef.current) {
                flowLayerRef.current.destroy();
                flowLayerRef.current = null;
            }
        };
    }, []);

    return <></>;
}

LeafletFlowLayer.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 定义流数据
     */
    flowData: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 当前流数据起点坐标
             */
            from: PropTypes.exact({
                /**
                 * 经度
                 */
                lng: PropTypes.number,
                /**
                 * 纬度
                 */
                lat: PropTypes.number
            }),
            /**
             * 当前流数据终点坐标
             */
            to: PropTypes.exact({
                /**
                 * 经度
                 */
                lng: PropTypes.number,
                /**
                 * 纬度
                 */
                lat: PropTypes.number
            }),
            /**
             * 当前流线起点、终点文字标签
             */
            labels: PropTypes.exact({
                /**
                 * 起点文字标签
                 */
                from: PropTypes.string,
                /**
                 * 终点文字标签
                 */
                to: PropTypes.string
            }),
            /**
             * 当前流线颜色值
             */
            color: PropTypes.string,
            /**
             * 当前流线流量数值，与流线显示的宽度相关联
             */
            value: PropTypes.number
        })
    ),

    /**
     * 扩散圆圈效果像素半径
     * 默认值：`30`
     */
    pulseRadius: PropTypes.number,

    /**
     * 扩散圆圈边框像素宽度
     * 默认值：`3`
     */
    pulseBorderWidth: PropTypes.number,

    /**
     * 流线最小像素宽度
     * 默认值：`1`
     */
    arcWidth: PropTypes.number,

    /**
     * 流线最大像素宽度
     * 默认值：`10`
     */
    maxWidth: PropTypes.number,

    /**
     * 是否显示流线起点、终点文字标签
     * 默认值：`true`
     */
    arcLabel: PropTypes.bool,

    /**
     * 流线起点、终点文字标签字体大小
     * 默认值：`'10px'`
     */
    arcLabelFontSize: PropTypes.string,

    /**
     * 流线起点、终点文字标签字体
     * 默认值：`'sans-serif'`
     */
    arcLabelFontFamily: PropTypes.string,

    /**
     * 是否自动对起点、终点文字标签去重
     * 默认值：`false`
     */
    keepUniqueLabels: PropTypes.bool,

    /**
     * 手动执行控制动作，可选的有`'pause'`、`'play'`、`'hide'`、`'show'`，每次有效值更新后会重置为空值
     */
    setAction: PropTypes.oneOf(['pause', 'play', 'hide', 'show']),

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

LeafletFlowLayer.defaultProps = {
    pulseRadius: 30,
    pulseBorderWidth: 3,
    arcWidth: 1,
    maxWidth: 10,
    arcLabel: true,
    arcLabelFontSize: '10px',
    arcLabelFontFamily: 'sans-serif',
    keepUniqueLabels: false
}

export default React.memo(LeafletFlowLayer);