# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletvectortile

"""
    ''_leafletvectortile(;kwargs...)

A LeafletVectorTile component.
矢量切片图层组件LeafletVectorTile
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `_clickedFeature` (Dict; optional): 监听要素点击事件
- `_layerNames` (Array; optional): 监听当前服务中已加载的全部图层名称
- `extraProps` (Dict; optional): 额外自定义参数
- `featureIdField` (String; optional): 切片数据要素属性中作为图层唯一识别`id`的字段
默认值：`'id'`
- `interactive` (Bool; optional): 当前图层是否允许交互功能
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `maxZoom` (Real; optional): 当前地图服务允许加载的最大缩放级别
默认值：`18`
- `minZoom` (Real; optional): 当前地图服务允许加载的最小缩放级别
默认值：`0`
- `renderer` (a value equal to: 'svg', 'canvas'; optional): 渲染方式，可选项有`'svg'`、`'canvas'`
默认值：`'svg'`
- `url` (String; optional): 切片服务地址
- `vectorTileLayerStyles` (optional): 针对不同切片图层设置样式，键：图层名称，值：样式字典或`javascript`控制函数字符串. vectorTileLayerStyles has the following type: Dict with Strings as keys and values of type String | Dict with Strings as keys and values of type lists containing elements 'func'.
Those elements have the following types:
  - `func` (String; optional)
"""
function ''_leafletvectortile(; kwargs...)
        available_props = Symbol[:id, :_clickedFeature, :_layerNames, :extraProps, :featureIdField, :interactive, :key, :maxZoom, :minZoom, :renderer, :url, :vectorTileLayerStyles]
        wild_props = Symbol[]
        return Component("''_leafletvectortile", "LeafletVectorTile", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

