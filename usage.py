import dash
import json
import random
from dash import html
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),
                flc.LeafletSuperCluster(
                    id='demo-super-cluster',
                    positions=[
                        {
                            'lng': random.normalvariate(0, 0.5),
                            'lat': random.normalvariate(0, 0.5),
                            'tooltip': f'示例点{_+1}',
                            'key': f'示例点{_}'
                        }
                        for _ in range(50000)
                    ],
                    radius=100
                )
            ],
            style={
                'height': 600
            }
        ),
        html.Pre(id='demo-output')
    ],
    style={
        'padding': 50
    }
)


@app.callback(
    Output('demo-output', 'children'),
    Input('demo-super-cluster', 'clickedPoint'),
    prevent_initial_call=True
)
def demo(clickedPoint):

    return json.dumps(
        clickedPoint,
        indent=4,
        ensure_ascii=False
    )



if __name__ == '__main__':
    app.run(debug=True)
