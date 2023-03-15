/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { LayerGroup, useMap } from 'react-leaflet';
import { isUndefined } from 'lodash';

// 定义图层分组组件LeafletLayerGroup
const LeafletLayerGroup = (props) => {

    // 取得必要属性或参数
    const {
        id,
        children,
        hidden,
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

// 定义参数或属性
LeafletLayerGroup.propTypes = {
    // 组件id
    id: PropTypes.string,

    key: PropTypes.string,

    // 传入tooltip、popup组件
    children: PropTypes.node,

    // 控制是否隐藏当前图层组，默认为false
    hidden: PropTypes.bool,

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
LeafletLayerGroup.defaultProps = {
}

export default React.memo(LeafletLayerGroup);