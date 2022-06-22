# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletMarker(Component):
    """A LeafletMarker component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- autoPan (boolean; optional)

- draggable (boolean; optional)

- editable (boolean; default False)

- iconOptions (dict; optional)

    `iconOptions` is a dict with keys:

    - className (string; optional)

    - iconAnchor (list of numbers; optional)

    - iconSize (list of numbers; optional)

    - iconUrl (string; optional)

    - popupAnchor (list of numbers; optional)

    - shadowAnchor (list of numbers; optional)

    - shadowSize (list of numbers; optional)

    - shadowUrl (string; optional)

    - tooltipAnchor (list of numbers; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- opacity (number; optional)

- position (dict; required)

    `position` is a dict with keys:

    - lat (number; optional)

    - lng (number; optional)

- riseOnHover (boolean; optional)

- zIndexOffset (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletMarker'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, position=Component.REQUIRED, draggable=Component.UNDEFINED, iconOptions=Component.UNDEFINED, opacity=Component.UNDEFINED, editable=Component.UNDEFINED, zIndexOffset=Component.UNDEFINED, riseOnHover=Component.UNDEFINED, autoPan=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'autoPan', 'draggable', 'editable', 'iconOptions', 'loading_state', 'opacity', 'position', 'riseOnHover', 'zIndexOffset']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'autoPan', 'draggable', 'editable', 'iconOptions', 'loading_state', 'opacity', 'position', 'riseOnHover', 'zIndexOffset']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['position']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LeafletMarker, self).__init__(children=children, **args)
