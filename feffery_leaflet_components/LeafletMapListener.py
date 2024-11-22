# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletMapListener(Component):
    """A LeafletMapListener component.
地图事件监听组件LeafletMapListener

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- _center (dict; optional):
    监听当前地图中心点坐标.

    `_center` is a dict with keys:

    - lng (number; optional):
        中心点经度.

    - lat (number; optional):
        中心点纬度.

- _zoom (number; optional):
    监听当前地图缩放级别.

- _clickedLatLng (dict; optional):
    监听地图鼠标点击事件.

    `_clickedLatLng` is a dict with keys:

    - lat (number; optional):
        点击位置对应纬度.

- _bounds (dict; optional):
    监听当前地图矩形区域坐标范围.

    `_bounds` is a dict with keys:

    - minx (number; optional):
        矩形区域最小经度.

    - miny (number; optional):
        矩形区域最小纬度.

    - maxx (number; optional):
        矩形区域最大经度.

    - maxy (number; optional):
        矩形区域最大纬度.

- debug (boolean; default False):
    是否开启调试模式，开启后浏览器控制台中将实时打印相关地图事件结果  默认值：`False`.

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
    _type = 'LeafletMapListener'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, _center=Component.UNDEFINED, _zoom=Component.UNDEFINED, _clickedLatLng=Component.UNDEFINED, _bounds=Component.UNDEFINED, debug=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', '_center', '_zoom', '_clickedLatLng', '_bounds', 'debug', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', '_center', '_zoom', '_clickedLatLng', '_bounds', 'debug', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletMapListener, self).__init__(**args)
