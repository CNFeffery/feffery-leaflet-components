import dash
from dash import html
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output, State

# 着色工具函数测试
from feffery_leaflet_components import coloring_utils

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Button(
            '切换permanent',
            id='switch'
        ),
        flc.LeafletMap(
            [
                flc.LeafletMarker(
                    flc.LeafletTooltip(
                        '测试',
                        id='tooltip',
                        permanent=True
                    ),
                    position={
                        'lng': 0,
                        'lat': 0
                    }
                ),

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
            editToolbar=True,
            style={
                'height': '800px'
            }
        )
    ],
    style={
        'width': '1000px',
        'margin': '0 auto'
    }
)


@app.callback(
    Output('tooltip', 'permanent'),
    Input('switch', 'n_clicks'),
    State('tooltip', 'permanent')
)
def demo(n_clicks, permanent):

    return not permanent


if __name__ == '__main__':
    app.run(debug=True)
