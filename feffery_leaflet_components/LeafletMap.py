# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class LeafletMap(Component):
    """A LeafletMap component.
地图容器组件LeafletMap

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，地图内部组件.

- className (string; optional):
    当前组件css类名.

- center (dict; default { lng: 0, lat: 0 }):
    地图默认中心坐标，格式：`{'lng': xxx, 'lat': xxx}`  默认值：`{'lng': 0, 'lat':
    0}`.

    `center` is a dict with keys:

    - lng (number; optional):
        经度.

    - lat (number; optional):
        纬度.

- crs (dict; default 'EPSG3857'):
    为当前地图配置坐标参考系，当传入字符型时可选项有`'EPSG3857'`、`'EPSG4326'`、`'simple'`，
    当传入字典时，用于构造自定义坐标系参数  默认值：`'EPSG3857'`.

    `crs` is a a value equal to: 'EPSG3857', 'EPSG4326', 'simple' |
    dict with keys:

    - code (string; optional):
        坐标系代码.

    - proj4def (string; optional):
        坐标系`def`字符串.

    - options (dict; optional):
        坐标系其他配置参数.

- zoom (number; default 3):
    地图默认缩放级别  默认值：`3`.

- doubleClickZoom (boolean; default True):
    是否允许鼠标双击地图进行放大  默认值：`True`.

- dragging (boolean; default True):
    是否允许鼠标拖拽移动地图  默认值：`True`.

- closePopupOnClick (boolean; default True):
    是否允许鼠标点击地图空白处关闭已打开的`leafletPopup`弹出层  默认值：`True`.

- minZoom (number; default 0):
    地图最小缩放级别  默认值：`0`.

- maxZoom (number; default 18):
    地图最大缩放级别  默认值：`18`.

- zoomDelta (number; default 1):
    地图单次缩放变化对应的缩放级别步长  默认值：`1`.

- zoomControl (boolean; default True):
    是否显示地图缩放组件  默认值：`True`.

- scrollWheelZoom (boolean | a value equal to: 'center'; default True):
    是否允许通用鼠标滚轮缩放地图，当传入`'center'`时会在允许鼠标滚轮缩放地图时无视鼠标实际位置，以地图当前中心作为缩放依据的中心
    默认值：`True`.

- wheelPxPerZoomLevel (number; default 60):
    控制鼠标滚轮滚动多少像素会触发一个单位`zoomDelta`级别的地图缩放  默认值：`60`.

- smoothWheelZoom (boolean | a value equal to: 'center'; default False):
    针对鼠标滚轮缩放地图是否开启丝滑模式，当传入`'center'`时会在允许鼠标滚轮缩放地图时无视鼠标实际位置，以地图当前中心作为丝滑缩放依据的中心
    默认值：`False`.

- scaleControl (boolean; default False):
    是否显示地图比例尺  默认值：`False`.

- scaleControlOptions (dict; optional):
    配置地图比例尺相关参数.

    `scaleControlOptions` is a dict with keys:

    - position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional):
        设置比例尺方位，可选项有`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`.

    - imperial (boolean; optional):
        是否显示英制单位.

- maxBounds (dict; optional):
    限制地图可移动坐标矩形范围.

    `maxBounds` is a dict with keys:

    - minx (number; optional):
        矩形范围左下角经度.

    - miny (number; optional):
        矩形范围左下角纬度.

    - maxx (number; optional):
        矩形范围右上角经度.

    - maxy (number; optional):
        矩形范围右上角纬度.

- maxBoundsViscosity (number; default 0):
    当`maxBounds`参数有效时，控制地图被拖拽出限制边界范围的牢固程度，取值在`0`到`1`之间，`1`表示完全不允许拖拽出限制范围
    默认值：`0`.

- maxBoundsDelay (number; default 0):
    `maxBounds`参数初始化生效延时，单位：毫秒  默认值：`0`.

- editToolbar (boolean; default False):
    是否显示编辑模式工具栏  默认值：`False`.

- editToolbarControlsOptions (dict; optional):
    配置编辑模式工具栏.

    `editToolbarControlsOptions` is a dict with keys:

    - position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional):
        设置编辑模式工具栏方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
        默认值：`'topleft'`.

    - drawMarker (boolean; optional):
        是否开启“标记点绘制”功能  默认值：`True`.

    - drawCircleMarker (boolean; optional):
        是否开启“圆形标记点”绘制功能  默认值：`True`.

    - drawPolyline (boolean; optional):
        是否开启“折线”绘制功能  默认值：`True`.

    - drawRectangle (boolean; optional):
        是否开启“矩形”绘制功能  默认值：`True`.

    - drawPolygon (boolean; optional):
        是否开启“多边形”绘制功能  默认值：`True`.

    - drawCircle (boolean; optional):
        是否开启“圆形”绘制功能  默认值：`True`.

    - drawText (boolean; optional):
        是否开启“文字”绘制功能  默认值：`False`.

    - editMode (boolean; optional):
        是否开启“编辑要素”功能  默认值：`True`.

    - dragMode (boolean; optional):
        是否开启“拖拽要素”功能  默认值：`True`.

    - cutPolygon (boolean; optional):
        是否开启“裁剪要素”功能  默认值：`False`.

    - removalMode (boolean; optional):
        是否开启“移除要素”功能  默认值：`True`.

    - rotateMode (boolean; optional):
        是否开启“旋转要素”功能  默认值：`True`.

    - oneBlock (boolean; optional):
        各功能按钮是否集成在同一个容器中  默认值：`False`.

- _drawnShapes (list; optional):
    监听编辑模式下已绘制矢量信息.

- showMeasurements (boolean; default False):
    是否为编辑模式下创建的矢量要素添加长度、面积标注  默认值：`False`.

- maxDrawnShapes (number; optional):
    针对编辑模式，设置最多允许绘制的矢量要素个数，默认无限制.

- measureControl (boolean; default False):
    是否显示测量工具栏  默认值：`False`.

- measureControlOptions (dict; optional):
    配置测量工具.

    `measureControlOptions` is a dict with keys:

    - position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional):
        设置测量工具栏方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
        默认值：`'topleft'`.

    - activeColor (string; optional):
        测量工具所绘制要素颜色  默认值：`'#f1c40f'`.

    - completedColor (string; optional):
        测量工具绘制完成后的要素颜色  默认值：`'#e74c3c'`.

- viewAutoCorrection (boolean; default False):
    是否开启视角自动校正，譬如地图所在容器像素尺寸发生变化后，会自动校正地图的视角  默认值：`False`."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletMap'
    Center = TypedDict(
        "Center",
            {
            "lng": NotRequired[typing.Union[int, float, numbers.Number]],
            "lat": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    Crs = TypedDict(
        "Crs",
            {
            "code": NotRequired[str],
            "proj4def": NotRequired[str],
            "options": NotRequired[dict]
        }
    )

    ScaleControlOptions = TypedDict(
        "ScaleControlOptions",
            {
            "position": NotRequired[Literal["topleft", "topright", "bottomleft", "bottomright"]],
            "imperial": NotRequired[bool]
        }
    )

    MaxBounds = TypedDict(
        "MaxBounds",
            {
            "minx": NotRequired[typing.Union[int, float, numbers.Number]],
            "miny": NotRequired[typing.Union[int, float, numbers.Number]],
            "maxx": NotRequired[typing.Union[int, float, numbers.Number]],
            "maxy": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    EditToolbarControlsOptions = TypedDict(
        "EditToolbarControlsOptions",
            {
            "position": NotRequired[Literal["topleft", "topright", "bottomleft", "bottomright"]],
            "drawMarker": NotRequired[bool],
            "drawCircleMarker": NotRequired[bool],
            "drawPolyline": NotRequired[bool],
            "drawRectangle": NotRequired[bool],
            "drawPolygon": NotRequired[bool],
            "drawCircle": NotRequired[bool],
            "drawText": NotRequired[bool],
            "editMode": NotRequired[bool],
            "dragMode": NotRequired[bool],
            "cutPolygon": NotRequired[bool],
            "removalMode": NotRequired[bool],
            "rotateMode": NotRequired[bool],
            "oneBlock": NotRequired[bool]
        }
    )

    MeasureControlOptions = TypedDict(
        "MeasureControlOptions",
            {
            "position": NotRequired[Literal["topleft", "topright", "bottomleft", "bottomright"]],
            "activeColor": NotRequired[str],
            "completedColor": NotRequired[str]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        children: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[str] = None,
        center: typing.Optional["Center"] = None,
        crs: typing.Optional[typing.Union[Literal["EPSG3857", "EPSG4326", "simple"], "Crs"]] = None,
        zoom: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        doubleClickZoom: typing.Optional[bool] = None,
        dragging: typing.Optional[bool] = None,
        closePopupOnClick: typing.Optional[bool] = None,
        minZoom: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        maxZoom: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        zoomDelta: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        zoomControl: typing.Optional[bool] = None,
        scrollWheelZoom: typing.Optional[typing.Union[bool, Literal["center"]]] = None,
        wheelPxPerZoomLevel: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        smoothWheelZoom: typing.Optional[typing.Union[bool, Literal["center"]]] = None,
        scaleControl: typing.Optional[bool] = None,
        scaleControlOptions: typing.Optional["ScaleControlOptions"] = None,
        maxBounds: typing.Optional["MaxBounds"] = None,
        maxBoundsViscosity: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        maxBoundsDelay: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        editToolbar: typing.Optional[bool] = None,
        editToolbarControlsOptions: typing.Optional["EditToolbarControlsOptions"] = None,
        _drawnShapes: typing.Optional[typing.Sequence] = None,
        showMeasurements: typing.Optional[bool] = None,
        maxDrawnShapes: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        measureControl: typing.Optional[bool] = None,
        measureControlOptions: typing.Optional["MeasureControlOptions"] = None,
        viewAutoCorrection: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'center', 'crs', 'zoom', 'doubleClickZoom', 'dragging', 'closePopupOnClick', 'minZoom', 'maxZoom', 'zoomDelta', 'zoomControl', 'scrollWheelZoom', 'wheelPxPerZoomLevel', 'smoothWheelZoom', 'scaleControl', 'scaleControlOptions', 'maxBounds', 'maxBoundsViscosity', 'maxBoundsDelay', 'editToolbar', 'editToolbarControlsOptions', '_drawnShapes', 'showMeasurements', 'maxDrawnShapes', 'measureControl', 'measureControlOptions', 'viewAutoCorrection']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'center', 'crs', 'zoom', 'doubleClickZoom', 'dragging', 'closePopupOnClick', 'minZoom', 'maxZoom', 'zoomDelta', 'zoomControl', 'scrollWheelZoom', 'wheelPxPerZoomLevel', 'smoothWheelZoom', 'scaleControl', 'scaleControlOptions', 'maxBounds', 'maxBoundsViscosity', 'maxBoundsDelay', 'editToolbar', 'editToolbarControlsOptions', '_drawnShapes', 'showMeasurements', 'maxDrawnShapes', 'measureControl', 'measureControlOptions', 'viewAutoCorrection']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(LeafletMap, self).__init__(children=children, **args)
