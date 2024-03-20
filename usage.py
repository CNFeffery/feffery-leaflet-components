import dash
import numpy as np
from dash import html
import feffery_leaflet_components as flc

app = dash.Dash(
    __name__,
    external_scripts=[
        'https://cdn.jsdelivr.net/npm/d3@7'
    ]
)

# d3.js实现矢量动画示例
'''
let line = d3.select('svg path.demo-line')
let length = line.node().getTotalLength()
let animate = () => {
    line
    .interrupt()
    .attr('stroke-dasharray', `0,${length}`)
    .transition()
    .duration(5000)
    .ease(d3.easeLinear)
    .attr('stroke-dasharray', `${length},${length}`)
    .on('end', animate)
}
animate()
'''

app.layout = html.Div(
    [
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(),
                flc.LeafletPolyline(
                    positions=[
                        {
                            'lng': i,
                            'lat': i * np.sign(i % 2 - 0.9)
                        }
                        for i in range(-45, 46)
                    ]
                )
            ],
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
