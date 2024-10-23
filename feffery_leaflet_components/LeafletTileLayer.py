# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletTileLayer(Component):
    """A LeafletTileLayer component.


Keyword arguments:

- id (string; optional)

- attribution (string; optional)

- key (string; optional):
    强制刷新用.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading.

- maxZoom (number; default 18):
    当前瓦片地图服务允许加载的最大缩放级别  默认值：`18`.

- minZoom (number; default 0):
    当前瓦片地图服务允许加载的最小缩放级别  默认值：`0`.

- opacity (number; default 1)

- tileSize (number; default 256)

- tms (boolean; default False)

- url (string; default "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}")

- zIndex (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletTileLayer'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, url=Component.UNDEFINED, attribution=Component.UNDEFINED, opacity=Component.UNDEFINED, zIndex=Component.UNDEFINED, tileSize=Component.UNDEFINED, minZoom=Component.UNDEFINED, maxZoom=Component.UNDEFINED, tms=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'attribution', 'key', 'loading_state', 'maxZoom', 'minZoom', 'opacity', 'tileSize', 'tms', 'url', 'zIndex']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'attribution', 'key', 'loading_state', 'maxZoom', 'minZoom', 'opacity', 'tileSize', 'tms', 'url', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletTileLayer, self).__init__(**args)
