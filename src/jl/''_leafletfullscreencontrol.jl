# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletfullscreencontrol

"""
    ''_leafletfullscreencontrol(;kwargs...)

A LeafletFullscreenControl component.
地图全屏化组件LeafletFullscreenControl
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `forceSeparateButton` (Bool; optional): 控件按钮是否强制脱离于地图缩放控件
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `position` (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional): 全屏控件方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
"""
function ''_leafletfullscreencontrol(; kwargs...)
        available_props = Symbol[:id, :forceSeparateButton, :key, :loading_state, :position]
        wild_props = Symbol[]
        return Component("''_leafletfullscreencontrol", "LeafletFullscreenControl", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

