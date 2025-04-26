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


class LeafletStaticHeatMap(Component):
    """A LeafletStaticHeatMap component.
静态热力图层组件LeafletStaticHeatMap

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- points (list of dicts; optional):
    热力点数据.

    `points` is a list of dicts with keys:

    - lng (number; optional):
        热力点经度.

    - lat (number; optional):
        热力点纬度.

    - weight (number; optional):
        热力点权重.

- multiplyFactor (number; default 1):
    热力权重全局变换系数，将原始的各热力点权重值变为`权重 * multiplyFactor`  默认值：`1`.

- size (number; default 30000):
    热力点半径，单位：米  默认值：`30000`.

- opacity (number; default 1):
    热力点透明度  默认值：`1`.

- alphaRange (number; optional):
    权重比例阈值上限，取值应在`0`到`1`之间."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletStaticHeatMap'
    Points = TypedDict(
        "Points",
            {
            "lng": NotRequired[NumberType],
            "lat": NotRequired[NumberType],
            "weight": NotRequired[NumberType]
        }
    )


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        points: typing.Optional[typing.Sequence["Points"]] = None,
        multiplyFactor: typing.Optional[NumberType] = None,
        size: typing.Optional[NumberType] = None,
        opacity: typing.Optional[NumberType] = None,
        alphaRange: typing.Optional[NumberType] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'points', 'multiplyFactor', 'size', 'opacity', 'alphaRange']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'points', 'multiplyFactor', 'size', 'opacity', 'alphaRange']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletStaticHeatMap, self).__init__(**args)

setattr(LeafletStaticHeatMap, "__init__", _explicitize_args(LeafletStaticHeatMap.__init__))
