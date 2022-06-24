# AUTO GENERATED FILE - DO NOT EDIT

export ''_leaflettileselect

"""
    ''_leaflettileselect(;kwargs...)

A LeafletTileSelect component.

Keyword arguments:
- `id` (String; optional)
- `center` (optional): . center has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)
- `containerVisible` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `selectedUrl` (String; optional)
- `urls` (optional): . urls has the following type: Array of lists containing elements 'url'.
Those elements have the following types:
  - `url` (String; optional)s
- `zoom` (Real; optional)
"""
function ''_leaflettileselect(; kwargs...)
        available_props = Symbol[:id, :center, :containerVisible, :loading_state, :selectedUrl, :urls, :zoom]
        wild_props = Symbol[]
        return Component("''_leaflettileselect", "LeafletTileSelect", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

