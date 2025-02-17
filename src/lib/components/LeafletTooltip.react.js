/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// react核心
import React from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { Tooltip } from 'react-leaflet';
// 辅助库
import { useLoading } from '../utils';

/**
 * 信息框组件LeafletTooltip
 */
const LeafletTooltip = ({
    id,
    className,
    children,
    direction = 'auto',
    permanent = false,
    sticky = false,
    opacity = 0.9,
    interactive = false,
    setProps
}) => {

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
            data-dash-is-loading={useLoading()}
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

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletTooltip);