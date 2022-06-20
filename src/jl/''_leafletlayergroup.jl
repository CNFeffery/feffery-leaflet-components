# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletlayergroup

"""
    ''_leafletlayergroup(;kwargs...)
    ''_leafletlayergroup(children::Any;kwargs...)
    ''_leafletlayergroup(children_maker::Function;kwargs...)


A LeafletLayerGroup component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function ''_leafletlayergroup(; kwargs...)
        available_props = Symbol[:children, :id, :loading_state]
        wild_props = Symbol[]
        return Component("''_leafletlayergroup", "LeafletLayerGroup", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletlayergroup(children::Any; kwargs...) = ''_leafletlayergroup(;kwargs..., children = children)
''_leafletlayergroup(children_maker::Function; kwargs...) = ''_leafletlayergroup(children_maker(); kwargs...)

