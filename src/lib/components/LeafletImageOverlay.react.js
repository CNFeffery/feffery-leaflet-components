/* eslint-disable no-magic-numbers */
/* eslint-disable consistent-return */
/* eslint-disable no-undefined */
// react核心
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import L from 'leaflet';
import { ImageOverlay, useMap } from 'react-leaflet';

/**
 * 图片叠加组件LeafletImageOverlay
 */
const LeafletImageOverlay = (props) => {
    const {
        id,
        className,
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

    return (
        <ImageOverlay
            id={id}
            className={className}
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
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 当前图层css类名
     */
    className: PropTypes.string,

    /**
     * 必填，图片地址
     */
    url: PropTypes.string.isRequired,

    /**
     * 必填，设置图片叠加区域坐标范围
     */
    bounds: PropTypes.exact({
        /**
         * 叠加区域左下角经度
         */
        minx: PropTypes.number.isRequired,
        /**
         * 叠加区域左下角纬度
         */
        miny: PropTypes.number.isRequired,
        /**
         * 叠加区域右上角经度
         */
        maxx: PropTypes.number.isRequired,
        /**
         * 叠加区域右上角纬度
         */
        maxy: PropTypes.number.isRequired
    }).isRequired,

    /**
     * 图片透明度，取值应在`0`到`1`之间
     */
    opacity: PropTypes.number,

    /**
     * 当前图层`z`轴层级
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

LeafletImageOverlay.defaultProps = {
}

export default React.memo(LeafletImageOverlay);