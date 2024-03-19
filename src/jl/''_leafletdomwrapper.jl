# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletdomwrapper

"""
    ''_leafletdomwrapper(;kwargs...)
    ''_leafletdomwrapper(children::Any;kwargs...)
    ''_leafletdomwrapper(children_maker::Function;kwargs...)


A LeafletDomWrapper component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 传入需要进行包装的外部自定义元素
- `id` (String; optional)
- `key` (String; optional): 强制刷新用
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function ''_leafletdomwrapper(; kwargs...)
        available_props = Symbol[:children, :id, :key, :loading_state]
        wild_props = Symbol[]
        return Component("''_leafletdomwrapper", "LeafletDomWrapper", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletdomwrapper(children::Any; kwargs...) = ''_leafletdomwrapper(;kwargs..., children = children)
''_leafletdomwrapper(children_maker::Function; kwargs...) = ''_leafletdomwrapper(children_maker(); kwargs...)

