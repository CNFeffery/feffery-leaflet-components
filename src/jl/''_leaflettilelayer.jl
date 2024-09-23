# AUTO GENERATED FILE - DO NOT EDIT

export ''_leaflettilelayer

"""
    ''_leaflettilelayer(;kwargs...)

A LeafletTileLayer component.

Keyword arguments:
- `id` (String; optional)
- `attribution` (String; optional)
- `key` (String; optional): 强制刷新用
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxZoom` (Real; optional): 当前瓦片地图服务允许加载的最大缩放级别
默认值：`18`
- `minZoom` (Real; optional): 当前瓦片地图服务允许加载的最小缩放级别
默认值：`0`
- `opacity` (Real; optional)
- `tileSize` (Real; optional)
- `tms` (Bool; optional)
- `url` (String; optional)
- `zIndex` (Real; optional)
"""
function ''_leaflettilelayer(; kwargs...)
        available_props = Symbol[:id, :attribution, :key, :loading_state, :maxZoom, :minZoom, :opacity, :tileSize, :tms, :url, :zIndex]
        wild_props = Symbol[]
        return Component("''_leaflettilelayer", "LeafletTileLayer", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

