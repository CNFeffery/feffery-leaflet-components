# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletFeatureGroup(Component):
    """A LeafletFeatureGroup component.


Keyword arguments:

- id (string; optional)

- key (string; optional):
    强制刷新用.

- children (a list of or a singular dash component, string or number; optional)

- bringToFront (boolean; default False)

- zIndex (number; optional)

- _bounds (dict; optional)

    `_bounds` is a dict with keys:

    - minx (number; optional)

    - miny (number; optional)

    - maxx (number; optional)

    - maxy (number; optional)

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
    _type = 'LeafletFeatureGroup'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, bringToFront=Component.UNDEFINED, zIndex=Component.UNDEFINED, _bounds=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'bringToFront', 'zIndex', '_bounds', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'children', 'bringToFront', 'zIndex', '_bounds', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(LeafletFeatureGroup, self).__init__(children=children, **args)
