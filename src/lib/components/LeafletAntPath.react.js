import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { antPath } from 'leaflet-ant-path';
import { useMap } from 'react-leaflet';
import { pathOptionsPropTypes } from './BasePropTypes.react';
import { isUndefined, omitBy } from 'lodash';

// 定义蚂蚁路径图层组件LeafletAntPath
const LeafletAntPath = (props) => {

    // 取得必要属性或参数
    const {
        positions,
        pathOptions,
        paused,
        reverse,
        hardwareAccelerated,
        pulseColor,
        delay,
        dashArray
    } = props;

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

// 定义参数或属性
LeafletAntPath.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 强制刷新用
    key: PropTypes.string,

    // 设置折线中折点坐标数组，必填
    positions: PropTypes.oneOfType([
        // 单折线
        PropTypes.arrayOf(
            PropTypes.exact({
                // 经度
                lng: PropTypes.number,

                // 纬度
                lat: PropTypes.number
            })
        ),
        // 多折线
        PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.exact({
                    // 经度
                    lng: PropTypes.number,

                    // 纬度
                    lat: PropTypes.number
                })
            )
        )
    ]).isRequired,

    // 设置样式相关参数
    pathOptions: pathOptionsPropTypes,

    // 设置是否暂停蚂蚁路径，默认为false
    paused: PropTypes.bool,

    // 设置是否颠倒动画方向，默认为false
    reverse: PropTypes.bool,

    // 设置是否开启硬件加速，默认为false
    hardwareAccelerated: PropTypes.bool,

    // 设置线段分隔颜色，默认为'white'
    pulseColor: PropTypes.string,

    // 动画延迟，单位：毫秒
    delay: PropTypes.number,

    // 设置分段模式，默认为'10, 20'
    dashArray: PropTypes.string,

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
LeafletAntPath.defaultProps = {
}

export default React.memo(LeafletAntPath);