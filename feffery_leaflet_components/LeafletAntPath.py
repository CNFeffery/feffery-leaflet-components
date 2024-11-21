# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletAntPath(Component):
    """A LeafletAntPath component.
蚂蚁路径图层组件LeafletAntPath

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- positions (list of dicts; required):
    必填，定义折线坐标.

    `positions` is a list of dicts with keys:

    - lng (number; optional):
        经度.

    - lat (number; optional):
        纬度. | list of list of dicts with keys:

    - lng (number; optional):
        经度.

    - lat (number; optional):
        纬度.s

- pathOptions (optional):
    矢量样式配置参数.

- paused (boolean; optional):
    是否暂停蚂蚁路径动画  默认值：`False`.

- reverse (boolean; optional):
    是否翻转蚂蚁路径动画方向  默认值：`False`.

- hardwareAccelerated (boolean; optional):
    是否开启硬件加速  默认值：`False`.

- pulseColor (string; optional):
    折线分隔颜色  默认值：`'white'`.

- delay (number; optional):
    动画延迟，单位：毫秒.

- dashArray (string; optional):
    折线分段格式  默认值：`'10, 20'`.

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
    _type = 'LeafletAntPath'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, positions=Component.REQUIRED, pathOptions=Component.UNDEFINED, paused=Component.UNDEFINED, reverse=Component.UNDEFINED, hardwareAccelerated=Component.UNDEFINED, pulseColor=Component.UNDEFINED, delay=Component.UNDEFINED, dashArray=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'positions', 'pathOptions', 'paused', 'reverse', 'hardwareAccelerated', 'pulseColor', 'delay', 'dashArray', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'positions', 'pathOptions', 'paused', 'reverse', 'hardwareAccelerated', 'pulseColor', 'delay', 'dashArray', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['positions']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletAntPath, self).__init__(**args)
