# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletCircleMarker(Component):
    """A LeafletCircleMarker component.


Keyword arguments:

- id (string; optional)

- key (string; optional):
    强制刷新用.

- className (string; optional):
    为当前矢量设置className.

- children (a list of or a singular dash component, string or number; optional)

- center (dict; required)

    `center` is a dict with keys:

    - lng (number; optional)

    - lat (number; optional)

- radius (number; default 10)

- pathOptions (optional)

- editable (boolean; default False)

- nClicks (number; default 0)

- mouseOverCount (number; default 0)

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
    _type = 'LeafletCircleMarker'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, className=Component.UNDEFINED, center=Component.REQUIRED, radius=Component.UNDEFINED, pathOptions=Component.UNDEFINED, editable=Component.UNDEFINED, nClicks=Component.UNDEFINED, mouseOverCount=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'className', 'children', 'center', 'radius', 'pathOptions', 'editable', 'nClicks', 'mouseOverCount', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'className', 'children', 'center', 'radius', 'pathOptions', 'editable', 'nClicks', 'mouseOverCount', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['center']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletCircleMarker, self).__init__(children=children, **args)
