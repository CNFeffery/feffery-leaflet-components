if True:
    import sys

    sys.path.append('../..')
    import dash
    import requests
    from dash import html
    import feffery_leaflet_components as flc
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

basic_geojson = requests.get(
    'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json'
).json()

app = dash.Dash(__name__)

app.layout = [
    flc.LeafletMap(
        [
            flc.LeafletTileLayer(),
            flc.LeafletGeoJSON(
                id='geojson-zoom-test', data=basic_geojson
            ),
        ],
        zoom=6,
        style=style(height='100vh'),
    ),
    html.Button(
        '缩放至北京',
        id='zoom-to-beijing',
        style=style(
            position='fixed',
            top='50%',
            left='50%',
            transform='translate(-50%, -50%)',
            zIndex=1000,
        ),
    ),
]


@app.callback(
    Output(
        'geojson-zoom-test',
        'fitBoundsTargetFeatureProperties',
    ),
    Input('zoom-to-beijing', 'n_clicks'),
    prevent_initial_call=True,
)
def zoom_to_feature(n_clicks):
    return {'name': '北京市'}


if __name__ == '__main__':
    app.run(debug=True)
