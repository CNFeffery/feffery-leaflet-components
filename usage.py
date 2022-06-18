import dash
import random
from dash import html
import feffery_antd_components as fac
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output, State


app = dash.Dash(
    __name__,
    suppress_callback_exceptions=True
)

@app.callback(
    Output('ant-path-test', 'positions'),
    Input('map-listener', '_clickedLatLng'),
    State('ant-path-test', 'positions'),
    prevent_initial_call=True
)
def ant_path_test(_clickedLatLng, positions):

    print(_clickedLatLng)

    return[
        *positions,
        _clickedLatLng
    ][1:]

app.layout = html.Div(
    [
        html.H3('测试其他图层与LeafletMap可编辑功能的冲突情况'),

        fac.AntdSwitch(
            id='arrowheads-on',
            checked=True
        ),

        fac.AntdButton(
            'set-view',
            id='action-set-view',
            type='primary',
            block=True,
            size='small'
        ),

        flc.LeafletMap(
            [
                flc.LeafletMapAction(
                    id='action-callback',
                ),

                flc.LeafletTileLayer(),

                flc.LeafletMiniMap(
                ),

                flc.LeafletMapListener(
                    id='map-listener'
                ),

                flc.LeafletAntPath(
                    id='ant-path-test',
                    positions=[
                        {'lng': 0, 'lat': 0},
                        {'lng': 1, 'lat': 0},
                        {'lng': 1, 'lat': 1},
                        {'lng': 2, 'lat': 1},
                        {'lng': 2, 'lat': 2}
                    ],
                    pulseColor='red',
                    delay=1000,
                    dashArray='50, 50',
                    pathOptions={
                        'color': 'red',
                    }
                ),

                # flc.LeafletPolyline(
                #     id='arrowheads-test',
                #     positions=[
                #         {'lng': 0, 'lat': 0},
                #         {'lng': 1, 'lat': 0},
                #         {'lng': 1, 'lat': 1},
                #         {'lng': 2, 'lat': 1},
                #         {'lng': 2, 'lat': 2}
                #     ],
                #     pathOptions={
                #         'dashArray': '5, 5'
                #     },
                #     arrowheads={
                #         'frequency': 'endonly',
                #     },
                #     arrowheadsPathOptions={
                #         'color': 'red'
                #     }
                # ),

                flc.LeafletCircleMarker(
                    flc.LeafletTooltip(
                        fac.AntdSpace(
                            [
                                '测试'
                            ],
                            direction='vertical',
                            style={
                                'display': 'flex',
                                'justifyContent': 'center'
                            }
                        ),
                        permanent=True
                    ),
                    center={
                        'lng': -5,
                        'lat': -5
                    },
                    radius=25
                )
            ],
            editToolbar=True,
            style={
                'height': '600px'
            }
        ),

        html.Div(
            style={
                'height': '200px'
            }
        )
    ],
    style={
        'width': '800px',
        'margin': '100px auto'
    }
)


@app.callback(
    Output('arrowheads-test', 'arrowheads'),
    Input('arrowheads-on', 'checked'),
    prevent_initial_call=True
)
def arrowheads_callback_test(checked):

    return checked


@app.callback(
    Output('action-callback', 'mapActionConfig'),
    Input('action-set-view', 'nClicks'),
    prevent_initial_call=True
)
def action_callback(nClicks):
    return {
        'type': 'pan-to',
        # 'zoom': random.randint(0, 18),
        'center': {
                'lng': random.uniform(-180, 180),
                'lat': random.uniform(-90, 90)
        }
    }


if __name__ == '__main__':
    app.run(debug=True)
