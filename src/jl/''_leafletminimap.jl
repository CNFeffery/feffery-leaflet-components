# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletminimap

"""
    ''_leafletminimap(;kwargs...)

A LeafletMiniMap component.

Keyword arguments:
- `id` (String; optional)
- `aimingRectOptions` (optional)
- `attribution` (String; optional)
- `autoToggleDisplay` (Bool; optional)
- `collapsedHeight` (Real; optional)
- `collapsedWidth` (Real; optional)
- `height` (Real; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxZoom` (Real; optional)
- `minZoom` (Real; optional)
- `minimized` (Bool; optional)
- `opacity` (Real; optional)
- `position` (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional)
- `shadowRectOptions` (optional)
- `toggleDisplay` (Bool; optional)
- `url` (String; optional)
- `width` (Real; optional)
- `zIndex` (Real; optional)
- `zoomAnimation` (Bool; optional)
- `zoomLevelFixed` (Real; optional)
- `zoomLevelOffset` (Real; optional)
"""
function ''_leafletminimap(; kwargs...)
        available_props = Symbol[:id, :aimingRectOptions, :attribution, :autoToggleDisplay, :collapsedHeight, :collapsedWidth, :height, :loading_state, :maxZoom, :minZoom, :minimized, :opacity, :position, :shadowRectOptions, :toggleDisplay, :url, :width, :zIndex, :zoomAnimation, :zoomLevelFixed, :zoomLevelOffset]
        wild_props = Symbol[]
        return Component("''_leafletminimap", "LeafletMiniMap", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

