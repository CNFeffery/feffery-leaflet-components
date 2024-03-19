# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletgeojson

"""
    ''_leafletgeojson(;kwargs...)

A LeafletGeoJSON component.

Keyword arguments:
- `id` (String; optional)
- `_clickedFeature` (Dict; optional)
- `_hoveredFeature` (Dict; optional)
- `circleMarkerRadius` (Real; optional)
- `clickFeatureZoom` (Bool; optional)
- `data` (Dict; required)
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
- `fitBoundsOptions` (optional): . fitBoundsOptions has the following type: lists containing elements 'maxZoom', 'animate', 'duration', 'padding'.
Those elements have the following types:
  - `maxZoom` (Real; optional): 执行fitBounds动作后的地图最大缩放级别
  - `animate` (Bool; optional): fitBounds过程是否开启动画
  - `duration` (Real; optional): 对于开启过渡动画效果的gitBounds动作，设置动画持续时长，单位：秒
默认：0.25
  - `padding` (Array of Reals; optional): 为fitBounds动作调整后的视角，设置四周额外的像素大小留白空间，格式如[上下留白, 左右留白]
- `hoverStyle` (optional)
- `hoverable` (Bool; optional)
- `key` (String; optional): 强制刷新用
- `lassoButtonPosition` (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional)
- `lassoResetSelectedFeatureIds` (Bool; optional)
- `lassoSelect` (Bool; optional)
- `lassoStyle` (optional)
- `lassoType` (a value equal to: 'contain', 'intersect'; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `mode` (a value equal to: 'default', 'selectable', 'choropleth', 'category'; optional)
- `pointRenderMode` (a value equal to: 'marker', 'circle-marker'; optional)
- `selectMode` (a value equal to: 'single', 'multiple'; optional)
- `selectedFeatureIds` (Array; optional)
- `selectedStyle` (optional)
- `showTooltip` (Bool; optional)
- `tooltipClassName` (String; optional)
- `tooltipDirection` (a value equal to: 'right', 'left', 'top', 'bottom', 'center', 'auto'; optional)
- `tooltipPermanent` (Bool; optional)
- `tooltipSticky` (Bool; optional)
"""
function ''_leafletgeojson(; kwargs...)
        available_props = Symbol[:id, :_clickedFeature, :_hoveredFeature, :circleMarkerRadius, :clickFeatureZoom, :data, :defaultStyle, :disableClickSelect, :featureCategoryField, :featureCategoryToStyles, :featureIdField, :featureTooltipField, :featureValueField, :featureValueToStyles, :fitBounds, :fitBoundsOptions, :hoverStyle, :hoverable, :key, :lassoButtonPosition, :lassoResetSelectedFeatureIds, :lassoSelect, :lassoStyle, :lassoType, :loading_state, :mode, :pointRenderMode, :selectMode, :selectedFeatureIds, :selectedStyle, :showTooltip, :tooltipClassName, :tooltipDirection, :tooltipPermanent, :tooltipSticky]
        wild_props = Symbol[]
        return Component("''_leafletgeojson", "LeafletGeoJSON", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

