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


class LeafletTooltip(Component):
    """A LeafletTooltip component.
信息框组件LeafletTooltip

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string; optional):
    信息框css类名.

- children (a list of or a singular dash component, string or number; optional):
    信息框内部元素.

- direction (a value equal to: 'right', 'left', 'top', 'bottom', 'center', 'auto'; default 'auto'):
    信息框展开方向，可选项有`'right'`、`'left'`、`'top'`、`'bottom'`、`'center'`、`'auto'`
    默认值：`'auto'`.

- permanent (boolean; default False):
    信息框是否保持展开状态，而无需鼠标移入触发  默认值：`False`.

- sticky (boolean; default False):
    信息框是否跟随鼠标位置  默认值：`False`.

- opacity (number; default 0.9):
    信息框透明度  默认值：`0.9`.

- interactive (boolean; default False):
    信息框内部元素是否可交互  默认值：`False`."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletTooltip'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        className: typing.Optional[str] = None,
        direction: typing.Optional[Literal["right", "left", "top", "bottom", "center", "auto"]] = None,
        permanent: typing.Optional[bool] = None,
        sticky: typing.Optional[bool] = None,
        opacity: typing.Optional[NumberType] = None,
        interactive: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'className', 'children', 'direction', 'permanent', 'sticky', 'opacity', 'interactive']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'className', 'children', 'direction', 'permanent', 'sticky', 'opacity', 'interactive']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(LeafletTooltip, self).__init__(children=children, **args)

setattr(LeafletTooltip, "__init__", _explicitize_args(LeafletTooltip.__init__))
