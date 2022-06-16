import dash
from dash import html
import feffery_antd_components as fac
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output, State


app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.H3('测试其他图层与LeafletMap可编辑功能的冲突情况'),

        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),

                flc.LeafletCircleMarker(
                    flc.LeafletPopup(
                        fac.AntdSpace(
                            [
                                fac.AntdButton(
                                    '测试',
                                    id='input-test',
                                    type='primary',
                                    block=True
                                ),
                                fac.AntdText(id='output-test')
                            ],
                            direction='vertical',
                            style={
                                'display': 'flex',
                                'justifyContent': 'center'
                            }
                        )
                    ),
                    center={
                        'lng': 0,
                        'lat': 0
                    },
                    radius=25
                )
            ],
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
    Output('output-test', 'children'),
    Input('input-test', 'nClicks')
)
def popup_callback_test(nClicks):

    return str(nClicks)


if __name__ == '__main__':
    app.run(debug=True)
