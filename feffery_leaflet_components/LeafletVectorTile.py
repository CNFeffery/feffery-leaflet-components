# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletVectorTile(Component):
    """A LeafletVectorTile component.
矢量切片图层组件LeafletVectorTile

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- url (string; optional):
    切片服务地址.

- minZoom (number; default 1):
    当前地图服务允许加载的最小缩放级别  默认值：`0`.

- maxZoom (number; default 18):
    当前地图服务允许加载的最大缩放级别  默认值：`18`.

- interactive (boolean; default False):
    当前图层是否允许交互功能  默认值：`False`.

- featureIdField (string; default 'id'):
    切片数据要素属性中作为图层唯一识别`id`的字段  默认值：`'id'`.

- vectorTileLayerStyles (dict; optional):
    针对不同切片图层设置样式，键：图层名称，值：样式字典或`javascript`控制函数字符串.

    `vectorTileLayerStyles` is a dict with strings as keys and values
    of type string | dict with strings as keys and values of type dict
    with keys:

    - func (string; optional)

- extraProps (dict; optional):
    额外自定义参数.

- renderer (a value equal to: 'svg', 'canvas'; default 'svg'):
    渲染方式，可选项有`'svg'`、`'canvas'`  默认值：`'svg'`.

- _layerNames (list; optional):
    监听当前服务中已加载的全部图层名称.

- _clickedFeature (dict; optional):
    监听要素点击事件.

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
    _type = 'LeafletVectorTile'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, url=Component.UNDEFINED, minZoom=Component.UNDEFINED, maxZoom=Component.UNDEFINED, interactive=Component.UNDEFINED, featureIdField=Component.UNDEFINED, vectorTileLayerStyles=Component.UNDEFINED, extraProps=Component.UNDEFINED, renderer=Component.UNDEFINED, _layerNames=Component.UNDEFINED, _clickedFeature=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'url', 'minZoom', 'maxZoom', 'interactive', 'featureIdField', 'vectorTileLayerStyles', 'extraProps', 'renderer', '_layerNames', '_clickedFeature', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'url', 'minZoom', 'maxZoom', 'interactive', 'featureIdField', 'vectorTileLayerStyles', 'extraProps', 'renderer', '_layerNames', '_clickedFeature', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletVectorTile, self).__init__(**args)
