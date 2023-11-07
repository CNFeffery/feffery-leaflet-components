# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletFlowLayer(Component):
    """A LeafletFlowLayer component.


Keyword arguments:

- id (string; optional)

- arcLabel (boolean; default True)

- arcLabelFontFamily (string; default 'sans-serif')

- arcLabelFontSize (string; default '10px')

- arcWidth (number; default 1)

- flowData (list of dicts; optional)

    `flowData` is a list of dicts with keys:

    - color (string; optional)

    - from (dict; optional)

        `from` is a dict with keys:

        - lat (number; optional)

        - lng (number; optional)

    - labels (dict; optional)

        `labels` is a dict with keys:

        - from (string; optional)

        - to (string; optional)

    - to (dict; optional)

        `to` is a dict with keys:

        - lat (number; optional)

        - lng (number; optional)

    - value (number; optional)

- isStatic (boolean; default False)

- keepUniqueLabels (boolean; default False):
    设置是否对起终点标签文字进行去重  默认：False.

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- maxWidth (number; default 10)

- pulseBorderWidth (number; default 3)

- pulseRadius (number; default 30)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletFlowLayer'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, flowData=Component.UNDEFINED, pulseRadius=Component.UNDEFINED, pulseBorderWidth=Component.UNDEFINED, arcWidth=Component.UNDEFINED, maxWidth=Component.UNDEFINED, arcLabel=Component.UNDEFINED, arcLabelFontSize=Component.UNDEFINED, arcLabelFontFamily=Component.UNDEFINED, isStatic=Component.UNDEFINED, keepUniqueLabels=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'arcLabel', 'arcLabelFontFamily', 'arcLabelFontSize', 'arcWidth', 'flowData', 'isStatic', 'keepUniqueLabels', 'key', 'loading_state', 'maxWidth', 'pulseBorderWidth', 'pulseRadius']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'arcLabel', 'arcLabelFontFamily', 'arcLabelFontSize', 'arcWidth', 'flowData', 'isStatic', 'keepUniqueLabels', 'key', 'loading_state', 'maxWidth', 'pulseBorderWidth', 'pulseRadius']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletFlowLayer, self).__init__(**args)
