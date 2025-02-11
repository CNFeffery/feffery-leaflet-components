# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletcirclemarker

"""
    ''_leafletcirclemarker(;kwargs...)
    ''_leafletcirclemarker(children::Any;kwargs...)
    ''_leafletcirclemarker(children_maker::Function;kwargs...)


A LeafletCircleMarker component.
圆形标记图层组件LeafletCircleMarker
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 要传入的`LeafletTooltip`、`LeafletPopup`组件，配合当前图层使用
- `id` (String; optional): 组件唯一id
- `center` (required): 必填项，圆形标记中心坐标. center has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 经度
  - `lat` (Real; optional): 纬度
- `className` (String; optional): 当前图层css类名
- `editable` (Bool; optional): 当前要素是否可编辑
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `mouseOverCount` (Real; optional): 监听当前要素鼠标移入事件累计次数
默认值：`0`
- `nClicks` (Real; optional): 监听当前要素累计点击次数
默认值：`0`
- `pathOptions` (optional): 矢量样式配置参数
- `radius` (Real; optional): 圆形标记像素半径
默认值：`10`
"""
function ''_leafletcirclemarker(; kwargs...)
        available_props = Symbol[:children, :id, :center, :className, :editable, :key, :mouseOverCount, :nClicks, :pathOptions, :radius]
        wild_props = Symbol[]
        return Component("''_leafletcirclemarker", "LeafletCircleMarker", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletcirclemarker(children::Any; kwargs...) = ''_leafletcirclemarker(;kwargs..., children = children)
''_leafletcirclemarker(children_maker::Function; kwargs...) = ''_leafletcirclemarker(children_maker(); kwargs...)

