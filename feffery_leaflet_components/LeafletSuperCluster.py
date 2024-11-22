# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletSuperCluster(Component):
    """A LeafletSuperCluster component.
巨量标记聚类图层组件LeafletSuperCluster

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- positions (list of dicts; required):
    必填，定义标记点坐标.

- clusterBackground (string; optional):
    聚类簇背景，同css中的``background``属性.

- clusterBorder (string; optional):
    聚类簇边框，同css中的`border`属性.

- clusterTextColor (string; optional):
    聚类簇文字颜色，同css中的`color`属性.

- clusterIconBaseSize (number; default 10):
    聚类簇基础像素尺寸
    各聚类簇实际尺寸计算方式：`clusterIconBaseSize+(簇内点数量/图层点总数)*clusterIconExtraSizeFactor`
    默认值：`10`.

- clusterIconExtraSizeFactor (number; default 40):
    聚类簇尺寸扩张系数，具体计算规则见参数`clusterIconBaseSize`说明  默认值：`40`.

- clusterTextSizeFactor (number; default 0.4):
    聚类簇文字尺寸占对应簇整体尺寸的比例  默认值：`0.4`.

- minZoom (number; optional):
    聚类簇生成对应的最小缩放级别  默认值：`0`.

- maxZoom (number; optional):
    聚类簇生成对应的最大缩放级别  默认值：`16`.

- minPoints (number; optional):
    形成聚类簇所需的最小标记点数量  默认值：`2`.

- radius (number; optional):
    聚类簇像素半径  默认值：`40`.

- extent (number; optional):
    当前地图中使用的瓦片地图像素边长  默认值：`512`.

- nodeSize (number; optional):
    控制聚类过程`KD`树节点尺寸  默认值：`64`.

- iconOptions (dict; optional):
    配置图标，支持分类独立控制.

    `iconOptions` is a dict with keys:

    - iconUrl (string; optional):
        图标图片地址.

    - iconSize (list of numbers; optional):
        图标像素尺寸，格式：`[width, height]`.

    - iconAnchor (list of numbers; optional):
        图标尖端坐标，以图片左上角为原点，格式：`[x, y]`.

    - popupAnchor (list of numbers; optional):
        弹出卡片展开锚点，以`iconAnchor`为原点参照，格式：`[x, y]`.

    - tooltipAnchor (list of numbers; optional):
        信息框展开锚点，以`iconAnchor`为原点参照，格式：`[x, y]`.

    - shadowUrl (string; optional):
        阴影图片地址.

    - shadowSize (list of numbers; optional):
        阴影图片像素尺寸，格式：`[width, height]`.

    - shadowAnchor (list of numbers; optional):
        阴影图片的尖端坐标，以图片左上角为原点参照，格式：`[x, y]`.

    - className (string; optional):
        标记图标css类. | dict with strings as keys and values of type dict with keys:

    - iconUrl (string; optional):
        图标图片地址.

    - iconSize (list of numbers; optional):
        图标像素尺寸，格式：`[width, height]`.

    - iconAnchor (list of numbers; optional):
        图标尖端坐标，以图片左上角为原点，格式：`[x, y]`.

    - popupAnchor (list of numbers; optional):
        弹出卡片展开锚点，以`iconAnchor`为原点参照，格式：`[x, y]`.

    - tooltipAnchor (list of numbers; optional):
        信息框展开锚点，以`iconAnchor`为原点参照，格式：`[x, y]`.

    - shadowUrl (string; optional):
        阴影图片地址.

    - shadowSize (list of numbers; optional):
        阴影图片像素尺寸，格式：`[width, height]`.

    - shadowAnchor (list of numbers; optional):
        阴影图片的尖端坐标，以图片左上角为原点参照，格式：`[x, y]`.

    - className (string; optional):
        标记图标css类.

- tooltipField (string; default 'tooltip'):
    标记点数据作为信息框内容的字段  默认值：`'tooltip'`.

- tooltipSticky (boolean; optional):
    信息框是否跟随鼠标位置  默认值：`False`.

- categoryField (string; default 'category'):
    标记点数据作为类别的字段  默认值：`'category'`.

- clickedPoint (dict; optional):
    监听标记点点击事件.

    `clickedPoint` is a dict with keys:

    - feature (dict; optional):
        被点击要素数据.

    - timestamp (number; optional):
        事件对应时间戳.

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
    _type = 'LeafletSuperCluster'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, positions=Component.REQUIRED, clusterBackground=Component.UNDEFINED, clusterBorder=Component.UNDEFINED, clusterTextColor=Component.UNDEFINED, clusterIconBaseSize=Component.UNDEFINED, clusterIconExtraSizeFactor=Component.UNDEFINED, clusterTextSizeFactor=Component.UNDEFINED, minZoom=Component.UNDEFINED, maxZoom=Component.UNDEFINED, minPoints=Component.UNDEFINED, radius=Component.UNDEFINED, extent=Component.UNDEFINED, nodeSize=Component.UNDEFINED, iconOptions=Component.UNDEFINED, tooltipField=Component.UNDEFINED, tooltipSticky=Component.UNDEFINED, categoryField=Component.UNDEFINED, clickedPoint=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'positions', 'clusterBackground', 'clusterBorder', 'clusterTextColor', 'clusterIconBaseSize', 'clusterIconExtraSizeFactor', 'clusterTextSizeFactor', 'minZoom', 'maxZoom', 'minPoints', 'radius', 'extent', 'nodeSize', 'iconOptions', 'tooltipField', 'tooltipSticky', 'categoryField', 'clickedPoint', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'positions', 'clusterBackground', 'clusterBorder', 'clusterTextColor', 'clusterIconBaseSize', 'clusterIconExtraSizeFactor', 'clusterTextSizeFactor', 'minZoom', 'maxZoom', 'minPoints', 'radius', 'extent', 'nodeSize', 'iconOptions', 'tooltipField', 'tooltipSticky', 'categoryField', 'clickedPoint', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['positions']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletSuperCluster, self).__init__(**args)
