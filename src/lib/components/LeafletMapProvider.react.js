import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import MapContext from '../contexts/MapContext';

// 定义地图编排组件LeafletMapProvider
const LeafletMapProvider = (props) => {

    const {
        children
    } = props;

    const [viewState, setViewState] = useState(null);
    const triggerId = useRef(null);

    return (
        <MapContext.Provider value={{
            viewState: viewState,
            setViewState: setViewState,
            triggerId: triggerId
        }}>
            {children}
        </MapContext.Provider>
    );
};

// 定义参数或属性
LeafletMapProvider.propTypes = {
    /**
     * 组件id
     */
    id: PropTypes.string,

    /**
     * 用于传入内部组件
     */
    children: PropTypes.node,

    /**
     * 强制刷新用
     */
    key: PropTypes.string,

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
LeafletMapProvider.defaultProps = {
}

export default React.memo(LeafletMapProvider);