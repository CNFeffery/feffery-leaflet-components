import feffery_leaflet_components as flc
import dash
import json
from dash.dependencies import Input, Output, State
from dash import html

app = dash.Dash(__name__)

app.layout = html.Div([
    flc.LeafletMap(
        [
            flc.LeafletTileLayer(
                url='http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
            ),
            flc.LeafletGeoJSON(
                data=json.load(open('./四大片区.geojson', encoding='utf-8')),
                fitBounds=True,
                editable=False,
                selectMode='default'
            )
        ],
        id='map-demo',
        editToolbar=True,
        maxDrawnShapes=3,
        showMeasurements=True,
        editToolbarControlsOptions={
            'cutPolygon': True
        },
        useFlyTo=False,
        zoom=12,
        center={
            'lat': 29.560087,
            'lng': 106.573344
        },
        style={
            'height': '700px',
            'width': '900px'
        }
    )
])


@app.callback(
    Output('map-demo', 'center'),
    Input('map-demo', '_drawnShapes')
)
def center_to_clicked_point(_drawnShapes):

    print(_drawnShapes)

    return dash.no_update


if __name__ == '__main__':
    app.run_server(debug=True)
