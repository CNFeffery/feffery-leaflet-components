# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletAntPath(Component):
    """A LeafletAntPath component.


Keyword arguments:

- id (string; optional)

- key (string; optional):
    强制刷新用.

- positions (list of dicts; required)

    `positions` is a list of dicts with keys:

    - lng (number; optional)

    - lat (number; optional) | list of list of dicts with keys:

    - lng (number; optional)

    - lat (number; optional)s

- pathOptions (optional)

- paused (boolean; optional)

- reverse (boolean; optional)

- hardwareAccelerated (boolean; optional)

- pulseColor (string; optional)

- delay (number; optional)

- dashArray (string; optional)

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
    _type = 'LeafletAntPath'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, positions=Component.REQUIRED, pathOptions=Component.UNDEFINED, paused=Component.UNDEFINED, reverse=Component.UNDEFINED, hardwareAccelerated=Component.UNDEFINED, pulseColor=Component.UNDEFINED, delay=Component.UNDEFINED, dashArray=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'positions', 'pathOptions', 'paused', 'reverse', 'hardwareAccelerated', 'pulseColor', 'delay', 'dashArray', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'positions', 'pathOptions', 'paused', 'reverse', 'hardwareAccelerated', 'pulseColor', 'delay', 'dashArray', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['positions']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletAntPath, self).__init__(**args)
