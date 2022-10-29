import dash
from dash import html
import feffery_leaflet_components as flc

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),

                flc.LeafletExport()
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
