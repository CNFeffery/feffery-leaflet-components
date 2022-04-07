import feffery_leaflet_components as flc
import dash
from dash.dependencies import Input, Output, State
from dash import html

app = dash.Dash(__name__)

app.layout = html.Div([
    flc.LeafletMap(
        [
            flc.LeafletTileLayer(),
        ],
        id='map-demo',
        editToolbar=True,
        style={
            'height': '700px',
            'width': '900px'
        }
    )
])


@app.callback(
    Output('map-demo', 'center'),
    Input('map-demo', '_drawnShapes')
)
def center_to_clicked_point(_drawnShapes):

    print(_drawnShapes and len(_drawnShapes))

    return dash.no_update


if __name__ == '__main__':
    app.run_server(debug=True)
