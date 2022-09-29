/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FeatureGroup } from 'react-leaflet';

// 定义要素分组组件LeafletFeatureGroup
const LeafletFeatureGroup = (props) => {

    // 取得必要属性或参数
    const {
        id,
        children,
        bringToFront,
        loading_state,
        setProps
    } = props;

    const featureGroupRef = useRef(null);

    useEffect(() => {
        const currentBounds = featureGroupRef.current.getBounds()
        if (currentBounds._southWest && currentBounds._northEast) {

            setProps({
                _bounds: {
                    minx: currentBounds._southWest.lng,
                    miny: currentBounds._southWest.lat,
                    maxx: currentBounds._northEast.lng,
                    maxy: currentBounds._northEast.lat
                }
            })
        }
    }, [children])

    useEffect(() => {
        if (bringToFront && featureGroupRef.current) {
            featureGroupRef.current.bringToFront()
            // 还原bringToFront为false
            setProps({
                bringToFront: false
            })
        }
    }, [bringToFront])

    // 返回定制化的前端组件
    return (
        <FeatureGroup id={id}
            ref={featureGroupRef}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</FeatureGroup>
    );
}

// 定义参数或属性
LeafletFeatureGroup.propTypes = {
    // 组件id
    id: PropTypes.string,

    key: PropTypes.string,

    // 传入tooltip、popup组件
    children: PropTypes.node,

    // 设置是否将当前图层置于顶层
    bringToFront: PropTypes.bool,

    // 监听当前要素组的整体bounds
    _bounds: PropTypes.exact({
        minx: PropTypes.number,
        miny: PropTypes.number,
        maxx: PropTypes.number,
        maxy: PropTypes.number
    }),

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
LeafletFeatureGroup.defaultProps = {
}

export default React.memo(LeafletFeatureGroup);