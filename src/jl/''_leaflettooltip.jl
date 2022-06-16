# AUTO GENERATED FILE - DO NOT EDIT

export ''_leaflettooltip

"""
    ''_leaflettooltip(;kwargs...)
    ''_leaflettooltip(children::Any;kwargs...)
    ''_leaflettooltip(children_maker::Function;kwargs...)


A LeafletTooltip component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `bubblingMouseEvents` (Bool; optional)
- `className` (String; optional)
- `direction` (a value equal to: 'right', 'left', 'top', 'bottom', 'center', 'auto'; optional)
- `interactive` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `opacity` (Real; optional)
- `permanent` (Bool; optional)
- `position` (optional): . position has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)
- `sticky` (Bool; optional)
"""
function ''_leaflettooltip(; kwargs...)
        available_props = Symbol[:children, :id, :bubblingMouseEvents, :className, :direction, :interactive, :loading_state, :opacity, :permanent, :position, :sticky]
        wild_props = Symbol[]
        return Component("''_leaflettooltip", "LeafletTooltip", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leaflettooltip(children::Any; kwargs...) = ''_leaflettooltip(;kwargs..., children = children)
''_leaflettooltip(children_maker::Function; kwargs...) = ''_leaflettooltip(children_maker(); kwargs...)

