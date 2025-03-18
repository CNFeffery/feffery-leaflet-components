# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class LeafletFlowLayer(Component):
    """A LeafletFlowLayer component.
流线图层组件LeafletMigrationLayer

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- flowData (list of dicts; optional):
    定义流数据.

    `flowData` is a list of dicts with keys:

    - from (dict; optional):
        当前流数据起点坐标.

        `from` is a dict with keys:

        - lng (number; optional):
            经度.

        - lat (number; optional):
            纬度.

    - to (dict; optional):
        当前流数据终点坐标.

        `to` is a dict with keys:

        - lng (number; optional):
            经度.

        - lat (number; optional):
            纬度.

    - labels (dict; optional):
        当前流线起点、终点文字标签.

        `labels` is a dict with keys:

        - from (string; optional):
            起点文字标签.

        - to (string; optional):
            终点文字标签.

    - color (string; optional):
        当前流线颜色值.

    - value (number; optional):
        当前流线流量数值，与流线显示的宽度相关联.

- pulseRadius (number; default 30):
    扩散圆圈效果像素半径  默认值：`30`.

- pulseBorderWidth (number; default 3):
    扩散圆圈边框像素宽度  默认值：`3`.

- arcWidth (number; default 1):
    流线最小像素宽度  默认值：`1`.

- maxWidth (number; default 10):
    流线最大像素宽度  默认值：`10`.

- arcLabel (boolean; default True):
    是否显示流线起点、终点文字标签  默认值：`True`.

- arcLabelFontSize (string; default '10px'):
    流线起点、终点文字标签字体大小  默认值：`'10px'`.

- arcLabelFontFamily (string; default 'sans-serif'):
    流线起点、终点文字标签字体  默认值：`'sans-serif'`.

- keepUniqueLabels (boolean; default False):
    是否自动对起点、终点文字标签去重  默认值：`False`.

- setAction (a value equal to: 'pause', 'play', 'hide', 'show'; optional):
    手动执行控制动作，可选的有`'pause'`、`'play'`、`'hide'`、`'show'`，每次有效值更新后会重置为空值."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletFlowLayer'
    FlowDataFrom = TypedDict(
        "FlowDataFrom",
            {
            "lng": NotRequired[typing.Union[int, float, numbers.Number]],
            "lat": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    FlowDataTo = TypedDict(
        "FlowDataTo",
            {
            "lng": NotRequired[typing.Union[int, float, numbers.Number]],
            "lat": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    FlowDataLabels = TypedDict(
        "FlowDataLabels",
            {
            "from": NotRequired[str],
            "to": NotRequired[str]
        }
    )

    FlowData = TypedDict(
        "FlowData",
            {
            "from": NotRequired["FlowDataFrom"],
            "to": NotRequired["FlowDataTo"],
            "labels": NotRequired["FlowDataLabels"],
            "color": NotRequired[str],
            "value": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        flowData: typing.Optional[typing.Sequence["FlowData"]] = None,
        pulseRadius: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        pulseBorderWidth: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        arcWidth: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        maxWidth: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        arcLabel: typing.Optional[bool] = None,
        arcLabelFontSize: typing.Optional[str] = None,
        arcLabelFontFamily: typing.Optional[str] = None,
        keepUniqueLabels: typing.Optional[bool] = None,
        setAction: typing.Optional[Literal["pause", "play", "hide", "show"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'flowData', 'pulseRadius', 'pulseBorderWidth', 'arcWidth', 'maxWidth', 'arcLabel', 'arcLabelFontSize', 'arcLabelFontFamily', 'keepUniqueLabels', 'setAction']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'flowData', 'pulseRadius', 'pulseBorderWidth', 'arcWidth', 'maxWidth', 'arcLabel', 'arcLabelFontSize', 'arcLabelFontFamily', 'keepUniqueLabels', 'setAction']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletFlowLayer, self).__init__(**args)
