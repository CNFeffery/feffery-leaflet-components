# AUTO GENERATED FILE - DO NOT EDIT

export ''_esritiledmaplayer

"""
    ''_esritiledmaplayer(;kwargs...)

An EsriTiledMapLayer component.
ESRI tiledMapLayer图层组件
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `debug` (Bool; optional): 是否开启debug模式
默认值：`false`
- `identifyConfig` (optional): 配置触发要素标识操作，每次操作完成后会自动重置为空值. identifyConfig has the following type: lists containing elements 'position'.
Those elements have the following types:
  - `position` (optional): 标识位置坐标. position has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 标识位置经度
  - `lat` (Real; optional): 标识位置纬度
- `identifyResult` (Dict; optional): 监听标识查询结果
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `opacity` (Real; optional): 当前图层透明度
- `url` (String; optional): esri TileLayer地图服务地址
- `zIndex` (Real; optional): 当前图层`z`轴层级
- `zoomOffset` (Real; optional): 缩放级别偏移量
默认值：`0`
"""
function ''_esritiledmaplayer(; kwargs...)
        available_props = Symbol[:id, :debug, :identifyConfig, :identifyResult, :key, :opacity, :url, :zIndex, :zoomOffset]
        wild_props = Symbol[]
        return Component("''_esritiledmaplayer", "EsriTiledMapLayer", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

