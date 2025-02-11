# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletexport

"""
    ''_leafletexport(;kwargs...)

A LeafletExport component.
地图导出组件LeafletExport
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `customSize` (optional): 配置自定义尺寸. customSize has the following type: lists containing elements 'width', 'height'.
Those elements have the following types:
  - `width` (Real; optional): 像素宽度
  - `height` (Real; optional): 像素高度
- `customSizeTooltip` (String; optional): 为自定义导出尺寸控件设置提示文案内容
- `filename` (String; optional): 图片导出文件名
默认值：`'map'`
- `hideControlContainer` (Bool; optional): 导出图片时是否自动隐藏其他无关控件
默认值：`true`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `position` (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional): 导出控件显示方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
默认值：`'topleft'`
- `tileWait` (Real; optional): 地图瓦片文件加载等待时长，单位：毫秒
默认值：500
"""
function ''_leafletexport(; kwargs...)
        available_props = Symbol[:id, :customSize, :customSizeTooltip, :filename, :hideControlContainer, :key, :position, :tileWait]
        wild_props = Symbol[]
        return Component("''_leafletexport", "LeafletExport", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

