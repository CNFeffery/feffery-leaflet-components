# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletantpath

"""
    ''_leafletantpath(;kwargs...)

A LeafletAntPath component.

Keyword arguments:
- `id` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `pathOptions` (optional)
- `positions` (optional): . positions has the following type: Array of lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)s | Array of Array of lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)ss
"""
function ''_leafletantpath(; kwargs...)
        available_props = Symbol[:id, :loading_state, :pathOptions, :positions]
        wild_props = Symbol[]
        return Component("''_leafletantpath", "LeafletAntPath", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

