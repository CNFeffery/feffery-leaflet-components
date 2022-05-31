import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import L from "leaflet";
import "./utils/leaflet.migrationLayer";
import { useMap } from 'react-leaflet';

// 定义流线图层组件LeafletMigrationLayer，api参数参考https://github.com/lit-forest/leaflet.migrationLayer
const LeafletFlowLayer = (props) => {

    // 取得必要属性或参数
    const {
        id,
        flowData,
        pulseRadius,
        pulseBorderWidth,
        arcWidth,
        maxWidth,
        arcLabel,
        arcLabelFontSize,
        arcLabelFontFamily
    } = props;

    const map = useMap();

    // 存储流线图层状态
    const [flowLayer, setFlowLayer] = useState(null);

    useEffect(() => {

        // 将flowData加工为流线地图所需data格式
        const data = flowData.map(item => {
            return {
                from: [item.from.lng, item.from.lat],
                to: [item.to.lng, item.to.lat],
                labels: [item.labels.from, item.labels.to],
                color: item.color,
                value: item.value
            };
        })

        if (flowLayer) {
            // 销毁先前绘制的图层
            flowLayer.setData(data);
        } else {
            setFlowLayer(
                L.migrationLayer({
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
            )
        }
    }, [flowData])

    if (flowLayer) {
        flowLayer.addTo(map)
    }

    // 返回定制化的前端组件
    return <div id={id} />;
}

// 定义参数或属性
LeafletFlowLayer.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 定义流数据结构
    flowData: PropTypes.arrayOf(
        PropTypes.exact({
            // 流起点坐标
            from: PropTypes.exact({
                // 经度
                lng: PropTypes.number,
                // 纬度
                lat: PropTypes.number
            }),
            // 流终点坐标
            to: PropTypes.exact({
                // 经度
                lng: PropTypes.number,
                // 纬度
                lat: PropTypes.number
            }),
            // 定义起点文字标签、终点文字标签
            labels: PropTypes.exact({
                // 起点文字标签
                from: PropTypes.string,
                // 终点文字标签
                to: PropTypes.string
            }),
            // 定义流线色彩
            color: PropTypes.string,
            // 定义流量数值，会影响流线的宽度
            value: PropTypes.number
        })
    ),

    // 定义扩散圈像素半径
    pulseRadius: PropTypes.number,

    // 定义扩散圈边框像素宽度
    pulseBorderWidth: PropTypes.number,

    // 定义流线像素宽度
    arcWidth: PropTypes.number,

    // 设置流线最大像素宽度
    maxWidth: PropTypes.number,

    // 设置是否展示起终点文字标签
    arcLabel: PropTypes.bool,

    // 设置起终点文字字体大小
    arcLabelFontSize: PropTypes.string,

    // 设置起终点文字字体
    arcLabelFontFamily: PropTypes.string,

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
LeafletFlowLayer.defaultProps = {
    pulseRadius: 30,
    pulseBorderWidth: 3,
    arcWidth: 1,
    maxWidth: 10,
    arcLabel: true,
    arcLabelFontSize: '10px',
    arcLabelFontFamily: 'sans-serif'
}

export default LeafletFlowLayer;