# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletimageoverlay

"""
    ''_leafletimageoverlay(;kwargs...)

A LeafletImageOverlay component.
图片叠加组件LeafletImageOverlay
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `bounds` (required): 必填，设置图片叠加区域坐标范围. bounds has the following type: lists containing elements 'minx', 'miny', 'maxx', 'maxy'.
Those elements have the following types:
  - `minx` (Real; required): 叠加区域左下角经度
  - `miny` (Real; required): 叠加区域左下角纬度
  - `maxx` (Real; required): 叠加区域右上角经度
  - `maxy` (Real; required): 叠加区域右上角纬度
- `className` (String; optional): 当前图层css类名
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `maxZoom` (Real; optional): 图片显示的最大缩放级别，默认无限制
- `minZoom` (Real; optional): 图片显示的最小缩放级别，默认无限制
- `opacity` (Real; optional): 图片透明度，取值应在`0`到`1`之间
- `url` (String; required): 必填，图片地址
- `zIndex` (Real; optional): 当前图层`z`轴层级
"""
function ''_leafletimageoverlay(; kwargs...)
        available_props = Symbol[:id, :bounds, :className, :key, :maxZoom, :minZoom, :opacity, :url, :zIndex]
        wild_props = Symbol[]
        return Component("''_leafletimageoverlay", "LeafletImageOverlay", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

