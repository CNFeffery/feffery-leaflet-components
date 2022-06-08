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
- `minZoom` (Real; optional)
- `scrollWheelZoom` (Bool | a value equal to: 'center'; optional)
- `showMeasurements` (Bool; optional)
- `style` (Dict; optional)
- `wheelPxPerZoomLevel` (Real; optional)
- `zoom` (Real; optional)
- `zoomControl` (Bool; optional)
- `zoomDelta` (Real; optional)
"""
function ''_leafletmap(; kwargs...)
        available_props = Symbol[:children, :id, :_drawnShapes, :center, :className, :closePopupOnClick, :doubleClickZoom, :dragging, :editToolbar, :editToolbarControlsOptions, :loading_state, :maxBounds, :maxDrawnShapes, :maxZoom, :minZoom, :scrollWheelZoom, :showMeasurements, :style, :wheelPxPerZoomLevel, :zoom, :zoomControl, :zoomDelta]
        wild_props = Symbol[]
        return Component("''_leafletmap", "LeafletMap", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletmap(children::Any; kwargs...) = ''_leafletmap(;kwargs..., children = children)
''_leafletmap(children_maker::Function; kwargs...) = ''_leafletmap(children_maker(); kwargs...)

