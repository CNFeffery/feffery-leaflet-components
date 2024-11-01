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
                flc.LeafletTileLayer(
                    minNativeZoom=10,
                    maxNativeZoom=18,
                    maxZoom=22,
                )
            ],
            maxZoom=22,
            zoom=18,
            center={'lng': 121, 'lat': 31},
            style=style(height='100%'),
        )
    ],
    style=style(height='100vh'),
)

if __name__ == '__main__':
    app.run(debug=True)
