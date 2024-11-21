# AUTO GENERATED FILE - DO NOT EDIT

export ''_leaflettooltip

"""
    ''_leaflettooltip(;kwargs...)
    ''_leaflettooltip(children::Any;kwargs...)
    ''_leaflettooltip(children_maker::Function;kwargs...)


A LeafletTooltip component.
信息框组件LeafletTooltip
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 信息框内部元素
- `id` (String; optional): 组件唯一id
- `className` (String; optional): 信息框css类名
- `direction` (a value equal to: 'right', 'left', 'top', 'bottom', 'center', 'auto'; optional): 信息框展开方向，可选项有`'right'`、`'left'`、`'top'`、`'bottom'`、`'center'`、`'auto'`
默认值：`'auto'`
- `interactive` (Bool; optional): 信息框内部元素是否可交互
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `opacity` (Real; optional): 信息框透明度
默认值：`0.9`
- `permanent` (Bool; optional): 信息框是否保持展开状态，而无需鼠标移入触发
默认值：`false`
- `sticky` (Bool; optional): 信息框是否跟随鼠标位置
默认值：`false`
"""
function ''_leaflettooltip(; kwargs...)
        available_props = Symbol[:children, :id, :className, :direction, :interactive, :key, :loading_state, :opacity, :permanent, :sticky]
        wild_props = Symbol[]
        return Component("''_leaflettooltip", "LeafletTooltip", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leaflettooltip(children::Any; kwargs...) = ''_leaflettooltip(;kwargs..., children = children)
''_leaflettooltip(children_maker::Function; kwargs...) = ''_leaflettooltip(children_maker(); kwargs...)

