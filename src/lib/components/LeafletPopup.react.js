/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMap, Popup } from 'react-leaflet';

// 定义弹出窗口组件LeafletPopup
const LeafletPopup = (props) => {

    // 取得必要属性或参数
    const {
        id,
        children,
        className,
        minWidth,
        maxWidth,
        maxHeight,
        keepInView,
        closeButton,
        closeOnEscapeKey,
        closeOnClick,
        loading_state,
        setProps
    } = props;

    console.log('popup测试')

    // 返回定制化的前端组件
    return (
        <Popup
            id={id}
            className={className}
            minWidth={minWidth}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            keepInView={keepInView}
            closeButton={closeButton}
            closeOnEscapeKey={closeOnEscapeKey}
            closeOnClick={closeOnClick}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</Popup>
    );
}

// 定义参数或属性
LeafletPopup.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 设置tooltip内部的子元素
    children: PropTypes.node,

    // 为popup容器设置css类
    className: PropTypes.string,

    // 设置popup容器的最小像素宽度，默认为50
    minWidth: PropTypes.number,

    // 设置popup容器的最大像素宽度，默认为300
    maxWidth: PropTypes.number,

    // 设置popup容器的最大高度，内容超出时会渲染滚动条，默认无限制
    maxHeight: PropTypes.number,

    // 设置是否强制已展开的popup限定在视角内，默认为false
    keepInView: PropTypes.bool,

    // 设置是否为popup渲染关闭按钮，默认为false
    closeButton: PropTypes.bool,

    // 设置popup是否可以受键盘ESC键控制关闭，默认为true
    closeOnEscapeKey: PropTypes.bool,

    // 设置点击地图时是否会触发popup的关闭
    closeOnClick: PropTypes.bool,

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
LeafletPopup.defaultProps = {
}

export default React.memo(LeafletPopup);