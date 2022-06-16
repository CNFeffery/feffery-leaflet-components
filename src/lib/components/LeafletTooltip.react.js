/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMap, Tooltip } from 'react-leaflet';

// 定义提示框组件LeafletTooltip
const LeafletTooltip = (props) => {

    // 取得必要属性或参数
    const {
        id,
        className,
        children,
        position,
        direction,
        permanent,
        sticky,
        opacity,
        bubblingMouseEvents,
        interactive,
        loading_state,
        setProps
    } = props;

    // 返回定制化的前端组件
    return (
        <Tooltip
            id={id}
            className={className}
            children={children}
            position={position}
            direction={direction}
            permanent={permanent}
            sticky={sticky}
            opacity={opacity}
            bubblingMouseEvents={bubblingMouseEvents}
            interactive={interactive}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        ></Tooltip>
    );
}

// 定义参数或属性
LeafletTooltip.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 为tooltip容器设置css类
    className: PropTypes.string,

    // 设置tooltip内部的子元素
    children: PropTypes.node,

    // 当需要独立展示tooltip时，设置tooltip的位置
    position: PropTypes.exact({
        // 经度
        lng: PropTypes.number,

        // 纬度
        lat: PropTypes.number
    }),

    // 设置tooltip展开方位，可选的有'right'、'left'、'top'、'bottom'、'center'与'auto'
    // 默认为'auto'，其中'auto'会自动根据方位在'left'与'right'之间进行切换
    direction: PropTypes.oneOf(['right', 'left', 'top', 'bottom', 'center', 'auto']),

    // 设置是否永久展开tooltip而无需鼠标悬浮触发，默认为false
    permanent: PropTypes.bool,

    // 设置是否开启tooltip鼠标跟随模式，默认为false
    // 设置为true时，tooltip会跟随鼠标在要素内的移动自动改变位置
    sticky: PropTypes.bool,

    // 设置tooltip的容器透明度，默认为0.9
    opacity: PropTypes.number,

    // 设置为true时，tooltip内的鼠标事件同样会触发地图的同名事件
    // 默认为true
    bubblingMouseEvents: PropTypes.bool,

    // 设置是否允许tooltip监听内部元素的鼠标事件，默认为false
    interactive: PropTypes.bool,

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
LeafletTooltip.defaultProps = {
}

export default LeafletTooltip;