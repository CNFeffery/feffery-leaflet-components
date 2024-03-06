/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import "./utils/Control.FullScreen";
import "./utils/Control.FullScreen.css";
import { useMap } from 'react-leaflet';
import L from 'leaflet';

// 定义地图全屏化组件LeafletFullscreenControl
const LeafletFullscreenControl = (props) => {

    // 取得必要属性或参数
    const {
        id,
        key,
        position,
        forceSeparateButton,
        loading_state,
        setProps
    } = props;

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

    // 返回定制化的前端组件
    return < ></>
}

// 定义参数或属性
LeafletFullscreenControl.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * 强制刷新用
     */
    key: PropTypes.string,

    // 设置全屏控件的方位，可选的有'topleft'、'topright'、'bottomleft'、'bottomright'
    position: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),

    // 设置控件按钮是否强制脱离于放缩控件，默认为false
    forceSeparateButton: PropTypes.bool,

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
LeafletFullscreenControl.LeafletFullscreenControl = {
    forceSeparateButton: false
}

export default React.memo(LeafletFullscreenControl);