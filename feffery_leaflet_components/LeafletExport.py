# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletExport(Component):
    """A LeafletExport component.


Keyword arguments:

- id (string; optional)

- customSize (dict; optional)

    `customSize` is a dict with keys:

    - height (number; optional)

    - width (number; optional)

- customSizeTooltip (string; optional)

- filename (string; default 'map')

- hideControlContainer (boolean; optional)

- key (string; optional):
    强制刷新用.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional)

- tileWait (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletExport'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, position=Component.UNDEFINED, tileWait=Component.UNDEFINED, filename=Component.UNDEFINED, hideControlContainer=Component.UNDEFINED, customSizeTooltip=Component.UNDEFINED, customSize=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'customSize', 'customSizeTooltip', 'filename', 'hideControlContainer', 'key', 'loading_state', 'position', 'tileWait']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'customSize', 'customSizeTooltip', 'filename', 'hideControlContainer', 'key', 'loading_state', 'position', 'tileWait']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletExport, self).__init__(**args)
