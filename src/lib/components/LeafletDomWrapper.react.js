/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useHover } from 'ahooks';
import PropTypes from 'prop-types';

// 定义元素包装器组件LeafletDomWrapper
const LeafletDomWrapper = (props) => {

    // 取得必要属性或参数
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

// 定义参数或属性
LeafletDomWrapper.propTypes = {
    // 组件id
    id: PropTypes.string,

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

// 设置默认参数
LeafletDomWrapper.defaultProps = {
}

export default React.memo(LeafletDomWrapper);