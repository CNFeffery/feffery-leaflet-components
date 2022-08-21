import dash
from dash import html
import feffery_leaflet_components as flc

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),

                flc.LeafletTileSelect()
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

if __name__ == '__main__':
    app.run(debug=True)
