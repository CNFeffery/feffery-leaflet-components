import feffery_leaflet_components as flc
import dash
import numpy as np
from dash import html
from palettable.colorbrewer.sequential import Reds_5

app = dash.Dash(__name__)


flowDataDemo = [{"from": [-118.2705, 33.9984], "to":[-122.789336, 37.920458], "labels":["Los Angeles", "San Francisco"], "color":"#ff3a31"}, {"from": [-118.2705, 33.9984], "to":[-80.247887, 25.792296], "labels":[None, "Miami"], "color":"#ff7e2b"}, {"from": [-118.2705, 33.9984], "to":[-73.999705, 40.795047], "labels":[None, "New York"], "color":"#ffc726"}, {"from": [-118.2705, 33.9984], "to":[-87.724088, 41.917846], "labels":[None, "Chicago"], "color":"#e9ff20"}, {"from": [-118.2705, 33.9984], "to":[-92.145189, 46.77372], "labels":[None, "Duluth"], "color":"#99ff1b"},
                {"from": [-118.2705, 33.9984], "to":[-111.824547, 40.788055], "labels":[None, "Salt Lake"], "color":"#45ff15"}, {"from": [-118.2705, 33.9984], "to":[-111.364615, 47.536109], "labels":[None, "Great Falls"], "color":"#10ff33"}, {"from": [-118.2705, 33.9984], "to":[-97.585039, 35.511099], "labels":[None, "Oklahoma"], "color":"#0aff84"}, {"from": [-118.2705, 33.9984], "to":[-115.157907, 36.173032], "labels":[None, "Las Vegas"], "color":"#05ffd9"}, {"from": [-118.2705, 33.9984], "to":[-103.196215, 34.418753], "labels":[None, "Clovis"], "color":"#00ccff"}]


app.layout = html.Div([
    html.H4('迁徙地图测试'),
    flc.LeafletMap(
        [
            flc.LeafletMigrationLayer(
                id='migration-demo',
                flowData=[
                    {
                        'from': {
                            'lng': item['from'][0],
                            'lat': item['from'][1]
                        },
                        'to': {
                            'lng': item['to'][0],
                            'lat': item['to'][1]
                        },
                        'labels': {
                            'from': item['labels'][0],
                            'to': item['labels'][1]
                        },
                        'color': item['color'],
                        'value': np.random.rand()
                    }
                    for item in flowDataDemo
                ]
            ),
            flc.LeafletTileLayer(
                url='http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
            )
        ],
        zoom=4,
        center={
            'lat': 39.83530309866932,
            'lng': -101.31755312803932
        },
        style={
            'width': '800px',
            'height': '600px'
        }
    )
])


if __name__ == '__main__':
    app.run_server(debug=True)
