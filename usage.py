import feffery_leaflet_components as flc
import dash
from dash.dependencies import Input, Output
from dash import html

app = dash.Dash(__name__)

app.layout = html.Div([
    flc.LeafletMap(
        [
            flc.LeafletTileLayer()
        ],
        style={
            'height': '800px'
        }
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)
