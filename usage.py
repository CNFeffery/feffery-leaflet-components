import dash
import requests
from dash import html
import feffery_leaflet_components as flc

response = (
    requests
    .get('http://23.36.35.226:6080/arcgis/rest/services/tspi/screen/MapServer?f=pjson')
    .json()
)

app = dash.Dash(
    __name__
)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletMarker(
                    position={
                        'lng': 106.583467,
                        'lat': 29.563489
                    }
                ),
                flc.EsriTiledMapLayer(
                    url='http://23.36.35.226:6080/arcgis/rest/services/tspi/cq_center_image/MapServer'
                ),
                flc.EsriTiledMapLayer(
                    url='http://23.36.35.226:6080/arcgis/rest/services/tspi/screen/MapServer'
                ),
                flc.EsriTiledMapLayer(
                    opacity=0.1,
                    url='http://23.36.2.111/multApp/datamanager/service/99a8a625-be64-44a1-a8ff-301b4a9f4182/014a0c75-14fe-4880-b445-252cc18544a0/f822d8f4-4a2f-4f58-8337-1179ac62efc4/MapServer'
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
                'lng': 106.583467,
                'lat': 29.563489
            },
            zoom=4,
            style={
                'height': '100%'
            }
        )
    ],
    style={
        'height': '100vh'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
