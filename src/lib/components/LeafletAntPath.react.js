// react核心
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { antPath } from 'leaflet-ant-path';
import { useMap } from 'react-leaflet';
// 辅助库
import { isUndefined, omitBy } from 'lodash';
// 参数类型
import { pathOptionsPropTypes } from './BasePropTypes.react';

/**
 * 蚂蚁路径图层组件LeafletAntPath
 */
const LeafletAntPath = ({
    positions,
    pathOptions,
    paused,
    reverse,
    hardwareAccelerated,
    pulseColor,
    delay,
    dashArray
}) => {

    const map = useMap();

    // 存储流线图层状态
    const [antPathLayer, setAntPathLayer] = useState(null);

    useEffect(() => {
        if (map) {
            // 清除先前的图层
            if (antPathLayer) {
                antPathLayer.remove()
            }
            setAntPathLayer(
                antPath(positions,
                    omitBy(
                        {
                            ...pathOptions,
                            pmIgnore: true,
                            paused,
                            reverse,
                            hardwareAccelerated,
                            pulseColor,
                            delay,
                            dashArray
                        },
                        isUndefined
                    ))
            )
        }
    }, [positions,
        paused,
        reverse,
        hardwareAccelerated,
        pulseColor,
        delay,
        dashArray])

    useEffect(() => {
        if (antPathLayer) {
            antPathLayer.addTo(map)
        }
    }, [antPathLayer])

    return <></>;
}

LeafletAntPath.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 必填，定义折线坐标
     */
    positions: PropTypes.oneOfType([
        // 单折线
        PropTypes.arrayOf(
            PropTypes.exact({
                /**
                 * 经度
                 */
                lng: PropTypes.number,
                /**
                 * 纬度
                 */
                lat: PropTypes.number
            })
        ),
        // 多折线
        PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.exact({
                    /**
                     * 经度
                     */
                    lng: PropTypes.number,
                    /**
                     * 纬度
                     */
                    lat: PropTypes.number
                })
            )
        )
    ]).isRequired,

    /**
     * 矢量样式配置参数
     */
    pathOptions: pathOptionsPropTypes,

    /**
     * 是否暂停蚂蚁路径动画
     * 默认值：`false`
     */
    paused: PropTypes.bool,

    /**
     * 是否翻转蚂蚁路径动画方向
     * 默认值：`false`
     */
    reverse: PropTypes.bool,

    /**
     * 是否开启硬件加速
     * 默认值：`false`
     */
    hardwareAccelerated: PropTypes.bool,

    /**
     * 折线分隔颜色
     * 默认值：`'white'`
     */
    pulseColor: PropTypes.string,

    /**
     * 动画延迟，单位：毫秒
     */
    delay: PropTypes.number,

    /**
     * 折线分段格式
     * 默认值：`'10, 20'`
     */
    dashArray: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletAntPath);