# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletMapAction(Component):
    """A LeafletMapAction component.


Keyword arguments:

- id (string; optional)

- key (string; optional):
    强制刷新用.

- mapActionConfig (dict; optional)

    `mapActionConfig` is a dict with keys:

    - type (a value equal to: 'set-zoom', 'zoom-in', 'zoom-out', 'set-view', 'pan-to', 'fly-to', 'fly-to-bounds', 'invalidate-size'; optional)

    - center (dict; optional)

        `center` is a dict with keys:

        - lng (number; optional)

        - lat (number; optional)

    - zoom (number; optional)

    - zoomInOffset (number; optional)

    - zoomOutOffset (number; optional)

    - bounds (dict; optional)

        `bounds` is a dict with keys:

        - minx (number; optional)

        - miny (number; optional)

        - maxx (number; optional)

        - maxy (number; optional)

    - flyToDuration (a value equal to: 'instant', 'fast', 'normal', 'slow', 'auto'; optional)

    - delay (number; optional):
        设置当前动作的延时执行时长，单位：毫秒  默认：0.

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
    _type = 'LeafletMapAction'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, mapActionConfig=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'mapActionConfig', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'mapActionConfig', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletMapAction, self).__init__(**args)
