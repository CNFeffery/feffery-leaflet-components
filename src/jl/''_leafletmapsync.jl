# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletmapsync

"""
    ''_leafletmapsync(;kwargs...)

A LeafletMapSync component.
地图同步组件LeafletMapSync
Keyword arguments:
- `id` (String; required): 必填，组件唯一id
- `groupId` (String; optional): 地图组`id`，用于限定地图同步行为发生在当前相同`id`的组内
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `syncStrategy` (a value equal to: 'all', 'center'; optional): 同步行为策略，可选项有`'all'`、`'center'`
默认值：`'all'`
"""
function ''_leafletmapsync(; kwargs...)
        available_props = Symbol[:id, :groupId, :key, :loading_state, :syncStrategy]
        wild_props = Symbol[]
        return Component("''_leafletmapsync", "LeafletMapSync", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

