# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletexport

"""
    ''_leafletexport(;kwargs...)

A LeafletExport component.

Keyword arguments:
- `id` (String; optional)
- `customSize` (optional): . customSize has the following type: lists containing elements 'width', 'height'.
Those elements have the following types:
  - `width` (Real; optional)
  - `height` (Real; optional)
- `customSizeTooltip` (String; optional)
- `filename` (String; optional)
- `hidden` (Bool; optional)
- `hideControlContainer` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `position` (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional)
- `sizeModes` (Array of a value equal to: 'A4Landscape', 'A4Portrait's; optional)
- `tileWait` (Real; optional)
"""
function ''_leafletexport(; kwargs...)
        available_props = Symbol[:id, :customSize, :customSizeTooltip, :filename, :hidden, :hideControlContainer, :loading_state, :position, :sizeModes, :tileWait]
        wild_props = Symbol[]
        return Component("''_leafletexport", "LeafletExport", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

