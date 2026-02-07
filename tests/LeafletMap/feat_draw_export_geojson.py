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
            [],
            id='map',
            editToolbar=True,
            drawnShapeFormat='geojson',
            crs='simple',
            style=style(height='100%'),
        )
    ],
    style=style(height='100vh'),
)

if __name__ == '__main__':
    app.run(debug=True)
