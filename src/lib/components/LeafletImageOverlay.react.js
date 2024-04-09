/* eslint-disable no-undefined */
import React from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
import { ImageOverlay } from 'react-leaflet';

/**
 * 图片叠加组件LeafletImageOverlay
 */
const LeafletImageOverlay = (props) => {

    const {
        id,
        url,
        bounds,
        opacity,
        zIndex,
        loading_state
    } = props;

    // 返回定制化的前端组件
    return (
        <ImageOverlay
            id={id}
            url={url}
            bounds={L.latLngBounds(
                L.latLng(bounds.miny, bounds.minx),
                L.latLng(bounds.maxy, bounds.maxx)
            )}
            opacity={opacity}
            zIndex={zIndex}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

LeafletImageOverlay.propTypes = {
    /**
     * 组件id
     */
    id: PropTypes.string,

    /**
     * 强制刷新用
     */
    key: PropTypes.string,

    /**
     * 必填，图片地址
     */
    url: PropTypes.string.isRequired,

    /**
     * 必填，设置图片叠加区域坐标范围
     */
    bounds: PropTypes.exact({
        // 矩形左下角经度
        minx: PropTypes.number.isRequired,
        // 矩形左下角纬度
        miny: PropTypes.number.isRequired,
        // 矩形右上角经度
        maxx: PropTypes.number.isRequired,
        // 矩形右上角纬度
        maxy: PropTypes.number.isRequired
    }).isRequired,

    /**
     * 图片透明度，取值应在`0`~`1`之间
     */
    opacity: PropTypes.number,

    /**
     * 当前图层z轴层级
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

// 设置默认参数
LeafletImageOverlay.defaultProps = {
}

export default React.memo(LeafletImageOverlay);