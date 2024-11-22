# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletMapAction(Component):
    """A LeafletMapAction component.
地图动作组件LeafletMapAction

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- mapActionConfig (dict; optional):
    编排触发新的地图动作.

    `mapActionConfig` is a dict with keys:

    - type (a value equal to: 'set-zoom', 'zoom-in', 'zoom-out', 'set-view', 'pan-to', 'fly-to', 'fly-to-bounds', 'invalidate-size'; optional):
        地图动作类型，可选项有`'set-zoom'`、`'zoom-in'`、`'zoom-out'`、`'set-view'`、`'pan-to'`、`'fly-to'`、`'fly-to-bounds'`、`'invalidate-size'`，其中
        `'set-zoom'`模式用于更新地图缩放级别；  `'zoom-in'`用于在当前地图缩放级别基础上，放大设定的级别；
        `'zoom-out'`用于在当前地图缩放级别基础上，缩小设定的级别;  `'set-view'`用于更新地图视角；
        `'pan-to'`用于移动地图中心点位置；  `'fly-to'`用于以飞行动画模式更新地图视角;
        `'fly-to-bounds'`用于以飞行动画模式令地图视角自适应目标矩形区域范围;
        `'invalidate-size'`用于手动刷新矫正地图视角；.

    - center (dict; optional):
        地图动作目标中心点坐标，适用的地图动作类型：`'set-view'`、`'pan-to'`、`'fly-to'`.

        `center` is a dict with keys:

        - lng (number; optional):
            目标中心点经度.

        - lat (number; optional):
            目标中心点纬度.

    - zoom (number; optional):
        地图动作目标缩放级别，若不设置，相关地图动作动画过程将不会改变地图缩放级别，适用的地图动作类型：`'set-zoom'`、`'set-view'`、`'fly-to'`.

    - zoomInOffset (number; optional):
        地图动作目标放大层级单位数量，适用的地图动作类型：`'zoom-in'`.

    - zoomOutOffset (number; optional):
        地图动作目标缩小层级单位数量，适用的地图动作类型：`'zoom-out'`.

    - bounds (dict; optional):
        地图动作目标矩形范围坐标，适用的地图动作类型：`'fly-to-bounds'`.

        `bounds` is a dict with keys:

        - minx (number; optional):
            目标矩形区域最小经度.

        - miny (number; optional):
            目标矩形区域最小纬度.

        - maxx (number; optional):
            目标矩形区域最大经度.

        - maxy (number; optional):
            目标矩形区域最大纬度.

    - flyToDuration (a value equal to: 'instant', 'fast', 'normal', 'slow', 'auto'; optional):
        地图飞行类动画对应过渡时长，单位：秒，适用的地图动作类型：`'fly-to'`、`'fly-to-bounds'`.

    - delay (number; optional):
        地图动作目标执行延时，单位：毫秒  默认值：`0`.

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
    _type = 'LeafletMapAction'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, mapActionConfig=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'mapActionConfig', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'mapActionConfig', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletMapAction, self).__init__(**args)
