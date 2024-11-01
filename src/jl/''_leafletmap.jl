# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletmap

"""
    ''_leafletmap(;kwargs...)
    ''_leafletmap(children::Any;kwargs...)
    ''_leafletmap(children_maker::Function;kwargs...)


A LeafletMap component.
地图容器组件LeafletMap
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 组件型，地图内部组件
- `id` (String; optional): 组件唯一id
- `_drawnShapes` (Array; optional): 监听编辑模式下已绘制矢量信息
- `center` (optional): 地图默认中心坐标，格式：`{'lng': xxx, 'lat': xxx}`
默认值：`{'lng': 0, 'lat': 0}`. center has the following type: lists containing elements 'lng', 'lat'.
Those elements have the following types:
  - `lng` (Real; optional)
  - `lat` (Real; optional)
- `className` (String; optional): 当前组件css类名
- `closePopupOnClick` (Bool; optional): 是否允许鼠标点击地图空白处关闭已打开的`leafletPopup`弹出层
默认值：`true`
- `crs` (optional): 为当前地图配置坐标参考系，当传入字符型时可选项有`'EPSG3857'`、`'EPSG4326'`、`'simple'`，
当传入字典时，用于构造自定义坐标系参数
默认值：`'EPSG3857'`. crs has the following type: a value equal to: 'EPSG3857', 'EPSG4326', 'simple' | lists containing elements 'code', 'proj4def', 'options'.
Those elements have the following types:
  - `code` (String; optional): 坐标系代码
  - `proj4def` (String; optional): 坐标系`def`字符串
  - `options` (Dict; optional): 坐标系其他配置参数
- `doubleClickZoom` (Bool; optional): 是否允许鼠标双击地图进行放大
默认值：`true`
- `dragging` (Bool; optional): 是否允许鼠标拖拽移动地图
默认值：`true`
- `editToolbar` (Bool; optional): 是否显示编辑模式工具栏
默认值：`false`
- `editToolbarControlsOptions` (optional): 配置编辑模式工具栏. editToolbarControlsOptions has the following type: lists containing elements 'position', 'drawMarker', 'drawCircleMarker', 'drawPolyline', 'drawRectangle', 'drawPolygon', 'drawCircle', 'drawText', 'editMode', 'dragMode', 'cutPolygon', 'removalMode', 'rotateMode', 'oneBlock'.
Those elements have the following types:
  - `position` (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional): 设置编辑模式工具栏方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
默认值：`'topleft'`
  - `drawMarker` (Bool; optional): 是否开启“标记点绘制”功能
默认值：`true`
  - `drawCircleMarker` (Bool; optional): 是否开启“圆形标记点”绘制功能
默认值：`true`
  - `drawPolyline` (Bool; optional): 是否开启“折线”绘制功能
默认值：`true`
  - `drawRectangle` (Bool; optional): 是否开启“矩形”绘制功能
默认值：`true`
  - `drawPolygon` (Bool; optional): 是否开启“多边形”绘制功能
默认值：`true`
  - `drawCircle` (Bool; optional): 是否开启“圆形”绘制功能
默认值：`true`
  - `drawText` (Bool; optional): 是否开启“文字”绘制功能
默认值：`false`
  - `editMode` (Bool; optional): 是否开启“编辑要素”功能
默认值：`true`
  - `dragMode` (Bool; optional): 是否开启“拖拽要素”功能
默认值：`true`
  - `cutPolygon` (Bool; optional): 是否开启“裁剪要素”功能
默认值：`false`
  - `removalMode` (Bool; optional): 是否开启“移除要素”功能
默认值：`true`
  - `rotateMode` (Bool; optional): 是否开启“旋转要素”功能
默认值：`true`
  - `oneBlock` (Bool; optional): 各功能按钮是否集成在同一个容器中
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxBounds` (optional): 限制地图可移动坐标矩形范围. maxBounds has the following type: lists containing elements 'minx', 'miny', 'maxx', 'maxy'.
Those elements have the following types:
  - `minx` (Real; optional): 矩形范围左下角经度
  - `miny` (Real; optional): 矩形范围左下角纬度
  - `maxx` (Real; optional): 矩形范围右上角经度
  - `maxy` (Real; optional): 矩形范围右上角纬度
- `maxDrawnShapes` (Real; optional): 针对编辑模式，设置最多允许绘制的矢量要素个数，默认无限制
- `maxZoom` (Real; optional): 地图最大缩放级别
默认值：`18`
- `measureControl` (Bool; optional): 是否显示测量工具栏
默认值：`false`
- `measureControlOptions` (optional): 配置测量工具. measureControlOptions has the following type: lists containing elements 'position', 'activeColor', 'completedColor'.
Those elements have the following types:
  - `position` (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional): 设置测量工具栏方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
默认值：`'topleft'`
  - `activeColor` (String; optional): 测量工具所绘制要素颜色
默认值：`'#f1c40f'`
  - `completedColor` (String; optional): 测量工具绘制完成后的要素颜色
默认值：`'#e74c3c'`
- `minZoom` (Real; optional): 地图最小缩放级别
默认值：`0`
- `scaleControl` (Bool; optional): 是否显示地图比例尺
默认值：`false`
- `scaleControlOptions` (optional): 配置地图比例尺相关参数. scaleControlOptions has the following type: lists containing elements 'position', 'imperial'.
Those elements have the following types:
  - `position` (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional): 设置比例尺方位，可选项有`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`
  - `imperial` (Bool; optional): 是否显示英制单位
- `scrollWheelZoom` (Bool | a value equal to: 'center'; optional): 是否允许通用鼠标滚轮缩放地图，当传入`'center'`时会在允许鼠标滚轮缩放地图时无视鼠标实际位置，以地图当前中心作为缩放依据的中心
默认值：`true`
- `showMeasurements` (Bool; optional): 是否为编辑模式下创建的矢量要素添加长度、面积标注
默认值：`false`
- `smoothWheelZoom` (Bool | a value equal to: 'center'; optional): 针对鼠标滚轮缩放地图是否开启丝滑模式，当传入`'center'`时会在允许鼠标滚轮缩放地图时无视鼠标实际位置，以地图当前中心作为丝滑缩放依据的中心
默认值：`false`
- `style` (Dict; optional): 当前组件css样式
- `viewAutoCorrection` (Bool; optional): 是否开启视角自动校正，譬如地图所在容器像素尺寸发生变化后，会自动校正地图的视角
默认值：`false`
- `wheelPxPerZoomLevel` (Real; optional): 控制鼠标滚轮滚动多少像素会触发一个单位`zoomDelta`级别的地图缩放
默认值：`60`
- `zoom` (Real; optional): 地图默认缩放级别
默认值：`3`
- `zoomControl` (Bool; optional): 是否显示地图缩放组件
默认值：`true`
- `zoomDelta` (Real; optional): 地图单次缩放变化对应的缩放级别步长
默认值：`1`
"""
function ''_leafletmap(; kwargs...)
        available_props = Symbol[:children, :id, :_drawnShapes, :center, :className, :closePopupOnClick, :crs, :doubleClickZoom, :dragging, :editToolbar, :editToolbarControlsOptions, :key, :loading_state, :maxBounds, :maxDrawnShapes, :maxZoom, :measureControl, :measureControlOptions, :minZoom, :scaleControl, :scaleControlOptions, :scrollWheelZoom, :showMeasurements, :smoothWheelZoom, :style, :viewAutoCorrection, :wheelPxPerZoomLevel, :zoom, :zoomControl, :zoomDelta]
        wild_props = Symbol[]
        return Component("''_leafletmap", "LeafletMap", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletmap(children::Any; kwargs...) = ''_leafletmap(;kwargs..., children = children)
''_leafletmap(children_maker::Function; kwargs...) = ''_leafletmap(children_maker(); kwargs...)

