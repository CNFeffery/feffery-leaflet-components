# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletMapSync(Component):
    """A LeafletMapSync component.


Keyword arguments:

- id (string; required):
    必填，组件id.

- key (string; optional):
    强制刷新用.

- groupId (string; optional):
    地图组id，用于限定地图同步行为发生在当前相同id的组内.

- syncStrategy (a value equal to: 'all', 'center'; default 'all'):
    同步行为策略，可选项有`'all'`、`'center'`  默认值：`'all'`.

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
    _type = 'LeafletMapSync'
    @_explicitize_args
    def __init__(self, id=Component.REQUIRED, key=Component.UNDEFINED, groupId=Component.UNDEFINED, syncStrategy=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'groupId', 'syncStrategy', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'groupId', 'syncStrategy', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletMapSync, self).__init__(**args)
