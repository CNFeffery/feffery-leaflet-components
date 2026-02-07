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


class LeafletHeatMap(Component):
    """A LeafletHeatMap component.
热力图层组件LeafletHeatMap

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- points (list of dicts; optional):
    热力点数据.

    `points` is a list of dicts with keys:

    - lng (number; optional):
        当前热力点经度.

    - lat (number; optional):
        当前热力点纬度.

    - weight (number; optional):
        当前热力点权重.

- minOpacity (number; default 0):
    透明度下限，取值应在`0`到`1`之间  默认值：`0`.

- max (number; default 1):
    权重上限范围  默认值：`1`.

- radius (number; default 25):
    热力点像素半径  默认值：`25`.

- blur (number; default 15):
    热力点模糊程度  默认值：`15`.

- gradient (dict; optional):
    颜色分段规则，譬如：`{0.4: 'blue', 0.65: 'lime', 1: 'red'}`."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletHeatMap'
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
        minOpacity: typing.Optional[NumberType] = None,
        max: typing.Optional[NumberType] = None,
        radius: typing.Optional[NumberType] = None,
        blur: typing.Optional[NumberType] = None,
        gradient: typing.Optional[dict] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'points', 'minOpacity', 'max', 'radius', 'blur', 'gradient']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'points', 'minOpacity', 'max', 'radius', 'blur', 'gradient']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletHeatMap, self).__init__(**args)

setattr(LeafletHeatMap, "__init__", _explicitize_args(LeafletHeatMap.__init__))
