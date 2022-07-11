# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletgeojson

"""
    ''_leafletgeojson(;kwargs...)

A LeafletGeoJSON component.

Keyword arguments:
- `id` (String; optional)
- `_clickedFeature` (Dict; optional)
- `_hoveredFeature` (Dict; optional)
- `clickFeatureZoom` (Bool; optional)
- `data` (Dict; optional)
- `defaultStyle` (optional)
- `disableClickSelect` (Bool; optional)
- `featureCategoryField` (String; optional)
- `featureCategoryToStyles` (Dict with Strings as keys and values of type ; optional)
- `featureIdField` (String; optional)
- `featureTooltipField` (String; optional)
- `featureValueField` (String; optional)
- `featureValueToStyles` (optional): . featureValueToStyles has the following type: lists containing elements 'bins', 'styles', 'closed'.
Those elements have the following types:
  - `bins` (Array of Array of Realss; optional)
  - `styles` (Array; optional)
  - `closed` (a value equal to: 'left', 'right'; optional)
- `fitBounds` (Bool; optional)
- `hoverStyle` (optional)
- `hoverable` (Bool; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `mode` (a value equal to: 'default', 'selectable', 'choropleth', 'category'; optional)
- `selectMode` (a value equal to: 'single', 'multiple'; optional)
- `selectedFeatureIds` (Array; optional)
- `selectedStyle` (optional)
- `showTooltip` (Bool; optional)
- `tooltipSticky` (Bool; optional)
"""
function ''_leafletgeojson(; kwargs...)
        available_props = Symbol[:id, :_clickedFeature, :_hoveredFeature, :clickFeatureZoom, :data, :defaultStyle, :disableClickSelect, :featureCategoryField, :featureCategoryToStyles, :featureIdField, :featureTooltipField, :featureValueField, :featureValueToStyles, :fitBounds, :hoverStyle, :hoverable, :key, :loading_state, :mode, :selectMode, :selectedFeatureIds, :selectedStyle, :showTooltip, :tooltipSticky]
        wild_props = Symbol[]
        return Component("''_leafletgeojson", "LeafletGeoJSON", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

