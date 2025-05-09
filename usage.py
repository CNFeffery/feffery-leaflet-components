import dash
from dash import html
import feffery_leaflet_components as flc

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [flc.LeafletTileLayer()],
            center={'lng': 106.573344, 'lat': 29.560087},
            zoom=13,
            editToolbar=True,
            style={'height': '100%'},
        )
    ],
    style={'height': '100vh'},
)

if __name__ == '__main__':
    app.run(debug=True)
