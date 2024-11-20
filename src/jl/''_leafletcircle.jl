# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletcircle

"""
    ''_leafletcircle(;kwargs...)
    ''_leafletcircle(children::Any;kwargs...)
    ''_leafletcircle(children_maker::Function;kwargs...)


A LeafletCircle component.
圆形图层组件LeafletCircle
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 要传入的`LeafletTooltip`、`LeafletPopup`组件，配合当前图层使用
- `id` (String; optional): 组件唯一id
- `center` (required): 必填项，圆形中心坐标. center has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 经度
  - `lat` (Real; optional): 纬度
- `className` (String; optional): 当前图层css类名
- `editable` (Bool; optional): 当前要素是否可编辑
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `mouseOverCount` (Real; optional): 监听当前要素鼠标移入事件累计次数
默认值：`0`
- `nClicks` (Real; optional): 监听当前要素累计点击次数
默认值：`0`
- `pathOptions` (optional): 矢量样式配置参数
- `radius` (Real; required): 必填，圆形半径，单位：米
"""
function ''_leafletcircle(; kwargs...)
        available_props = Symbol[:children, :id, :center, :className, :editable, :key, :loading_state, :mouseOverCount, :nClicks, :pathOptions, :radius]
        wild_props = Symbol[]
        return Component("''_leafletcircle", "LeafletCircle", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletcircle(children::Any; kwargs...) = ''_leafletcircle(;kwargs..., children = children)
''_leafletcircle(children_maker::Function; kwargs...) = ''_leafletcircle(children_maker(); kwargs...)

