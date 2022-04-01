# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletmap

"""
    ''_leafletmap(;kwargs...)
    ''_leafletmap(children::Any;kwargs...)
    ''_leafletmap(children_maker::Function;kwargs...)


A LeafletMap component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `loading` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
"""
function ''_leafletmap(; kwargs...)
        available_props = Symbol[:children, :id, :className, :loading, :loading_state, :style]
        wild_props = Symbol[]
        return Component("''_leafletmap", "LeafletMap", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletmap(children::Any; kwargs...) = ''_leafletmap(;kwargs..., children = children)
''_leafletmap(children_maker::Function; kwargs...) = ''_leafletmap(children_maker(); kwargs...)

