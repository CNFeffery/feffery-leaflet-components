import dash
from dash import html
import feffery_leaflet_components as flc

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),
                flc.LeafletDomWrapper(
                    html.Div(
                        style={
                            'background': '#bfbfbf',
                            'right': 15,
                            'top': 15,
                            'width': 300,
                            'height': 300,
                            'zIndex': 999,
                            'position': 'absolute'
                        }
                    ),
                    # disableScrollPropagation=False,
                    # disableClickPropagation=False
                )
            ],
            style={
                'height': 800,
                'position': 'relative'
            }
        )
    ],
    style={
        'padding': 50
    }
)

if __name__ == '__main__':
    app.run(debug=True)
