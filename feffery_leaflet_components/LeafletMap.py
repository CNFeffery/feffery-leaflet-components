# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletMap(Component):
    """A LeafletMap component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- _drawnShapes (list; optional)

- center (dict; default { lng: 0, lat: 0 })

    `center` is a dict with keys:

    - lat (number; optional)

    - lng (number; optional)

- className (string; optional)

- closePopupOnClick (boolean; default True)

- doubleClickZoom (boolean; default True)

- dragging (boolean; default True)

- editToolbar (boolean; default False)

- editToolbarControlsOptions (dict; optional)

    `editToolbarControlsOptions` is a dict with keys:

    - cutPolygon (boolean; optional)

    - dragMode (boolean; optional)

    - drawCircle (boolean; optional)

    - drawCircleMarker (boolean; optional)

    - drawMarker (boolean; optional)

    - drawPolygon (boolean; optional)

    - drawPolyline (boolean; optional)

    - drawRectangle (boolean; optional)

    - drawText (boolean; optional)

    - editMode (boolean; optional)

    - oneBlock (boolean; optional)

    - position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional)

    - removalMode (boolean; optional)

    - rotateMode (boolean; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- maxBounds (dict; optional)

    `maxBounds` is a dict with keys:

    - maxx (number; optional)

    - maxy (number; optional)

    - minx (number; optional)

    - miny (number; optional)

- maxDrawnShapes (number; optional)

- maxZoom (number; default 18)

- measureControl (boolean; default False)

- measureControlOptions (dict; optional)

    `measureControlOptions` is a dict with keys:

    - activeColor (string; optional)

    - completedColor (string; optional)

    - position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional)

- minZoom (number; default 0)

- scrollWheelZoom (boolean | a value equal to: 'center'; default True)

- showMeasurements (boolean; default False)

- smoothWheelZoom (boolean | a value equal to: 'center'; default False)

- style (dict; optional)

- viewAutoCorrection (boolean; default False)

- wheelPxPerZoomLevel (number; default 60)

- zoom (number; default 3)

- zoomControl (boolean; default True)

- zoomDelta (number; default 1)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletMap'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, center=Component.UNDEFINED, zoom=Component.UNDEFINED, doubleClickZoom=Component.UNDEFINED, dragging=Component.UNDEFINED, closePopupOnClick=Component.UNDEFINED, minZoom=Component.UNDEFINED, maxZoom=Component.UNDEFINED, zoomDelta=Component.UNDEFINED, zoomControl=Component.UNDEFINED, scrollWheelZoom=Component.UNDEFINED, wheelPxPerZoomLevel=Component.UNDEFINED, smoothWheelZoom=Component.UNDEFINED, maxBounds=Component.UNDEFINED, editToolbar=Component.UNDEFINED, editToolbarControlsOptions=Component.UNDEFINED, showMeasurements=Component.UNDEFINED, maxDrawnShapes=Component.UNDEFINED, measureControl=Component.UNDEFINED, measureControlOptions=Component.UNDEFINED, viewAutoCorrection=Component.UNDEFINED, _drawnShapes=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', '_drawnShapes', 'center', 'className', 'closePopupOnClick', 'doubleClickZoom', 'dragging', 'editToolbar', 'editToolbarControlsOptions', 'key', 'loading_state', 'maxBounds', 'maxDrawnShapes', 'maxZoom', 'measureControl', 'measureControlOptions', 'minZoom', 'scrollWheelZoom', 'showMeasurements', 'smoothWheelZoom', 'style', 'viewAutoCorrection', 'wheelPxPerZoomLevel', 'zoom', 'zoomControl', 'zoomDelta']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', '_drawnShapes', 'center', 'className', 'closePopupOnClick', 'doubleClickZoom', 'dragging', 'editToolbar', 'editToolbarControlsOptions', 'key', 'loading_state', 'maxBounds', 'maxDrawnShapes', 'maxZoom', 'measureControl', 'measureControlOptions', 'minZoom', 'scrollWheelZoom', 'showMeasurements', 'smoothWheelZoom', 'style', 'viewAutoCorrection', 'wheelPxPerZoomLevel', 'zoom', 'zoomControl', 'zoomDelta']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(LeafletMap, self).__init__(children=children, **args)
