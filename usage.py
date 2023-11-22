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
                            'url': 'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
                        }
                    ] * 3
                )
            ],
            scrollWheelZoom=False,
            style={
                'height': 500
            }
        )
    ],
    style={
        'padding': 50
    }
)

if __name__ == '__main__':
    app.run(debug=True)