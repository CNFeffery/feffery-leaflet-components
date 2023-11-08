# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletflowlayer

"""
    ''_leafletflowlayer(;kwargs...)

A LeafletFlowLayer component.

Keyword arguments:
- `id` (String; optional)
- `arcLabel` (Bool; optional)
- `arcLabelFontFamily` (String; optional)
- `arcLabelFontSize` (String; optional)
- `arcWidth` (Real; optional)
- `flowData` (optional): . flowData has the following type: Array of lists containing elements 'from', 'to', 'labels', 'color', 'value'.
Those elements have the following types:
  - `from` (optional): . from has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)
  - `to` (optional): . to has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)
  - `labels` (optional): . labels has the following type: lists containing elements 'from', 'to'.
Those elements have the following types:
  - `from` (String; optional)
  - `to` (String; optional)
  - `color` (String; optional)
  - `value` (Real; optional)s
- `keepUniqueLabels` (Bool; optional): 设置是否对起终点标签文字进行去重
默认：false
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxWidth` (Real; optional)
- `pulseBorderWidth` (Real; optional)
- `pulseRadius` (Real; optional)
- `setAction` (a value equal to: 'pause', 'play', 'hide', 'show'; optional): 手动执行动作，可选的有'pause'、'play'、'hide'、'show'，每次有效值更新后会还原为空值
"""
function ''_leafletflowlayer(; kwargs...)
        available_props = Symbol[:id, :arcLabel, :arcLabelFontFamily, :arcLabelFontSize, :arcWidth, :flowData, :keepUniqueLabels, :key, :loading_state, :maxWidth, :pulseBorderWidth, :pulseRadius, :setAction]
        wild_props = Symbol[]
        return Component("''_leafletflowlayer", "LeafletFlowLayer", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

