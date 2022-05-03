/* eslint-disable import/prefer-default-export */
import LeafletMap from './components/LeafletMap.react';
import LeafletTileLayer from './components/LeafletTileLayer.react';
import LeafletGeoJSON from './components/LeafletGeoJSON.react';
import LeafletHeatMap from './components/LeafletHeatMap.react';
import LeafletMapAction from './components/LeafletMapAction.react copy';
import LeafletMapListener from './components/LeafletMapListener.react';

// 屏蔽所有warning信息
window.console = (function () {
    var c = {};
    c.warn = function () { };
    return c;
})();

export {
    LeafletMap,
    LeafletTileLayer,
    LeafletGeoJSON,
    LeafletHeatMap,
    LeafletMapAction,
    LeafletMapListener
};
