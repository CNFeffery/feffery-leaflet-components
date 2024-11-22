/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// react核心
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { useMap } from 'react-leaflet';
// 辅助库
import { useHover } from 'ahooks';

/**
 * 元素包装器组件LeafletDomWrapper
 */
const LeafletDomWrapper = (props) => {
    const {
        children
    } = props;

    const ref = useRef(null);
    const isHovering = useHover(ref);
    const map = useMap();

    useEffect(() => {
        // 若地图本身可拖动
        if (map.options.dragging) {
            if (isHovering) {
                map.dragging.disable();
            } else {
                map.dragging.enable();
            }
        }
        // 若地图本身可滚轮缩放
        if (map.options.scrollWheelZoom) {
            if (isHovering) {
                map.scrollWheelZoom.disable();
            } else {
                map.scrollWheelZoom.enable();
            }
        }
    }, [isHovering])

    return (
        <div ref={ref}>{children}</div>
    );
}

LeafletDomWrapper.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 传入需要进行包装的外部自定义元素
     */
    children: PropTypes.node,

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

LeafletDomWrapper.defaultProps = {
}

export default React.memo(LeafletDomWrapper);