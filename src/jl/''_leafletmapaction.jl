# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletmapaction

"""
    ''_leafletmapaction(;kwargs...)

A LeafletMapAction component.

Keyword arguments:
- `id` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `mapActionConfig` (Bool | Real | String | Dict | Array; optional)
"""
function ''_leafletmapaction(; kwargs...)
        available_props = Symbol[:id, :loading_state, :mapActionConfig]
        wild_props = Symbol[]
        return Component("''_leafletmapaction", "LeafletMapAction", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

