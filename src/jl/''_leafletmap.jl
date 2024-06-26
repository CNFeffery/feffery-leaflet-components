# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletmap

"""
    ''_leafletmap(;kwargs...)
    ''_leafletmap(children::Any;kwargs...)
    ''_leafletmap(children_maker::Function;kwargs...)


A LeafletMap component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `_drawnShapes` (Array; optional)
- `center` (optional): . center has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)
- `className` (String; optional)
- `closePopupOnClick` (Bool; optional)
- `crs` (optional): 为当前地图配置坐标参考系
当传入字符串时，表示内置的几种基础坐标参考系，可选的有'EPSG3857'、'EPSG4326'、'simple'
当传入字典时，用于使用自定义坐标参考系
默认：'EPSG3857'. crs has the following type: a value equal to: 'EPSG3857', 'EPSG4326', 'simple' | lists containing elements 'code', 'proj4def', 'options'.
Those elements have the following types:
  - `code` (String; optional): 坐标系代码，如EPSG:4490
  - `proj4def` (String; optional): 坐标系def字符串
  - `options` (Dict; optional): 其他坐标系参数
- `doubleClickZoom` (Bool; optional)
- `dragging` (Bool; optional)
- `editToolbar` (Bool; optional)
- `editToolbarControlsOptions` (optional): . editToolbarControlsOptions has the following type: lists containing elements 'position', 'drawMarker', 'drawCircleMarker', 'drawPolyline', 'drawRectangle', 'drawPolygon', 'drawCircle', 'drawText', 'editMode', 'dragMode', 'cutPolygon', 'removalMode', 'rotateMode', 'oneBlock'.
Those elements have the following types:
  - `position` (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional)
  - `drawMarker` (Bool; optional)
  - `drawCircleMarker` (Bool; optional)
  - `drawPolyline` (Bool; optional)
  - `drawRectangle` (Bool; optional)
  - `drawPolygon` (Bool; optional)
  - `drawCircle` (Bool; optional)
  - `drawText` (Bool; optional)
  - `editMode` (Bool; optional)
  - `dragMode` (Bool; optional)
  - `cutPolygon` (Bool; optional)
  - `removalMode` (Bool; optional)
  - `rotateMode` (Bool; optional)
  - `oneBlock` (Bool; optional)
- `key` (String; optional): 强制刷新用
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxBounds` (optional): . maxBounds has the following type: lists containing elements 'minx', 'miny', 'maxx', 'maxy'.
Those elements have the following types:
  - `minx` (Real; optional)
  - `miny` (Real; optional)
  - `maxx` (Real; optional)
  - `maxy` (Real; optional)
- `maxDrawnShapes` (Real; optional)
- `maxZoom` (Real; optional)
- `measureControl` (Bool; optional)
- `measureControlOptions` (optional): . measureControlOptions has the following type: lists containing elements 'position', 'activeColor', 'completedColor'.
Those elements have the following types:
  - `position` (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional)
  - `activeColor` (String; optional)
  - `completedColor` (String; optional)
- `minZoom` (Real; optional)
- `scaleControl` (Bool; optional): 设置是否显示比例尺
默认：false
- `scaleControlOptions` (optional): 配置比例尺相关参数. scaleControlOptions has the following type: lists containing elements 'position', 'imperial'.
Those elements have the following types:
  - `position` (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional): 设置比例尺的方位，可选的有'topleft'、'topright'、'bottomleft'、'bottomright'
  - `imperial` (Bool; optional): 是否显示英制单位
默认：true
- `scrollWheelZoom` (Bool | a value equal to: 'center'; optional)
- `showMeasurements` (Bool; optional)
- `smoothWheelZoom` (Bool | a value equal to: 'center'; optional)
- `style` (Dict; optional)
- `viewAutoCorrection` (Bool; optional)
- `wheelPxPerZoomLevel` (Real; optional)
- `zoom` (Real; optional)
- `zoomControl` (Bool; optional)
- `zoomDelta` (Real; optional)
"""
function ''_leafletmap(; kwargs...)
        available_props = Symbol[:children, :id, :_drawnShapes, :center, :className, :closePopupOnClick, :crs, :doubleClickZoom, :dragging, :editToolbar, :editToolbarControlsOptions, :key, :loading_state, :maxBounds, :maxDrawnShapes, :maxZoom, :measureControl, :measureControlOptions, :minZoom, :scaleControl, :scaleControlOptions, :scrollWheelZoom, :showMeasurements, :smoothWheelZoom, :style, :viewAutoCorrection, :wheelPxPerZoomLevel, :zoom, :zoomControl, :zoomDelta]
        wild_props = Symbol[]
        return Component("''_leafletmap", "LeafletMap", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletmap(children::Any; kwargs...) = ''_leafletmap(;kwargs..., children = children)
''_leafletmap(children_maker::Function; kwargs...) = ''_leafletmap(children_maker(); kwargs...)

