import json
import dash
import requests
from dash import html
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__, suppress_callback_exceptions=True)

# basic_geojson = (
#     requests
#     .get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
#     .json()
# )

app.layout = html.Div(
    [
        html.Button(
            '添加',
            id='add'
        ),
        html.Button(
            '清除',
            id='clear'
        ),
        html.Button(
            '更新样式规则',
            id='update-style'
        ),
        flc.LeafletMap(
            [
                flc.LeafletLayerGroup(
                    id='demo-layer-group'
                ),
                flc.LeafletTileLayer(),
                # flc.LeafletGeoJSON(
                #     id='input',
                #     data=basic_geojson,
                #     hoverable=True,
                #     featureIdField='adcode',
                #     defaultStyle={
                #         'fillOpacity': 1
                #     }
                # )
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


# @app.callback(
#     Output('output', 'children'),
#     Input('input', '_hoveredFeature')
# )
# def demo(_hoveredFeature):

#     return json.dumps(
#         _hoveredFeature,
#         indent=4,
#         ensure_ascii=False
#     )


@app.callback(
    Output('demo-layer-group', 'children'),
    Input('add', 'n_clicks'),
    prevent_initial_call=True
)
def add(n_clicks):

    return flc.LeafletVectorTile(
        id='vector-tile-demo',
        url='https://{s}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?sku=101SPH62Z4zzs&access_token={token}',
        interactive=True,
        extraProps={
            'token': 'pk.eyJ1IjoiZmVmZmVyeXB6eSIsImEiOiJjanhyY2QyenUwN2VzM2x0NWh6MGVzOWFqIn0.Z2HEVP_nJ8Smx_IWxkdRqg'
        },
        vectorTileLayerStyles={
            'landuse_overlay': {
                'func': '(e) => { return { color: "green", fillColor: "red", fillOpacity: 0.5, opacity: 1, fill: true } }'
            },
            'country_label': {
                'func': '(e) => { return { color: "black", radius: 11 } }'
            }
        }
    )


@app.callback(
    Output('demo-layer-group', 'children', allow_duplicate=True),
    Input('clear', 'n_clicks'),
    prevent_initial_call=True
)
def clear(n_clicks):

    return


@app.callback(
    Output('vector-tile-demo', 'vectorTileLayerStyles'),
    Input('update-style', 'n_clicks'),
    prevent_initial_call=True
)
def update_style(n_clicks):

    return {
        'landuse_overlay': {
            'func': '(e) => { return { color: "red", fillColor: "green", fillOpacity: 0.5, opacity: 1, fill: true } }'
        },
        'country_label': {
            'func': '(e) => { return { color: "yellow", radius: 11 } }'
        }
    }


if __name__ == '__main__':
    app.run(debug=True)
