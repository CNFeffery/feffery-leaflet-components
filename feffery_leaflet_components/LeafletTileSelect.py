# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletTileSelect(Component):
    """A LeafletTileSelect component.


Keyword arguments:

- id (string; optional)

- key (string; optional):
    强制刷新用.

- className (string; optional)

- style (dict; optional)

- containerClassName (string; optional)

- containerStyle (dict; optional)

- containerItemClassName (string; optional)

- containerItemStyle (dict; optional)

- urls (list of dicts; optional)

    `urls` is a list of dicts with keys:

    - url (string; optional)

- center (dict; default { lng: 0, lat: 0 })

    `center` is a dict with keys:

    - lng (number; optional)

    - lat (number; optional)

- zoom (number; default 3)

- selectedUrl (string; optional)

- containerVisible (boolean; default True)

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
    _type = 'LeafletTileSelect'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, containerClassName=Component.UNDEFINED, containerStyle=Component.UNDEFINED, containerItemClassName=Component.UNDEFINED, containerItemStyle=Component.UNDEFINED, urls=Component.UNDEFINED, center=Component.UNDEFINED, zoom=Component.UNDEFINED, selectedUrl=Component.UNDEFINED, containerVisible=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'className', 'style', 'containerClassName', 'containerStyle', 'containerItemClassName', 'containerItemStyle', 'urls', 'center', 'zoom', 'selectedUrl', 'containerVisible', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'className', 'style', 'containerClassName', 'containerStyle', 'containerItemClassName', 'containerItemStyle', 'urls', 'center', 'zoom', 'selectedUrl', 'containerVisible', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletTileSelect, self).__init__(**args)
