# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletcircle

"""
    ''_leafletcircle(;kwargs...)
    ''_leafletcircle(children::Any;kwargs...)
    ''_leafletcircle(children_maker::Function;kwargs...)


A LeafletCircle component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `center` (required): . center has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)
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
- `radius` (Real; required)
"""
function ''_leafletcircle(; kwargs...)
        available_props = Symbol[:children, :id, :center, :className, :editable, :key, :loading_state, :mouseOverCount, :nClicks, :pathOptions, :radius]
        wild_props = Symbol[]
        return Component("''_leafletcircle", "LeafletCircle", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletcircle(children::Any; kwargs...) = ''_leafletcircle(;kwargs..., children = children)
''_leafletcircle(children_maker::Function; kwargs...) = ''_leafletcircle(children_maker(); kwargs...)

