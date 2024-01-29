import dash
from dash import html
import feffery_leaflet_components as flc

app = dash.Dash(__name__)

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
                flc.LeafletTileLayer(
                    url='https://t0.tianditu.gov.cn/vec_c/wmts?layer=vec&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&tileMatrix={z}&TileCol={x}&TileRow={y}&tk=37d1a2d8181bdf4eef74dd83d1222eef'
                )
            ],
            crs={
                'code': 'EPSG:4490',
                'proj4def': '+proj=longlat +ellps=GRS80 +no_defs',
                'options': {
                    'resolutions': [
                        1.40625,
                        0.703125,
                        0.3515625,
                        0.17578125,
                        0.087890625,
                        0.0439453125,
                        0.02197265625,
                        0.010986328125,
                        0.0054931640625,
                        0.00274658203125,
                        0.001373291015625,
                        6.866455078125e-4,
                        3.4332275390625e-4,
                        1.71661376953125e-4,
                        8.58306884765625e-5,
                        4.291534423828125e-5,
                        2.1457672119140625e-5,
                        1.0728836059570312e-5,
                        5.364418029785156e-6,
                        2.682209064925356e-6,
                        1.3411045324626732e-6,
                        6.705522662313365e-7,
                    ],
                    'origin': [-180, 90]
                }
            },
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
