import dash
from dash import html
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer()
            ],
            center={
                "lat": 30.083312988281236,
                "lng": 107.7401733398438
            },
            zoom=9,
            zoomDelta=0.5,
            scaleControl=True,
            scaleControlOptions={
                'imperial': False
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
