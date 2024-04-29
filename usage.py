import dash
from dash import html
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),
                flc.LeafletImageOverlay(
                    className='image-overlay-test',
                    url='https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg',
                    bounds={
                        'minx': 106,
                        'miny': 29,
                        'maxx': 108,
                        'maxy': 31,
                    },
                    opacity=0.6,
                    maxZoom=14,
                ),
            ],
            center={'lat': 29, 'lng': 106},
            zoom=9,
            zoomDelta=0.5,
            scaleControl=True,
            scaleControlOptions={'imperial': False},
            style={'height': '100%'},
        )
    ],
    style={'height': '100vh'},
)

if __name__ == '__main__':
    app.run(debug=True)
