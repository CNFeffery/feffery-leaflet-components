# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


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
        地图动作目标执行延时，单位：毫秒  默认值：`0`."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletMapAction'
    MapActionConfigCenter = TypedDict(
        "MapActionConfigCenter",
            {
            "lng": NotRequired[typing.Union[int, float, numbers.Number]],
            "lat": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    MapActionConfigBounds = TypedDict(
        "MapActionConfigBounds",
            {
            "minx": NotRequired[typing.Union[int, float, numbers.Number]],
            "miny": NotRequired[typing.Union[int, float, numbers.Number]],
            "maxx": NotRequired[typing.Union[int, float, numbers.Number]],
            "maxy": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    MapActionConfig = TypedDict(
        "MapActionConfig",
            {
            "type": NotRequired[Literal["set-zoom", "zoom-in", "zoom-out", "set-view", "pan-to", "fly-to", "fly-to-bounds", "invalidate-size"]],
            "center": NotRequired["MapActionConfigCenter"],
            "zoom": NotRequired[typing.Union[int, float, numbers.Number]],
            "zoomInOffset": NotRequired[typing.Union[int, float, numbers.Number]],
            "zoomOutOffset": NotRequired[typing.Union[int, float, numbers.Number]],
            "bounds": NotRequired["MapActionConfigBounds"],
            "flyToDuration": NotRequired[Literal["instant", "fast", "normal", "slow", "auto"]],
            "delay": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[str] = None,
        key: typing.Optional[str] = None,
        mapActionConfig: typing.Optional["MapActionConfig"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'mapActionConfig']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'mapActionConfig']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletMapAction, self).__init__(**args)
