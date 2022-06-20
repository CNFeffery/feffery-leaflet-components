# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletrectangle

"""
    ''_leafletrectangle(;kwargs...)
    ''_leafletrectangle(children::Any;kwargs...)
    ''_leafletrectangle(children_maker::Function;kwargs...)


A LeafletRectangle component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `bounds` (required): . bounds has the following type: lists containing elements 'minx', 'miny', 'maxx', 'maxy'.
Those elements have the following types:
  - `minx` (Real; required)
  - `miny` (Real; required)
  - `maxx` (Real; required)
  - `maxy` (Real; required)
- `editable` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `pathOptions` (optional)
"""
function ''_leafletrectangle(; kwargs...)
        available_props = Symbol[:children, :id, :bounds, :editable, :loading_state, :pathOptions]
        wild_props = Symbol[]
        return Component("''_leafletrectangle", "LeafletRectangle", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletrectangle(children::Any; kwargs...) = ''_leafletrectangle(;kwargs..., children = children)
''_leafletrectangle(children_maker::Function; kwargs...) = ''_leafletrectangle(children_maker(); kwargs...)

