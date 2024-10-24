# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletGeoJSON(Component):
    """A LeafletGeoJSON component.


Keyword arguments:

- id (string; optional)

- key (string; optional):
    强制刷新用.

- data (dict; required)

- mode (a value equal to: 'default', 'selectable', 'choropleth', 'category'; default 'default')

- hoverable (boolean; default False)

- defaultStyle (optional)

- hoverStyle (optional)

- selectedStyle (optional)

- fitBounds (boolean; default True)

- fitBoundsOptions (dict; optional)

    `fitBoundsOptions` is a dict with keys:

    - maxZoom (number; optional):
        执行fitBounds动作后的地图最大缩放级别.

    - animate (boolean; optional):
        fitBounds过程是否开启动画.

    - duration (number; optional):
        对于开启过渡动画效果的gitBounds动作，设置动画持续时长，单位：秒  默认：0.25.

    - padding (list of numbers; optional):
        为fitBounds动作调整后的视角，设置四周额外的像素大小留白空间，格式如[上下留白, 左右留白].

- clickFeatureZoom (boolean; default False)

- showTooltip (boolean; default False)

- featureIdField (string; default 'id')

- featureValueField (string; default 'value')

- featureCategoryField (string; default 'category')

- featureTooltipField (string; default 'tooltip')

- selectMode (a value equal to: 'single', 'multiple'; default 'single')

- disableClickSelect (boolean; default False)

- selectedFeatureIds (list; optional)

- featureValueToStyles (dict; optional)

    `featureValueToStyles` is a dict with keys:

    - bins (list of list of numberss; optional)

    - styles (list; optional)

    - closed (a value equal to: 'left', 'right'; optional)

- featureCategoryToStyles (dict with strings as keys and values of type ; optional)

- tooltipDirection (a value equal to: 'right', 'left', 'top', 'bottom', 'center', 'auto'; default 'auto')

- tooltipPermanent (boolean; default False)

- tooltipSticky (boolean; optional)

- tooltipClassName (string; optional)

- lassoSelect (boolean; default False)

- lassoType (a value equal to: 'contain', 'intersect'; default 'intersect')

- lassoResetSelectedFeatureIds (boolean; default False)

- lassoButtonPosition (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; default 'topleft')

- lassoStyle (optional)

- pointRenderMode (a value equal to: 'marker', 'circle-marker'; default 'circle-marker')

- circleMarkerRadius (number; default 10)

- _clickedFeature (dict; optional)

- _hoveredFeature (dict; optional)

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
    _type = 'LeafletGeoJSON'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, data=Component.REQUIRED, mode=Component.UNDEFINED, hoverable=Component.UNDEFINED, defaultStyle=Component.UNDEFINED, hoverStyle=Component.UNDEFINED, selectedStyle=Component.UNDEFINED, fitBounds=Component.UNDEFINED, fitBoundsOptions=Component.UNDEFINED, clickFeatureZoom=Component.UNDEFINED, showTooltip=Component.UNDEFINED, featureIdField=Component.UNDEFINED, featureValueField=Component.UNDEFINED, featureCategoryField=Component.UNDEFINED, featureTooltipField=Component.UNDEFINED, selectMode=Component.UNDEFINED, disableClickSelect=Component.UNDEFINED, selectedFeatureIds=Component.UNDEFINED, featureValueToStyles=Component.UNDEFINED, featureCategoryToStyles=Component.UNDEFINED, tooltipDirection=Component.UNDEFINED, tooltipPermanent=Component.UNDEFINED, tooltipSticky=Component.UNDEFINED, tooltipClassName=Component.UNDEFINED, lassoSelect=Component.UNDEFINED, lassoType=Component.UNDEFINED, lassoResetSelectedFeatureIds=Component.UNDEFINED, lassoButtonPosition=Component.UNDEFINED, lassoStyle=Component.UNDEFINED, pointRenderMode=Component.UNDEFINED, circleMarkerRadius=Component.UNDEFINED, _clickedFeature=Component.UNDEFINED, _hoveredFeature=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'data', 'mode', 'hoverable', 'defaultStyle', 'hoverStyle', 'selectedStyle', 'fitBounds', 'fitBoundsOptions', 'clickFeatureZoom', 'showTooltip', 'featureIdField', 'featureValueField', 'featureCategoryField', 'featureTooltipField', 'selectMode', 'disableClickSelect', 'selectedFeatureIds', 'featureValueToStyles', 'featureCategoryToStyles', 'tooltipDirection', 'tooltipPermanent', 'tooltipSticky', 'tooltipClassName', 'lassoSelect', 'lassoType', 'lassoResetSelectedFeatureIds', 'lassoButtonPosition', 'lassoStyle', 'pointRenderMode', 'circleMarkerRadius', '_clickedFeature', '_hoveredFeature', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'data', 'mode', 'hoverable', 'defaultStyle', 'hoverStyle', 'selectedStyle', 'fitBounds', 'fitBoundsOptions', 'clickFeatureZoom', 'showTooltip', 'featureIdField', 'featureValueField', 'featureCategoryField', 'featureTooltipField', 'selectMode', 'disableClickSelect', 'selectedFeatureIds', 'featureValueToStyles', 'featureCategoryToStyles', 'tooltipDirection', 'tooltipPermanent', 'tooltipSticky', 'tooltipClassName', 'lassoSelect', 'lassoType', 'lassoResetSelectedFeatureIds', 'lassoButtonPosition', 'lassoStyle', 'pointRenderMode', 'circleMarkerRadius', '_clickedFeature', '_hoveredFeature', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['data']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletGeoJSON, self).__init__(**args)
