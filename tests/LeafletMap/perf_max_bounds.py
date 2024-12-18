if True:
    import sys

    sys.path.append('../..')
    import dash
    from dash import html
    import feffery_leaflet_components as flc
    from feffery_dash_utils.style_utils import style


app = dash.Dash(__name__)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),
                flc.LeafletGeoJSON(
                    # 生成对应bounds的面要素GeoJSON
                    data={
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Polygon',
                                    'coordinates': [
                                        [
                                            [-45, 45],
                                            [45, 45],
                                            [45, -45],
                                            [-45, -45],
                                            [-45, 45],
                                        ]
                                    ],
                                },
                                'properties': {},
                            }
                        ],
                    },
                    fitBounds=False,
                    fitBoundsOptions={'duration': 0},
                ),
            ],
            maxBounds={
                'minx': -45,
                'miny': -45,
                'maxx': 45,
                'maxy': 45,
            },
            maxBoundsViscosity=1,
            maxBoundsDelay=500,
            zoomDelta=0.001,
            style=style(height='100%'),
        )
    ],
    style=style(height='100vh'),
)

if __name__ == '__main__':
    app.run(debug=True)
