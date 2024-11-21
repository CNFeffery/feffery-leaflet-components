# AUTO GENERATED FILE - DO NOT EDIT

export ''_leafletfeaturegroup

"""
    ''_leafletfeaturegroup(;kwargs...)
    ''_leafletfeaturegroup(children::Any;kwargs...)
    ''_leafletfeaturegroup(children_maker::Function;kwargs...)


A LeafletFeatureGroup component.
要素分组组件LeafletFeatureGroup
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): 传入内部相关要素类图层组件
- `id` (String; optional): 组件唯一id
- `_bounds` (optional): 监听当前要素分组整体矩形范围. _bounds has the following type: lists containing elements 'minx', 'miny', 'maxx', 'maxy'.
Those elements have the following types:
  - `minx` (Real; optional)
  - `miny` (Real; optional)
  - `maxx` (Real; optional)
  - `maxy` (Real; optional)
- `bringToFront` (Bool; optional): 是否将当前要素分组置于顶层
默认值：`false`
- `key` (String; optional): 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `zIndex` (Real; optional): 当前要素分组`z`轴层级
"""
function ''_leafletfeaturegroup(; kwargs...)
        available_props = Symbol[:children, :id, :_bounds, :bringToFront, :key, :loading_state, :zIndex]
        wild_props = Symbol[]
        return Component("''_leafletfeaturegroup", "LeafletFeatureGroup", "feffery_leaflet_components", available_props, wild_props; kwargs...)
end

''_leafletfeaturegroup(children::Any; kwargs...) = ''_leafletfeaturegroup(;kwargs..., children = children)
''_leafletfeaturegroup(children_maker::Function; kwargs...) = ''_leafletfeaturegroup(children_maker(); kwargs...)

