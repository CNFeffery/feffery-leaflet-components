# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletfeaturegroup

"""
    ''_leafletfeaturegroup(;kwargs...)
    ''_leafletfeaturegroup(children::Any;kwargs...)
    ''_leafletfeaturegroup(children_maker::Function;kwargs...)


A LeafletFeatureGroup component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `_bounds` (optional): . _bounds has the following type: lists containing elements 'minx', 'miny', 'maxx', 'maxy'.
Those elements have the following types:
  - `minx` (Real; optional)
  - `miny` (Real; optional)
  - `maxx` (Real; optional)
  - `maxy` (Real; optional)
- `bringToFront` (Bool; optional)
- `key` (String; optional): 强制刷新用
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `zIndex` (Real; optional)
"""
function ''_leafletfeaturegroup(; kwargs...)
        available_props = Symbol[:children, :id, :_bounds, :bringToFront, :key, :loading_state, :zIndex]
        wild_props = Symbol[]
        return Component("''_leafletfeaturegroup", "LeafletFeatureGroup", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletfeaturegroup(children::Any; kwargs...) = ''_leafletfeaturegroup(;kwargs..., children = children)
''_leafletfeaturegroup(children_maker::Function; kwargs...) = ''_leafletfeaturegroup(children_maker(); kwargs...)

