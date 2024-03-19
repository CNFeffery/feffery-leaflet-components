# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletvectortile

"""
    ''_leafletvectortile(;kwargs...)

A LeafletVectorTile component.

Keyword arguments:
- `id` (String; optional)
- `_clickedFeature` (Dict; optional)
- `_layerNames` (Array; optional)
- `extraProps` (Dict; optional)
- `featureIdField` (String; optional)
- `interactive` (Bool; optional)
- `key` (String; optional): 强制刷新用
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxZoom` (Real; optional)
- `minZoom` (Real; optional)
- `renderer` (a value equal to: 'svg', 'canvas'; optional)
- `url` (String; optional)
- `vectorTileLayerStyles` (optional): . vectorTileLayerStyles has the following type: Dict with Strings as keys and values of type String | Dict with Strings as keys and values of type lists containing elements 'func'.
Those elements have the following types:
  - `func` (String; optional)
"""
function ''_leafletvectortile(; kwargs...)
        available_props = Symbol[:id, :_clickedFeature, :_layerNames, :extraProps, :featureIdField, :interactive, :key, :loading_state, :maxZoom, :minZoom, :renderer, :url, :vectorTileLayerStyles]
        wild_props = Symbol[]
        return Component("''_leafletvectortile", "LeafletVectorTile", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

