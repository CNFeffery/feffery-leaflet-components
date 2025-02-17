/* eslint-disable no-unused-vars */
// react核心
import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import { useMap } from 'react-leaflet';
// 上下文
import MapContext from '../contexts/MapContext';

/**
 * 地图同步组件LeafletMapSync
 */
const LeafletMapSync = ({
    id,
    groupId,
    syncStrategy = 'all',
    setProps
}) => {

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

LeafletMapSync.propTypes = {
    /**
     * 必填，组件唯一id
     */
    id: PropTypes.string.isRequired,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 地图组`id`，用于限定地图同步行为发生在当前相同`id`的组内
     */
    groupId: PropTypes.string,

    /**
     * 同步行为策略，可选项有`'all'`、`'center'`
     * 默认值：`'all'`
     */
    syncStrategy: PropTypes.oneOf(['all', 'center']),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletMapSync);