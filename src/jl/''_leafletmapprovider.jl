# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletmapprovider

"""
    ''_leafletmapprovider(;kwargs...)
    ''_leafletmapprovider(children::Any;kwargs...)
    ''_leafletmapprovider(children_maker::Function;kwargs...)


A LeafletMapProvider component.
地图编排组件LeafletMapProvider
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 传入内部需要编排的若干目标`LeafletMap`地图相关组件
- `id` (String; optional): 组件唯一id
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
"""
function ''_leafletmapprovider(; kwargs...)
        available_props = Symbol[:children, :id, :key]
        wild_props = Symbol[]
        return Component("''_leafletmapprovider", "LeafletMapProvider", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletmapprovider(children::Any; kwargs...) = ''_leafletmapprovider(;kwargs..., children = children)
''_leafletmapprovider(children_maker::Function; kwargs...) = ''_leafletmapprovider(children_maker(); kwargs...)

