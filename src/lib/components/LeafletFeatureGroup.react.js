/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// react核心
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { FeatureGroup } from 'react-leaflet';
// 辅助库
import { isUndefined } from 'lodash';
import { useLoading } from '../utils';

/**
 * 要素分组组件LeafletFeatureGroup
 */
const LeafletFeatureGroup = ({
    id,
    children,
    bringToFront = false,
    zIndex,
    setProps
}) => {

    const featureGroupRef = useRef(null);

    useEffect(() => {
        // 处理当前要素组整体bounds更新
        if (featureGroupRef.current) {
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

    useEffect(() => {
        if (featureGroupRef.current && !isUndefined(zIndex)) {
            featureGroupRef.current.setZIndex(zIndex)
        }
    }, [zIndex])

    // 返回定制化的前端组件
    return (
        <FeatureGroup id={id}
            ref={featureGroupRef}
            data-dash-is-loading={useLoading()}
        >{children}</FeatureGroup>
    );
}

LeafletFeatureGroup.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 传入内部相关要素类组件
     */
    children: PropTypes.node,

    /**
     * 是否将当前要素分组置于顶层
     * 默认值：`false`
     */
    bringToFront: PropTypes.bool,

    /**
     * 当前要素分组`z`轴层级
     */
    zIndex: PropTypes.number,

    /**
     * 监听当前要素分组整体矩形范围
     */
    _bounds: PropTypes.exact({
        minx: PropTypes.number,
        miny: PropTypes.number,
        maxx: PropTypes.number,
        maxy: PropTypes.number
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletFeatureGroup);