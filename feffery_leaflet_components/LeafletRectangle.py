# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class LeafletRectangle(Component):
    """A LeafletRectangle component.
矩形图层组件LeafletRectangle

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string; optional):
    当前图层css类名.

- children (a list of or a singular dash component, string or number; optional):
    要传入的`LeafletTooltip`、`LeafletPopup`组件，配合当前图层使用.

- bounds (dict; required):
    必填项，定义矩形左下角、右上角坐标.

    `bounds` is a dict with keys:

    - minx (number; required):
        矩形左下角经度.

    - miny (number; required):
        矩形左下角纬度.

    - maxx (number; required):
        矩形右上角经度.

    - maxy (number; required):
        矩形右上角纬度.

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
    _type = 'LeafletRectangle'
    Bounds = TypedDict(
        "Bounds",
            {
            "minx": typing.Union[int, float, numbers.Number],
            "miny": typing.Union[int, float, numbers.Number],
            "maxx": typing.Union[int, float, numbers.Number],
            "maxy": typing.Union[int, float, numbers.Number]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        children: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        className: typing.Optional[str] = None,
        bounds: typing.Optional["Bounds"] = None,
        pathOptions: typing.Optional[typing.Any] = None,
        editable: typing.Optional[bool] = None,
        nClicks: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        mouseOverCount: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'className', 'children', 'bounds', 'pathOptions', 'editable', 'nClicks', 'mouseOverCount']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'className', 'children', 'bounds', 'pathOptions', 'editable', 'nClicks', 'mouseOverCount']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['bounds']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletRectangle, self).__init__(children=children, **args)
