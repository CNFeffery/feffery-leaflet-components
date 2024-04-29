/* eslint-disable no-magic-numbers */
/* eslint-disable consistent-return */
/* eslint-disable no-undefined */
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
import { ImageOverlay, useMap } from 'react-leaflet';

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
        minZoom,
        maxZoom,
        loading_state
    } = props;

    const map = useMap();
    const imageRef = useRef(null);

    // 控制当前图片层在超出minZoom或maxZoom范围后不显示
    useEffect(() => {
        if (map && (minZoom || maxZoom)) {
            const updateImageOpacity = () => {
                if (map.getZoom() >= (minZoom || 0) && map.getZoom() <= (maxZoom || 22)) {
                    // 还原透明度
                    if (opacity === 0) {
                        imageRef.current.setOpacity(0);
                    } else {
                        imageRef.current.setOpacity(opacity || 1);
                    }
                } else {
                    // 超出范围，隐藏图层
                    imageRef.current.setOpacity(0);
                }
            }
            map.on('zoomend', updateImageOpacity);
            return () => {
                // 还原透明度
                if (opacity === 0) {
                    imageRef.current.setOpacity(0);
                } else {
                    imageRef.current.setOpacity(opacity || 1);
                }
                // 移除事件
                map.off('zoomend', updateImageOpacity);
            }
        }
    }, [opacity, minZoom, maxZoom])

    // 返回定制化的前端组件
    return (
        <ImageOverlay
            id={id}
            ref={imageRef}
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

    /**
     * 图片显示的最小缩放级别，默认无限制
     */
    minZoom: PropTypes.number,

    /**
     * 图片显示的最大缩放级别，默认无限制
     */
    maxZoom: PropTypes.number,

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