# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class EsriTiledMapLayer(Component):
    """An EsriTiledMapLayer component.
ESRI tiledMapLayer图层组件

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- url (string; optional):
    esri TileLayer地图服务地址.

- opacity (number; optional):
    当前图层透明度.

- zIndex (number; optional):
    当前图层`z`轴层级.

- zoomOffset (number; default 0):
    缩放级别偏移量  默认值：`0`.

- identifyConfig (dict; optional):
    配置触发要素标识操作，每次操作完成后会自动重置为空值.

    `identifyConfig` is a dict with keys:

    - position (dict; optional):
        标识位置坐标.

        `position` is a dict with keys:

        - lng (number; optional):
            标识位置经度.

        - lat (number; optional):
            标识位置纬度.

- identifyResult (dict; optional):
    监听标识查询结果.

- debug (boolean; default False):
    是否开启debug模式  默认值：`False`."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'EsriTiledMapLayer'
    IdentifyConfigPosition = TypedDict(
        "IdentifyConfigPosition",
            {
            "lng": NotRequired[typing.Union[int, float, numbers.Number]],
            "lat": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    IdentifyConfig = TypedDict(
        "IdentifyConfig",
            {
            "position": NotRequired["IdentifyConfigPosition"]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        url: typing.Optional[str] = None,
        opacity: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        zIndex: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        zoomOffset: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        identifyConfig: typing.Optional["IdentifyConfig"] = None,
        identifyResult: typing.Optional[dict] = None,
        debug: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'url', 'opacity', 'zIndex', 'zoomOffset', 'identifyConfig', 'identifyResult', 'debug']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'url', 'opacity', 'zIndex', 'zoomOffset', 'identifyConfig', 'identifyResult', 'debug']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(EsriTiledMapLayer, self).__init__(**args)
