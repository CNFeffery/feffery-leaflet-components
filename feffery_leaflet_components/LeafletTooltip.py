# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletTooltip(Component):
    """A LeafletTooltip component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- className (string; optional)

- direction (a value equal to: 'right', 'left', 'top', 'bottom', 'center', 'auto'; optional)

- interactive (boolean; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- opacity (number; optional)

- permanent (boolean; optional)

- sticky (boolean; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletTooltip'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, className=Component.UNDEFINED, direction=Component.UNDEFINED, permanent=Component.UNDEFINED, sticky=Component.UNDEFINED, opacity=Component.UNDEFINED, interactive=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'direction', 'interactive', 'key', 'loading_state', 'opacity', 'permanent', 'sticky']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'direction', 'interactive', 'key', 'loading_state', 'opacity', 'permanent', 'sticky']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LeafletTooltip, self).__init__(children=children, **args)
