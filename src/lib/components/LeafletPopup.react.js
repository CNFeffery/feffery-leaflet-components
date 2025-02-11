/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// reaact核心
import React from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { Popup } from 'react-leaflet';
// 辅助库
import { useLoading } from '../utils';

/**
 * 弹框组件LeafletPopup
 */
const LeafletPopup = ({
    id,
    children,
    className,
    keepInView = false,
    closeButton = false,
    closeOnEscapeKey = true,
    closeOnClick = true,
    width,
    setProps
}) => {

    return (
        <Popup
            id={id}
            className={className}
            keepInView={keepInView}
            closeButton={closeButton}
            closeOnEscapeKey={closeOnEscapeKey}
            closeOnClick={closeOnClick}
            minWidth={width}
            data-dash-is-loading={useLoading()}
        >{children}</Popup>
    );
}

LeafletPopup.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 弹框css类名
     */
    className: PropTypes.string,

    /**
     * 弹框内部元素
     */
    children: PropTypes.node,

    /**
     * 已展开的弹框是否限制在地图范围内显示
     * 默认值：`false`
     */
    keepInView: PropTypes.bool,

    /**
     * 是否显示关闭按钮
     * 默认值：`false`
     */
    closeButton: PropTypes.bool,

    /**
     * 通过键盘`esc`键是否可关闭弹框
     * 默认值：`true`
     */
    closeOnEscapeKey: PropTypes.bool,

    /**
     * 点击地图空白处是否可关闭弹框
     * 默认值：`true`
     */
    closeOnClick: PropTypes.bool,

    /**
     * 为弹框设置固定像素宽度值
     */
    width: PropTypes.number,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletPopup);