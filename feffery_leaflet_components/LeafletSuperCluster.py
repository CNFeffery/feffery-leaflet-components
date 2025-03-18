# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


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
        事件对应时间戳."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletSuperCluster'
    IconOptions = TypedDict(
        "IconOptions",
            {
            "iconUrl": NotRequired[str],
            "iconSize": NotRequired[typing.Sequence[typing.Union[int, float, numbers.Number]]],
            "iconAnchor": NotRequired[typing.Sequence[typing.Union[int, float, numbers.Number]]],
            "popupAnchor": NotRequired[typing.Sequence[typing.Union[int, float, numbers.Number]]],
            "tooltipAnchor": NotRequired[typing.Sequence[typing.Union[int, float, numbers.Number]]],
            "shadowUrl": NotRequired[str],
            "shadowSize": NotRequired[typing.Sequence[typing.Union[int, float, numbers.Number]]],
            "shadowAnchor": NotRequired[typing.Sequence[typing.Union[int, float, numbers.Number]]],
            "className": NotRequired[str]
        }
    )

    ClickedPoint = TypedDict(
        "ClickedPoint",
            {
            "feature": NotRequired[dict],
            "timestamp": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        positions: typing.Optional[typing.Sequence[dict]] = None,
        clusterBackground: typing.Optional[str] = None,
        clusterBorder: typing.Optional[str] = None,
        clusterTextColor: typing.Optional[str] = None,
        clusterIconBaseSize: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        clusterIconExtraSizeFactor: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        clusterTextSizeFactor: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        minZoom: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        maxZoom: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        minPoints: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        radius: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        extent: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        nodeSize: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        iconOptions: typing.Optional[typing.Union["IconOptions", typing.Dict[typing.Union[str, float, int], "IconOptions"]]] = None,
        tooltipField: typing.Optional[str] = None,
        tooltipSticky: typing.Optional[bool] = None,
        categoryField: typing.Optional[str] = None,
        clickedPoint: typing.Optional["ClickedPoint"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'positions', 'clusterBackground', 'clusterBorder', 'clusterTextColor', 'clusterIconBaseSize', 'clusterIconExtraSizeFactor', 'clusterTextSizeFactor', 'minZoom', 'maxZoom', 'minPoints', 'radius', 'extent', 'nodeSize', 'iconOptions', 'tooltipField', 'tooltipSticky', 'categoryField', 'clickedPoint']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'positions', 'clusterBackground', 'clusterBorder', 'clusterTextColor', 'clusterIconBaseSize', 'clusterIconExtraSizeFactor', 'clusterTextSizeFactor', 'minZoom', 'maxZoom', 'minPoints', 'radius', 'extent', 'nodeSize', 'iconOptions', 'tooltipField', 'tooltipSticky', 'categoryField', 'clickedPoint']
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
