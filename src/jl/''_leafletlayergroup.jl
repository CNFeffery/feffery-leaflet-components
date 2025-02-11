# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletlayergroup

"""
    ''_leafletlayergroup(;kwargs...)
    ''_leafletlayergroup(children::Any;kwargs...)
    ''_leafletlayergroup(children_maker::Function;kwargs...)


A LeafletLayerGroup component.
图层分组组件LeafletLayerGroup
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 传入内部相关图层类组件
- `id` (String; optional): 组件唯一id
- `hidden` (Bool; optional): 是否隐藏当前图层分组
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `zIndex` (Real; optional): 当前要素分组`z`轴层级
"""
function ''_leafletlayergroup(; kwargs...)
        available_props = Symbol[:children, :id, :hidden, :key, :zIndex]
        wild_props = Symbol[]
        return Component("''_leafletlayergroup", "LeafletLayerGroup", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletlayergroup(children::Any; kwargs...) = ''_leafletlayergroup(;kwargs..., children = children)
''_leafletlayergroup(children_maker::Function; kwargs...) = ''_leafletlayergroup(children_maker(); kwargs...)

