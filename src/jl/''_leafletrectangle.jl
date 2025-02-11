# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletrectangle

"""
    ''_leafletrectangle(;kwargs...)
    ''_leafletrectangle(children::Any;kwargs...)
    ''_leafletrectangle(children_maker::Function;kwargs...)


A LeafletRectangle component.
矩形图层组件LeafletRectangle
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 要传入的`LeafletTooltip`、`LeafletPopup`组件，配合当前图层使用
- `id` (String; optional): 组件唯一id
- `bounds` (required): 必填项，定义矩形左下角、右上角坐标. bounds has the following type: lists containing elements 'minx', 'miny', 'maxx', 'maxy'.
Those elements have the following types:
  - `minx` (Real; required): 矩形左下角经度
  - `miny` (Real; required): 矩形左下角纬度
  - `maxx` (Real; required): 矩形右上角经度
  - `maxy` (Real; required): 矩形右上角纬度
- `className` (String; optional): 当前图层css类名
- `editable` (Bool; optional): 当前要素是否可编辑
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `mouseOverCount` (Real; optional): 监听当前要素鼠标移入事件累计次数
默认值：`0`
- `nClicks` (Real; optional): 监听当前要素累计点击次数
默认值：`0`
- `pathOptions` (optional): 矢量样式配置参数
"""
function ''_leafletrectangle(; kwargs...)
        available_props = Symbol[:children, :id, :bounds, :className, :editable, :key, :mouseOverCount, :nClicks, :pathOptions]
        wild_props = Symbol[]
        return Component("''_leafletrectangle", "LeafletRectangle", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletrectangle(children::Any; kwargs...) = ''_leafletrectangle(;kwargs..., children = children)
''_leafletrectangle(children_maker::Function; kwargs...) = ''_leafletrectangle(children_maker(); kwargs...)

