# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletpolygon

"""
    ''_leafletpolygon(;kwargs...)
    ''_leafletpolygon(children::Any;kwargs...)
    ''_leafletpolygon(children_maker::Function;kwargs...)


A LeafletPolygon component.
多边形图层组件LeafletPolygon
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 要传入的`LeafletTooltip`、`LeafletPopup`组件，配合当前图层使用
- `id` (String; optional): 组件唯一id
- `className` (String; optional): 当前图层css类名
- `editable` (Bool; optional): 当前要素是否可编辑
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `mouseOverCount` (Real; optional): 监听当前要素鼠标移入事件累计次数
默认值：`0`
- `nClicks` (Real; optional): 监听当前要素累计点击次数
默认值：`0`
- `pathOptions` (optional): 矢量样式配置参数
- `positions` (required): 必填，定义多边形坐标. positions has the following type: Array of lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 经度
  - `lat` (Real; optional): 纬度 | Array of lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 经度
  - `lat` (Real; optional): 纬度s | Array of Array of lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 经度
  - `lat` (Real; optional): 纬度sss
"""
function ''_leafletpolygon(; kwargs...)
        available_props = Symbol[:children, :id, :className, :editable, :key, :mouseOverCount, :nClicks, :pathOptions, :positions]
        wild_props = Symbol[]
        return Component("''_leafletpolygon", "LeafletPolygon", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletpolygon(children::Any; kwargs...) = ''_leafletpolygon(;kwargs..., children = children)
''_leafletpolygon(children_maker::Function; kwargs...) = ''_leafletpolygon(children_maker(); kwargs...)

