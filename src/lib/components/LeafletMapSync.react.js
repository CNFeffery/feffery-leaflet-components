/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useMap } from 'react-leaflet';
import MapContext from '../contexts/MapContext';

// 定义地图同步组件LeafletMapSync
const LeafletMapSync = (props) => {

    // 取得必要属性或参数
    const {
        id,
        groupId,
        syncStrategy,
        setProps
    } = props;

    const map = useMap();
    const mapContext = useContext(MapContext);

    useEffect(() => {
        // 绑定相关事件
        map.on('movestart zoomstart', (e) => {
            // 若当前无正在改变视角的地图实例
            if (!mapContext.triggerId.current) {
                mapContext.triggerId.current = id;
            }
        });
        map.on('move zoom', (e) => {
            // 若当前操作中地图实例与id匹配
            if (mapContext.triggerId.current) {
                if (mapContext.triggerId.current === id) {
                    mapContext.setViewState({
                        zoom: map.getZoom(),
                        center: map.getCenter(),
                        groupId: groupId,
                        triggerId: id,
                        eventType: e.type
                    });
                }
            }
        })
        map.on('moveend zoomend', (e) => {
            // 若当前操作中地图实例与id匹配
            if (mapContext.triggerId.current === id) {
                mapContext.triggerId.current = null;
            }
        });

        // 清除相关事件监听
        return () => {
            map.off('movestart zoomstart')
            map.off('move zoom')
            map.off('moveend zoomend')
        }
    }, [map])

    useEffect(() => {
        if (mapContext.viewState) {
            // 若当前存在正在进行同步触发的地图实例
            if (mapContext.triggerId.current) {
                // 若当前操作中地图实例具有分组id，且与当前地图分组id相同
                if (mapContext.viewState.groupId && mapContext.viewState.groupId === groupId) {
                    // 若当前操作中地图实例与当前地图id不相同，则更新地图中心点和缩放
                    if (mapContext.triggerId.current !== id) {
                        map.setView(mapContext.viewState.center, syncStrategy === 'all' ? mapContext.viewState.zoom : map.getZoom(), { animate: mapContext.viewState.eventType === 'zoom' });
                    }
                } else if (!mapContext.viewState.groupId) {
                    // 若当前操作中地图实例与当前地图id不相同，则更新地图中心点和缩放
                    if (mapContext.triggerId.current !== id) {
                        map.setView(mapContext.viewState.center, syncStrategy === 'all' ? mapContext.viewState.zoom : map.getZoom(), { animate: mapContext.viewState.eventType === 'zoom' });
                    }
                }
            }
        }
    }, [mapContext.viewState])

    return <></>;
}

// 定义参数或属性
LeafletMapSync.propTypes = {
    /**
     * 必填，组件id
     */
    id: PropTypes.string.isRequired,

    /**
     * 强制刷新用
     */
    key: PropTypes.string,

    /**
     * 地图组id，用于限定地图同步行为发生在当前相同id的组内
     */
    groupId: PropTypes.string,

    /**
     * 同步行为策略，可选项有`'all'`、`'center'`
     * 默认值：`'all'`
     */
    syncStrategy: PropTypes.oneOf(['all', 'center']),

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
LeafletMapSync.defaultProps = {
    syncStrategy: 'all'
}

export default React.memo(LeafletMapSync);