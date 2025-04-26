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


class LeafletFullscreenControl(Component):
    """A LeafletFullscreenControl component.
地图全屏化组件LeafletFullscreenControl

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional):
    全屏控件方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`.

- forceSeparateButton (boolean; default False):
    控件按钮是否强制脱离于地图缩放控件  默认值：`False`."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletFullscreenControl'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        position: typing.Optional[Literal["topleft", "topright", "bottomleft", "bottomright"]] = None,
        forceSeparateButton: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'position', 'forceSeparateButton']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'position', 'forceSeparateButton']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletFullscreenControl, self).__init__(**args)

setattr(LeafletFullscreenControl, "__init__", _explicitize_args(LeafletFullscreenControl.__init__))
