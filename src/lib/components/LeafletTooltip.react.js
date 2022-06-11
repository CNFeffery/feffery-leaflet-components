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
        children,
        position,
        direction,
        permanent,
        bubblingMouseEvents,
        interactive,
        loading_state,
        setProps
    } = props;

    // 返回定制化的前端组件
    return (
        <Tooltip
            id={id}
            children={children}
            position={position}
            direction={direction}
            permanent={permanent}
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
    // 默认为'auto'
    direction: PropTypes.oneOf(['right', 'left', 'top', 'bottom', 'center', 'auto']),

    // 设置是否永久展开tooltip而无需鼠标悬浮触发，默认为false
    permanent: PropTypes.bool,

    // 设置tooltip内是否穿透底图事件，默认为true
    bubblingMouseEvents: PropTypes.bool,

    // 设置是否允许tooltip内的交互事件，默认为false
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