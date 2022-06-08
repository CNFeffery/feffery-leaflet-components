# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletCircleMarker(Component):
    """A LeafletCircleMarker component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- center (dict; required)

    `center` is a dict with keys:

    - lat (number; optional)

    - lng (number; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- pathOptions (optional)

- radius (number; default 10)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, center=Component.REQUIRED, radius=Component.UNDEFINED, pathOptions=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'center', 'loading_state', 'pathOptions', 'radius']
        self._type = 'LeafletCircleMarker'
        self._namespace = 'feffery_leaflet_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'center', 'loading_state', 'pathOptions', 'radius']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['center']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LeafletCircleMarker, self).__init__(children=children, **args)
