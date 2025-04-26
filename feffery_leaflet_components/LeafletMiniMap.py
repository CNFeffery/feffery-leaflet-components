# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class LeafletMiniMap(Component):
    """A LeafletMiniMap component.
迷你地图组件LeafletMiniMap

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- url (string; default "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"):
    迷你地图瓦片地图服务地址.

- attribution (string; optional):
    迷你地图瓦片地图服务`attribution`信息.

- opacity (number; default 1):
    迷你地图瓦片地图服务透明度.

- zIndex (number; optional):
    迷你地图瓦片地图服务`z`轴层级.

- minZoom (number; optional):
    缩放级别下限.

- maxZoom (number; optional):
    缩放级别上限.

- position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional):
    迷你地图显示方位，可选的有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
    默认值：`'bottomright'`.

- width (number; optional):
    迷你地图整体像素宽度  默认值：`150`.

- height (number; optional):
    迷你地图整体像素高度  默认值：`150`.

- collapsedWidth (number; optional):
    迷你地图折叠状态下的像素宽度  默认值：`19`.

- collapsedHeight (number; optional):
    迷你地图折叠状态下的像素高度  默认值：`19`.

- zoomLevelOffset (number; optional):
    迷你地图与主体地图的缩放级别偏差  默认值：`-5`.

- zoomLevelFixed (number; optional):
    迷你地图强制锁定的缩放级别.

- zoomAnimation (boolean; optional):
    迷你地图是否启用缩放变化动画  默认值：`False`.

- toggleDisplay (boolean; optional):
    是否渲染迷你地图折叠按钮  默认值：`False`.

- autoToggleDisplay (boolean; optional):
    当参数`zoomLevelFixed`有效，且主体地图范围不再适应迷你地图时，是否自动隐藏迷你地图  默认值：`False`.

- aimingRectOptions (optional):
    迷你地图范围标识框要素样式.

- shadowRectOptions (optional):
    迷你地图范围标识框阴影要素样式.

- minimized (boolean; optional):
    迷你地图初始化时是否处于折叠状态."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletMiniMap'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        url: typing.Optional[str] = None,
        attribution: typing.Optional[str] = None,
        opacity: typing.Optional[NumberType] = None,
        zIndex: typing.Optional[NumberType] = None,
        minZoom: typing.Optional[NumberType] = None,
        maxZoom: typing.Optional[NumberType] = None,
        position: typing.Optional[Literal["topleft", "topright", "bottomleft", "bottomright"]] = None,
        width: typing.Optional[NumberType] = None,
        height: typing.Optional[NumberType] = None,
        collapsedWidth: typing.Optional[NumberType] = None,
        collapsedHeight: typing.Optional[NumberType] = None,
        zoomLevelOffset: typing.Optional[NumberType] = None,
        zoomLevelFixed: typing.Optional[NumberType] = None,
        zoomAnimation: typing.Optional[bool] = None,
        toggleDisplay: typing.Optional[bool] = None,
        autoToggleDisplay: typing.Optional[bool] = None,
        aimingRectOptions: typing.Optional[typing.Any] = None,
        shadowRectOptions: typing.Optional[typing.Any] = None,
        minimized: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'url', 'attribution', 'opacity', 'zIndex', 'minZoom', 'maxZoom', 'position', 'width', 'height', 'collapsedWidth', 'collapsedHeight', 'zoomLevelOffset', 'zoomLevelFixed', 'zoomAnimation', 'toggleDisplay', 'autoToggleDisplay', 'aimingRectOptions', 'shadowRectOptions', 'minimized']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'url', 'attribution', 'opacity', 'zIndex', 'minZoom', 'maxZoom', 'position', 'width', 'height', 'collapsedWidth', 'collapsedHeight', 'zoomLevelOffset', 'zoomLevelFixed', 'zoomAnimation', 'toggleDisplay', 'autoToggleDisplay', 'aimingRectOptions', 'shadowRectOptions', 'minimized']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletMiniMap, self).__init__(**args)

setattr(LeafletMiniMap, "__init__", _explicitize_args(LeafletMiniMap.__init__))
