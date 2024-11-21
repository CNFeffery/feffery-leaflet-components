/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// react核心
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { LayerGroup, useMap } from 'react-leaflet';
// 辅助库
import { isUndefined } from 'lodash';

/**
 * 图层分组组件LeafletLayerGroup
 */
const LeafletLayerGroup = (props) => {
    const {
        id,
        children,
        hidden,
        zIndex,
        loading_state,
        setProps
    } = props;

    const map = useMap();
    const layerGroupRef = useRef(null);

    useEffect(() => {
        if (layerGroupRef && map && !isUndefined(hidden)) {
            if (hidden) {
                map.removeLayer(layerGroupRef.current)
            } else {
                map.addLayer(layerGroupRef.current)
            }
        }
    }, [hidden])

    useEffect(() => {
        if (layerGroupRef.current && !isUndefined(zIndex)) {
            layerGroupRef.current.setZIndex(zIndex)
        }
    }, [zIndex])

    // 返回定制化的前端组件
    return (
        <LayerGroup id={id}
            ref={layerGroupRef}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</LayerGroup>
    );
}

LeafletLayerGroup.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 传入内部相关图层类组件
     */
    children: PropTypes.node,

    /**
     * 是否隐藏当前图层分组
     * 默认值：`false`
     */
    hidden: PropTypes.bool,

    /**
     * 当前要素分组`z`轴层级
     */
    zIndex: PropTypes.number,

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

LeafletLayerGroup.defaultProps = {
}

export default React.memo(LeafletLayerGroup);