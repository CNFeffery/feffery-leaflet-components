# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class LeafletMapListener(Component):
    """A LeafletMapListener component.
地图事件监听组件LeafletMapListener

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- _center (dict; optional):
    监听当前地图中心点坐标.

    `_center` is a dict with keys:

    - lng (number; optional):
        中心点经度.

    - lat (number; optional):
        中心点纬度.

- _zoom (number; optional):
    监听当前地图缩放级别.

- _clickedLatLng (dict; optional):
    监听地图鼠标点击事件.

    `_clickedLatLng` is a dict with keys:

    - lat (number; optional):
        点击位置对应纬度.

- _bounds (dict; optional):
    监听当前地图矩形区域坐标范围.

    `_bounds` is a dict with keys:

    - minx (number; optional):
        矩形区域最小经度.

    - miny (number; optional):
        矩形区域最小纬度.

    - maxx (number; optional):
        矩形区域最大经度.

    - maxy (number; optional):
        矩形区域最大纬度.

- debug (boolean; default False):
    是否开启调试模式，开启后浏览器控制台中将实时打印相关地图事件结果  默认值：`False`."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletMapListener'
    _center = TypedDict(
        "_center",
            {
            "lng": NotRequired[typing.Union[int, float, numbers.Number]],
            "lat": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    _clickedLatLng = TypedDict(
        "_clickedLatLng",
            {
            "lat": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    _bounds = TypedDict(
        "_bounds",
            {
            "minx": NotRequired[typing.Union[int, float, numbers.Number]],
            "miny": NotRequired[typing.Union[int, float, numbers.Number]],
            "maxx": NotRequired[typing.Union[int, float, numbers.Number]],
            "maxy": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        _center: typing.Optional["_center"] = None,
        _zoom: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        _clickedLatLng: typing.Optional["_clickedLatLng"] = None,
        _bounds: typing.Optional["_bounds"] = None,
        debug: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', '_center', '_zoom', '_clickedLatLng', '_bounds', 'debug']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', '_center', '_zoom', '_clickedLatLng', '_bounds', 'debug']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletMapListener, self).__init__(**args)
