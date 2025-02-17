# AUTO GENERATED FILE - DO NOT EDIT

export ''_leaflettilelayer

"""
    ''_leaflettilelayer(;kwargs...)

A LeafletTileLayer component.
瓦片服务图层组件LeafletTileLayer
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `attribution` (String; optional): 地图服务`attribution`属性
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `maxNativeZoom` (Real; optional): 瓦片地图服务可用的最大缩放级别。如果指定了该值，所有高于`maxNativeZoom`的缩放级别上的瓦片将从最大原生缩放级别加载并自动缩放
- `maxZoom` (Real; optional): 当前瓦片地图服务允许加载的最大缩放级别
默认值：`18`
- `minNativeZoom` (Real; optional): 瓦片地图服务可用的最小缩放级别。如果指定了该值，所有低于`minNativeZoom`的缩放级别上的瓦片将从最小原生缩放级别加载并自动缩放
- `minZoom` (Real; optional): 当前瓦片地图服务允许加载的最小缩放级别
默认值：`0`
- `opacity` (Real; optional): 图层透明度
默认值：`1`
- `tileSize` (Real; optional): 瓦片服务图片像素边长
默认值：`256`
- `tms` (Bool; optional): 设置当前地图服务是否符合`tms`类型
默认值：`false`
- `url` (String; optional): 地图服务地址，默认显示高德地图公共图层
- `zIndex` (Real; optional): 当前图层`z`轴顺序
"""
function ''_leaflettilelayer(; kwargs...)
        available_props = Symbol[:id, :attribution, :key, :maxNativeZoom, :maxZoom, :minNativeZoom, :minZoom, :opacity, :tileSize, :tms, :url, :zIndex]
        wild_props = Symbol[]
        return Component("''_leaflettilelayer", "LeafletTileLayer", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

