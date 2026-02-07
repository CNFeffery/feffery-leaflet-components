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


class LeafletPopup(Component):
    """A LeafletPopup component.
弹框组件LeafletPopup

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string; optional):
    弹框css类名.

- children (a list of or a singular dash component, string or number; optional):
    弹框内部元素.

- keepInView (boolean; default False):
    已展开的弹框是否限制在地图范围内显示  默认值：`False`.

- closeButton (boolean; default False):
    是否显示关闭按钮  默认值：`False`.

- closeOnEscapeKey (boolean; default True):
    通过键盘`esc`键是否可关闭弹框  默认值：`True`.

- closeOnClick (boolean; default True):
    点击地图空白处是否可关闭弹框  默认值：`True`.

- width (number; optional):
    为弹框设置固定像素宽度值."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletPopup'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        className: typing.Optional[str] = None,
        keepInView: typing.Optional[bool] = None,
        closeButton: typing.Optional[bool] = None,
        closeOnEscapeKey: typing.Optional[bool] = None,
        closeOnClick: typing.Optional[bool] = None,
        width: typing.Optional[NumberType] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'className', 'children', 'keepInView', 'closeButton', 'closeOnEscapeKey', 'closeOnClick', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'className', 'children', 'keepInView', 'closeButton', 'closeOnEscapeKey', 'closeOnClick', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(LeafletPopup, self).__init__(children=children, **args)

setattr(LeafletPopup, "__init__", _explicitize_args(LeafletPopup.__init__))
