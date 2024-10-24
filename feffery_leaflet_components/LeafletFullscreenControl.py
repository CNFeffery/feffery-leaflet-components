# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletFullscreenControl(Component):
    """A LeafletFullscreenControl component.


Keyword arguments:

- id (string; optional)

- key (string; optional):
    强制刷新用.

- position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional)

- forceSeparateButton (boolean; optional)

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
    _type = 'LeafletFullscreenControl'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, position=Component.UNDEFINED, forceSeparateButton=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'position', 'forceSeparateButton', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'position', 'forceSeparateButton', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletFullscreenControl, self).__init__(**args)
