# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletPopup(Component):
    """A LeafletPopup component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- className (string; optional)

- closeButton (boolean; optional)

- closeOnClick (boolean; optional)

- closeOnEscapeKey (boolean; optional)

- keepInView (boolean; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- maxHeight (number; optional)

- maxWidth (number; optional)

- minWidth (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletPopup'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, className=Component.UNDEFINED, minWidth=Component.UNDEFINED, maxWidth=Component.UNDEFINED, maxHeight=Component.UNDEFINED, keepInView=Component.UNDEFINED, closeButton=Component.UNDEFINED, closeOnEscapeKey=Component.UNDEFINED, closeOnClick=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'closeButton', 'closeOnClick', 'closeOnEscapeKey', 'keepInView', 'key', 'loading_state', 'maxHeight', 'maxWidth', 'minWidth']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'closeButton', 'closeOnClick', 'closeOnEscapeKey', 'keepInView', 'key', 'loading_state', 'maxHeight', 'maxWidth', 'minWidth']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LeafletPopup, self).__init__(children=children, **args)
