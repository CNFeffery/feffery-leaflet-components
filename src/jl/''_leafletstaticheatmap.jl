# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletstaticheatmap

"""
    ''_leafletstaticheatmap(;kwargs...)

A LeafletStaticHeatMap component.

Keyword arguments:
- `id` (String; optional)
- `alphaRange` (Real; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `multiplyFactor` (Real; optional)
- `opacity` (Real; optional)
- `points` (optional): . points has the following type: Array of lists containing elements 'lng', 'lat', 'weight'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)
  - `weight` (Real; optional)s
- `size` (Real; optional)
"""
function ''_leafletstaticheatmap(; kwargs...)
        available_props = Symbol[:id, :alphaRange, :loading_state, :multiplyFactor, :opacity, :points, :size]
        wild_props = Symbol[]
        return Component("''_leafletstaticheatmap", "LeafletStaticHeatMap", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

