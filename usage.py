import dash
import requests
from dash import html
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

# 获取坐标系信息
response = (
    requests
    .get('http://23.36.2.111/multApp/datamanager/service/99a8a625-be64-44a1-a8ff-301b4a9f4182/014a0c75-14fe-4880-b445-252cc18544a0/f822d8f4-4a2f-4f58-8337-1179ac62efc4/MapServer?f=pjson')
    .json()
)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.EsriTiledMapLayer(
                    id='demo-layer',
                    url='http://23.36.2.111/multApp/datamanager/service/99a8a625-be64-44a1-a8ff-301b4a9f4182/014a0c75-14fe-4880-b445-252cc18544a0/f822d8f4-4a2f-4f58-8337-1179ac62efc4/MapServer'
                ),
                flc.LeafletMapListener(
                    id='map-listener'
                )
            ],
            crs={
                'code': 'EPSG:4490',
                'proj4def': '+proj=longlat +ellps=GRS80 +no_defs',
                'options': {
                    'resolutions': [
                        item['resolution']
                        for item in
                        response['tileInfo']['lods']
                    ],
                    'origin': [-180, 90]
                }
            },
            center={
                "lat": 30.083312988281236,
                "lng": 107.7401733398438
            },
            zoom=9,
            zoomDelta=0.5,
            style={
                'height': '100%'
            }
        )
    ],
    style={
        'height': '100vh'
    }
)


@app.callback(
    Output('demo-layer', 'identifyConfig'),
    [Input('map-listener', '_clickedLatLng')],
    prevent_initial_call=True
)
def test_identify(_clickedLatLng):

    return {
        'position': _clickedLatLng
    }


if __name__ == '__main__':
    app.run(debug=True)
