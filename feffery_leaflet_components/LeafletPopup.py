# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletPopup(Component):
    """A LeafletPopup component.
弹出窗口组件LeafletPopup

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    组件型，按钮内嵌元素.

- id (string; optional):
    组件唯一id.

- className (string; optional):
    当前组件css类名.

- closeButton (boolean; default False):
    是否显示关闭按钮  默认值：`False`.

- closeOnClick (boolean; default True):
    点击地图空白处是否可关闭窗口  默认值：`True`.

- closeOnEscapeKey (boolean; default True):
    通过键盘`esc`键是否可关闭窗口  默认值：`True`.

- keepInView (boolean; default False):
    已展开的窗口是否限制在地图范围内显示  默认值：`False`.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading.

- width (number; optional):
    为窗口设置固定像素宽度值."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletPopup'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, className=Component.UNDEFINED, keepInView=Component.UNDEFINED, closeButton=Component.UNDEFINED, closeOnEscapeKey=Component.UNDEFINED, closeOnClick=Component.UNDEFINED, width=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'closeButton', 'closeOnClick', 'closeOnEscapeKey', 'keepInView', 'key', 'loading_state', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'closeButton', 'closeOnClick', 'closeOnEscapeKey', 'keepInView', 'key', 'loading_state', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(LeafletPopup, self).__init__(children=children, **args)
