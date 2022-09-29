if True:
    import sys
    sys.path.append('../..')
    import dash
    from dash import html
    import feffery_leaflet_components as flc
    from dash.dependencies import Input, Output, State


app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Button(
            '置顶绿色图层',
            id='button1'
        ),

        html.Button(
            '置顶红色图层',
            id='button2'
        ),

        flc.LeafletMap(
            [
                flc.LeafletFeatureGroup(
                    [
                        flc.LeafletPolygon(
                            positions=[
                                {
                                    'lng': 105+x,
                                    'lat': 29+y
                                }
                                for x, y in zip(
                                    [0.5, 0.5, 1.5, 1.5],
                                    [0.5, 1.5, 1.5, 0.5]
                                )
                            ],
                            pathOptions={
                                'color': 'green',
                                'fillOpacity': 1
                            }
                        )
                    ],
                    id='layer1'
                ),

                flc.LeafletFeatureGroup(
                    [
                        flc.LeafletPolygon(
                            positions=[
                                {
                                    'lng': 105+x,
                                    'lat': 29+y
                                }
                                for x, y in zip(
                                    [0, 0, 1, 1],
                                    [0, 1, 1, 0]
                                )
                            ],
                            pathOptions={
                                'color': 'red',
                                'fillOpacity': 1
                            }
                        )
                    ],
                    id='layer2'
                ),

                flc.LeafletFlowLayer(
                    flowData=[
                        {
                            'from': {
                                'lng': 106.55,
                                'lat': 29.57
                            },
                            'to': {
                                'lng': 116.3,
                                'lat': 39.9
                            },
                            'labels': {
                                'from': '重庆市',
                                'to': '北京市'
                            },
                            'value': 1000
                        },
                        {
                            'from': {
                                'lng': 106.55,
                                'lat': 29.57
                            },
                            'to': {
                                'lng': 113.15,
                                'lat': 23.06
                            },
                            'labels': {
                                'from': None,
                                'to': '广州市'
                            },
                            'value': 3000
                        },
                        {
                            'from': {
                                'lng': 106.55,
                                'lat': 29.57
                            },
                            'to': {
                                'lng': 121.52,
                                'lat': 30.8
                            },
                            'labels': {
                                'from': None,
                                'to': '上海市'
                            },
                            'value': 2000
                        },
                        {
                            'from': {
                                'lng': 106.55,
                                'lat': 29.57
                            },
                            'to': {
                                'lng': 104.04,
                                'lat': 30.4
                            },
                            'labels': {
                                'from': None,
                                'to': '成都市'
                            },
                            'value': 2000,
                            'color': '#e84118'
                        }
                    ],
                    maxWidth=6,
                    arcLabelFontSize='18px'
                )
            ],
            zoom=7,
            center={
                'lng': 106,
                'lat': 29
            },
            style={
                'height': '600px'
            }
        )
    ],
    style={
        'width': '800px',
        'paddingTop': '50px',
        'margin': '0 auto'
    }
)


@app.callback(
    Output('layer1', 'bringToFront'),
    Input('button1', 'n_clicks')
)
def demo1(n_clicks):

    return True


@app.callback(
    Output('layer2', 'bringToFront'),
    Input('button2', 'n_clicks'),
    prevent_initial_call=True
)
def demo2(n_clicks):

    return True


if __name__ == '__main__':
    app.run(debug=True)
