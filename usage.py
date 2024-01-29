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
                        'lng': 500,
                        'lat': 500
                    }
                )
            ],
            crs='simple',
            maxBounds={
                'minx': -10000,
                'miny': -10000,
                'maxx': 10000,
                'maxy': 10000
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
