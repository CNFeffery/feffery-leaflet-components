# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletMapListener(Component):
    """A LeafletMapListener component.


Keyword arguments:

- id (string; optional)

- _bounds (dict; optional)

    `_bounds` is a dict with keys:

    - minx (number; optional)

    - miny (number; optional)

    - maxx (number; optional)

    - maxy (number; optional)

- _center (dict; optional)

    `_center` is a dict with keys:

    - lng (number; optional)

    - lat (number; optional)

- _clickedLatLng (dict; optional)

    `_clickedLatLng` is a dict with keys:

    - lng (number; optional)

    - lat (number; optional)

- _zoom (number; optional)

- debug (boolean; default False)

- key (string; optional):
    强制刷新用.

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
    _type = 'LeafletMapListener'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, _center=Component.UNDEFINED, _zoom=Component.UNDEFINED, _clickedLatLng=Component.UNDEFINED, _bounds=Component.UNDEFINED, debug=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', '_bounds', '_center', '_clickedLatLng', '_zoom', 'debug', 'key', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', '_bounds', '_center', '_clickedLatLng', '_zoom', 'debug', 'key', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletMapListener, self).__init__(**args)
