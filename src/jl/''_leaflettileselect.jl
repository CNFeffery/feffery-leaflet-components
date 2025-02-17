# AUTO GENERATED FILE - DO NOT EDIT

export ''_leaflettileselect

"""
    ''_leaflettileselect(;kwargs...)

A LeafletTileSelect component.
瓦片底图选择组件LeafletTileSelect
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `center` (optional): 地图中心坐标. center has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 经度
  - `lat` (Real; optional): 纬度
- `className` (String; optional): 当前组件css类名
- `containerClassName` (String; optional): 图层选择卡片容器css类名
- `containerItemClassName` (String; optional): 图层选择子项css类名
- `containerItemStyle` (Dict; optional): 图层选择子项css样式
- `containerStyle` (Dict; optional): 图层选择卡片容器css样式
- `containerVisible` (Bool; optional): 监听或设置选择卡片是否展开
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `selectedUrl` (String; optional): 监听或设置已选中的瓦片地图服务
- `style` (Dict; optional): 当前组件css样式
- `urls` (optional): 配置瓦片地图服务选项. urls has the following type: Array of lists containing elements 'url'.
Those elements have the following types:
  - `url` (String; optional): 当前瓦片地图服务地址s
- `zoom` (Real; optional): 地图缩放级别
默认值：`1`
"""
function ''_leaflettileselect(; kwargs...)
        available_props = Symbol[:id, :center, :className, :containerClassName, :containerItemClassName, :containerItemStyle, :containerStyle, :containerVisible, :key, :selectedUrl, :style, :urls, :zoom]
        wild_props = Symbol[]
        return Component("''_leaflettileselect", "LeafletTileSelect", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

