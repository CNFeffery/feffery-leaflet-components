# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletmarker

"""
    ''_leafletmarker(;kwargs...)
    ''_leafletmarker(children::Any;kwargs...)
    ''_leafletmarker(children_maker::Function;kwargs...)


A LeafletMarker component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `autoPan` (Bool; optional)
- `draggable` (Bool; optional)
- `editable` (Bool; optional)
- `icon` (optional): . icon has the following type: lists containing elements 'iconUrl', 'iconSize', 'iconAnchor', 'popupAnchor', 'tooltipAnchor', 'shadowUrl', 'shadowSize', 'shadowAnchor', 'className'.
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
- `opacity` (Real; optional)
- `position` (required): . position has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)
- `riseOnHover` (Bool; optional)
- `zIndexOffset` (Real; optional)
"""
function ''_leafletmarker(; kwargs...)
        available_props = Symbol[:children, :id, :autoPan, :draggable, :editable, :icon, :loading_state, :opacity, :position, :riseOnHover, :zIndexOffset]
        wild_props = Symbol[]
        return Component("''_leafletmarker", "LeafletMarker", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletmarker(children::Any; kwargs...) = ''_leafletmarker(;kwargs..., children = children)
''_leafletmarker(children_maker::Function; kwargs...) = ''_leafletmarker(children_maker(); kwargs...)

