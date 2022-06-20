# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletcirclemarker

"""
    ''_leafletcirclemarker(;kwargs...)
    ''_leafletcirclemarker(children::Any;kwargs...)
    ''_leafletcirclemarker(children_maker::Function;kwargs...)


A LeafletCircleMarker component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `center` (required): . center has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)
- `editable` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `pathOptions` (optional)
- `radius` (Real; optional)
"""
function ''_leafletcirclemarker(; kwargs...)
        available_props = Symbol[:children, :id, :center, :editable, :loading_state, :pathOptions, :radius]
        wild_props = Symbol[]
        return Component("''_leafletcirclemarker", "LeafletCircleMarker", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletcirclemarker(children::Any; kwargs...) = ''_leafletcirclemarker(;kwargs..., children = children)
''_leafletcirclemarker(children_maker::Function; kwargs...) = ''_leafletcirclemarker(children_maker(); kwargs...)

