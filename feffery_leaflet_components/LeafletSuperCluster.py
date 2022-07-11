# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LeafletSuperCluster(Component):
    """A LeafletSuperCluster component.


Keyword arguments:

- id (string; optional)

- clusterBackground (string; optional)

- clusterBorder (string; optional)

- clusterIconBaseSize (number; default 10)

- clusterIconExtraSizeFactor (number; default 40)

- clusterTextColor (string; optional)

- clusterTextSizeFactor (number; default 0.4)

- extent (number; optional)

- iconOptions (dict; optional)

    `iconOptions` is a dict with keys:

    - className (string; optional)

    - iconAnchor (list of numbers; optional)

    - iconSize (list of numbers; optional)

    - iconUrl (string; optional)

    - popupAnchor (list of numbers; optional)

    - shadowAnchor (list of numbers; optional)

    - shadowSize (list of numbers; optional)

    - shadowUrl (string; optional)

    - tooltipAnchor (list of numbers; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- maxZoom (number; optional)

- minPoints (number; optional)

- minZoom (number; optional)

- nodeSize (number; optional)

- positions (list of dicts; required)

- radius (number; optional)

- tooltipField (string; default 'tooltip')

- tooltipSticky (boolean; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletSuperCluster'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, positions=Component.REQUIRED, clusterBackground=Component.UNDEFINED, clusterBorder=Component.UNDEFINED, clusterTextColor=Component.UNDEFINED, clusterIconBaseSize=Component.UNDEFINED, clusterIconExtraSizeFactor=Component.UNDEFINED, clusterTextSizeFactor=Component.UNDEFINED, minZoom=Component.UNDEFINED, maxZoom=Component.UNDEFINED, minPoints=Component.UNDEFINED, radius=Component.UNDEFINED, extent=Component.UNDEFINED, nodeSize=Component.UNDEFINED, iconOptions=Component.UNDEFINED, tooltipField=Component.UNDEFINED, tooltipSticky=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'clusterBackground', 'clusterBorder', 'clusterIconBaseSize', 'clusterIconExtraSizeFactor', 'clusterTextColor', 'clusterTextSizeFactor', 'extent', 'iconOptions', 'key', 'loading_state', 'maxZoom', 'minPoints', 'minZoom', 'nodeSize', 'positions', 'radius', 'tooltipField', 'tooltipSticky']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'clusterBackground', 'clusterBorder', 'clusterIconBaseSize', 'clusterIconExtraSizeFactor', 'clusterTextColor', 'clusterTextSizeFactor', 'extent', 'iconOptions', 'key', 'loading_state', 'maxZoom', 'minPoints', 'minZoom', 'nodeSize', 'positions', 'radius', 'tooltipField', 'tooltipSticky']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['positions']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LeafletSuperCluster, self).__init__(**args)
