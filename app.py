import dash
import random
from dash import html
import feffery_antd_components as fac
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output, State

app = dash.Dash(
    __name__
)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),

                # 注入图层组容器
                flc.LeafletLayerGroup(id='layer-group'),

                flc.LeafletMapAction(id='map-action'),

                # 注入内容切换控件
                # 注入内容切换功能组件
                html.Div(
                    fac.AntdSegmented(
                        id='change-content',
                        options=[
                            {
                                'label': '内容示例1',
                                'value': '内容示例1'
                            },
                            {
                                'label': '内容示例2',
                                'value': '内容示例2'
                            },
                            {
                                'label': '内容示例3',
                                'value': '内容示例3'
                            }
                        ],
                        defaultValue='内容示例1'
                    ),
                    style={
                        'position': 'absolute',
                        'top': '25px',
                        'right': '25px',
                        'zIndex': 999,
                        'padding': '15px',
                        'backgroundColor': 'white'
                    }
                ),

                # 注入表格内容展示区
                html.Div(
                    id='table-container',
                    style={
                        'position': 'absolute',
                        'width': '200px',
                        'height': '50px',
                        'zIndex': 999,
                        'backgroundColor': 'white',
                        'left': '75px',
                        'top': '25px'
                    }
                )
            ],
            style={
                'height': '800px',
                'position': 'relative'
            }
        )
    ],
    style={
        'padding': '0 400px'
    }
)


@app.callback(
    [Output('layer-group', 'children'),
     Output('map-action', 'mapActionConfig'),
     Output('table-container', 'children')],
    Input('change-content', 'value')
)
def change_content(value):

    if value == '内容示例1':

        return [
            flc.LeafletFlowLayer(
                flowData=[
                    {
                        'from': {
                            'lng': 106.55,
                            'lat': 29.57
                        },
                        'to': {
                            'lng': 116.3,
                            'lat': 39.9
                        },
                        'labels': {
                            'from': '重庆市',
                            'to': '北京市'
                        },
                        'value': 1000
                    },
                    {
                        'from': {
                            'lng': 106.55,
                            'lat': 29.57
                        },
                        'to': {
                            'lng': 113.15,
                            'lat': 23.06
                        },
                        'labels': {
                            'from': None,
                            'to': '广州市'
                        },
                        'value': 3000
                    },
                    {
                        'from': {
                            'lng': 106.55,
                            'lat': 29.57
                        },
                        'to': {
                            'lng': 121.52,
                            'lat': 30.8
                        },
                        'labels': {
                            'from': None,
                            'to': '上海市'
                        },
                        'value': 2000
                    },
                    {
                        'from': {
                            'lng': 106.55,
                            'lat': 29.57
                        },
                        'to': {
                            'lng': 104.04,
                            'lat': 30.4
                        },
                        'labels': {
                            'from': None,
                            'to': '成都市'
                        },
                        'value': 2000,
                        'color': '#e84118'
                    }
                ],
                maxWidth=6,
                arcLabelFontSize='18px'
            ),
            {
                'type': 'fly-to-bounds',
                'bounds': {
                    'minx': 0,
                    'miny': -10,
                    'maxx': 10,
                    'maxy': 0
                }
            },
            fac.AntdTable(
                columns=[
                    {
                        'title': '类型',
                        'dataIndex': '类型',
                        'width': '50%'
                    },
                    {
                        'title': '数值',
                        'dataIndex': '数值',
                        'width': '50%'
                    }
                ],
                data=[
                    {
                        '类型': '类型1',
                        '数值': 'xxx'
                    }
                    for i in range(3)
                ],
                pagination={
                    'hideOnSinglePage': True
                }
            )
        ]

    elif value == '内容示例2':
        return [
            [
                flc.LeafletCircleMarker(
                    center={
                        'lng': random.uniform(-45, 45),
                        'lat': random.uniform(-45, 45)
                    },
                    radius=random.randint(5, 25),
                    pathOptions={
                        'fillOpacity': random.uniform(0, 0.8)
                    }
                )
                for i in range(25)
            ],
            {
                'type': 'fly-to-bounds',
                'bounds': {
                    'minx': -45,
                    'miny': -45,
                    'maxx': 45,
                    'maxy': 45,
                }
            },
            fac.AntdTable(
                columns=[
                    {
                        'title': '类型',
                        'dataIndex': '类型',
                        'width': '50%'
                    },
                    {
                        'title': '数值',
                        'dataIndex': '数值',
                        'width': '50%'
                    }
                ],
                data=[
                    {
                        '类型': '类型2',
                        '数值': 'xxx'
                    }
                    for i in range(3)
                ],
                pagination={
                    'hideOnSinglePage': True
                }
            )
        ]

    return [
        [
            flc.LeafletRectangle(
                bounds={
                    'minx': 0,
                    'miny': 0,
                    'maxx': 2,
                    'maxy': 2
                }
            ),
            flc.LeafletRectangle(
                bounds={
                    'minx': -3,
                    'miny': -3,
                    'maxx': 1,
                    'maxy': 1.5
                },
                pathOptions={
                    'color': 'red'
                }
            )
        ],
        {
            'type': 'fly-to-bounds',
            'bounds': {
                'minx': -3,
                'miny': -3,
                'maxx': 3,
                'maxy': 3,
            }
        },
        fac.AntdTable(
            columns=[
                {
                    'title': '类型',
                    'dataIndex': '类型',
                    'width': '50%'
                },
                {
                    'title': '数值',
                    'dataIndex': '数值',
                    'width': '50%'
                }
            ],
            data=[
                {
                    '类型': '类型3',
                    '数值': 'xxx'
                }
                for i in range(3)
            ],
            pagination={
                'hideOnSinglePage': True
            }
        )
    ]


if __name__ == '__main__':
    app.run(debug=True)
