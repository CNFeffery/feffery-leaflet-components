# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletExport(Component):
    """A LeafletExport component.
地图导出组件LeafletExport

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- position (a value equal to: 'topleft', 'topright', 'bottomleft', 'bottomright'; optional):
    导出控件显示方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
    默认值：`'topleft'`.

- tileWait (number; optional):
    地图瓦片文件加载等待时长，单位：毫秒  默认值：500.

- filename (string; default 'map'):
    图片导出文件名  默认值：`'map'`.

- hideControlContainer (boolean; optional):
    导出图片时是否自动隐藏其他无关控件  默认值：`True`.

- customSizeTooltip (string; optional):
    为自定义导出尺寸控件设置提示文案内容.

- customSize (dict; optional):
    配置自定义尺寸.

    `customSize` is a dict with keys:

    - width (number; optional):
        像素宽度.

    - height (number; optional):
        像素高度.

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
    _type = 'LeafletExport'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, position=Component.UNDEFINED, tileWait=Component.UNDEFINED, filename=Component.UNDEFINED, hideControlContainer=Component.UNDEFINED, customSizeTooltip=Component.UNDEFINED, customSize=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'position', 'tileWait', 'filename', 'hideControlContainer', 'customSizeTooltip', 'customSize', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'position', 'tileWait', 'filename', 'hideControlContainer', 'customSizeTooltip', 'customSize', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletExport, self).__init__(**args)
