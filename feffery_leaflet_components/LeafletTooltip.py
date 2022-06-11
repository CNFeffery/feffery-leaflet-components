# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletTooltip(Component):
    """A LeafletTooltip component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- bubblingMouseEvents (boolean; optional)

- direction (a value equal to: 'right', 'left', 'top', 'bottom', 'center', 'auto'; optional)

- interactive (boolean; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- permanent (boolean; optional)

- position (dict; optional)

    `position` is a dict with keys:

    - lat (number; optional)

    - lng (number; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, position=Component.UNDEFINED, direction=Component.UNDEFINED, permanent=Component.UNDEFINED, bubblingMouseEvents=Component.UNDEFINED, interactive=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'bubblingMouseEvents', 'direction', 'interactive', 'loading_state', 'permanent', 'position']
        self._type = 'LeafletTooltip'
        self._namespace = 'feffery_leaflet_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'bubblingMouseEvents', 'direction', 'interactive', 'loading_state', 'permanent', 'position']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LeafletTooltip, self).__init__(children=children, **args)
