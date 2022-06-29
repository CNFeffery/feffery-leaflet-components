# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletsupercluster

"""
    ''_leafletsupercluster(;kwargs...)

A LeafletSuperCluster component.

Keyword arguments:
- `id` (String; optional)
- `clusterBackground` (String; optional)
- `clusterBorder` (String; optional)
- `clusterIconBaseSize` (Real; optional)
- `clusterIconExtraSizeFactor` (Real; optional)
- `clusterTextColor` (String; optional)
- `clusterTextSizeFactor` (Real; optional)
- `extent` (Real; optional)
- `iconOptions` (optional): . iconOptions has the following type: lists containing elements 'iconUrl', 'iconSize', 'iconAnchor', 'popupAnchor', 'tooltipAnchor', 'shadowUrl', 'shadowSize', 'shadowAnchor', 'className'.
Those elements have the following types:
  - `iconUrl` (String; optional)
  - `iconSize` (Array of Reals; optional)
  - `iconAnchor` (Array of Reals; optional)
  - `popupAnchor` (Array of Reals; optional)
  - `tooltipAnchor` (Array of Reals; optional)
  - `shadowUrl` (String; optional)
  - `shadowSize` (Array of Reals; optional)
  - `shadowAnchor` (Array of Reals; optional)
  - `className` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxZoom` (Real; optional)
- `minPoints` (Real; optional)
- `minZoom` (Real; optional)
- `nodeSize` (Real; optional)
- `positions` (Array of Dicts; required)
- `radius` (Real; optional)
- `tooltipField` (String; optional)
- `tooltipSticky` (Bool; optional)
"""
function ''_leafletsupercluster(; kwargs...)
        available_props = Symbol[:id, :clusterBackground, :clusterBorder, :clusterIconBaseSize, :clusterIconExtraSizeFactor, :clusterTextColor, :clusterTextSizeFactor, :extent, :iconOptions, :loading_state, :maxZoom, :minPoints, :minZoom, :nodeSize, :positions, :radius, :tooltipField, :tooltipSticky]
        wild_props = Symbol[]
        return Component("''_leafletsupercluster", "LeafletSuperCluster", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

