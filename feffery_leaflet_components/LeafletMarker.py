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


class LeafletMarker(Component):
    """A LeafletMarker component.
标记图层组件LeafletMarker

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string; optional):
    当前图层css类名.

- children (a list of or a singular dash component, string or number; optional):
    要传入的`LeafletTooltip`、`LeafletPopup`组件，配合当前图层使用.

- position (dict; required):
    必填项，标记中心坐标.

    `position` is a dict with keys:

    - lng (number; optional):
        经度.

    - lat (number; optional):
        纬度.

- draggable (boolean; optional):
    当前标记是否可拖拽  默认值：`False`.

- iconOptions (dict; optional):
    配置图标参数.

    `iconOptions` is a dict with keys:

    - iconUrl (string; optional):
        图标图片地址.

    - iconSize (list of numbers; optional):
        图标像素尺寸，格式：`[width, height]`.

    - iconAnchor (list of numbers; optional):
        图标尖端坐标，以图片左上角为原点，格式：`[x, y]`.

    - popupAnchor (list of numbers; optional):
        弹出卡片展开锚点，以`iconAnchor`为原点参照，格式：`[x, y]`.

    - tooltipAnchor (list of numbers; optional):
        信息框展开锚点，以`iconAnchor`为原点参照，格式：`[x, y]`.

    - shadowUrl (string; optional):
        阴影图片地址.

    - shadowSize (list of numbers; optional):
        阴影图片像素尺寸，格式：`[width, height]`.

    - shadowAnchor (list of numbers; optional):
        阴影图片的尖端坐标，以图片左上角为原点参照，格式：`[x, y]`.

    - className (string; optional):
        标记图标css类.

- opacity (number; optional):
    图标透明度  默认值：`1`.

- editable (boolean; default False):
    当前要素是否可编辑  默认值：`False`.

- zIndexOffset (number; optional):
    当前图层`z`轴偏移单位.

- riseOnHover (boolean; optional):
    当鼠标悬浮于当前标记上时，是否自动调整图层至顶层  默认值：`False`.

- autoPan (boolean; optional):
    当拖拽标记至地图边缘时，设置是否允许地图自动移动以适应边缘  默认值：`False`.

- nClicks (number; default 0):
    监听当前要素累计点击次数  默认值：`0`.

- mouseOverCount (number; default 0):
    监听当前要素鼠标移入事件累计次数  默认值：`0`."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletMarker'
    Position = TypedDict(
        "Position",
            {
            "lng": NotRequired[NumberType],
            "lat": NotRequired[NumberType]
        }
    )

    IconOptions = TypedDict(
        "IconOptions",
            {
            "iconUrl": NotRequired[str],
            "iconSize": NotRequired[typing.Sequence[NumberType]],
            "iconAnchor": NotRequired[typing.Sequence[NumberType]],
            "popupAnchor": NotRequired[typing.Sequence[NumberType]],
            "tooltipAnchor": NotRequired[typing.Sequence[NumberType]],
            "shadowUrl": NotRequired[str],
            "shadowSize": NotRequired[typing.Sequence[NumberType]],
            "shadowAnchor": NotRequired[typing.Sequence[NumberType]],
            "className": NotRequired[str]
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        className: typing.Optional[str] = None,
        position: typing.Optional["Position"] = None,
        draggable: typing.Optional[bool] = None,
        iconOptions: typing.Optional["IconOptions"] = None,
        opacity: typing.Optional[NumberType] = None,
        editable: typing.Optional[bool] = None,
        zIndexOffset: typing.Optional[NumberType] = None,
        riseOnHover: typing.Optional[bool] = None,
        autoPan: typing.Optional[bool] = None,
        nClicks: typing.Optional[NumberType] = None,
        mouseOverCount: typing.Optional[NumberType] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'className', 'children', 'position', 'draggable', 'iconOptions', 'opacity', 'editable', 'zIndexOffset', 'riseOnHover', 'autoPan', 'nClicks', 'mouseOverCount']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'className', 'children', 'position', 'draggable', 'iconOptions', 'opacity', 'editable', 'zIndexOffset', 'riseOnHover', 'autoPan', 'nClicks', 'mouseOverCount']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['position']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletMarker, self).__init__(children=children, **args)

setattr(LeafletMarker, "__init__", _explicitize_args(LeafletMarker.__init__))
