import uuid
import dash
import json
import random
import requests
import pandas as pd
from dash import html
import feffery_antd_components as fac
import feffery_leaflet_components as flc
from feffery_leaflet_components.geometry_utils import Converter
from dash.dependencies import Input, Output

app = dash.Dash(
    __name__,
    suppress_callback_exceptions=True
)

flowdata_demo_df = (
    pd
    .read_csv('./流线图测试.csv')
    .eval('join_flag=0')
    .pipe(
        lambda df: df.merge(df, on='join_flag', suffixes=('_from', '_to'))
    )
    .query('名称_from != 名称_to')
    .drop(columns=['join_flag'])
)


def generate_mock_flowdata(limit: int = 10):

    exists_labels = set()
    flowData = []
    for row in flowdata_demo_df.itertuples():
        flowData.append({
            'from': {
                'lng': row.lng_from,
                'lat': row.lat_from
            },
            'to': {
                'lng': row.lng_to,
                'lat': row.lat_to
            },
            'labels': {
                'from': None if row.名称_from in exists_labels else row.名称_from,
                'to': None if row.名称_to in exists_labels else row.名称_to
            },
            'value': 1
        })

        exists_labels.add(row.名称_to)
        exists_labels.add(row.名称_from)

    return [
        flowData[i]
        for i in random.sample(range(len(flowData)), limit)
    ]


app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdButton(
                    '刷新flow',
                    type='primary',
                    id='update-flow-trigger'
                ),
                fac.AntdSelect(
                    options=[
                        {
                            'label': f'{i}个',
                            'value': i
                        }
                        for i in range(10, 1000)
                    ],
                    defaultValue=10,
                    id='update-flow-limit',
                    style={
                        'width': '150px'
                    }
                )
            ]
        ),

        html.Div(
            id='map-container',
            style={
                'height': '80vh',
                'position': 'relative'
            }
        )
    ]
)


@app.callback(
    Output('tile-layer', 'url'),
    Input('tile-select', 'selectedUrl')
)
def update_tile(selectedUrl):

    return selectedUrl


@app.callback(
    Output('map-demo', 'zoom'),
    Input('map-demo', '_drawnShapes')
)
def convert_drawn_shapes_demo(_drawnShapes):

    if _drawnShapes:
        print([Converter.convert_drawn_shape(shape) for shape in _drawnShapes])

    return dash.no_update


@app.callback(
    Output('map-container', 'children'),
    [Input('update-flow-trigger', 'nClicks'),
     Input('update-flow-limit', 'value')]
)
def update_flow_layer(nClicks, limit):

    return flc.LeafletMap(
        [

            flc.LeafletExport(
                customSize={
                    'width': 800,
                    'height': 800
                },
                customSizeTooltip='导出为800x800',
                tileWait=10000
            ),

            flc.LeafletTileLayer(
                id='tile-layer',
                url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.png'
            ),
            flc.LeafletFullscreenControl(),

            flc.LeafletHeatMap(
                points=[
                    {
                        'lng': point['lng'],
                        'lat': point['lat'],
                        'weight': point['count'],
                    }
                    for point in json.load(open('./heatmap-demo2-points.json'))
                ],
                # 美观且直观的热力图需要手动调整各个参数
                max=15,
                radius=20
            ),

            flc.LeafletStaticHeatMap(
                points=[
                    {
                        'lng': point[1],
                        'lat': point[0],
                        # 'weight': random.uniform(0, 1),
                    }
                    for point in json.load(open('./heatmap-demo1-points.json'))
                ],
                size=100,
                opacity=0.75
            ),

            flc.LeafletGeoJSON(
                data=(
                    requests
                    .get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
                    .json()
                ),
                mode='selectable',
                selectMode='multiple',
                lassoSelect=True,
                featureIdField='name',
                lassoType='contain',
                lassoResetSelectedFeatureIds=True,
                lassoStyle={
                    'color': 'green'
                }
            ),

            # flc.LeafletFlowLayer(
            #     id='flow',
            #     key=str(uuid.uuid4()),
            #     flowData=generate_mock_flowdata(limit=limit),
            #     maxWidth=6,
            #     arcLabelFontSize='18px',
            #     pulseRadius=0,
            #     pulseBorderWidth=0,
            #     isStatic=True
            # ),

            flc.LeafletSuperCluster(
                positions=[
                    {
                        "lat": random.normalvariate(0, 10),
                        "lng": random.normalvariate(0, 10),
                        "tooltip_": '<font style="color: red;">测试</ font>'
                    }
                    for i in range(1000)
                ],
                tooltipField='tooltip_',
                radius=100,
                clusterTextSizeFactor=0.2,
                # iconOptions=dict(
                #     iconUrl='http://flc.feffery.tech/assets/imgs/flc-logo.svg',
                #     iconSize=[32, 32]
                # )
            ),

            # flc.LeafletTileSelect(
            #     id='tile-select',
            #     selectedUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            #     urls=[
            #         {
            #             'url': 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            #         },
            #         {
            #             'url': 'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
            #         },
            #         {
            #             'url': 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            #         },
            #         {
            #             'url': 'http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
            #         },
            #         {
            #             'url': 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            #         },
            #         {
            #             'url': 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png'
            #         },
            #         {
            #             'url': 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
            #         },
            #         {
            #             'url': 'https://stamen-tiles-a.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png'
            #         },
            #         {
            #             'url': 'https://d.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            #         }
            #     ],
            #     center={
            #         'lng': 121.4,
            #         'lat': 31.2
            #     },
            #     zoom=7,
            #     containerVisible=True
            # ),

            flc.LeafletMiniMap()
        ],
        id='map-demo',
        key=str(uuid.uuid4()),
        center={
            'lng': 106,
            'lat': 29
        },
        zoom=4,
        # editToolbar=True,
        # measureControl=True,
        style={
            'height': '100%',
            'width': '100%',
            'position': 'absolute',
        }
    )


if __name__ == '__main__':
    app.run(debug=True, port=8051)
