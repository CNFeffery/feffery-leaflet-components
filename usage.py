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
                    opacity=0.6
                ),
                flc.LeafletGeoJSON(
                    data={
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Polygon',
                                    'coordinates': [
                                        [
                                            [-4+i*3, -2+i],
                                            [-4+i*3, 2+i],
                                            [0+i*3, 2+i],
                                            [0+i*3, -2+i],
                                            [-4+i*3, -2+i],
                                        ]
                                    ]
                                },
                                'properties': {}
                            }
                            for i in range(3)
                        ]
                    },
                    fitBoundsOptions={
                        'padding': [80, 80]
                    }
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
