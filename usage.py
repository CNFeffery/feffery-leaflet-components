import dash
import json
import random
from dash import html
import feffery_antd_components as fac
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

raw_geojson = json.loads(open('./100000_full.json', encoding='utf-8').read())

app.layout = html.Div(
    [
        fac.AntdRadioGroup(
            id='switch-data',
            options=[
                {
                    'label': f'选项{i}',
                    'value': f'选项{i}'
                }
                for i in range(3)
            ],
            optionType='button',
            buttonStyle='solid',
            # defaultValue='选项0'
        ),
        html.Div(
            [
                flc.LeafletMap(
                    [
                        flc.LeafletTileLayer(),

                        flc.LeafletGeoJSON(
                            id='geojson',
                            data=None
                        )
                    ],
                    style={
                        'height': '100%'
                    }
                )
            ],
            style={
                'height': '600px'
            }
        )
    ],
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)


@app.callback(
    Output('geojson', 'data'),
    Input('switch-data', 'value'),
    prevent_initial_call=True
)
def switch_geojson_data(value):

    geojson = raw_geojson.copy()

    geojson['features'] = [random.choice(geojson['features'])]

    return geojson


if __name__ == '__main__':
    app.run(debug=True)
