# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletMiniMap(Component):
    """A LeafletMiniMap component.


Keyword arguments:

- id (string; optional)

- aimingRectOptions (optional)

- attribution (string; optional)

- autoToggleDisplay (boolean; optional)

- collapsedHeight (number; optional)

- collapsedWidth (number; optional)

- height (number; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- maxZoom (number; optional)

- minZoom (number; optional)

- minimized (boolean; optional)

- opacity (number; default 1)

- position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional)

- shadowRectOptions (optional)

- toggleDisplay (boolean; optional)

- url (string; default "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")

- width (number; optional)

- zIndex (number; optional)

- zoomAnimation (boolean; optional)

- zoomLevelFixed (number; optional)

- zoomLevelOffset (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletMiniMap'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, url=Component.UNDEFINED, attribution=Component.UNDEFINED, opacity=Component.UNDEFINED, zIndex=Component.UNDEFINED, minZoom=Component.UNDEFINED, maxZoom=Component.UNDEFINED, position=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, collapsedWidth=Component.UNDEFINED, collapsedHeight=Component.UNDEFINED, zoomLevelOffset=Component.UNDEFINED, zoomLevelFixed=Component.UNDEFINED, zoomAnimation=Component.UNDEFINED, toggleDisplay=Component.UNDEFINED, autoToggleDisplay=Component.UNDEFINED, aimingRectOptions=Component.UNDEFINED, shadowRectOptions=Component.UNDEFINED, minimized=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'aimingRectOptions', 'attribution', 'autoToggleDisplay', 'collapsedHeight', 'collapsedWidth', 'height', 'key', 'loading_state', 'maxZoom', 'minZoom', 'minimized', 'opacity', 'position', 'shadowRectOptions', 'toggleDisplay', 'url', 'width', 'zIndex', 'zoomAnimation', 'zoomLevelFixed', 'zoomLevelOffset']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'aimingRectOptions', 'attribution', 'autoToggleDisplay', 'collapsedHeight', 'collapsedWidth', 'height', 'key', 'loading_state', 'maxZoom', 'minZoom', 'minimized', 'opacity', 'position', 'shadowRectOptions', 'toggleDisplay', 'url', 'width', 'zIndex', 'zoomAnimation', 'zoomLevelFixed', 'zoomLevelOffset']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LeafletMiniMap, self).__init__(**args)
