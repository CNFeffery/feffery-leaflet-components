import dash
import random
from dash import html
import feffery_leaflet_components as flc

app = dash.Dash(__name__)

random_points = [
    (random.uniform(90, 130), random.uniform(20, 40))
    for i in range(5)
]

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),
                flc.LeafletFlowLayer(
                    flowData=[
                        {
                            'from': {
                                'lng': point1[0],
                                'lat': point1[1]
                            },
                            'to': {
                                'lng': point2[0],
                                'lat': point2[1]
                            },
                            'labels': {
                                'from': f'地点{idx1}',
                                'to': f'地点{idx2}'
                            }
                        }
                        for idx2, point2 in enumerate(random_points)
                        for idx1, point1 in enumerate(random_points)
                        if idx1 != idx2
                    ],
                    arcLabelFontSize='20px',
                    keepUniqueLabels=True
                )
            ],
            style={
                'height': '100%'
            },
            center={
                "lat": 23.114191274249734,
                "lng": 113.26556414365771
            },
            zoom=5
        )
    ],
    style={
        'height': '100vh'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
