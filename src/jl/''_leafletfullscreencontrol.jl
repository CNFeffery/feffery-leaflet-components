# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletfullscreencontrol

"""
    ''_leafletfullscreencontrol(;kwargs...)

A LeafletFullscreenControl component.

Keyword arguments:
- `id` (String; optional)
- `forceSeparateButton` (Bool; optional)
- `key` (String; optional): 强制刷新用
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `position` (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional)
"""
function ''_leafletfullscreencontrol(; kwargs...)
        available_props = Symbol[:id, :forceSeparateButton, :key, :loading_state, :position]
        wild_props = Symbol[]
        return Component("''_leafletfullscreencontrol", "LeafletFullscreenControl", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

