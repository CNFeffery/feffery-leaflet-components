# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class LeafletExport(Component):
    """A LeafletExport component.
地图导出组件LeafletExport

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional):
    导出控件显示方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
    默认值：`'topleft'`.

- tileWait (number; optional):
    地图瓦片文件加载等待时长，单位：毫秒  默认值：500.

- filename (string; default 'map'):
    图片导出文件名  默认值：`'map'`.

- hideControlContainer (boolean; optional):
    导出图片时是否自动隐藏其他无关控件  默认值：`True`.

- customSizeTooltip (string; optional):
    为自定义导出尺寸控件设置提示文案内容.

- customSize (dict; optional):
    配置自定义尺寸.

    `customSize` is a dict with keys:

    - width (number; optional):
        像素宽度.

    - height (number; optional):
        像素高度."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletExport'
    CustomSize = TypedDict(
        "CustomSize",
            {
            "width": NotRequired[typing.Union[int, float, numbers.Number]],
            "height": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        position: typing.Optional[Literal["topleft", "topright", "bottomleft", "bottomright"]] = None,
        tileWait: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        filename: typing.Optional[str] = None,
        hideControlContainer: typing.Optional[bool] = None,
        customSizeTooltip: typing.Optional[str] = None,
        customSize: typing.Optional["CustomSize"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'position', 'tileWait', 'filename', 'hideControlContainer', 'customSizeTooltip', 'customSize']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'position', 'tileWait', 'filename', 'hideControlContainer', 'customSizeTooltip', 'customSize']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletExport, self).__init__(**args)
