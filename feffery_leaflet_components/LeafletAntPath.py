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


class LeafletAntPath(Component):
    """A LeafletAntPath component.
蚂蚁路径图层组件LeafletAntPath

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- positions (list of dicts; required):
    必填，定义折线坐标.

    `positions` is a list of dicts with keys:

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

- paused (boolean; optional):
    是否暂停蚂蚁路径动画  默认值：`False`.

- reverse (boolean; optional):
    是否翻转蚂蚁路径动画方向  默认值：`False`.

- hardwareAccelerated (boolean; optional):
    是否开启硬件加速  默认值：`False`.

- pulseColor (string; optional):
    折线分隔颜色  默认值：`'white'`.

- delay (number; optional):
    动画延迟，单位：毫秒.

- dashArray (string; optional):
    折线分段格式  默认值：`'10, 20'`."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletAntPath'
    Positions = TypedDict(
        "Positions",
            {
            "lng": NotRequired[NumberType],
            "lat": NotRequired[NumberType]
        }
    )


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        positions: typing.Optional[typing.Union[typing.Sequence["Positions"], typing.Sequence[typing.Sequence["Positions"]]]] = None,
        pathOptions: typing.Optional[typing.Any] = None,
        paused: typing.Optional[bool] = None,
        reverse: typing.Optional[bool] = None,
        hardwareAccelerated: typing.Optional[bool] = None,
        pulseColor: typing.Optional[str] = None,
        delay: typing.Optional[NumberType] = None,
        dashArray: typing.Optional[str] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'positions', 'pathOptions', 'paused', 'reverse', 'hardwareAccelerated', 'pulseColor', 'delay', 'dashArray']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'positions', 'pathOptions', 'paused', 'reverse', 'hardwareAccelerated', 'pulseColor', 'delay', 'dashArray']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['positions']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletAntPath, self).__init__(**args)

setattr(LeafletAntPath, "__init__", _explicitize_args(LeafletAntPath.__init__))
