# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletmapaction

"""
    ''_leafletmapaction(;kwargs...)

A LeafletMapAction component.

Keyword arguments:
- `id` (String; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `mapActionConfig` (optional): . mapActionConfig has the following type: lists containing elements 'type', 'center', 'zoom', 'zoomInOffset', 'zoomOutOffset', 'bounds', 'flyToDuration', 'delay'.
Those elements have the following types:
  - `type` (a value equal to: 'set-zoom', 'zoom-in', 'zoom-out', 'set-view', 'pan-to', 'fly-to', 'fly-to-bounds', 'invalidate-size'; optional)
  - `center` (optional): . center has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)
  - `zoom` (Real; optional)
  - `zoomInOffset` (Real; optional)
  - `zoomOutOffset` (Real; optional)
  - `bounds` (optional): . bounds has the following type: lists containing elements 'minx', 'miny', 'maxx', 'maxy'.
Those elements have the following types:
  - `minx` (Real; optional)
  - `miny` (Real; optional)
  - `maxx` (Real; optional)
  - `maxy` (Real; optional)
  - `flyToDuration` (a value equal to: 'instant', 'fast', 'normal', 'slow', 'auto'; optional)
  - `delay` (Real; optional): 设置当前动作的延时执行时长，单位：毫秒
默认：0
"""
function ''_leafletmapaction(; kwargs...)
        available_props = Symbol[:id, :key, :loading_state, :mapActionConfig]
        wild_props = Symbol[]
        return Component("''_leafletmapaction", "LeafletMapAction", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

