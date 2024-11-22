# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletmaplistener

"""
    ''_leafletmaplistener(;kwargs...)

A LeafletMapListener component.
地图事件监听组件LeafletMapListener
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `_bounds` (optional): 监听当前地图矩形区域坐标范围. _bounds has the following type: lists containing elements 'minx', 'miny', 'maxx', 'maxy'.
Those elements have the following types:
  - `minx` (Real; optional): 矩形区域最小经度
  - `miny` (Real; optional): 矩形区域最小纬度
  - `maxx` (Real; optional): 矩形区域最大经度
  - `maxy` (Real; optional): 矩形区域最大纬度
- `_center` (optional): 监听当前地图中心点坐标. _center has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 中心点经度
  - `lat` (Real; optional): 中心点纬度
- `_clickedLatLng` (optional): 监听地图鼠标点击事件. _clickedLatLng has the following type: lists containing elements 'lat'.
Those elements have the following types:
  - `lat` (Real; optional): 点击位置对应纬度
- `_zoom` (Real; optional): 监听当前地图缩放级别
- `debug` (Bool; optional): 是否开启调试模式，开启后浏览器控制台中将实时打印相关地图事件结果
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function ''_leafletmaplistener(; kwargs...)
        available_props = Symbol[:id, :_bounds, :_center, :_clickedLatLng, :_zoom, :debug, :key, :loading_state]
        wild_props = Symbol[]
        return Component("''_leafletmaplistener", "LeafletMapListener", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

