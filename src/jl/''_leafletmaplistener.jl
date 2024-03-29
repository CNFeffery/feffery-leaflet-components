# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletmaplistener

"""
    ''_leafletmaplistener(;kwargs...)

A LeafletMapListener component.

Keyword arguments:
- `id` (String; optional)
- `_bounds` (optional): . _bounds has the following type: lists containing elements 'minx', 'miny', 'maxx', 'maxy'.
Those elements have the following types:
  - `minx` (Real; optional)
  - `miny` (Real; optional)
  - `maxx` (Real; optional)
  - `maxy` (Real; optional)
- `_center` (optional): . _center has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)
- `_clickedLatLng` (optional): . _clickedLatLng has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)
- `_zoom` (Real; optional)
- `debug` (Bool; optional)
- `key` (String; optional): 强制刷新用
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function ''_leafletmaplistener(; kwargs...)
        available_props = Symbol[:id, :_bounds, :_center, :_clickedLatLng, :_zoom, :debug, :key, :loading_state]
        wild_props = Symbol[]
        return Component("''_leafletmaplistener", "LeafletMapListener", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

