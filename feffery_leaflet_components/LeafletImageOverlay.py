# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletImageOverlay(Component):
    """A LeafletImageOverlay component.
图片叠加组件LeafletImageOverlay

Keyword arguments:

- id (string; optional):
    组件id.

- bounds (dict; required):
    必填，设置图片叠加区域坐标范围.

    `bounds` is a dict with keys:

    - maxx (number; required)

    - maxy (number; required)

    - minx (number; required)

    - miny (number; required)

- key (string; optional):
    强制刷新用.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- opacity (number; optional):
    图片透明度，取值应在`0`~`1`之间.

- url (string; required):
    必填，图片地址.

- zIndex (number; optional):
    当前图层z轴层级."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletImageOverlay'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, url=Component.REQUIRED, bounds=Component.REQUIRED, opacity=Component.UNDEFINED, zIndex=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'bounds', 'key', 'loading_state', 'opacity', 'url', 'zIndex']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'bounds', 'key', 'loading_state', 'opacity', 'url', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['bounds', 'url']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletImageOverlay, self).__init__(**args)
