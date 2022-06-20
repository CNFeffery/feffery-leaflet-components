import dash
import json
import random
from dash import html
import feffery_antd_components as fac
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output, State


app = dash.Dash(
    __name__,
    suppress_callback_exceptions=True
)

app.layout = html.Div(
    [
        html.H3('测试其他图层与LeafletMap可编辑功能的冲突情况'),

        flc.LeafletMap(
            [

                flc.LeafletTileLayer(),

                flc.LeafletMiniMap(
                ),

                flc.LeafletRectangle(
                    editable=True,
                    bounds={
                        'minx': 0,
                        'miny': 0,
                        'maxx': 2,
                        'maxy': 2
                    }
                ),

                # flc.LeafletAntPath(
                #     id='ant-path-test',
                #     positions=[
                #         {'lng': 0, 'lat': 0},
                #         {'lng': 1, 'lat': 0},
                #         {'lng': 1, 'lat': 1},
                #         {'lng': 2, 'lat': 1},
                #         {'lng': 2, 'lat': 2}
                #     ],
                #     pulseColor='red',
                #     delay=1000,
                #     dashArray='50, 50',
                #     pathOptions={
                #         'color': 'red'
                #     }
                # ),

                # flc.LeafletCircleMarker(
                #     flc.LeafletTooltip(
                #         fac.AntdSpace(
                #             [
                #                 '测试'
                #             ],
                #             direction='vertical',
                #             style={
                #                 'display': 'flex',
                #                 'justifyContent': 'center'
                #             }
                #         ),
                #         permanent=True
                #     ),
                #     center={
                #         'lng': -5,
                #         'lat': -5
                #     },
                #     radius=25
                # )
            ],
            editToolbar=True,
            editToolbarControlsOptions=dict(
                drawMarker=False,
                drawCircleMarker=False,
                drawPolyline=False,
                drawRectangle=False,
                drawPolygon=False,
                drawCircle=False,
                removalMode=False,
                rotateMode=False
            ),
            style={
                'height': '600px'
            }
        ),

        html.Div(
            id='edit-mode-callback-output'
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

if __name__ == '__main__':
    app.run(debug=True)
