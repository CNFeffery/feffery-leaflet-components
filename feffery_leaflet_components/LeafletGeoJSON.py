# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletGeoJSON(Component):
    """A LeafletGeoJSON component.


Keyword arguments:

- id (string; optional)

- _clickedFeature (dict; optional)

- _hoveredFeature (dict; optional)

- clickFeatureZoom (boolean; default False)

- data (dict; optional)

- defaultStyle (optional)

- disableClickSelect (boolean; default False)

- featureCategoryField (string; default 'category')

- featureCategoryToStyles (dict with strings as keys and values of type ; optional)

- featureIdField (string; default 'id')

- featureTooltipField (string; default 'tooltip')

- featureValueField (string; default 'value')

- featureValueToStyles (dict; optional)

    `featureValueToStyles` is a dict with keys:

    - bins (list of list of numberss; optional)

    - closed (a value equal to: 'left', 'right'; optional)

    - styles (list; optional)

- fitBounds (boolean; default True)

- hoverStyle (optional)

- hoverable (boolean; default False)

- key (string; optional)

- lassoButtonPosition (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; default 'topleft')

- lassoResetSelectedFeatureIds (boolean; default False)

- lassoSelect (boolean; default False)

- lassoStyle (optional)

- lassoType (a value equal to: 'contain', 'intersect'; default 'intersect')

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- mode (a value equal to: 'default', 'selectable', 'choropleth', 'category'; default 'default')

- selectMode (a value equal to: 'single', 'multiple'; default 'single')

- selectedFeatureIds (list; optional)

- selectedStyle (optional)

- showTooltip (boolean; default True)

- tooltipSticky (boolean; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletGeoJSON'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, data=Component.UNDEFINED, mode=Component.UNDEFINED, hoverable=Component.UNDEFINED, defaultStyle=Component.UNDEFINED, hoverStyle=Component.UNDEFINED, selectedStyle=Component.UNDEFINED, fitBounds=Component.UNDEFINED, clickFeatureZoom=Component.UNDEFINED, showTooltip=Component.UNDEFINED, featureIdField=Component.UNDEFINED, featureValueField=Component.UNDEFINED, featureCategoryField=Component.UNDEFINED, featureTooltipField=Component.UNDEFINED, selectMode=Component.UNDEFINED, disableClickSelect=Component.UNDEFINED, selectedFeatureIds=Component.UNDEFINED, featureValueToStyles=Component.UNDEFINED, featureCategoryToStyles=Component.UNDEFINED, tooltipSticky=Component.UNDEFINED, _clickedFeature=Component.UNDEFINED, _hoveredFeature=Component.UNDEFINED, lassoSelect=Component.UNDEFINED, lassoType=Component.UNDEFINED, lassoResetSelectedFeatureIds=Component.UNDEFINED, lassoButtonPosition=Component.UNDEFINED, lassoStyle=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', '_clickedFeature', '_hoveredFeature', 'clickFeatureZoom', 'data', 'defaultStyle', 'disableClickSelect', 'featureCategoryField', 'featureCategoryToStyles', 'featureIdField', 'featureTooltipField', 'featureValueField', 'featureValueToStyles', 'fitBounds', 'hoverStyle', 'hoverable', 'key', 'lassoButtonPosition', 'lassoResetSelectedFeatureIds', 'lassoSelect', 'lassoStyle', 'lassoType', 'loading_state', 'mode', 'selectMode', 'selectedFeatureIds', 'selectedStyle', 'showTooltip', 'tooltipSticky']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', '_clickedFeature', '_hoveredFeature', 'clickFeatureZoom', 'data', 'defaultStyle', 'disableClickSelect', 'featureCategoryField', 'featureCategoryToStyles', 'featureIdField', 'featureTooltipField', 'featureValueField', 'featureValueToStyles', 'fitBounds', 'hoverStyle', 'hoverable', 'key', 'lassoButtonPosition', 'lassoResetSelectedFeatureIds', 'lassoSelect', 'lassoStyle', 'lassoType', 'loading_state', 'mode', 'selectMode', 'selectedFeatureIds', 'selectedStyle', 'showTooltip', 'tooltipSticky']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LeafletGeoJSON, self).__init__(**args)
