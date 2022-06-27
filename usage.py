from ast import In
import dash
import json
import random
from dash import html
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output, State, ALL


app = dash.Dash(
    __name__,
    suppress_callback_exceptions=True
)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(id='tile-layer'),

                flc.LeafletFullscreenControl(
                    forceSeparateButton=True
                ),

                flc.LeafletSuperCluster(
                    positions=[
                        {
                            "lat": random.normalvariate(0, 10),
                            "lng": random.normalvariate(0, 10),
                            "tooltip": '<font style="color: red;">测试</ font>'
                        }
                        for i in range(1000)
                    ],
                    radius=100,
                    clusterTextSizeFactor=0.2,
                    # iconOptions=dict(
                    #     iconUrl='http://flc.feffery.tech/assets/imgs/flc-logo.svg',
                    #     iconSize=[32, 32]
                    # )
                )
            ],
            editToolbar=True,
            style={
                'height': '80%',
                'width': '80%',
                'position': 'absolute',
            }
        ),

        flc.LeafletTileSelect(
            id='tile-select',
            selectedUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
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
                        }
            ],
            center={
                'lng': 121.4,
                'lat': 31.2
            },
            zoom=7
        )
    ],
    style={
        'position': 'relative',
        'height': '100vh'
    }
)


@app.callback(
    Output('tile-layer', 'url'),
    Input('tile-select', 'selectedUrl')
)
def update_tile(selectedUrl):

    return selectedUrl


if __name__ == '__main__':
    app.run(debug=True, port=8050)
