# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletpopup

"""
    ''_leafletpopup(;kwargs...)
    ''_leafletpopup(children::Any;kwargs...)
    ''_leafletpopup(children_maker::Function;kwargs...)


A LeafletPopup component.
弹框组件LeafletPopup
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 弹框内部元素
- `id` (String; optional): 组件唯一id
- `className` (String; optional): 弹框css类名
- `closeButton` (Bool; optional): 是否显示关闭按钮
默认值：`false`
- `closeOnClick` (Bool; optional): 点击地图空白处是否可关闭弹框
默认值：`true`
- `closeOnEscapeKey` (Bool; optional): 通过键盘`esc`键是否可关闭弹框
默认值：`true`
- `keepInView` (Bool; optional): 已展开的弹框是否限制在地图范围内显示
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `width` (Real; optional): 为弹框设置固定像素宽度值
"""
function ''_leafletpopup(; kwargs...)
        available_props = Symbol[:children, :id, :className, :closeButton, :closeOnClick, :closeOnEscapeKey, :keepInView, :key, :loading_state, :width]
        wild_props = Symbol[]
        return Component("''_leafletpopup", "LeafletPopup", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletpopup(children::Any; kwargs...) = ''_leafletpopup(;kwargs..., children = children)
''_leafletpopup(children_maker::Function; kwargs...) = ''_leafletpopup(children_maker(); kwargs...)

