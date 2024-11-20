# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletmarker

"""
    ''_leafletmarker(;kwargs...)
    ''_leafletmarker(children::Any;kwargs...)
    ''_leafletmarker(children_maker::Function;kwargs...)


A LeafletMarker component.
标记图层组件LeafletMarker
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 要传入的`LeafletTooltip`、`LeafletPopup`组件，配合当前图层使用
- `id` (String; optional): 组件唯一id
- `autoPan` (Bool; optional): 当拖拽标记至地图边缘时，设置是否允许地图自动移动以适应边缘
默认值：`false`
- `className` (String; optional): 当前图层css类名
- `draggable` (Bool; optional): 当前标记是否可拖拽
默认值：`false`
- `editable` (Bool; optional): 当前要素是否可编辑
默认值：`false`
- `iconOptions` (optional): 配置图标参数. iconOptions has the following type: lists containing elements 'iconUrl', 'iconSize', 'iconAnchor', 'popupAnchor', 'tooltipAnchor', 'shadowUrl', 'shadowSize', 'shadowAnchor', 'className'.
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
- `mouseOverCount` (Real; optional): 监听当前要素鼠标移入事件累计次数
默认值：`0`
- `nClicks` (Real; optional): 监听当前要素累计点击次数
默认值：`0`
- `opacity` (Real; optional): 图标透明度
默认值：`1`
- `position` (required): 必填项，标记中心坐标. position has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional): 经度
  - `lat` (Real; optional): 纬度
- `riseOnHover` (Bool; optional): 当鼠标悬浮于当前标记上时，是否自动调整图层至顶层
默认值：`false`
- `zIndexOffset` (Real; optional): 当前图层`z`轴偏移单位
"""
function ''_leafletmarker(; kwargs...)
        available_props = Symbol[:children, :id, :autoPan, :className, :draggable, :editable, :iconOptions, :key, :loading_state, :mouseOverCount, :nClicks, :opacity, :position, :riseOnHover, :zIndexOffset]
        wild_props = Symbol[]
        return Component("''_leafletmarker", "LeafletMarker", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletmarker(children::Any; kwargs...) = ''_leafletmarker(;kwargs..., children = children)
''_leafletmarker(children_maker::Function; kwargs...) = ''_leafletmarker(children_maker(); kwargs...)

