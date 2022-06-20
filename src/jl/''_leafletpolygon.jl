# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletpolygon

"""
    ''_leafletpolygon(;kwargs...)
    ''_leafletpolygon(children::Any;kwargs...)
    ''_leafletpolygon(children_maker::Function;kwargs...)


A LeafletPolygon component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `editable` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `pathOptions` (optional)
- `positions` (optional): . positions has the following type: Array of lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional) | Array of lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)s | Array of Array of lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)sss
"""
function ''_leafletpolygon(; kwargs...)
        available_props = Symbol[:children, :id, :editable, :loading_state, :pathOptions, :positions]
        wild_props = Symbol[]
        return Component("''_leafletpolygon", "LeafletPolygon", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletpolygon(children::Any; kwargs...) = ''_leafletpolygon(;kwargs..., children = children)
''_leafletpolygon(children_maker::Function; kwargs...) = ''_leafletpolygon(children_maker(); kwargs...)

