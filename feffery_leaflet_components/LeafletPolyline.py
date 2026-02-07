# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class LeafletPolyline(Component):
    """A LeafletPolyline component.
折线图层组件LeafletPolyline

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string; optional):
    当前图层css类名.

- children (a list of or a singular dash component, string or number; optional):
    要传入的`LeafletTooltip`、`LeafletPopup`组件，配合当前图层使用.

- positions (list of dicts; required):
    必填，定义折线坐标.

    `positions` is a list of dicts with keys:

    - lng (number; optional):
        经度.

    - lat (number; optional):
        纬度. | list of list of dicts with keys:

    - lng (number; optional):
        经度.

    - lat (number; optional):
        纬度.s

- pathOptions (optional):
    矢量样式配置参数.

- arrowheads (dict; default False):
    配置额外箭头效果  默认值：`False`.

    `arrowheads` is a boolean | dict with keys:

    - yawn (number; optional):
        箭头开合角度  默认值：`60`.

    - fill (boolean; optional):
        是否绘制实心箭头  默认值：`False`.

    - size (number | string; optional):
        箭头尺寸比例，传入数值型是以米为单位，传入字符串时表示对应所附着折线的百分比，或css格式尺寸值  默认值：`'15%'`.

    - frequency (a value equal to: 'allvertices', 'endonly' | number | string; optional):
        箭头在折线上的绘制频率，可选项有`'allvertices'`（每个折点对应1个箭头）、`'endonly'`（只在线要素末端绘制1个箭头）
        当传入以`'m'`结尾的字符串时表示以米为单位的间隔，传入以`'px'`结尾的字符串时表示以像素为单位的间隔
        传入数值型时表示以等间距方式绘制固定数量的箭头  默认值：`'allvertices'`.

    - proportionalToTotal (boolean; optional):
        当`size`设置为百分比形式时，针对多段折线要素，是否以整体折线长度总和为百分比对应的单位1  默认值：`False`.

- arrowheadsPathOptions (optional):
    箭头样式配置参数，默认沿用`pathOptions`.

- editable (boolean; default False):
    当前要素是否可编辑  默认值：`False`.

- nClicks (number; default 0):
    监听当前要素累计点击次数  默认值：`0`.

- mouseOverCount (number; default 0):
    监听当前要素鼠标移入事件累计次数  默认值：`0`."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletPolyline'
    Positions = TypedDict(
        "Positions",
            {
            "lng": NotRequired[NumberType],
            "lat": NotRequired[NumberType]
        }
    )

    Arrowheads = TypedDict(
        "Arrowheads",
            {
            "yawn": NotRequired[NumberType],
            "fill": NotRequired[bool],
            "size": NotRequired[typing.Union[NumberType, str]],
            "frequency": NotRequired[typing.Union[Literal["allvertices", "endonly"], NumberType, str]],
            "proportionalToTotal": NotRequired[bool]
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        className: typing.Optional[str] = None,
        positions: typing.Optional[typing.Union[typing.Sequence["Positions"], typing.Sequence[typing.Sequence["Positions"]]]] = None,
        pathOptions: typing.Optional[typing.Any] = None,
        arrowheads: typing.Optional[typing.Union[bool, "Arrowheads"]] = None,
        arrowheadsPathOptions: typing.Optional[typing.Any] = None,
        editable: typing.Optional[bool] = None,
        nClicks: typing.Optional[NumberType] = None,
        mouseOverCount: typing.Optional[NumberType] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'className', 'children', 'positions', 'pathOptions', 'arrowheads', 'arrowheadsPathOptions', 'editable', 'nClicks', 'mouseOverCount']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'className', 'children', 'positions', 'pathOptions', 'arrowheads', 'arrowheadsPathOptions', 'editable', 'nClicks', 'mouseOverCount']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['positions']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletPolyline, self).__init__(children=children, **args)

setattr(LeafletPolyline, "__init__", _explicitize_args(LeafletPolyline.__init__))
