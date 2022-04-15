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


def generate_mock_geojson(x):

    county_features = json.load(open('./重庆市区县面要素.geojson', encoding='utf-8'))

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


@app.callback(
    [Output('geojson-demo', 'data'),
     Output('geojson-demo', 'featureStyleParams')],
    Input('update-geojson-data-demo', 'n_clicks')
)
def update_gejson_layer_data(n_clicks):
    if n_clicks:

        return generate_mock_geojson(n_clicks)

    return dash.no_update


data, featureStyleParams = generate_mock_geojson(-1)

app.layout = html.Div([
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
                url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                # url='http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
            ),
            flc.LeafletGeoJSON(
                id='geojson-demo',
                mode='choropleth',
                data=data,
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
                featureStyleParams=featureStyleParams,
                # clickFeatureZoom=True
            ),
            flc.LeafletHeatMap(
                points=[
                    {
                        'lng': point[1],
                        'lat': point[0],
                        'weight': np.random.rand()
                    }
                    for point in addressPoints
                ],
                minOpacity=0,
                max=1,
                radius=25,
                blur=15,
                # gradient={
                #     0.5: 'rgb(33, 102, 172)',
                #     0.75: 'rgb(247, 247, 247)',
                #     1: 'rgb(178, 24, 43)'
                # }
            )
        ],
        id='map-demo',
        editToolbar=False,
        # wheelPxPerZoomLevel=720,
        # zoomDelta=0.1,
        # maxDrawnShapes=3,
        # showMeasurements=True,
        # editToolbarControlsOptions={
        #     'cutPolygon': True
        # },
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
            'height': '700px',
            'width': '100%'
        }
    )
])


@ app.callback(
    Output('map-action-demo', 'mapActionConfig'),
    [Input('set-zoom-demo', 'n_clicks'),
     Input('zoom-in-demo', 'n_clicks'),
     Input('zoom-out-demo', 'n_clicks'),
     Input('fly-to-demo', 'n_clicks'),
     Input('fly-to-bounds-demo', 'n_clicks')]
)
def map_action_demo(*n_clicks):

    print(dash.callback_context.triggered[0]['prop_id'])

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
