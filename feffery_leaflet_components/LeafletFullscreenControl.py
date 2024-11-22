# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletFullscreenControl(Component):
    """A LeafletFullscreenControl component.
地图全屏化组件LeafletFullscreenControl

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional):
    全屏控件方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`.

- forceSeparateButton (boolean; optional):
    控件按钮是否强制脱离于地图缩放控件  默认值：`False`.

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
    _type = 'LeafletFullscreenControl'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, position=Component.UNDEFINED, forceSeparateButton=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'position', 'forceSeparateButton', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'position', 'forceSeparateButton', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletFullscreenControl, self).__init__(**args)
