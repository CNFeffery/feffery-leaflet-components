# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletmapsync

"""
    ''_leafletmapsync(;kwargs...)

A LeafletMapSync component.

Keyword arguments:
- `id` (String; required): 必填，组件id
- `groupId` (String; optional): 地图组id，用于限定地图同步行为发生在当前相同id的组内
- `key` (String; optional): 强制刷新用
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function ''_leafletmapsync(; kwargs...)
        available_props = Symbol[:id, :groupId, :key, :loading_state]
        wild_props = Symbol[]
        return Component("''_leafletmapsync", "LeafletMapSync", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

