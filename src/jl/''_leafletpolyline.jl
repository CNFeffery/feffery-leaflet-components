# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletpolyline

"""
    ''_leafletpolyline(;kwargs...)
    ''_leafletpolyline(children::Any;kwargs...)
    ''_leafletpolyline(children_maker::Function;kwargs...)


A LeafletPolyline component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `arrowheads` (optional): . arrowheads has the following type: Bool | lists containing elements 'yawn', 'fill', 'size', 'frequency', 'proportionalToTotal'.
Those elements have the following types:
  - `yawn` (Real; optional)
  - `fill` (Bool; optional)
  - `size` (Real | String; optional)
  - `frequency` (a value equal to: 'allvertices', 'endonly' | Real | String; optional)
  - `proportionalToTotal` (Bool; optional)
- `arrowheadsPathOptions` (optional)
- `className` (String; optional): 为当前矢量设置className
- `editable` (Bool; optional)
- `key` (String; optional): 强制刷新用
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `mouseOverCount` (Real; optional)
- `nClicks` (Real; optional)
- `pathOptions` (optional)
- `positions` (required): . positions has the following type: Array of lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)s | Array of Array of lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)ss
"""
function ''_leafletpolyline(; kwargs...)
        available_props = Symbol[:children, :id, :arrowheads, :arrowheadsPathOptions, :className, :editable, :key, :loading_state, :mouseOverCount, :nClicks, :pathOptions, :positions]
        wild_props = Symbol[]
        return Component("''_leafletpolyline", "LeafletPolyline", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletpolyline(children::Any; kwargs...) = ''_leafletpolyline(;kwargs..., children = children)
''_leafletpolyline(children_maker::Function; kwargs...) = ''_leafletpolyline(children_maker(); kwargs...)

