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


class LeafletCircle(Component):
    """A LeafletCircle component.
圆形图层组件LeafletCircle

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string; optional):
    当前图层css类名.

- children (a list of or a singular dash component, string or number; optional):
    要传入的`LeafletTooltip`、`LeafletPopup`组件，配合当前图层使用.

- center (dict; required):
    必填项，圆形中心坐标.

    `center` is a dict with keys:

    - lng (number; optional):
        经度.

    - lat (number; optional):
        纬度.

- radius (number; required):
    必填，圆形半径，单位：米.

- pathOptions (optional):
    矢量样式配置参数.

- editable (boolean; default False):
    当前要素是否可编辑  默认值：`False`.

- nClicks (number; default 0):
    监听当前要素累计点击次数  默认值：`0`.

- mouseOverCount (number; default 0):
    监听当前要素鼠标移入事件累计次数  默认值：`0`."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletCircle'
    Center = TypedDict(
        "Center",
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
        center: typing.Optional["Center"] = None,
        radius: typing.Optional[NumberType] = None,
        pathOptions: typing.Optional[typing.Any] = None,
        editable: typing.Optional[bool] = None,
        nClicks: typing.Optional[NumberType] = None,
        mouseOverCount: typing.Optional[NumberType] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'className', 'children', 'center', 'radius', 'pathOptions', 'editable', 'nClicks', 'mouseOverCount']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'className', 'children', 'center', 'radius', 'pathOptions', 'editable', 'nClicks', 'mouseOverCount']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['center', 'radius']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletCircle, self).__init__(children=children, **args)

setattr(LeafletCircle, "__init__", _explicitize_args(LeafletCircle.__init__))
