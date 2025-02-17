# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletflowlayer

"""
    ''_leafletflowlayer(;kwargs...)

A LeafletFlowLayer component.
流线图层组件LeafletMigrationLayer
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `arcLabel` (Bool; optional): 是否显示流线起点、终点文字标签
默认值：`true`
- `arcLabelFontFamily` (String; optional): 流线起点、终点文字标签字体
默认值：`'sans-serif'`
- `arcLabelFontSize` (String; optional): 流线起点、终点文字标签字体大小
默认值：`'10px'`
- `arcWidth` (Real; optional): 流线最小像素宽度
默认值：`1`
- `flowData` (optional): 定义流数据. flowData has the following type: Array of lists containing elements 'from', 'to', 'labels', 'color', 'value'.
Those elements have the following types:
  - `from` (optional): 当前流数据起点坐标. from has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 经度
  - `lat` (Real; optional): 纬度
  - `to` (optional): 当前流数据终点坐标. to has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 经度
  - `lat` (Real; optional): 纬度
  - `labels` (optional): 当前流线起点、终点文字标签. labels has the following type: lists containing elements 'from', 'to'.
Those elements have the following types:
  - `from` (String; optional): 起点文字标签
  - `to` (String; optional): 终点文字标签
  - `color` (String; optional): 当前流线颜色值
  - `value` (Real; optional): 当前流线流量数值，与流线显示的宽度相关联s
- `keepUniqueLabels` (Bool; optional): 是否自动对起点、终点文字标签去重
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `maxWidth` (Real; optional): 流线最大像素宽度
默认值：`10`
- `pulseBorderWidth` (Real; optional): 扩散圆圈边框像素宽度
默认值：`3`
- `pulseRadius` (Real; optional): 扩散圆圈效果像素半径
默认值：`30`
- `setAction` (a value equal to: 'pause', 'play', 'hide', 'show'; optional): 手动执行控制动作，可选的有`'pause'`、`'play'`、`'hide'`、`'show'`，每次有效值更新后会重置为空值
"""
function ''_leafletflowlayer(; kwargs...)
        available_props = Symbol[:id, :arcLabel, :arcLabelFontFamily, :arcLabelFontSize, :arcWidth, :flowData, :keepUniqueLabels, :key, :maxWidth, :pulseBorderWidth, :pulseRadius, :setAction]
        wild_props = Symbol[]
        return Component("''_leafletflowlayer", "LeafletFlowLayer", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

