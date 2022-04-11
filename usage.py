import feffery_leaflet_components as flc
import dash
import json
import numpy as np
from dash.dependencies import Input, Output, State
from dash import html
from palettable.colorbrewer.sequential import Reds_5
import mapclassify as mc

app = dash.Dash(__name__, compress=True)

county_mock_values = np.random.rand(38)

bins = [0] + mc.NaturalBreaks(county_mock_values, 5).bins.tolist()[:-1] + [1]

county_features = json.load(open('./重庆市区县面要素.geojson', encoding='utf-8'))
for i in range(38):
    county_features['features'][i]['properties']['value'] = county_mock_values[i]

app.layout = html.Div([
    flc.LeafletMap(
        [
            flc.LeafletTileLayer(
                url='http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
            ),
            flc.LeafletGeoJSON(
                data=county_features,
                # selectMode='multiple',
                fitBounds=True,
                featureIdField='county',
                defaultStyle={
                    'fillOpacity': 1,
                    'weight': 1
                },
                featureColourParams={
                    'bins': [
                        [left, right]
                        for left, right in zip(bins[:-1], bins[1:])
                    ],
                    'colors': Reds_5.hex_colors,
                    'closed': 'left'
                },
                hoverable=True,
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
        editToolbar=True,
        # maxDrawnShapes=3,
        # showMeasurements=True,
        # editToolbarControlsOptions={
        #     'cutPolygon': True
        # },
        # useFlyTo=False,
        doubleClickZoom=True,
        zoom=12,
        center={
            'lat': 29.560087,
            'lng': 106.573344
        },
        # center={
        #     'lat': -37.9124889333,
        #     'lng': 175.4727737833
        # },
        style={
            'height': '700px',
            'width': '100%'
        }
    )
])


@app.callback(
    Output('map-demo', 'center'),
    Input('map-demo', '_zoom')
)
def center_to_clicked_point(_zoom):

    print(_zoom)

    return dash.no_update


if __name__ == '__main__':
    app.run_server(debug=True)
