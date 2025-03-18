# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class LeafletMapSync(Component):
    """A LeafletMapSync component.
地图同步组件LeafletMapSync

Keyword arguments:

- id (string; required):
    必填，组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- groupId (string; optional):
    地图组`id`，用于限定地图同步行为发生在当前相同`id`的组内.

- syncStrategy (a value equal to: 'all', 'center'; default 'all'):
    同步行为策略，可选项有`'all'`、`'center'`  默认值：`'all'`."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_leaflet_components'
    _type = 'LeafletMapSync'

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        groupId: typing.Optional[str] = None,
        syncStrategy: typing.Optional[Literal["all", "center"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'groupId', 'syncStrategy']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'groupId', 'syncStrategy']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LeafletMapSync, self).__init__(**args)
