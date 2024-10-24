# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletMiniMap(Component):
    """A LeafletMiniMap component.


Keyword arguments:

- id (string; optional)

- key (string; optional):
    强制刷新用.

- url (string; default "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")

- attribution (string; optional)

- opacity (number; default 1)

- zIndex (number; optional)

- minZoom (number; optional)

- maxZoom (number; optional)

- position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional)

- width (number; optional)

- height (number; optional)

- collapsedWidth (number; optional)

- collapsedHeight (number; optional)

- zoomLevelOffset (number; optional)

- zoomLevelFixed (number; optional)

- zoomAnimation (boolean; optional)

- toggleDisplay (boolean; optional)

- autoToggleDisplay (boolean; optional)

- aimingRectOptions (optional)

- shadowRectOptions (optional)

- minimized (boolean; optional)

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
    _type = 'LeafletMiniMap'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, url=Component.UNDEFINED, attribution=Component.UNDEFINED, opacity=Component.UNDEFINED, zIndex=Component.UNDEFINED, minZoom=Component.UNDEFINED, maxZoom=Component.UNDEFINED, position=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, collapsedWidth=Component.UNDEFINED, collapsedHeight=Component.UNDEFINED, zoomLevelOffset=Component.UNDEFINED, zoomLevelFixed=Component.UNDEFINED, zoomAnimation=Component.UNDEFINED, toggleDisplay=Component.UNDEFINED, autoToggleDisplay=Component.UNDEFINED, aimingRectOptions=Component.UNDEFINED, shadowRectOptions=Component.UNDEFINED, minimized=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'url', 'attribution', 'opacity', 'zIndex', 'minZoom', 'maxZoom', 'position', 'width', 'height', 'collapsedWidth', 'collapsedHeight', 'zoomLevelOffset', 'zoomLevelFixed', 'zoomAnimation', 'toggleDisplay', 'autoToggleDisplay', 'aimingRectOptions', 'shadowRectOptions', 'minimized', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'url', 'attribution', 'opacity', 'zIndex', 'minZoom', 'maxZoom', 'position', 'width', 'height', 'collapsedWidth', 'collapsedHeight', 'zoomLevelOffset', 'zoomLevelFixed', 'zoomAnimation', 'toggleDisplay', 'autoToggleDisplay', 'aimingRectOptions', 'shadowRectOptions', 'minimized', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletMiniMap, self).__init__(**args)
