# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class LeafletTileLayer(Component):
    """A LeafletTileLayer component.
瓦片服务图层组件LeafletTileLayer

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- url (string; default "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"):
    地图服务地址，默认显示高德地图公共图层.

- attribution (string; optional):
    地图服务`attribution`属性.

- opacity (number; default 1):
    图层透明度  默认值：`1`.

- zIndex (number; optional):
    当前图层`z`轴顺序.

- tileSize (number; default 256):
    瓦片服务图片像素边长  默认值：`256`.

- minZoom (number; default 0):
    当前瓦片地图服务允许加载的最小缩放级别  默认值：`0`.

- maxZoom (number; default 18):
    当前瓦片地图服务允许加载的最大缩放级别  默认值：`18`.

- minNativeZoom (number; optional):
    瓦片地图服务可用的最小缩放级别。如果指定了该值，所有低于`minNativeZoom`的缩放级别上的瓦片将从最小原生缩放级别加载并自动缩放.

- maxNativeZoom (number; optional):
    瓦片地图服务可用的最大缩放级别。如果指定了该值，所有高于`maxNativeZoom`的缩放级别上的瓦片将从最大原生缩放级别加载并自动缩放.

- tms (boolean; default False):
    设置当前地图服务是否符合`tms`类型  默认值：`False`."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletTileLayer'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        url: typing.Optional[str] = None,
        attribution: typing.Optional[str] = None,
        opacity: typing.Optional[NumberType] = None,
        zIndex: typing.Optional[NumberType] = None,
        tileSize: typing.Optional[NumberType] = None,
        minZoom: typing.Optional[NumberType] = None,
        maxZoom: typing.Optional[NumberType] = None,
        minNativeZoom: typing.Optional[NumberType] = None,
        maxNativeZoom: typing.Optional[NumberType] = None,
        tms: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'url', 'attribution', 'opacity', 'zIndex', 'tileSize', 'minZoom', 'maxZoom', 'minNativeZoom', 'maxNativeZoom', 'tms']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'url', 'attribution', 'opacity', 'zIndex', 'tileSize', 'minZoom', 'maxZoom', 'minNativeZoom', 'maxNativeZoom', 'tms']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletTileLayer, self).__init__(**args)

setattr(LeafletTileLayer, "__init__", _explicitize_args(LeafletTileLayer.__init__))
