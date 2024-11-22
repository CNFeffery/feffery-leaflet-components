# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletsupercluster

"""
    ''_leafletsupercluster(;kwargs...)

A LeafletSuperCluster component.
巨量标记聚类图层组件LeafletSuperCluster
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `categoryField` (String; optional): 标记点数据作为类别的字段
默认值：`'category'`
- `clickedPoint` (optional): 监听标记点点击事件. clickedPoint has the following type: lists containing elements 'feature', 'timestamp'.
Those elements have the following types:
  - `feature` (Dict; optional): 被点击要素数据
  - `timestamp` (Real; optional): 事件对应时间戳
- `clusterBackground` (String; optional): 聚类簇背景，同css中的``background``属性
- `clusterBorder` (String; optional): 聚类簇边框，同css中的`border`属性
- `clusterIconBaseSize` (Real; optional): 聚类簇基础像素尺寸
各聚类簇实际尺寸计算方式：`clusterIconBaseSize+(簇内点数量/图层点总数)*clusterIconExtraSizeFactor`
默认值：`10`
- `clusterIconExtraSizeFactor` (Real; optional): 聚类簇尺寸扩张系数，具体计算规则见参数`clusterIconBaseSize`说明
默认值：`40`
- `clusterTextColor` (String; optional): 聚类簇文字颜色，同css中的`color`属性
- `clusterTextSizeFactor` (Real; optional): 聚类簇文字尺寸占对应簇整体尺寸的比例
默认值：`0.4`
- `extent` (Real; optional): 当前地图中使用的瓦片地图像素边长
默认值：`512`
- `iconOptions` (optional): 配置图标，支持分类独立控制. iconOptions has the following type: lists containing elements 'iconUrl', 'iconSize', 'iconAnchor', 'popupAnchor', 'tooltipAnchor', 'shadowUrl', 'shadowSize', 'shadowAnchor', 'className'.
Those elements have the following types:
  - `iconUrl` (String; optional): 图标图片地址
  - `iconSize` (Array of Reals; optional): 图标像素尺寸，格式：`[width, height]`
  - `iconAnchor` (Array of Reals; optional): 图标尖端坐标，以图片左上角为原点，格式：`[x, y]`
  - `popupAnchor` (Array of Reals; optional): 弹出卡片展开锚点，以`iconAnchor`为原点参照，格式：`[x, y]`
  - `tooltipAnchor` (Array of Reals; optional): 信息框展开锚点，以`iconAnchor`为原点参照，格式：`[x, y]`
  - `shadowUrl` (String; optional): 阴影图片地址
  - `shadowSize` (Array of Reals; optional): 阴影图片像素尺寸，格式：`[width, height]`
  - `shadowAnchor` (Array of Reals; optional): 阴影图片的尖端坐标，以图片左上角为原点参照，格式：`[x, y]`
  - `className` (String; optional): 标记图标css类 | Dict with Strings as keys and values of type lists containing elements 'iconUrl', 'iconSize', 'iconAnchor', 'popupAnchor', 'tooltipAnchor', 'shadowUrl', 'shadowSize', 'shadowAnchor', 'className'.
Those elements have the following types:
  - `iconUrl` (String; optional): 图标图片地址
  - `iconSize` (Array of Reals; optional): 图标像素尺寸，格式：`[width, height]`
  - `iconAnchor` (Array of Reals; optional): 图标尖端坐标，以图片左上角为原点，格式：`[x, y]`
  - `popupAnchor` (Array of Reals; optional): 弹出卡片展开锚点，以`iconAnchor`为原点参照，格式：`[x, y]`
  - `tooltipAnchor` (Array of Reals; optional): 信息框展开锚点，以`iconAnchor`为原点参照，格式：`[x, y]`
  - `shadowUrl` (String; optional): 阴影图片地址
  - `shadowSize` (Array of Reals; optional): 阴影图片像素尺寸，格式：`[width, height]`
  - `shadowAnchor` (Array of Reals; optional): 阴影图片的尖端坐标，以图片左上角为原点参照，格式：`[x, y]`
  - `className` (String; optional): 标记图标css类
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxZoom` (Real; optional): 聚类簇生成对应的最大缩放级别
默认值：`16`
- `minPoints` (Real; optional): 形成聚类簇所需的最小标记点数量
默认值：`2`
- `minZoom` (Real; optional): 聚类簇生成对应的最小缩放级别
默认值：`0`
- `nodeSize` (Real; optional): 控制聚类过程`KD`树节点尺寸
默认值：`64`
- `positions` (Array of Dicts; required): 必填，定义标记点坐标
- `radius` (Real; optional): 聚类簇像素半径
默认值：`40`
- `tooltipField` (String; optional): 标记点数据作为信息框内容的字段
默认值：`'tooltip'`
- `tooltipSticky` (Bool; optional): 信息框是否跟随鼠标位置
默认值：`false`
"""
function ''_leafletsupercluster(; kwargs...)
        available_props = Symbol[:id, :categoryField, :clickedPoint, :clusterBackground, :clusterBorder, :clusterIconBaseSize, :clusterIconExtraSizeFactor, :clusterTextColor, :clusterTextSizeFactor, :extent, :iconOptions, :key, :loading_state, :maxZoom, :minPoints, :minZoom, :nodeSize, :positions, :radius, :tooltipField, :tooltipSticky]
        wild_props = Symbol[]
        return Component("''_leafletsupercluster", "LeafletSuperCluster", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

