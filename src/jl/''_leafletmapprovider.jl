# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletmapprovider

"""
    ''_leafletmapprovider(;kwargs...)
    ''_leafletmapprovider(children::Any;kwargs...)
    ''_leafletmapprovider(children_maker::Function;kwargs...)


A LeafletMapProvider component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 用于传入内部组件
- `id` (String; optional): 组件id
- `key` (String; optional): 强制刷新用
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function ''_leafletmapprovider(; kwargs...)
        available_props = Symbol[:children, :id, :key, :loading_state]
        wild_props = Symbol[]
        return Component("''_leafletmapprovider", "LeafletMapProvider", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletmapprovider(children::Any; kwargs...) = ''_leafletmapprovider(;kwargs..., children = children)
''_leafletmapprovider(children_maker::Function; kwargs...) = ''_leafletmapprovider(children_maker(); kwargs...)

