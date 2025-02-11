# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletantpath

"""
    ''_leafletantpath(;kwargs...)

A LeafletAntPath component.
蚂蚁路径图层组件LeafletAntPath
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `dashArray` (String; optional): 折线分段格式
默认值：`'10, 20'`
- `delay` (Real; optional): 动画延迟，单位：毫秒
- `hardwareAccelerated` (Bool; optional): 是否开启硬件加速
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `pathOptions` (optional): 矢量样式配置参数
- `paused` (Bool; optional): 是否暂停蚂蚁路径动画
默认值：`false`
- `positions` (required): 必填，定义折线坐标. positions has the following type: Array of lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 经度
  - `lat` (Real; optional): 纬度s | Array of Array of lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 经度
  - `lat` (Real; optional): 纬度ss
- `pulseColor` (String; optional): 折线分隔颜色
默认值：`'white'`
- `reverse` (Bool; optional): 是否翻转蚂蚁路径动画方向
默认值：`false`
"""
function ''_leafletantpath(; kwargs...)
        available_props = Symbol[:id, :dashArray, :delay, :hardwareAccelerated, :key, :pathOptions, :paused, :positions, :pulseColor, :reverse]
        wild_props = Symbol[]
        return Component("''_leafletantpath", "LeafletAntPath", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

