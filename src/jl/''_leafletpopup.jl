# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletpopup

"""
    ''_leafletpopup(;kwargs...)
    ''_leafletpopup(children::Any;kwargs...)
    ''_leafletpopup(children_maker::Function;kwargs...)


A LeafletPopup component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `closeButton` (Bool; optional)
- `closeOnClick` (Bool; optional)
- `closeOnEscapeKey` (Bool; optional)
- `keepInView` (Bool; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function ''_leafletpopup(; kwargs...)
        available_props = Symbol[:children, :id, :className, :closeButton, :closeOnClick, :closeOnEscapeKey, :keepInView, :key, :loading_state]
        wild_props = Symbol[]
        return Component("''_leafletpopup", "LeafletPopup", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletpopup(children::Any; kwargs...) = ''_leafletpopup(;kwargs..., children = children)
''_leafletpopup(children_maker::Function; kwargs...) = ''_leafletpopup(children_maker(); kwargs...)

