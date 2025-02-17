# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletpolyline

"""
    ''_leafletpolyline(;kwargs...)
    ''_leafletpolyline(children::Any;kwargs...)
    ''_leafletpolyline(children_maker::Function;kwargs...)


A LeafletPolyline component.
折线图层组件LeafletPolyline
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 要传入的`LeafletTooltip`、`LeafletPopup`组件，配合当前图层使用
- `id` (String; optional): 组件唯一id
- `arrowheads` (optional): 配置额外箭头效果
默认值：`false`. arrowheads has the following type: Bool | lists containing elements 'yawn', 'fill', 'size', 'frequency', 'proportionalToTotal'.
Those elements have the following types:
  - `yawn` (Real; optional): 箭头开合角度
默认值：`60`
  - `fill` (Bool; optional): 是否绘制实心箭头
默认值：`false`
  - `size` (Real | String; optional): 箭头尺寸比例，传入数值型是以米为单位，传入字符串时表示对应所附着折线的百分比，或css格式尺寸值
默认值：`'15%'`
  - `frequency` (a value equal to: 'allvertices', 'endonly' | Real | String; optional): 箭头在折线上的绘制频率，可选项有`'allvertices'`（每个折点对应1个箭头）、`'endonly'`（只在线要素末端绘制1个箭头）
当传入以`'m'`结尾的字符串时表示以米为单位的间隔，传入以`'px'`结尾的字符串时表示以像素为单位的间隔
传入数值型时表示以等间距方式绘制固定数量的箭头
默认值：`'allvertices'`
  - `proportionalToTotal` (Bool; optional): 当`size`设置为百分比形式时，针对多段折线要素，是否以整体折线长度总和为百分比对应的单位1
默认值：`false`
- `arrowheadsPathOptions` (optional): 箭头样式配置参数，默认沿用`pathOptions`
- `className` (String; optional): 当前图层css类名
- `editable` (Bool; optional): 当前要素是否可编辑
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `mouseOverCount` (Real; optional): 监听当前要素鼠标移入事件累计次数
默认值：`0`
- `nClicks` (Real; optional): 监听当前要素累计点击次数
默认值：`0`
- `pathOptions` (optional): 矢量样式配置参数
- `positions` (required): 必填，定义折线坐标. positions has the following type: Array of lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 经度
  - `lat` (Real; optional): 纬度s | Array of Array of lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 经度
  - `lat` (Real; optional): 纬度ss
"""
function ''_leafletpolyline(; kwargs...)
        available_props = Symbol[:children, :id, :arrowheads, :arrowheadsPathOptions, :className, :editable, :key, :mouseOverCount, :nClicks, :pathOptions, :positions]
        wild_props = Symbol[]
        return Component("''_leafletpolyline", "LeafletPolyline", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletpolyline(children::Any; kwargs...) = ''_leafletpolyline(;kwargs..., children = children)
''_leafletpolyline(children_maker::Function; kwargs...) = ''_leafletpolyline(children_maker(); kwargs...)

