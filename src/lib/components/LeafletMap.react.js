/* eslint-disable no-undefined */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// 定义地图容器组件LeafletMap，api参数参考https://react-leaflet.js.org/docs/api-map/#mapcontainer
export default class LeafletMap extends Component {
    render() {
        // 取得必要属性或参数
        const {
            id,
            children,
            className,
            style,
            loading_state
        } = this.props;

        // 返回定制化的前端组件
        return (
            <MapContainer
                id={id}
                className={className}
                style={style}
                center={[51.505, -0.09]}
                zoom={13}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                {children}
            </MapContainer>
        );
    }
}

// 定义参数或属性
LeafletMap.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 内嵌文字的文本内容
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 用于设置是否为按钮渲染“加载中不可点击”效果，默认为false
    loading: PropTypes.bool,

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
LeafletMap.defaultProps = {
}
