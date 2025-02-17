# AUTO GENERATED FILE - DO NOT EDIT

export ''_fragment

"""
    ''_fragment(;kwargs...)
    ''_fragment(children::Any;kwargs...)
    ''_fragment(children_maker::Function;kwargs...)


A Fragment component.
空节点组件Fragment
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 用于传入内部组件
- `id` (String; optional): 组件唯一id
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
"""
function ''_fragment(; kwargs...)
        available_props = Symbol[:children, :id, :key]
        wild_props = Symbol[]
        return Component("''_fragment", "Fragment", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_fragment(children::Any; kwargs...) = ''_fragment(;kwargs..., children = children)
''_fragment(children_maker::Function; kwargs...) = ''_fragment(children_maker(); kwargs...)

