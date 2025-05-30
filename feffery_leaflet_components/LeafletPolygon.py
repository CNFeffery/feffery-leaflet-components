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


class LeafletPolygon(Component):
    """A LeafletPolygon component.
多边形图层组件LeafletPolygon

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string; optional):
    当前图层css类名.

- children (a list of or a singular dash component, string or number; optional):
    要传入的`LeafletTooltip`、`LeafletPopup`组件，配合当前图层使用.

- positions (list of dicts; required):
    必填，定义多边形坐标.

    `positions` is a list of dicts with keys:

    - lng (number; optional):
        经度.

    - lat (number; optional):
        纬度. | list of dicts with keys:

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

- editable (boolean; default False):
    当前要素是否可编辑  默认值：`False`.

- nClicks (number; default 0):
    监听当前要素累计点击次数  默认值：`0`.

- mouseOverCount (number; default 0):
    监听当前要素鼠标移入事件累计次数  默认值：`0`."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletPolygon'
    Positions = TypedDict(
        "Positions",
            {
            "lng": NotRequired[NumberType],
            "lat": NotRequired[NumberType]
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        className: typing.Optional[str] = None,
        positions: typing.Optional[typing.Sequence[typing.Union["Positions", typing.Sequence["Positions"], typing.Sequence[typing.Sequence["Positions"]]]]] = None,
        pathOptions: typing.Optional[typing.Any] = None,
        editable: typing.Optional[bool] = None,
        nClicks: typing.Optional[NumberType] = None,
        mouseOverCount: typing.Optional[NumberType] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'className', 'children', 'positions', 'pathOptions', 'editable', 'nClicks', 'mouseOverCount']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'className', 'children', 'positions', 'pathOptions', 'editable', 'nClicks', 'mouseOverCount']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['positions']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletPolygon, self).__init__(children=children, **args)

setattr(LeafletPolygon, "__init__", _explicitize_args(LeafletPolygon.__init__))
