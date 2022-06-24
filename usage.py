import dash
import json
import random
from dash import html
import numpy as np
import feffery_antd_components as fac
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output, State


app = dash.Dash(
    __name__,
    suppress_callback_exceptions=True
)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),

                flc.LeafletSuperCluster(
                    positions=[
                        {
                            "lat": random.normalvariate(0, 10),
                            "lng": random.normalvariate(0, 10)
                        }
                        for i in range(1000)
                    ],
                    radius=100,
                    clusterTextSizeFactor=0.2,
                    iconOptions=dict(
                        iconUrl='http://flc.feffery.tech/assets/imgs/flc-logo.svg',
                        iconSize=[32, 32]
                    )
                ),

                # flc.LeafletMapListener(id='map-listener'),

                html.Div(
                    id='real-time-center-zoom',
                    style={
                        'position': 'absolute',
                        'left': 0,
                        'bottom': 0,
                        'background': 'white',
                        'zIndex': 999,
                        'padding': '0 5px'
                    }
                ),

                # *[
                #     flc.LeafletMarker(
                #         flc.LeafletTooltip(
                #             '测试'
                #         ),
                #         position={
                #             'lng': random.uniform(-45, 45),
                #             'lat': random.uniform(-45, 45)
                #         },
                #         iconOptions=dict(
                #             iconUrl='http://flc.feffery.tech/assets/imgs/flc-logo.svg',
                #             iconSize=[36, 36]
                #         ),
                #         opacity=1
                #     )
                #     for i in range(25)
                # ]
            ],
            style={
                'height': '800px',
            }
        )
    ],
    style={
        'width': '1000px',
        'margin': '50px auto'
    }
)


@app.callback(
    Output('real-time-center-zoom', 'children'),
    [Input('map-listener', '_center'),
     Input('map-listener', '_zoom')]
)
def update_real_time_center_and_zoom(_center, _zoom):

    if _center and _zoom:

        return '经度: {} 纬度: {} 缩放级别：{}'.format(
            round(_center['lng'], 6),
            round(_center['lat'], 6),
            _zoom
        )


if __name__ == '__main__':
    app.run(debug=True)
