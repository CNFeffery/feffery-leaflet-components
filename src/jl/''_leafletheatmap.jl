# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletheatmap

"""
    ''_leafletheatmap(;kwargs...)

A LeafletHeatMap component.

Keyword arguments:
- `id` (String; optional)
- `blur` (Real; optional)
- `gradient` (Dict; optional)
- `key` (String; optional): 强制刷新用
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `max` (Real; optional)
- `minOpacity` (Real; optional)
- `points` (optional): . points has the following type: Array of lists containing elements 'lng', 'lat', 'weight'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)
  - `weight` (Real; optional)s
- `radius` (Real; optional)
"""
function ''_leafletheatmap(; kwargs...)
        available_props = Symbol[:id, :blur, :gradient, :key, :loading_state, :max, :minOpacity, :points, :radius]
        wild_props = Symbol[]
        return Component("''_leafletheatmap", "LeafletHeatMap", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

