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
- `hideControlContainer` (Bool; optional)
- `key` (String; optional): 强制刷新用
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `position` (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional)
- `tileWait` (Real; optional)
"""
function ''_leafletexport(; kwargs...)
        available_props = Symbol[:id, :customSize, :customSizeTooltip, :filename, :hideControlContainer, :key, :loading_state, :position, :tileWait]
        wild_props = Symbol[]
        return Component("''_leafletexport", "LeafletExport", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

