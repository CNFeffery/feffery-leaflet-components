# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


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
    监听或设置选择卡片是否展开  默认值：`False`.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletTileSelect'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, containerClassName=Component.UNDEFINED, containerStyle=Component.UNDEFINED, containerItemClassName=Component.UNDEFINED, containerItemStyle=Component.UNDEFINED, urls=Component.UNDEFINED, center=Component.UNDEFINED, zoom=Component.UNDEFINED, selectedUrl=Component.UNDEFINED, containerVisible=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'className', 'style', 'containerClassName', 'containerStyle', 'containerItemClassName', 'containerItemStyle', 'urls', 'center', 'zoom', 'selectedUrl', 'containerVisible', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'className', 'style', 'containerClassName', 'containerStyle', 'containerItemClassName', 'containerItemStyle', 'urls', 'center', 'zoom', 'selectedUrl', 'containerVisible', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletTileSelect, self).__init__(**args)
