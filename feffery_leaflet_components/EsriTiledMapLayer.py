# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class EsriTiledMapLayer(Component):
    """An EsriTiledMapLayer component.
ESRI tiledMapLayer图层组件

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- url (string; optional):
    esri TileLayer地图服务地址.

- opacity (number; optional):
    当前图层透明度.

- zIndex (number; optional):
    当前图层`z`轴层级.

- zoomOffset (number; default 0):
    缩放级别偏移量  默认值：`0`.

- identifyConfig (dict; optional):
    配置触发要素标识操作，每次操作完成后会自动重置为空值.

    `identifyConfig` is a dict with keys:

    - position (dict; optional):
        标识位置坐标.

        `position` is a dict with keys:

        - lng (number; optional):
            标识位置经度.

        - lat (number; optional):
            标识位置纬度.

- identifyResult (dict; optional):
    监听标识查询结果.

- debug (boolean; default False):
    是否开启debug模式  默认值：`False`.

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
    _type = 'EsriTiledMapLayer'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, url=Component.UNDEFINED, opacity=Component.UNDEFINED, zIndex=Component.UNDEFINED, zoomOffset=Component.UNDEFINED, identifyConfig=Component.UNDEFINED, identifyResult=Component.UNDEFINED, debug=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'url', 'opacity', 'zIndex', 'zoomOffset', 'identifyConfig', 'identifyResult', 'debug', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'url', 'opacity', 'zIndex', 'zoomOffset', 'identifyConfig', 'identifyResult', 'debug', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(EsriTiledMapLayer, self).__init__(**args)
