if True:
    import sys

    sys.path.append('../..')
    import dash
    import requests
    import feffery_leaflet_components as flc
    from feffery_dash_utils.style_utils import style

basic_geojson = requests.get(
    'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json'
).json()

app = dash.Dash(__name__)

app.layout = flc.LeafletMap(
    [
        flc.LeafletTileLayer(),
        flc.LeafletGeoJSON(
            data=basic_geojson,
            hoverable=True,
            hoverStyle={
                'fillOpacity': 0.8,
                'color': 'white',
            },
        ),
    ],
    zoom=6,
    style=style(height='100vh'),
)

if __name__ == '__main__':
    app.run(debug=True)
