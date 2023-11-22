# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletDomWrapper(Component):
    """A LeafletDomWrapper component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    传入需要进行包装的外部自定义元素.

- id (string; optional)

- disableClickPropagation (boolean; default True):
    是否屏蔽内部元素点击事件向外部地图实例的派发  默认：True.

- disableScrollPropagation (boolean; default True):
    是否屏蔽内部元素滚轮事件向外部地图实例的派发  默认：True.

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletDomWrapper'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, disableClickPropagation=Component.UNDEFINED, disableScrollPropagation=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'disableClickPropagation', 'disableScrollPropagation', 'key', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'disableClickPropagation', 'disableScrollPropagation', 'key', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(LeafletDomWrapper, self).__init__(children=children, **args)
