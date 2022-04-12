# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletGeoJSON(Component):
    """A LeafletGeoJSON component.


Keyword arguments:

- id (string; optional)

- _clickedFeature (dict; optional)

- _hoveredFeature (dict; optional)

- className (string; optional)

- clickFeatureZoom (boolean; default False)

- data (dict; optional)

- defaultStyle (optional)

- editable (boolean; default False)

- featureIdField (string; default 'id')

- featureStyleParams (dict; optional)

    `featureStyleParams` is a dict with keys:

    - bins (list of list of numberss; optional)

    - closed (a value equal to: 'left', 'right'; optional)

    - styles (list; optional)

- featureValueField (string; default 'value')

- fitBounds (boolean; default True)

- hoverStyle (optional)

- hoverable (boolean; default False)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- mode (a value equal to: 'default', 'selectable', 'choropleth'; default 'default')

- selectMode (a value equal to: 'single', 'multiple'; default 'single')

- selectedFeatureIds (list; optional)

- selectedStyle (optional)

- style (dict | string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, hoverable=Component.UNDEFINED, defaultStyle=Component.UNDEFINED, hoverStyle=Component.UNDEFINED, selectedStyle=Component.UNDEFINED, data=Component.UNDEFINED, fitBounds=Component.UNDEFINED, clickFeatureZoom=Component.UNDEFINED, featureIdField=Component.UNDEFINED, featureValueField=Component.UNDEFINED, mode=Component.UNDEFINED, selectMode=Component.UNDEFINED, selectedFeatureIds=Component.UNDEFINED, featureStyleParams=Component.UNDEFINED, editable=Component.UNDEFINED, _clickedFeature=Component.UNDEFINED, _hoveredFeature=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', '_clickedFeature', '_hoveredFeature', 'className', 'clickFeatureZoom', 'data', 'defaultStyle', 'editable', 'featureIdField', 'featureStyleParams', 'featureValueField', 'fitBounds', 'hoverStyle', 'hoverable', 'loading_state', 'mode', 'selectMode', 'selectedFeatureIds', 'selectedStyle', 'style']
        self._type = 'LeafletGeoJSON'
        self._namespace = 'feffery_leaflet_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', '_clickedFeature', '_hoveredFeature', 'className', 'clickFeatureZoom', 'data', 'defaultStyle', 'editable', 'featureIdField', 'featureStyleParams', 'featureValueField', 'fitBounds', 'hoverStyle', 'hoverable', 'loading_state', 'mode', 'selectMode', 'selectedFeatureIds', 'selectedStyle', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LeafletGeoJSON, self).__init__(**args)
