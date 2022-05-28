# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletcircle

"""
    ''_leafletcircle(;kwargs...)

A LeafletCircle component.

Keyword arguments:
- `id` (String; optional)
- `center` (required): . center has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `pathOptions` (optional)
- `radius` (Real; required)
"""
function ''_leafletcircle(; kwargs...)
        available_props = Symbol[:id, :center, :loading_state, :pathOptions, :radius]
        wild_props = Symbol[]
        return Component("''_leafletcircle", "LeafletCircle", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

