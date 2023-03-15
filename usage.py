import dash
from dash import html
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Button(
            '显隐切换',
            id='toggle-hide-visible'
        ),
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),
                flc.LeafletLayerGroup(
                    [
                        flc.LeafletCircleMarker(
                            center={
                                'lng': 0,
                                'lat': 0
                            },
                            radius=10
                        )
                    ],
                    id='demo-layer',
                    hidden=True
                )
            ],
            style={
                'height': '500px'
            }
        )
    ],
    style={
        'padding': 50
    }
)


@app.callback(
    Output('demo-layer', 'hidden'),
    Input('toggle-hide-visible', 'n_clicks'),
    State('demo-layer', 'hidden'),
    prevent_initial_call=True
)
def toggle_layer_group_visible(n_clicks, hidden):

    if n_clicks:
        print(not hidden)
        return not hidden

    return dash.no_update


if __name__ == '__main__':
    app.run(debug=True)
