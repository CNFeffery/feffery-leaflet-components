# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletFlowLayer(Component):
    """A LeafletFlowLayer component.


Keyword arguments:

- id (string; optional)

- key (string; optional):
    强制刷新用.

- flowData (list of dicts; optional)

    `flowData` is a list of dicts with keys:

    - from (dict; optional)

        `from` is a dict with keys:

        - lng (number; optional)

        - lat (number; optional)

    - to (dict; optional)

        `to` is a dict with keys:

        - lng (number; optional)

        - lat (number; optional)

    - labels (dict; optional)

        `labels` is a dict with keys:

        - from (string; optional)

        - to (string; optional)

    - color (string; optional)

    - value (number; optional)

- pulseRadius (number; default 30)

- pulseBorderWidth (number; default 3)

- arcWidth (number; default 1)

- maxWidth (number; default 10)

- arcLabel (boolean; default True)

- arcLabelFontSize (string; default '10px')

- arcLabelFontFamily (string; default 'sans-serif')

- keepUniqueLabels (boolean; default False):
    设置是否对起终点标签文字进行去重  默认：False.

- setAction (a value equal to: 'pause', 'play', 'hide', 'show'; optional):
    手动执行动作，可选的有'pause'、'play'、'hide'、'show'，每次有效值更新后会还原为空值.

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
    _type = 'LeafletFlowLayer'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, flowData=Component.UNDEFINED, pulseRadius=Component.UNDEFINED, pulseBorderWidth=Component.UNDEFINED, arcWidth=Component.UNDEFINED, maxWidth=Component.UNDEFINED, arcLabel=Component.UNDEFINED, arcLabelFontSize=Component.UNDEFINED, arcLabelFontFamily=Component.UNDEFINED, keepUniqueLabels=Component.UNDEFINED, setAction=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'flowData', 'pulseRadius', 'pulseBorderWidth', 'arcWidth', 'maxWidth', 'arcLabel', 'arcLabelFontSize', 'arcLabelFontFamily', 'keepUniqueLabels', 'setAction', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'flowData', 'pulseRadius', 'pulseBorderWidth', 'arcWidth', 'maxWidth', 'arcLabel', 'arcLabelFontSize', 'arcLabelFontFamily', 'keepUniqueLabels', 'setAction', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletFlowLayer, self).__init__(**args)
