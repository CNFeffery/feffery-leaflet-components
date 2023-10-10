import dash
from dash import html
import feffery_leaflet_components as flc

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),
                flc.LeafletMapListener(debug=True)
            ],
            style={
                'height': '100%'
            },
            center={
                "lat": 23.114191274249734,
                "lng": 113.26556414365771
            },
            zoom=18
        )
    ],
    style={
        'height': '100vh'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
