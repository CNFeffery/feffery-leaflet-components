# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletsupercluster

"""
    ''_leafletsupercluster(;kwargs...)

A LeafletSuperCluster component.

Keyword arguments:
- `id` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `positions` (Array of Dicts; required)
"""
function ''_leafletsupercluster(; kwargs...)
        available_props = Symbol[:id, :loading_state, :positions]
        wild_props = Symbol[]
        return Component("''_leafletsupercluster", "LeafletSuperCluster", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

