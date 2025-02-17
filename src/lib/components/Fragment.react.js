// react核心
import React from 'react';
import PropTypes from 'prop-types';

/**
 * 空节点组件Fragment
 */
const Fragment = (props) => (<>{props.children}</>);

Fragment.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 用于传入内部组件
     */
    children: PropTypes.node,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(Fragment);