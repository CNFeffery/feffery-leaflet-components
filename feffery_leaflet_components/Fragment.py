# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Fragment(Component):
    """A Fragment component.


Keyword arguments:

- id (optional)

- key (optional)

- loading_state (optional)

- setProps (optional):
    Dash-assigned callback that should be called to report property
    changes  to Dash, to make them available for callbacks."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'Fragment'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'loading_state', 'setProps']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'loading_state', 'setProps']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(Fragment, self).__init__(**args)
