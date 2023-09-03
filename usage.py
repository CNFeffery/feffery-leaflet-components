import dash
import random
from dash import html
import feffery_leaflet_components as flc
import pandas as pd


data = pd.DataFrame(
    {
        'lng': [random.normalvariate(0, 1) for _ in range(5000)],
        'lat': [random.normalvariate(0, 1) for _ in range(5000)],
        'category': [random.choice(['类别A', '类别B', '类别C']) for _ in range(5000)]
    }
)


app = dash.Dash(__name__)

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),
                flc.LeafletSuperCluster(
                    positions=[
                        {
                            'lng': row.lng,
                            'lat': row.lat,
                            'tooltip': row.category,
                            'category': row.category
                        }
                        for row in data.itertuples()
                    ],
                    radius=100,
                    iconOptions={
                        '类别A': {
                            'iconUrl': 'assets/小学-icon.png',
                            'iconSize': [32, 32]
                        },
                        '类别B': {
                            'iconUrl': 'assets/医院-icon.png',
                            'iconSize': [32, 32]
                        },
                        '类别C': {
                            'iconUrl': 'assets/幼儿园-icon.png',
                            'iconSize': [32, 32]
                        }
                    }
                )
            ],
            style={
                'height': 800
            }
        )
    ],
    style={
        'padding': 50
    }
)

if __name__ == '__main__':
    app.run(debug=True)
