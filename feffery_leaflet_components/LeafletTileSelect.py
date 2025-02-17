# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class LeafletTileSelect(Component):
    """A LeafletTileSelect component.
瓦片底图选择组件LeafletTileSelect

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string; optional):
    当前组件css类名.

- style (dict; optional):
    当前组件css样式.

- containerClassName (string; optional):
    图层选择卡片容器css类名.

- containerStyle (dict; optional):
    图层选择卡片容器css样式.

- containerItemClassName (string; optional):
    图层选择子项css类名.

- containerItemStyle (dict; optional):
    图层选择子项css样式.

- urls (list of dicts; optional):
    配置瓦片地图服务选项.

    `urls` is a list of dicts with keys:

    - url (string; optional):
        当前瓦片地图服务地址.

- center (dict; default { lng: 0, lat: 0 }):
    地图中心坐标.

    `center` is a dict with keys:

    - lng (number; optional):
        经度.

    - lat (number; optional):
        纬度.

- zoom (number; default 3):
    地图缩放级别  默认值：`1`.

- selectedUrl (string; optional):
    监听或设置已选中的瓦片地图服务.

- containerVisible (boolean; default True):
    监听或设置选择卡片是否展开  默认值：`False`."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletTileSelect'
    Urls = TypedDict(
        "Urls",
            {
            "url": NotRequired[str]
        }
    )

    Center = TypedDict(
        "Center",
            {
            "lng": NotRequired[typing.Union[int, float, numbers.Number]],
            "lat": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[str] = None,
        key: typing.Optional[str] = None,
        className: typing.Optional[str] = None,
        style: typing.Optional[dict] = None,
        containerClassName: typing.Optional[str] = None,
        containerStyle: typing.Optional[dict] = None,
        containerItemClassName: typing.Optional[str] = None,
        containerItemStyle: typing.Optional[dict] = None,
        urls: typing.Optional[typing.Sequence["Urls"]] = None,
        center: typing.Optional["Center"] = None,
        zoom: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        selectedUrl: typing.Optional[str] = None,
        containerVisible: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'className', 'style', 'containerClassName', 'containerStyle', 'containerItemClassName', 'containerItemStyle', 'urls', 'center', 'zoom', 'selectedUrl', 'containerVisible']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'className', 'style', 'containerClassName', 'containerStyle', 'containerItemClassName', 'containerItemStyle', 'urls', 'center', 'zoom', 'selectedUrl', 'containerVisible']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletTileSelect, self).__init__(**args)
