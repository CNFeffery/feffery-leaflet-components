# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletgeometryeditor

"""
    ''_leafletgeometryeditor(;kwargs...)
    ''_leafletgeometryeditor(children::Any;kwargs...)
    ''_leafletgeometryeditor(children_maker::Function;kwargs...)


A LeafletGeometryEditor component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
"""
function ''_leafletgeometryeditor(; kwargs...)
        available_props = Symbol[:children, :id, :className, :loading_state, :style]
        wild_props = Symbol[]
        return Component("''_leafletgeometryeditor", "LeafletGeometryEditor", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletgeometryeditor(children::Any; kwargs...) = ''_leafletgeometryeditor(;kwargs..., children = children)
''_leafletgeometryeditor(children_maker::Function; kwargs...) = ''_leafletgeometryeditor(children_maker(); kwargs...)

