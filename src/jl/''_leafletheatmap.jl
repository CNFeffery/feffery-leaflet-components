# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletheatmap

"""
    ''_leafletheatmap(;kwargs...)

A LeafletHeatMap component.
热力图层组件LeafletHeatMap
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `blur` (Real; optional): 热力点模糊程度
默认值：`15`
- `gradient` (Dict; optional): 颜色分段规则，譬如：`{0.4: 'blue', 0.65: 'lime', 1: 'red'}`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `max` (Real; optional): 权重上限范围
默认值：`1`
- `minOpacity` (Real; optional): 透明度下限，取值应在`0`到`1`之间
默认值：`0`
- `points` (optional): 热力点数据. points has the following type: Array of lists containing elements 'lng', 'lat', 'weight'.
Those elements have the following types:
  - `lng` (Real; optional): 当前热力点经度
  - `lat` (Real; optional): 当前热力点纬度
  - `weight` (Real; optional): 当前热力点权重s
- `radius` (Real; optional): 热力点像素半径
默认值：`25`
"""
function ''_leafletheatmap(; kwargs...)
        available_props = Symbol[:id, :blur, :gradient, :key, :loading_state, :max, :minOpacity, :points, :radius]
        wild_props = Symbol[]
        return Component("''_leafletheatmap", "LeafletHeatMap", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

