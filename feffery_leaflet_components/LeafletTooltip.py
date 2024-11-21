# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletTooltip(Component):
    """A LeafletTooltip component.
信息框组件LeafletTooltip

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string; optional):
    当前图层css类名.

- children (a list of or a singular dash component, string or number; optional):
    信息框内部元素.

- direction (a value equal to: 'right', 'left', 'top', 'bottom', 'center', 'auto'; default 'auto'):
    信息框展开方向，可选项有`'right'`、`'left'`、`'top'`、`'bottom'`、`'center'`、`'auto'`
    默认值：`'auto'`.

- permanent (boolean; default False):
    信息框是否保持展开状态，而无需鼠标移入触发  默认值：`False`.

- sticky (boolean; default False):
    信息框是否跟随鼠标位置  默认值：`False`.

- opacity (number; default 0.9):
    信息框透明度  默认值：`0.9`.

- interactive (boolean; default False):
    信息框内部元素是否可交互  默认值：`False`.

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
    _type = 'LeafletTooltip'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, className=Component.UNDEFINED, direction=Component.UNDEFINED, permanent=Component.UNDEFINED, sticky=Component.UNDEFINED, opacity=Component.UNDEFINED, interactive=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'className', 'children', 'direction', 'permanent', 'sticky', 'opacity', 'interactive', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'className', 'children', 'direction', 'permanent', 'sticky', 'opacity', 'interactive', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(LeafletTooltip, self).__init__(children=children, **args)
