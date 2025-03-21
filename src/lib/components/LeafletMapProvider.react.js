// react核心
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
// 上下文
import MapContext from '../contexts/MapContext';

/**
 * 地图编排组件LeafletMapProvider
 */
const LeafletMapProvider = ({
    children
}) => {

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

LeafletMapProvider.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 传入内部需要编排的若干目标`LeafletMap`地图相关组件
     */
    children: PropTypes.node,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletMapProvider);