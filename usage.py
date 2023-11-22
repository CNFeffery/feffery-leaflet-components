import dash
from dash import html
import feffery_antd_components as fac
import feffery_leaflet_components as flc

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),
                flc.LeafletDomWrapper(
                    html.Div(
                        [
                            '测试内容',
                            fac.AntdSlider(
                                value=66,
                                min=0,
                                max=100,
                                style={
                                    'width': 200
                                }
                            )
                        ],
                        style={
                            'background': 'white',
                            'right': 15,
                            'top': 15,
                            'width': 300,
                            'height': 300,
                            'zIndex': 999,
                            'position': 'absolute',
                            'borderRadius': 8,
                            'border': '1px solid #262626'
                        }
                    )
                )
            ],
            style={
                'height': 800,
                'position': 'relative'
            }
        )
    ],
    style={
        'padding': 50
    }
)

if __name__ == '__main__':
    app.run(debug=True)
