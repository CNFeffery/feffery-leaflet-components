import dash
from dash import html
import feffery_leaflet_components as flc

app = dash.Dash(
    __name__
)

app.layout = html.Div(
    [
        flc.LeafletMapProvider(
            [
                flc.LeafletMap(
                    [
                        flc.LeafletTileLayer(
                            opacity=0.8
                        ),
                        flc.LeafletMapSync(
                            id=f'map-sync{i}',
                            groupId=f'map-sync-group{str(i % 2)}'
                        )
                    ],
                    center={
                        'lng': 106.583467,
                        'lat': 29.563489
                    },
                    zoom=4,
                    style={
                        'height': 'calc(100vh / 4)'
                    }
                )
                for i in range(4)
            ]
        )
    ],
    style={
        'height': '100vh'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
