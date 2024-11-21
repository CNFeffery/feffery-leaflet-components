/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// react核心
import React from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { Tooltip } from 'react-leaflet';

/**
 * 信息框组件LeafletTooltip
 */
const LeafletTooltip = (props) => {
    const {
        id,
        className,
        children,
        direction,
        permanent,
        sticky,
        opacity,
        interactive,
        loading_state,
        setProps
    } = props;

    return (
        <Tooltip
            id={id}
            className={className}
            children={children}
            direction={direction}
            permanent={permanent}
            sticky={sticky}
            opacity={opacity}
            interactive={interactive}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        ></Tooltip>
    );
}

LeafletTooltip.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 信息框css类名
     */
    className: PropTypes.string,

    /**
     * 信息框内部元素
     */
    children: PropTypes.node,

    /**
     * 信息框展开方向，可选项有`'right'`、`'left'`、`'top'`、`'bottom'`、`'center'`、`'auto'`
     * 默认值：`'auto'`
     */
    direction: PropTypes.oneOf(['right', 'left', 'top', 'bottom', 'center', 'auto']),

    /**
     * 信息框是否保持展开状态，而无需鼠标移入触发
     * 默认值：`false`
     */
    permanent: PropTypes.bool,

    /**
     * 信息框是否跟随鼠标位置
     * 默认值：`false`
     */
    sticky: PropTypes.bool,

    /**
     * 信息框透明度
     * 默认值：`0.9`
     */
    opacity: PropTypes.number,

    /**
     * 信息框内部元素是否可交互
     * 默认值：`false`
     */
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

LeafletTooltip.defaultProps = {
    direction: 'auto',
    permanent: false,
    sticky: false,
    opacity: 0.9,
    interactive: false
}

export default React.memo(LeafletTooltip);