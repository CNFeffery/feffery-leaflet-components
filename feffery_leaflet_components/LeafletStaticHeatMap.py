# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletStaticHeatMap(Component):
    """A LeafletStaticHeatMap component.


Keyword arguments:

- id (string; optional)

- alphaRange (number; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- multiplyFactor (number; optional)

- opacity (number; optional)

- points (list of dicts; optional)

    `points` is a list of dicts with keys:

    - lat (number; optional)

    - lng (number; optional)

    - weight (number; optional)

- size (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletStaticHeatMap'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, points=Component.UNDEFINED, multiplyFactor=Component.UNDEFINED, size=Component.UNDEFINED, opacity=Component.UNDEFINED, alphaRange=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'alphaRange', 'loading_state', 'multiplyFactor', 'opacity', 'points', 'size']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'alphaRange', 'loading_state', 'multiplyFactor', 'opacity', 'points', 'size']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LeafletStaticHeatMap, self).__init__(**args)
