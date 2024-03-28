# AUTO GENERATED FILE - DO NOT EDIT

export ''_esritiledmaplayer

"""
    ''_esritiledmaplayer(;kwargs...)

An EsriTiledMapLayer component.

Keyword arguments:
- `id` (String; optional)
- `debug` (Bool; optional): 是否开启debug模式
默认：false
- `identifyConfig` (optional): 用于配置触发每一次的要素标识操作，每次操作完整后会自动重置为空. identifyConfig has the following type: lists containing elements 'position'.
Those elements have the following types:
  - `position` (optional): 标识位置坐标. position has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 标识位置经度
  - `lat` (Real; optional): 标识位置纬度
- `identifyResult` (Dict; optional): 最近一次标识操作查询到的要素信息
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `opacity` (Real; optional)
- `url` (String; optional)
- `zIndex` (Real; optional): 设置当前图层的zIndex层级
- `zoomOffset` (Real; optional): 缩放级别调整量
默认：0
"""
function ''_esritiledmaplayer(; kwargs...)
        available_props = Symbol[:id, :debug, :identifyConfig, :identifyResult, :key, :loading_state, :opacity, :url, :zIndex, :zoomOffset]
        wild_props = Symbol[]
        return Component("''_esritiledmaplayer", "EsriTiledMapLayer", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

