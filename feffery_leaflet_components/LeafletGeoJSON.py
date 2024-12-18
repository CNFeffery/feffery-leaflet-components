# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletGeoJSON(Component):
    """A LeafletGeoJSON component.
GeoJSON图层组件LeafletGeoJSON

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- data (dict; required):
    必填，传入`GeoJSON`数据.

- mode (a value equal to: 'default', 'selectable', 'choropleth', 'category'; default 'default'):
    功能模式，可选项有`'default'`、`'selectable'`（选择模式）、`'choropleth'`（分层设色模式）、`'category'`（分类设色模式）
    默认值：`'default'`.

- hoverable (boolean; default False):
    是否开启要素鼠标悬浮效果  默认值：`False`.

- defaultStyle (optional):
    要素默认样式.

- hoverStyle (optional):
    当`hoverable=True`时，设置要素在鼠标悬停时的样式.

- selectedStyle (optional):
    当`selectMode`为`'single'`或``'multiple'`时，设置要素在选中时的样式.

- fitBounds (boolean; default True):
    是否启用图层范围自适应缩放功能  默认值：`True`.

- fitBoundsOptions (dict; optional):
    配置图层范围自适应缩放的选项.

    `fitBoundsOptions` is a dict with keys:

    - maxZoom (number; optional):
        缩放后允许的最大缩放级别.

    - animate (boolean; optional):
        缩放过程是否开启过渡动画效果.

    - duration (number; optional):
        缩放过程动画时长，单位：秒  默认值：`0.25`.

    - padding (list of numbers; optional):
        缩放过程后，各个方向上额外的像素留白大小，格式：`[上下留白, 左右留白]`.

- fitBoundsDelay (number; default 0):
    针对图层范围自适应缩放设置执行延时时长，单位：毫秒  默认值：`0`.

- clickFeatureZoom (boolean; default False):
    是否在点击要素后，自动缩放到对应要素的范围  默认值：`False`.

- showTooltip (boolean; default False):
    是否为要素启用信息框功能  默认值：`False`.

- featureIdField (string; default 'id'):
    设置作为唯一识别`id`的字段名  默认值：`'id'`.

- featureValueField (string; default 'value'):
    设置作为要素数值的字段名  默认值：`'value'`.

- featureCategoryField (string; default 'category'):
    设置作为要素类别的字段名  默认值：`'category'`.

- featureTooltipField (string; default 'tooltip'):
    设置作为要素鼠标信息框内容的字段名  默认值：`'tooltip'`.

- selectMode (a value equal to: 'single', 'multiple'; default 'single'):
    要素点击选择模式，可选项有`'single'`（单选模式）、`'multiple'`（多选模式）  默认值：`'single'`.

- disableClickSelect (boolean; default False):
    是否禁用主动点击选择要素功能  默认值：`False`.

- selectedFeatureIds (list; optional):
    监听或设置当前已选中要素`id`数组.

- featureValueToStyles (dict; optional):
    配置分层设色模式.

    `featureValueToStyles` is a dict with keys:

    - bins (list of list of numberss; optional):
        各分段区间数组，每个元素格式：`[左区间值, 右区间值]`.

    - styles (list; optional):
        按顺序定义与分段区间一一对应的样式.

    - closed (a value equal to: 'left', 'right'; optional):
        区间闭合方式，可选项有`'left'`（左闭）、`'right'`（右闭）  默认值：`'left'`.

- featureCategoryToStyles (dict with strings as keys and values of type ; optional):
    配置分类设色模式，键为分类值，值为样式字典.

- tooltipDirection (a value equal to: 'right', 'left', 'top', 'bottom', 'center', 'auto'; default 'auto'):
    要素信息框展开方向，可选项有`'right'`、`'left'`、`'top'`、`'bottom'`、`'center'`、`'auto'`
    默认值：`'auto'`.

- tooltipPermanent (boolean; default False):
    是否永久展开要素对应的信息框，而无需鼠标移入触发  默认值：`False`.

- tooltipSticky (boolean; optional):
    要素对应信息框是否跟随鼠标位置  默认值：`False`.

- tooltipClassName (string; optional):
    要素信息框css类名.

- lassoSelect (boolean; default False):
    多选模式下，是否开启套圈选择功能  默认值：`False`.

- lassoType (a value equal to: 'contain', 'intersect'; default 'intersect'):
    套圈选择功能空间关系判定方式，可选项有`'contain'`（包含检查）、`'intersect'`（相交检查）
    默认值：`'intersect'`.

- lassoResetSelectedFeatureIds (boolean; default False):
    套圈选择功能开启时，是否在每次新点击套索按钮时重置`selectedFeatureIds`  默认值：`False`.

- lassoButtonPosition (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; default 'topleft'):
    套圈选择功能触发按钮方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
    默认值：`'topleft'`.

- lassoStyle (optional):
    套圈样式.

- pointRenderMode (a value equal to: 'marker', 'circle-marker'; default 'circle-marker'):
    针对点要素的渲染策略，可选项有`'marker'`、`'circle-marker'`
    默认值：`'circle-marker'`.

- circleMarkerRadius (number; default 10):
    当`pointRenderMode='circle-marker'`时的圆形标记像素半径  默认值：`10`.

- _clickedFeature (dict; optional):
    监听要素点击事件.

- _hoveredFeature (dict; optional):
    监听要素鼠标悬停事件.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletGeoJSON'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, data=Component.REQUIRED, mode=Component.UNDEFINED, hoverable=Component.UNDEFINED, defaultStyle=Component.UNDEFINED, hoverStyle=Component.UNDEFINED, selectedStyle=Component.UNDEFINED, fitBounds=Component.UNDEFINED, fitBoundsOptions=Component.UNDEFINED, fitBoundsDelay=Component.UNDEFINED, clickFeatureZoom=Component.UNDEFINED, showTooltip=Component.UNDEFINED, featureIdField=Component.UNDEFINED, featureValueField=Component.UNDEFINED, featureCategoryField=Component.UNDEFINED, featureTooltipField=Component.UNDEFINED, selectMode=Component.UNDEFINED, disableClickSelect=Component.UNDEFINED, selectedFeatureIds=Component.UNDEFINED, featureValueToStyles=Component.UNDEFINED, featureCategoryToStyles=Component.UNDEFINED, tooltipDirection=Component.UNDEFINED, tooltipPermanent=Component.UNDEFINED, tooltipSticky=Component.UNDEFINED, tooltipClassName=Component.UNDEFINED, lassoSelect=Component.UNDEFINED, lassoType=Component.UNDEFINED, lassoResetSelectedFeatureIds=Component.UNDEFINED, lassoButtonPosition=Component.UNDEFINED, lassoStyle=Component.UNDEFINED, pointRenderMode=Component.UNDEFINED, circleMarkerRadius=Component.UNDEFINED, _clickedFeature=Component.UNDEFINED, _hoveredFeature=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'data', 'mode', 'hoverable', 'defaultStyle', 'hoverStyle', 'selectedStyle', 'fitBounds', 'fitBoundsOptions', 'fitBoundsDelay', 'clickFeatureZoom', 'showTooltip', 'featureIdField', 'featureValueField', 'featureCategoryField', 'featureTooltipField', 'selectMode', 'disableClickSelect', 'selectedFeatureIds', 'featureValueToStyles', 'featureCategoryToStyles', 'tooltipDirection', 'tooltipPermanent', 'tooltipSticky', 'tooltipClassName', 'lassoSelect', 'lassoType', 'lassoResetSelectedFeatureIds', 'lassoButtonPosition', 'lassoStyle', 'pointRenderMode', 'circleMarkerRadius', '_clickedFeature', '_hoveredFeature', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'data', 'mode', 'hoverable', 'defaultStyle', 'hoverStyle', 'selectedStyle', 'fitBounds', 'fitBoundsOptions', 'fitBoundsDelay', 'clickFeatureZoom', 'showTooltip', 'featureIdField', 'featureValueField', 'featureCategoryField', 'featureTooltipField', 'selectMode', 'disableClickSelect', 'selectedFeatureIds', 'featureValueToStyles', 'featureCategoryToStyles', 'tooltipDirection', 'tooltipPermanent', 'tooltipSticky', 'tooltipClassName', 'lassoSelect', 'lassoType', 'lassoResetSelectedFeatureIds', 'lassoButtonPosition', 'lassoStyle', 'pointRenderMode', 'circleMarkerRadius', '_clickedFeature', '_hoveredFeature', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['data']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletGeoJSON, self).__init__(**args)
