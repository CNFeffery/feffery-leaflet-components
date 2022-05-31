import feffery_leaflet_components as flc
import dash
import json
import numpy as np
from dash.dependencies import Input, Output, State
from dash import html
from palettable.colorbrewer.sequential import Reds_5
import mapclassify as mc

app = dash.Dash(__name__, compress=True, suppress_callback_exceptions=True)

addressPoints = json.load(open('heatmap-demo-points.json'))


def generate_mock_geojson(x, mode='choropleth'):

    if mode == 'choropleth':

        county_features = json.load(
            open('./重庆市区县面要素.geojson', encoding='utf-8'))

        county_mock_values = np.random.rand(38)
        bins = [0] + mc.NaturalBreaks(county_mock_values,
                                      5).bins.tolist()[:-1] + [1]
        for i in range(38):
            county_features['features'][i]['properties']['value'] = county_mock_values[i]
            county_features['features'][i]['properties']['tooltip'] = '<font style="font-weight:bold;">示例指标{}：</font>{}'.format(
                x,
                round(county_features['features'][i]['properties']['value'], 2)
            )

        return [
            county_features,
            {
                'bins': [
                    [left, right]
                    for left, right in zip(bins[:-1], bins[1:])
                ],
                'styles': [
                    {
                        'color': 'white',
                        'fillColor': c,
                        'fillOpacity': 1,
                        'weight': 2
                    } for c in Reds_5.hex_colors
                ],
                'closed': 'left'
            }
        ]

    elif mode == 'category':

        county_features = json.load(
            open('./重庆市区县面要素.geojson', encoding='utf-8'))

        for i in range(38):
            county_features['features'][i]['properties']['category'] = str(x)
            county_features['features'][i]['properties']['tooltip'] = '<font style="font-weight:bold;">示例指标{}：</font>{}'.format(
                x,
                county_features['features'][i]['properties']['category']
            )

        return [
            county_features,
            {
                str(x): {
                    'color': 'white' if x % 2 == 0 else 'black',
                    'fillColor': 'white' if x % 2 == 0 else 'black',
                    'fillOpacity': 0.8
                }
            }
        ]


@app.callback(
    [Output('geojson-demo', 'data'),
     Output('geojson-demo', 'featureValueToStyles')],
    Input('update-geojson-data-demo', 'n_clicks')
)
def update_gejson_layer_data(n_clicks):
    if n_clicks:

        return generate_mock_geojson(n_clicks, mode='choropleth')

    return dash.no_update


choropleth_data, featureValueToStyles = generate_mock_geojson(
    -1, mode='choropleth')


def generate_sample_heatmap():

    return [
        {
            'lng': point[1],
            'lat': point[0],
            'weight': np.random.rand()
        }
        for point in addressPoints
        if np.random.rand() <= 0.01
    ]


@app.callback(
    Output('heatmap-demo', 'points'),
    Input('update-heatmap-points-demo', 'n_clicks')
)
def update_heatmap_points(n_clicks):
    if n_clicks:

        return generate_sample_heatmap()

    return dash.no_update


flowDataDemo = [{"from": [-118.2705, 33.9984], "to":[-122.789336, 37.920458], "labels":["Los Angeles", "San Francisco"], "color":"#ff3a31"}, {"from": [-118.2705, 33.9984], "to":[-80.247887, 25.792296], "labels":[None, "Miami"], "color":"#ff7e2b"}, {"from": [-118.2705, 33.9984], "to":[-73.999705, 40.795047], "labels":[None, "New York"], "color":"#ffc726"}, {"from": [-118.2705, 33.9984], "to":[-87.724088, 41.917846], "labels":[None, "Chicago"], "color":"#e9ff20"}, {"from": [-118.2705, 33.9984], "to":[-92.145189, 46.77372], "labels":[None, "Duluth"], "color":"#99ff1b"},
                {"from": [-118.2705, 33.9984], "to":[-111.824547, 40.788055], "labels":[None, "Salt Lake"], "color":"#45ff15"}, {"from": [-118.2705, 33.9984], "to":[-111.364615, 47.536109], "labels":[None, "Great Falls"], "color":"#10ff33"}, {"from": [-118.2705, 33.9984], "to":[-97.585039, 35.511099], "labels":[None, "Oklahoma"], "color":"#0aff84"}, {"from": [-118.2705, 33.9984], "to":[-115.157907, 36.173032], "labels":[None, "Las Vegas"], "color":"#05ffd9"}, {"from": [-118.2705, 33.9984], "to":[-103.196215, 34.418753], "labels":[None, "Clovis"], "color":"#00ccff"}]


@app.callback(
    Output('flow-demo', 'flowData'),
    Input('button-demo', 'n_clicks')
)
def demo(n_clicks):

    if n_clicks:

        return [
            {
                'from': {
                    'lng': item['from'][0],
                    'lat': item['from'][1]
                },
                'to': {
                    'lng': item['to'][0],
                    'lat': item['to'][1]
                },
                'labels': {
                    'from': item['labels'][0],
                    'to': item['labels'][1]
                },
                'color': item['color'],
                'value': np.random.rand()
            }
            for item in [flowDataDemo[n_clicks % flowDataDemo.__len__()]]
            # for item in flowDataDemo
        ]

    return dash.no_update


@app.callback(
    Output('resize-demo-container', 'style'),
    Input('resize-demo-trigger', 'n_clicks'),
    State('resize-demo-container', 'style')
)
def resize_demo(n_clicks, style):

    if n_clicks:
        if style['width'] == '800px':
            return {
                **style,
                'width': '400px'
            }

        else:
            return {
                **style,
                'width': '800px'
            }

    return dash.no_update


@app.callback(
    Output('resize-demo-action', 'mapActionConfig'),
    Input('resize-demo-container', 'style')
)
def resize_demo_action(style):

    return {
        'type': 'invalidate-size'
    }


app.layout = html.Div([

    html.Button(
        'resize',
        id='resize-demo-trigger'
    ),
    html.Div(
        flc.LeafletMap(
            [
                flc.LeafletMapAction(
                    id='resize-demo-action'
                ),
                flc.LeafletRectangle(
                    bounds={
                        'minx': 116,
                        'miny': 29,
                        'maxx': 118,
                        'maxy': 31
                    }
                ),
                flc.LeafletPolygon(
                    positions=[
                        [
                            [
                                {
                                    'lng': p[1],
                                    'lat': p[0]
                                }
                                for p in [[37, -109.05], [41, -109.03], [41, -102.05], [37, -102.04]]
                            ],
                            [
                                {
                                    'lng': p[1],
                                    'lat': p[0]
                                }
                                for p in [[37.29, -108.58], [40.71, -108.58], [40.71, -102.50], [37.29, -102.50]]
                            ]
                        ],
                        [
                            [
                                {
                                    'lng': p[1],
                                    'lat': p[0]
                                }
                                for p in [[41+5, -111.03], [45+5, -111.04], [45+5, -104.05], [41+5, -104.05]]
                            ]
                        ]

                    ]
                ),
                flc.LeafletPolyline(
                    positions=[
                        [
                            {
                                'lng': 106,
                                'lat': 29
                            },
                            {
                                'lng': 107,
                                'lat': 29
                            },
                            {
                                'lng': 106,
                                'lat': 30
                            }
                        ],
                        [
                            {
                                'lng': 106 + 1,
                                'lat': 29 + 1
                            },
                            {
                                'lng': 107 + 1,
                                'lat': 29 + 1
                            },
                            {
                                'lng': 106 + 1,
                                'lat': 30 + 1
                            }
                        ]
                    ]
                ),
                flc.LeafletCircleMarker(
                    pathOptions={
                        'color': 'red'
                    },
                    center={
                        'lng': 106,
                        'lat': 29
                    },
                    radius=25
                ),
                flc.LeafletTileLayer(
                    # url='http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
                )
            ],
            zoom=4,
            center={
                'lng': 106,
                'lat': 29
            },
            style={
                'width': '100%',
                'height': '100%'
            }
        ),
        id='resize-demo-container',
        style={
            'width': '800px',
            'height': '800px'
        }
    ),

    html.H4('迁徙地图测试'),
    html.Button('刷新数据', id='button-demo'),
    flc.LeafletMap(
        [
            flc.LeafletFlowLayer(
                id='flow-demo',
                flowData=[
                    {
                        'from': {
                            'lng': item['from'][0],
                            'lat': item['from'][1]
                        },
                        'to': {
                            'lng': item['to'][0],
                            'lat': item['to'][1]
                        },
                        'labels': {
                            'from': item['labels'][0],
                            'to': item['labels'][1]
                        },
                        'color': item['color'],
                        'value': np.random.rand()
                    }
                    for item in [flowDataDemo[0]]
                ]
            ),
            flc.LeafletTileLayer(
                url='http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
            )
        ],
        zoom=4,
        center={
            'lat': 39.83530309866932,
            'lng': -101.31755312803932
        },
        style={
            'width': '800px',
            'height': '600px'
        }
    ),

    # 地图动作测试
    html.H4('地图动作测试：'),
    html.Div(
        [
            html.Button(
                'set-zoom到10',
                id='set-zoom-demo'
            ),
            html.Button(
                '放大1单位level',
                id='zoom-in-demo'
            ),
            html.Button(
                '缩小1单位level',
                id='zoom-out-demo'
            ),
            html.Button(
                'fly-to到北京市',
                id='fly-to-demo'
            ),
            html.Button(
                'fly-to-bounds长沙市',
                id='fly-to-bounds-demo'
            ),
            html.Button(
                'geojson图层更新data',
                id='update-geojson-data-demo'
            ),
            html.Button(
                'heatmap图层更新points',
                id='update-heatmap-points-demo'
            ),
        ]
    ),

    flc.LeafletMap(
        [
            flc.LeafletMapListener(

            ),
            flc.LeafletMapAction(
                id='map-action-demo'
            ),
            flc.LeafletTileLayer(
                # url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                url='http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
            ),
            flc.LeafletGeoJSON(
                id='geojson-demo',
                mode='choropleth',
                data=choropleth_data,
                selectMode='multiple',
                fitBounds=True,
                featureIdField='county',
                showTooltip=True,
                # selectedFeatureIds=['秀山县'],
                selectedStyle={
                    'fillOpacity': 0.2,
                },
                # hoverStyle={
                #     'fillOpacity': 0.9
                # },
                hoverable=True,
                # featureCategoryToStyles=featureCategoryToStyles,
                featureValueToStyles=featureValueToStyles,
                # clickFeatureZoom=True
            ),
            flc.LeafletHeatMap(
                id='heatmap-demo',
                points=generate_sample_heatmap(),
                minOpacity=0,
                max=1,
                radius=25,
                blur=15,
                # gradient={
                #     0.5: 'rgb(33, 102, 172)',
                #     0.75: 'rgb(247, 247, 247)',
                #     1: 'rgb(178, 24, 43)'
                # }
            ),
        ],
        id='map-demo',
        editToolbar=True,
        # wheelPxPerZoomLevel=720,
        # zoomDelta=0.1,
        # maxDrawnShapes=3,
        # showMeasurements=True,
        editToolbarControlsOptions={
            'cutPolygon': True,
            'position': 'topright'
        },
        # useFlyTo=False,
        zoom=7,
        # maxZoom=7,
        # minZoom=7,
        # zoomControl=False,
        # dragging=False,
        # center={
        #     'lat': 29.560087,
        #     'lng': 106.573344
        # },
        style={
            'width': '800px',
            'height': '600px'
        }
    )
])


@app.callback(
    Output('map-action-demo', 'mapActionConfig'),
    [Input('set-zoom-demo', 'n_clicks'),
     Input('zoom-in-demo', 'n_clicks'),
     Input('zoom-out-demo', 'n_clicks'),
     Input('fly-to-demo', 'n_clicks'),
     Input('fly-to-bounds-demo', 'n_clicks')]
)
def map_action_demo(*n_clicks):

    if dash.callback_context.triggered[0]['prop_id'] == 'set-zoom-demo.n_clicks':
        return {
            'type': 'set-zoom',
            'zoom': 10
        }

    elif dash.callback_context.triggered[0]['prop_id'] == 'zoom-in-demo.n_clicks':
        return {
            'type': 'zoom-in',
            'zoomInOffset': 1
        }

    elif dash.callback_context.triggered[0]['prop_id'] == 'zoom-out-demo.n_clicks':
        return {
            'type': 'zoom-out',
            'zoomOutOffset': 1
        }

    elif dash.callback_context.triggered[0]['prop_id'] == 'fly-to-demo.n_clicks':
        return {
            'type': 'fly-to',
            'flyToDuration': 'auto',
            'center': {
                'lat': 39.904989,
                'lng': 116.405285
            },
            # 'zoom': 14
        }

    elif dash.callback_context.triggered[0]['prop_id'] == 'fly-to-bounds-demo.n_clicks':
        return {
            'type': 'fly-to-bounds',
            'flyToDuration': 'slow',
            'bounds': {
                'minx': 111.53,
                'miny': 27.51,
                'maxx': 114.15,
                'maxy': 28.41
            }
        }

    return dash.no_update


if __name__ == '__main__':
    app.run_server(debug=True)
