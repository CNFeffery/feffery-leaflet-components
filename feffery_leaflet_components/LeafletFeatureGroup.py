# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class LeafletFeatureGroup(Component):
    """A LeafletFeatureGroup component.
要素分组组件LeafletFeatureGroup

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    传入内部相关要素类组件.

- bringToFront (boolean; default False):
    是否将当前要素分组置于顶层  默认值：`False`.

- zIndex (number; optional):
    当前要素分组`z`轴层级.

- _bounds (dict; optional):
    监听当前要素分组整体矩形范围.

    `_bounds` is a dict with keys:

    - minx (number; optional)

    - miny (number; optional)

    - maxx (number; optional)

    - maxy (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletFeatureGroup'
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
        children: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        bringToFront: typing.Optional[bool] = None,
        zIndex: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        _bounds: typing.Optional["_bounds"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'bringToFront', 'zIndex', '_bounds']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'children', 'bringToFront', 'zIndex', '_bounds']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(LeafletFeatureGroup, self).__init__(children=children, **args)
