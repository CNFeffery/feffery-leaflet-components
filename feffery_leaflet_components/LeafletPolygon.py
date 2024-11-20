# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletPolygon(Component):
    """A LeafletPolygon component.
多边形图层组件LeafletPolygon

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
    必填，定义多边形坐标.

    `positions` is a list of dicts with keys:

    - lng (number; optional):
        经度.

    - lat (number; optional):
        纬度. | list of dicts with keys:

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

- editable (boolean; default False):
    当前要素是否可编辑  默认值：`False`.

- nClicks (number; default 0):
    监听当前要素累计点击次数  默认值：`0`.

- mouseOverCount (number; default 0):
    监听当前要素鼠标移入事件累计次数  默认值：`0`.

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
    _type = 'LeafletPolygon'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, className=Component.UNDEFINED, positions=Component.REQUIRED, pathOptions=Component.UNDEFINED, editable=Component.UNDEFINED, nClicks=Component.UNDEFINED, mouseOverCount=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'className', 'children', 'positions', 'pathOptions', 'editable', 'nClicks', 'mouseOverCount', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'className', 'children', 'positions', 'pathOptions', 'editable', 'nClicks', 'mouseOverCount', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['positions']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletPolygon, self).__init__(children=children, **args)
