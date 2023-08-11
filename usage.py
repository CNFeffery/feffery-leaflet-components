import dash
from dash import html
import feffery_leaflet_components.alias as flc

app = dash.Dash(__name__)

# 示例地点数组
places = [
    {
        'name': '纽约',
        'lat': 40.7145481958237,
        'lng': -74.00853058095109
    },
    {
        'name': '北京',
        'lat': 39.90892818332875,
        'lng': 116.40977642887036
    },
    {
        'name': '约翰内斯堡',
        'lat': -26.160114470372378,
        'lng': 28.01684955752199
    }
]

app.layout = html.Div(
    [
        flc.Map(
            [
                flc.LayerGroup(
                    [
                        flc.CircleMarker(
                            center={
                                'lat': place['lat'],
                                'lng': place['lng']
                            },
                            pathOptions={
                                'fillColor': '#ff6b6b',
                                'fillOpacity': 0.8,
                                'color': '#ffc9c9',
                                'weight': 10,
                                'opacity': 0.8
                            },
                            radius=16
                        )
                        for place in places
                    ]
                ),

                flc.FlowLayer(
                    flowData=[
                        {
                            'from': {
                                'lat': place1['lat'],
                                'lng': place1['lng']
                            },
                            'to': {
                                'lat': place2['lat'],
                                'lng': place2['lng']
                            },
                            'value': 1,
                            'color': 'purple',
                            'labels': {}
                        }
                        for place1 in places
                        for place2 in places
                        if place1['name'] != place2['name']
                    ]
                )
            ],
            zoom=3,
            style={
                'height': '100%'
            }
        )
    ],
    style={
        'height': '100vh'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
