# AUTO GENERATED FILE - DO NOT EDIT

export ''_mapprovider

"""
    ''_mapprovider(;kwargs...)
    ''_mapprovider(children::Any;kwargs...)
    ''_mapprovider(children_maker::Function;kwargs...)


A MapProvider component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 用于传入内部组件
- `id` (String; optional): 组件id
- `key` (String; optional): 辅助刷新用唯一标识key值
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function ''_mapprovider(; kwargs...)
        available_props = Symbol[:children, :id, :key, :loading_state]
        wild_props = Symbol[]
        return Component("''_mapprovider", "MapProvider", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_mapprovider(children::Any; kwargs...) = ''_mapprovider(;kwargs..., children = children)
''_mapprovider(children_maker::Function; kwargs...) = ''_mapprovider(children_maker(); kwargs...)

