# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletminimap

"""
    ''_leafletminimap(;kwargs...)

A LeafletMiniMap component.
迷你地图组件LeafletMiniMap
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `aimingRectOptions` (optional): 迷你地图范围标识框要素样式
- `attribution` (String; optional): 迷你地图瓦片地图服务`attribution`信息
- `autoToggleDisplay` (Bool; optional): 当参数`zoomLevelFixed`有效，且主体地图范围不再适应迷你地图时，是否自动隐藏迷你地图
默认值：`false`
- `collapsedHeight` (Real; optional): 迷你地图折叠状态下的像素高度
默认值：`19`
- `collapsedWidth` (Real; optional): 迷你地图折叠状态下的像素宽度
默认值：`19`
- `height` (Real; optional): 迷你地图整体像素高度
默认值：`150`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `maxZoom` (Real; optional): 缩放级别上限
- `minZoom` (Real; optional): 缩放级别下限
- `minimized` (Bool; optional): 迷你地图初始化时是否处于折叠状态
- `opacity` (Real; optional): 迷你地图瓦片地图服务透明度
- `position` (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional): 迷你地图显示方位，可选的有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
默认值：`'bottomright'`
- `shadowRectOptions` (optional): 迷你地图范围标识框阴影要素样式
- `toggleDisplay` (Bool; optional): 是否渲染迷你地图折叠按钮
默认值：`false`
- `url` (String; optional): 迷你地图瓦片地图服务地址
- `width` (Real; optional): 迷你地图整体像素宽度
默认值：`150`
- `zIndex` (Real; optional): 迷你地图瓦片地图服务`z`轴层级
- `zoomAnimation` (Bool; optional): 迷你地图是否启用缩放变化动画
默认值：`false`
- `zoomLevelFixed` (Real; optional): 迷你地图强制锁定的缩放级别
- `zoomLevelOffset` (Real; optional): 迷你地图与主体地图的缩放级别偏差
默认值：`-5`
"""
function ''_leafletminimap(; kwargs...)
        available_props = Symbol[:id, :aimingRectOptions, :attribution, :autoToggleDisplay, :collapsedHeight, :collapsedWidth, :height, :key, :maxZoom, :minZoom, :minimized, :opacity, :position, :shadowRectOptions, :toggleDisplay, :url, :width, :zIndex, :zoomAnimation, :zoomLevelFixed, :zoomLevelOffset]
        wild_props = Symbol[]
        return Component("''_leafletminimap", "LeafletMiniMap", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

