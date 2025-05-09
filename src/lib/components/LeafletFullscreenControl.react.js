/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// react核心
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import "./utils/Control.FullScreen";
import "./utils/Control.FullScreen.css";
import { useMap } from 'react-leaflet';
import L from 'leaflet';

/**
 * 地图全屏化组件LeafletFullscreenControl
 */
const LeafletFullscreenControl = ({
    position,
    forceSeparateButton = false,
    setProps
}) => {

    const map = useMap()

    useEffect(() => {
        if (map) {
            L.control.fullscreen({
                position: position || "topleft",
                title: '全屏',
                titleCancel: '取消全屏',
                forceSeparateButton: forceSeparateButton
            }).addTo(map);
        }
    }, [map])

    return < ></>
}

LeafletFullscreenControl.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 全屏控件方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
     */
    position: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),

    /**
     * 控件按钮是否强制脱离于地图缩放控件
     * 默认值：`false`
     */
    forceSeparateButton: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletFullscreenControl);