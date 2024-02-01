import dash
from dash import html
import feffery_leaflet_components as flc

app = dash.Dash(
    __name__
)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletMarker(
                    position={
                        'lng': 106.583467,
                        'lat': 29.563489
                    }
                ),
                flc.LeafletTileLayer(
                    opacity=0.8
                ),
                # 延时地图动作
                flc.Fragment(
                    [
                        flc.LeafletMapAction(
                            mapActionConfig={
                                'type': 'fly-to',
                                'center': {
                                    'lng': 45,
                                    'lat': 45
                                },
                                'zoom': 8,
                                'delay': 1000
                            }
                        )
                    ]
                )
            ],
            center={
                'lng': 106.583467,
                'lat': 29.563489
            },
            zoom=4,
            zoomDelta=0.1,
            style={
                'height': '100%'
            }
        )
    ],
    style={
        'height': '100vh'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
