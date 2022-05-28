# AUTO GENERATED FILE - DO NOT EDIT

export ''_leaflettilelayer

"""
    ''_leaflettilelayer(;kwargs...)
    ''_leaflettilelayer(children::Any;kwargs...)
    ''_leaflettilelayer(children_maker::Function;kwargs...)


A LeafletTileLayer component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `attribution` (String; optional)
- `className` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `opacity` (Real; optional)
- `style` (Dict; optional)
- `url` (String; optional)
- `zIndex` (Real; optional)
"""
function ''_leaflettilelayer(; kwargs...)
        available_props = Symbol[:children, :id, :attribution, :className, :loading_state, :opacity, :style, :url, :zIndex]
        wild_props = Symbol[]
        return Component("''_leaflettilelayer", "LeafletTileLayer", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leaflettilelayer(children::Any; kwargs...) = ''_leaflettilelayer(;kwargs..., children = children)
''_leaflettilelayer(children_maker::Function; kwargs...) = ''_leaflettilelayer(children_maker(); kwargs...)

