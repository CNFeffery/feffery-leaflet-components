import json
import dash
import requests
from dash import html
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

basic_geojson = (
    requests
    .get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
    .json()
)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),
                flc.LeafletGeoJSON(
                    id='input',
                    data=basic_geojson,
                    hoverable=True,
                    featureIdField='adcode',
                    defaultStyle={
                        'fillOpacity': 1
                    }
                )
            ],
            zoom=6,
            style={
                'height': 500
            }
        ),

        html.Pre(id='output')
    ],
    style={
        'padding': 50
    }
)


@app.callback(
    Output('output', 'children'),
    Input('input', '_hoveredFeature')
)
def demo(_hoveredFeature):

    return json.dumps(
        _hoveredFeature,
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
