import dash
import random
from dash import html
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output, ALL

app = dash.Dash(__name__)

random_points = [
    (random.uniform(90, 130), random.uniform(20, 40))
    for i in range(6)
]

app.layout = html.Div(
    [
        html.Div(
            [
                html.Button(
                    '更新测试',
                    id='update-data',
                ),
                *[
                    html.Button(
                        action,
                        id={
                            'type': 'action',
                            'index': action
                        }
                    )
                    for action in [
                        'pause', 'play', 'hide', 'show'
                    ]
                ]
            ],
            style={
                'position': 'fixed',
                'zIndex': 999,
                'top': 25,
                'right': 25
            }
        ),
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),
                flc.LeafletFlowLayer(
                    id='flow-layer',
                    flowData=[
                        {
                            'from': {
                                'lng': point1[0],
                                'lat': point1[1]
                            },
                            'to': {
                                'lng': point2[0],
                                'lat': point2[1]
                            },
                            'labels': {
                                'from': f'地点{idx1}',
                                'to': f'地点{idx2}'
                            }
                        }
                        for idx2, point2 in enumerate(random_points)
                        for idx1, point1 in enumerate(random_points)
                        if idx1 != idx2
                    ],
                    arcLabelFontSize='20px',
                    keepUniqueLabels=True,
                    setAction='pause'
                )
            ],
            style={
                'height': '100%'
            },
            center={
                "lat": 23.114191274249734,
                "lng": 113.26556414365771
            },
            zoom=5
        )
    ],
    style={
        'height': '100vh'
    }
)


@app.callback(
    Output('flow-layer', 'flowData'),
    Input('update-data', 'n_clicks'),
    prevent_initial_call=True
)
def update_data(n_clicks):

    random_points = [
        (random.uniform(90, 130), random.uniform(20, 40))
        for i in range(5)
    ]

    return [
        {
            'from': {
                'lng': point1[0],
                'lat': point1[1]
            },
            'to': {
                'lng': point2[0],
                'lat': point2[1]
            },
            'labels': {
                'from': f'地点{idx1}',
                'to': f'地点{idx2}'
            }
        }
        for idx2, point2 in enumerate(random_points)
        for idx1, point1 in enumerate(random_points)
        if idx1 != idx2
    ]


@app.callback(
    Output('flow-layer', 'setAction'),
    Input(
        {
            'type': 'action',
            'index': ALL
        },
        'n_clicks'
    ),
    prevent_initial_call=True
)
def execute_action(*args):

    return dash.ctx.triggered_id['index']


if __name__ == '__main__':
    app.run(debug=True)
