# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletMapAction(Component):
    """A LeafletMapAction component.


Keyword arguments:

- id (string; optional)

- className (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- mapActionConfig (dict; optional)

    `mapActionConfig` is a dict with keys:

    - bounds (dict; optional)

        `bounds` is a dict with keys:

        - maxx (number; optional)

        - maxy (number; optional)

        - minx (number; optional)

        - miny (number; optional)

    - center (dict; optional)

        `center` is a dict with keys:

        - lat (number; optional)

        - lng (number; optional)

    - flyToDuration (a value equal to: 'instant', 'fast', 'normal', 'slow', 'auto'; optional)

    - type (a value equal to: 'set-zoom', 'zoom-in', 'zoom-out', 'fly-to', 'fly-to-bounds', 'invalidate-size'; optional)

    - zoom (number; optional)

    - zoomInOffset (number; optional)

    - zoomOutOffset (number; optional)

- style (dict; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, mapActionConfig=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'loading_state', 'mapActionConfig', 'style']
        self._type = 'LeafletMapAction'
        self._namespace = 'feffery_leaflet_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'loading_state', 'mapActionConfig', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LeafletMapAction, self).__init__(**args)
