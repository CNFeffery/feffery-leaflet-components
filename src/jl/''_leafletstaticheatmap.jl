# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletstaticheatmap

"""
    ''_leafletstaticheatmap(;kwargs...)

A LeafletStaticHeatMap component.
静态热力图层组件LeafletStaticHeatMap
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `alphaRange` (Real; optional): 权重比例阈值上限，取值应在`0`到`1`之间
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `multiplyFactor` (Real; optional): 热力权重全局变换系数，将原始的各热力点权重值变为`权重 * multiplyFactor`
默认值：`1`
- `opacity` (Real; optional): 热力点透明度
默认值：`1`
- `points` (optional): 热力点数据. points has the following type: Array of lists containing elements 'lng', 'lat', 'weight'.
Those elements have the following types:
  - `lng` (Real; optional): 热力点经度
  - `lat` (Real; optional): 热力点纬度
  - `weight` (Real; optional): 热力点权重s
- `size` (Real; optional): 热力点半径，单位：米
默认值：`30000`
"""
function ''_leafletstaticheatmap(; kwargs...)
        available_props = Symbol[:id, :alphaRange, :key, :multiplyFactor, :opacity, :points, :size]
        wild_props = Symbol[]
        return Component("''_leafletstaticheatmap", "LeafletStaticHeatMap", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

