# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletMap(Component):
    """A LeafletMap component.


Keyword arguments:

- id (string; optional)

- key (string; optional):
    强制刷新用.

- children (a list of or a singular dash component, string or number; optional)

- className (string; optional)

- style (dict; optional)

- center (dict; default { lng: 0, lat: 0 })

    `center` is a dict with keys:

    - lng (number; optional)

    - lat (number; optional)

- crs (dict; default 'EPSG3857'):
    为当前地图配置坐标参考系
    当传入字符串时，表示内置的几种基础坐标参考系，可选的有'EPSG3857'、'EPSG4326'、'simple'
    当传入字典时，用于使用自定义坐标参考系  默认：'EPSG3857'.

    `crs` is a a value equal to: 'EPSG3857', 'EPSG4326', 'simple' |
    dict with keys:

    - code (string; optional):
        坐标系代码，如EPSG:4490.

    - proj4def (string; optional):
        坐标系def字符串.

    - options (dict; optional):
        其他坐标系参数.

- zoom (number; default 3)

- doubleClickZoom (boolean; default True)

- dragging (boolean; default True)

- closePopupOnClick (boolean; default True)

- minZoom (number; default 0)

- maxZoom (number; default 18)

- zoomDelta (number; default 1)

- zoomControl (boolean; default True)

- scrollWheelZoom (boolean | a value equal to: 'center'; default True)

- wheelPxPerZoomLevel (number; default 60)

- smoothWheelZoom (boolean | a value equal to: 'center'; default False)

- scaleControl (boolean; default False):
    设置是否显示比例尺  默认：False.

- scaleControlOptions (dict; optional):
    配置比例尺相关参数.

    `scaleControlOptions` is a dict with keys:

    - position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional):
        设置比例尺的方位，可选的有'topleft'、'topright'、'bottomleft'、'bottomright'.

    - imperial (boolean; optional):
        是否显示英制单位  默认：True.

- maxBounds (dict; optional)

    `maxBounds` is a dict with keys:

    - minx (number; optional)

    - miny (number; optional)

    - maxx (number; optional)

    - maxy (number; optional)

- editToolbar (boolean; default False)

- editToolbarControlsOptions (dict; optional)

    `editToolbarControlsOptions` is a dict with keys:

    - position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional)

    - drawMarker (boolean; optional)

    - drawCircleMarker (boolean; optional)

    - drawPolyline (boolean; optional)

    - drawRectangle (boolean; optional)

    - drawPolygon (boolean; optional)

    - drawCircle (boolean; optional)

    - drawText (boolean; optional)

    - editMode (boolean; optional)

    - dragMode (boolean; optional)

    - cutPolygon (boolean; optional)

    - removalMode (boolean; optional)

    - rotateMode (boolean; optional)

    - oneBlock (boolean; optional)

- showMeasurements (boolean; default False)

- maxDrawnShapes (number; optional)

- measureControl (boolean; default False)

- measureControlOptions (dict; optional)

    `measureControlOptions` is a dict with keys:

    - position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional)

    - activeColor (string; optional)

    - completedColor (string; optional)

- viewAutoCorrection (boolean; default False)

- _drawnShapes (list; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletMap'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, center=Component.UNDEFINED, crs=Component.UNDEFINED, zoom=Component.UNDEFINED, doubleClickZoom=Component.UNDEFINED, dragging=Component.UNDEFINED, closePopupOnClick=Component.UNDEFINED, minZoom=Component.UNDEFINED, maxZoom=Component.UNDEFINED, zoomDelta=Component.UNDEFINED, zoomControl=Component.UNDEFINED, scrollWheelZoom=Component.UNDEFINED, wheelPxPerZoomLevel=Component.UNDEFINED, smoothWheelZoom=Component.UNDEFINED, scaleControl=Component.UNDEFINED, scaleControlOptions=Component.UNDEFINED, maxBounds=Component.UNDEFINED, editToolbar=Component.UNDEFINED, editToolbarControlsOptions=Component.UNDEFINED, showMeasurements=Component.UNDEFINED, maxDrawnShapes=Component.UNDEFINED, measureControl=Component.UNDEFINED, measureControlOptions=Component.UNDEFINED, viewAutoCorrection=Component.UNDEFINED, _drawnShapes=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'className', 'style', 'center', 'crs', 'zoom', 'doubleClickZoom', 'dragging', 'closePopupOnClick', 'minZoom', 'maxZoom', 'zoomDelta', 'zoomControl', 'scrollWheelZoom', 'wheelPxPerZoomLevel', 'smoothWheelZoom', 'scaleControl', 'scaleControlOptions', 'maxBounds', 'editToolbar', 'editToolbarControlsOptions', 'showMeasurements', 'maxDrawnShapes', 'measureControl', 'measureControlOptions', 'viewAutoCorrection', '_drawnShapes', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'children', 'className', 'style', 'center', 'crs', 'zoom', 'doubleClickZoom', 'dragging', 'closePopupOnClick', 'minZoom', 'maxZoom', 'zoomDelta', 'zoomControl', 'scrollWheelZoom', 'wheelPxPerZoomLevel', 'smoothWheelZoom', 'scaleControl', 'scaleControlOptions', 'maxBounds', 'editToolbar', 'editToolbarControlsOptions', 'showMeasurements', 'maxDrawnShapes', 'measureControl', 'measureControlOptions', 'viewAutoCorrection', '_drawnShapes', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(LeafletMap, self).__init__(children=children, **args)
