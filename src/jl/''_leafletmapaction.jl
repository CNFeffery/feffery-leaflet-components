# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletmapaction

"""
    ''_leafletmapaction(;kwargs...)

A LeafletMapAction component.
地图动作组件LeafletMapAction
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `mapActionConfig` (optional): 编排触发新的地图动作. mapActionConfig has the following type: lists containing elements 'type', 'center', 'zoom', 'zoomInOffset', 'zoomOutOffset', 'bounds', 'flyToDuration', 'delay'.
Those elements have the following types:
  - `type` (a value equal to: 'set-zoom', 'zoom-in', 'zoom-out', 'set-view', 'pan-to', 'fly-to', 'fly-to-bounds', 'invalidate-size'; optional): 地图动作类型，可选项有`'set-zoom'`、`'zoom-in'`、`'zoom-out'`、`'set-view'`、`'pan-to'`、`'fly-to'`、`'fly-to-bounds'`、`'invalidate-size'`，其中
`'set-zoom'`模式用于更新地图缩放级别；
`'zoom-in'`用于在当前地图缩放级别基础上，放大设定的级别；
`'zoom-out'`用于在当前地图缩放级别基础上，缩小设定的级别;
`'set-view'`用于更新地图视角；
`'pan-to'`用于移动地图中心点位置；
`'fly-to'`用于以飞行动画模式更新地图视角;
`'fly-to-bounds'`用于以飞行动画模式令地图视角自适应目标矩形区域范围;
`'invalidate-size'`用于手动刷新矫正地图视角；
  - `center` (optional): 地图动作目标中心点坐标，适用的地图动作类型：`'set-view'`、`'pan-to'`、`'fly-to'`. center has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 目标中心点经度
  - `lat` (Real; optional): 目标中心点纬度
  - `zoom` (Real; optional): 地图动作目标缩放级别，若不设置，相关地图动作动画过程将不会改变地图缩放级别，适用的地图动作类型：`'set-zoom'`、`'set-view'`、`'fly-to'`
  - `zoomInOffset` (Real; optional): 地图动作目标放大层级单位数量，适用的地图动作类型：`'zoom-in'`
  - `zoomOutOffset` (Real; optional): 地图动作目标缩小层级单位数量，适用的地图动作类型：`'zoom-out'`
  - `bounds` (optional): 地图动作目标矩形范围坐标，适用的地图动作类型：`'fly-to-bounds'`. bounds has the following type: lists containing elements 'minx', 'miny', 'maxx', 'maxy'.
Those elements have the following types:
  - `minx` (Real; optional): 目标矩形区域最小经度
  - `miny` (Real; optional): 目标矩形区域最小纬度
  - `maxx` (Real; optional): 目标矩形区域最大经度
  - `maxy` (Real; optional): 目标矩形区域最大纬度
  - `flyToDuration` (a value equal to: 'instant', 'fast', 'normal', 'slow', 'auto'; optional): 地图飞行类动画对应过渡时长，单位：秒，适用的地图动作类型：`'fly-to'`、`'fly-to-bounds'`
  - `delay` (Real; optional): 地图动作目标执行延时，单位：毫秒
默认值：`0`
"""
function ''_leafletmapaction(; kwargs...)
        available_props = Symbol[:id, :key, :loading_state, :mapActionConfig]
        wild_props = Symbol[]
        return Component("''_leafletmapaction", "LeafletMapAction", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

