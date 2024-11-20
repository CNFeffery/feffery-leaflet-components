# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletgeojson

"""
    ''_leafletgeojson(;kwargs...)

A LeafletGeoJSON component.
GeoJSON图层组件LeafletGeoJSON
Keyword arguments:
- `id` (String; optional): 组件唯一id
- `_clickedFeature` (Dict; optional): 监听要素点击事件
- `_hoveredFeature` (Dict; optional): 监听要素鼠标悬停事件
- `circleMarkerRadius` (Real; optional): 当`pointRenderMode='circle-marker'`时的圆形标记像素半径
默认值：`10`
- `clickFeatureZoom` (Bool; optional): 是否在点击要素后，自动缩放到对应要素的范围
默认值：`false`
- `data` (Dict; required): 必填，传入`GeoJSON`数据
- `defaultStyle` (optional): 要素默认样式
- `disableClickSelect` (Bool; optional): 是否禁用主动点击选择要素功能
默认值：`false`
- `featureCategoryField` (String; optional): 设置作为要素类别的字段名
默认值：`'category'`
- `featureCategoryToStyles` (Dict with Strings as keys and values of type ; optional): 配置分类设色模式，键为分类值，值为样式字典
- `featureIdField` (String; optional): 设置作为唯一识别`id`的字段名
默认值：`'id'`
- `featureTooltipField` (String; optional): 设置作为要素鼠标信息框内容的字段名
默认值：`'tooltip'`
- `featureValueField` (String; optional): 设置作为要素数值的字段名
默认值：`'value'`
- `featureValueToStyles` (optional): 配置分层设色模式. featureValueToStyles has the following type: lists containing elements 'bins', 'styles', 'closed'.
Those elements have the following types:
  - `bins` (Array of Array of Realss; optional): 各分段区间数组，每个元素格式：`[左区间值, 右区间值]`
  - `styles` (Array; optional): 按顺序定义与分段区间一一对应的样式
  - `closed` (a value equal to: 'left', 'right'; optional): 区间闭合方式，可选项有`'left'`（左闭）、`'right'`（右闭）
默认值：`'left'`
- `fitBounds` (Bool; optional): 是否启用图层范围自适应缩放功能
默认值：`true`
- `fitBoundsOptions` (optional): 配置图层范围自适应缩放的选项. fitBoundsOptions has the following type: lists containing elements 'maxZoom', 'animate', 'duration', 'padding'.
Those elements have the following types:
  - `maxZoom` (Real; optional): 缩放后允许的最大缩放级别
  - `animate` (Bool; optional): 缩放过程是否开启过渡动画效果
  - `duration` (Real; optional): 缩放过程动画时长，单位：秒
默认值：`0.25`
  - `padding` (Array of Reals; optional): 缩放过程后，各个方向上额外的像素留白大小，格式：`[上下留白, 左右留白]`
- `hoverStyle` (optional): 当`hoverable=true`时，设置要素在鼠标悬停时的样式
- `hoverable` (Bool; optional): 是否开启要素鼠标悬浮效果
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `lassoButtonPosition` (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional): 套圈选择功能触发按钮方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
默认值：`'topleft'`
- `lassoResetSelectedFeatureIds` (Bool; optional): 套圈选择功能开启时，是否在每次新点击套索按钮时重置`selectedFeatureIds`
默认值：`false`
- `lassoSelect` (Bool; optional): 多选模式下，是否开启套圈选择功能
默认值：`false`
- `lassoStyle` (optional): 套圈样式
- `lassoType` (a value equal to: 'contain', 'intersect'; optional): 套圈选择功能空间关系判定方式，可选项有`'contain'`（包含检查）、`'intersect'`（相交检查）
默认值：`'intersect'`
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `mode` (a value equal to: 'default', 'selectable', 'choropleth', 'category'; optional): 功能模式，可选项有`'default'`、`'selectable'`（选择模式）、`'choropleth'`（分层设色模式）、`'category'`（分类设色模式）
默认值：`'default'`
- `pointRenderMode` (a value equal to: 'marker', 'circle-marker'; optional): 针对点要素的渲染策略，可选项有`'marker'`、`'circle-marker'`
默认值：`'circle-marker'`
- `selectMode` (a value equal to: 'single', 'multiple'; optional): 要素点击选择模式，可选项有`'single'`（单选模式）、`'multiple'`（多选模式）
默认值：`'single'`
- `selectedFeatureIds` (Array; optional): 监听或设置当前已选中要素`id`数组
- `selectedStyle` (optional): 当`selectMode`为`'single'`或``'multiple'`时，设置要素在选中时的样式
- `showTooltip` (Bool; optional): 是否为要素启用信息框功能
默认值：`false`
- `tooltipClassName` (String; optional): 要素信息框css类名
- `tooltipDirection` (a value equal to: 'right', 'left', 'top', 'bottom', 'center', 'auto'; optional): 要素信息框展开方向，可选项有`'right'`、`'left'`、`'top'`、`'bottom'`、`'center'`、`'auto'`
默认值：`'auto'`
- `tooltipPermanent` (Bool; optional): 是否永久展开要素对应的信息框，而无需鼠标移入触发
默认值：`false`
- `tooltipSticky` (Bool; optional): 要素对应信息框是否跟随鼠标位置
默认值：`false`
"""
function ''_leafletgeojson(; kwargs...)
        available_props = Symbol[:id, :_clickedFeature, :_hoveredFeature, :circleMarkerRadius, :clickFeatureZoom, :data, :defaultStyle, :disableClickSelect, :featureCategoryField, :featureCategoryToStyles, :featureIdField, :featureTooltipField, :featureValueField, :featureValueToStyles, :fitBounds, :fitBoundsOptions, :hoverStyle, :hoverable, :key, :lassoButtonPosition, :lassoResetSelectedFeatureIds, :lassoSelect, :lassoStyle, :lassoType, :loading_state, :mode, :pointRenderMode, :selectMode, :selectedFeatureIds, :selectedStyle, :showTooltip, :tooltipClassName, :tooltipDirection, :tooltipPermanent, :tooltipSticky]
        wild_props = Symbol[]
        return Component("''_leafletgeojson", "LeafletGeoJSON", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

