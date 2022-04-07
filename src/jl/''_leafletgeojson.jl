# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletgeojson

"""
    ''_leafletgeojson(;kwargs...)
    ''_leafletgeojson(children::Any;kwargs...)
    ''_leafletgeojson(children_maker::Function;kwargs...)


A LeafletGeoJSON component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `data` (Dict; optional)
- `editable` (Bool; optional)
- `fitBounds` (Bool; optional)
- `idFieldName` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `selectMode` (a value equal to: 'default', 'multiple'; optional)
- `selectedFeatureIds` (Array; optional)
- `selectedFeatureStyle` (Dict; optional)
- `style` (Dict; optional)
"""
function ''_leafletgeojson(; kwargs...)
        available_props = Symbol[:children, :id, :className, :data, :editable, :fitBounds, :idFieldName, :loading_state, :selectMode, :selectedFeatureIds, :selectedFeatureStyle, :style]
        wild_props = Symbol[]
        return Component("''_leafletgeojson", "LeafletGeoJSON", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletgeojson(children::Any; kwargs...) = ''_leafletgeojson(;kwargs..., children = children)
''_leafletgeojson(children_maker::Function; kwargs...) = ''_leafletgeojson(children_maker(); kwargs...)

