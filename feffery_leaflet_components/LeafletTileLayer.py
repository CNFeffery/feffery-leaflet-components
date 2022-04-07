# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletTileLayer(Component):
    """A LeafletTileLayer component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- attribution (string; optional)

- className (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- opacity (number; default 1)

- style (dict; optional)

- url (string; default "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, url=Component.UNDEFINED, attribution=Component.UNDEFINED, opacity=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'attribution', 'className', 'loading_state', 'opacity', 'style', 'url']
        self._type = 'LeafletTileLayer'
        self._namespace = 'feffery_leaflet_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'attribution', 'className', 'loading_state', 'opacity', 'style', 'url']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LeafletTileLayer, self).__init__(children=children, **args)
