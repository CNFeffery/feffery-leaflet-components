import dash
from dash import html
import feffery_leaflet_components as flc

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),

                flc.LeafletTileSelect(
                    urls=[
                        {
                            'url': 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        },
                        {
                            'url': 'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
                        },
                        {
                            'url': 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
                        },
                        {
                            'url': 'http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
                        },
                        {
                            'url': 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
                        },
                        {
                            'url': 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png'
                        },
                        {
                            'url': 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
                        },
                        {
                            'url': 'https://stamen-tiles-a.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png'
                        },
                        {
                            'url': 'https://d.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
                        },
                        {
                            'url': 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                        },
                        {
                            'url': 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
                        }
                    ]
                )
            ],
            style={
                'height': '100%'
            }
        )
    ],
    id='map-demo',
    style={
        'width': '100vw',
        'height': '100vh'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
