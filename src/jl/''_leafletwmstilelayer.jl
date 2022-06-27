# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletwmstilelayer

"""
    ''_leafletwmstilelayer(;kwargs...)

A LeafletWMSTileLayer component.

Keyword arguments:
- `id` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `opacity` (Real; optional)
- `url` (String; optional)
- `zIndex` (Real; optional)
"""
function ''_leafletwmstilelayer(; kwargs...)
        available_props = Symbol[:id, :loading_state, :opacity, :url, :zIndex]
        wild_props = Symbol[]
        return Component("''_leafletwmstilelayer", "LeafletWMSTileLayer", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

