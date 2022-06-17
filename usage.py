import dash
from dash import html
import feffery_antd_components as fac
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output, State


app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.H3('测试其他图层与LeafletMap可编辑功能的冲突情况'),

        fac.AntdSwitch(
            id='arrowheads-on',
            checked=True
        ),

        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),

                flc.LeafletMiniMap(
                ),

                flc.LeafletPolyline(
                    id='arrowheads-test',
                    positions=[
                        {'lng': 0, 'lat': 0},
                        {'lng': 1, 'lat': 0},
                        {'lng': 1, 'lat': 1},
                        {'lng': 2, 'lat': 1},
                        {'lng': 2, 'lat': 2}
                    ],
                    pathOptions={
                        'dashArray': '5, 5'
                    }
                ),

                flc.LeafletCircleMarker(
                    flc.LeafletPopup(
                        fac.AntdSpace(
                            [
                                '测试'
                            ],
                            direction='vertical',
                            style={
                                'display': 'flex',
                                'justifyContent': 'center'
                            }
                        )
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
    Input('arrowheads-on', 'checked')
)
def arrowheads_callback_test(checked):

    return checked


if __name__ == '__main__':
    app.run(debug=True)
