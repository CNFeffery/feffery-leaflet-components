/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
// reaact核心
import React from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { Popup } from 'react-leaflet';

/**
 * 弹出窗口组件LeafletPopup
 */
const LeafletPopup = (props) => {
    const {
        id,
        children,
        className,
        keepInView,
        closeButton,
        closeOnEscapeKey,
        closeOnClick,
        width,
        loading_state,
        setProps
    } = props;

    return (
        <Popup
            id={id}
            className={className}
            keepInView={keepInView}
            closeButton={closeButton}
            closeOnEscapeKey={closeOnEscapeKey}
            closeOnClick={closeOnClick}
            minWidth={width}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
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
     * 组件型，按钮内嵌元素
     */
    children: PropTypes.node,

    /**
     * 当前组件css类名
     */
    className: PropTypes.string,

    /**
     * 已展开的窗口是否限制在地图范围内显示
     * 默认值：`false`
     */
    keepInView: PropTypes.bool,

    /**
     * 是否显示关闭按钮
     * 默认值：`false`
     */
    closeButton: PropTypes.bool,

    /**
     * 通过键盘`esc`键是否可关闭窗口
     * 默认值：`true`
     */
    closeOnEscapeKey: PropTypes.bool,

    /**
     * 点击地图空白处是否可关闭窗口
     * 默认值：`true`
     */
    closeOnClick: PropTypes.bool,

    /**
     * 为窗口设置固定像素宽度值
     */
    width: PropTypes.number,

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

LeafletPopup.defaultProps = {
    keepInView: false,
    closeButton: false,
    closeOnEscapeKey: true,
    closeOnClick: true
}

export default React.memo(LeafletPopup);