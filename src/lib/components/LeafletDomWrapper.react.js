/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';

// 定义元素包装器组件LeafletDomWrapper
const LeafletDomWrapper = (props) => {

    // 取得必要属性或参数
    const {
        children,
        disableClickPropagation,
        disableScrollPropagation
    } = props;

    const childrenRef = useRef(null);

    useEffect(() => {
        if (childrenRef.current) {
            if (disableClickPropagation) {
                L.DomEvent.disableClickPropagation(childrenRef.current);
            }
            if (disableScrollPropagation) {
                L.DomEvent.disableScrollPropagation(childrenRef.current);
            }
        }
    }, [children])

    return (
        <div ref={childrenRef}>{children}</div>
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

    /**
     * 是否屏蔽内部元素点击事件向外部地图实例的派发
     * 默认：true
     */
    disableClickPropagation: PropTypes.bool,

    /**
     * 是否屏蔽内部元素滚轮事件向外部地图实例的派发
     * 默认：true
     */
    disableScrollPropagation: PropTypes.bool,

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
    disableClickPropagation: true,
    disableScrollPropagation: true
}

export default React.memo(LeafletDomWrapper);