# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletVectorTile(Component):
    """A LeafletVectorTile component.


Keyword arguments:

- id (string; optional)

- key (string; optional):
    强制刷新用.

- url (string; optional)

- minZoom (number; default 1)

- maxZoom (number; default 18)

- interactive (boolean; default False)

- featureIdField (string; default 'id')

- vectorTileLayerStyles (dict; optional)

    `vectorTileLayerStyles` is a dict with strings as keys and values
    of type string | dict with strings as keys and values of type dict
    with keys:

    - func (string; optional)

- extraProps (dict; optional)

- renderer (a value equal to: 'svg', 'canvas'; default 'svg')

- _layerNames (list; optional)

- _clickedFeature (dict; optional)

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
    _type = 'LeafletVectorTile'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, url=Component.UNDEFINED, minZoom=Component.UNDEFINED, maxZoom=Component.UNDEFINED, interactive=Component.UNDEFINED, featureIdField=Component.UNDEFINED, vectorTileLayerStyles=Component.UNDEFINED, extraProps=Component.UNDEFINED, renderer=Component.UNDEFINED, _layerNames=Component.UNDEFINED, _clickedFeature=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'url', 'minZoom', 'maxZoom', 'interactive', 'featureIdField', 'vectorTileLayerStyles', 'extraProps', 'renderer', '_layerNames', '_clickedFeature', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'url', 'minZoom', 'maxZoom', 'interactive', 'featureIdField', 'vectorTileLayerStyles', 'extraProps', 'renderer', '_layerNames', '_clickedFeature', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(LeafletVectorTile, self).__init__(**args)
