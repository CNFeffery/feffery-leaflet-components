# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletimageoverlay

"""
    ''_leafletimageoverlay(;kwargs...)

A LeafletImageOverlay component.
图片叠加组件LeafletImageOverlay
Keyword arguments:
- `id` (String; optional): 组件id
- `bounds` (required): 必填，设置图片叠加区域坐标范围. bounds has the following type: lists containing elements 'minx', 'miny', 'maxx', 'maxy'.
Those elements have the following types:
  - `minx` (Real; required)
  - `miny` (Real; required)
  - `maxx` (Real; required)
  - `maxy` (Real; required)
- `className` (String; optional): 当前图片叠加层css类名
- `key` (String; optional): 强制刷新用
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxZoom` (Real; optional): 图片显示的最大缩放级别，默认无限制
- `minZoom` (Real; optional): 图片显示的最小缩放级别，默认无限制
- `opacity` (Real; optional): 图片透明度，取值应在`0`~`1`之间
- `url` (String; required): 必填，图片地址
- `zIndex` (Real; optional): 当前图层z轴层级
"""
function ''_leafletimageoverlay(; kwargs...)
        available_props = Symbol[:id, :bounds, :className, :key, :loading_state, :maxZoom, :minZoom, :opacity, :url, :zIndex]
        wild_props = Symbol[]
        return Component("''_leafletimageoverlay", "LeafletImageOverlay", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

