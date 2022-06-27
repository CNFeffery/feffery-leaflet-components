/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { FullscreenControl } from "react-leaflet-fullscreen";
import { omitby, isUndefined } from 'lodash';

// 定义地图全屏化组件LeafletFullscreenControl
const LeafletFullscreenControl = (props) => {

    // 取得必要属性或参数
    const {
        id,
        position,
        forceSeparateButton,
        forcePseudoFullscreen,
        loading_state,
        setProps
    } = props;

    // 返回定制化的前端组件
    return (
        <FullscreenControl id={id}
            position={position || "topleft"}
            forceSeparateButton={forceSeparateButton}
            forcePseudoFullscreen={forcePseudoFullscreen}
            title={"全屏"}
            titleCancel={"取消全屏"}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

// 定义参数或属性
LeafletFullscreenControl.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 设置全屏控件的方位，可选的有'topleft'、'topright'、'bottomleft'、'bottomright'
    position: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),

    // 设置控件按钮是否强制脱离于放缩控件，默认为false
    forceSeparateButton: PropTypes.bool,

    // 设置是否开启伪全屏模式，默认为false
    forcePseudoFullscreen: PropTypes.bool,

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
    forceSeparateButton: false,
    forcePseudoFullscreen: false
}

export default React.memo(LeafletFullscreenControl);