# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletSuperCluster(Component):
    """A LeafletSuperCluster component.


Keyword arguments:

- id (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- positions (list of dicts; required)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletSuperCluster'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, positions=Component.REQUIRED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'loading_state', 'positions']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'loading_state', 'positions']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['positions']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LeafletSuperCluster, self).__init__(**args)
