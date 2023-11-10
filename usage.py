import dash
import json
from dash import html
import random
import feffery_leaflet_components as flc
from dash.dependencies import Input, Output


geojson_data_hycsdzb = {
    "type": "FeatureCollection",
    "crs": {"type": "name", "properties": {"name": "urn:ogc:def:crs:OGC:1.3:CRS84"}},
    "features": [
        {"type": "Feature", "properties": {"项目编号": "DHGX0001", "项目名称": "苏泊尔公寓", "经度": 114.167185,
                                           "纬度": 30.56883, "测试值": 10}, "geometry": {"type": "Point", "coordinates": [114.167185, 30.56883]}},
        {"type": "Feature", "properties": {"项目编号": "DHGX0002", "项目名称": "罗家咀社区", "经度": 114.158761,
                                           "纬度": 30.540979, "测试值": 50}, "geometry": {"type": "Point", "coordinates": [114.158761, 30.540979]}},
        {"type": "Feature", "properties": {"项目编号": "DHGX0003", "项目名称": "芳草苑小区", "经度": 114.187109,
                                           "纬度": 30.566206, "测试值": 12}, "geometry": {"type": "Point", "coordinates": [114.187109, 30.566206]}},
        {"type": "Feature", "properties": {"项目编号": "DHGX0004", "项目名称": "龙阳湖健康谷", "经度": 114.19705,
                                           "纬度": 30.549741, "测试值": 40}, "geometry": {"type": "Point", "coordinates": [114.19705, 30.549741]}},
        {"type": "Feature", "properties": {"项目编号": "DHGX0005", "项目名称": "瑞地自由度", "经度": 114.215424,
                                           "纬度": 30.561073, "测试值": 6}, "geometry": {"type": "Point", "coordinates": [114.215424, 30.561073]}},
        {"type": "Feature", "properties": {"项目编号": "DHGX0006", "项目名称": "钰龙·旭辉半岛璞园", "经度": 114.2257,
                                           "纬度": 30.545171, "测试值": 33}, "geometry": {"type": "Point", "coordinates": [114.2257, 30.545171]}},
        {"type": "Feature", "properties": {"项目编号": "DHGX0007", "项目名称": "恒韵府", "经度": 114.241741,
                                           "纬度": 30.55572, "测试值": 16}, "geometry": {"type": "Point", "coordinates": [114.241741, 30.55572]}},
        {"type": "Feature", "properties": {"项目编号": "DHGX0008", "项目名称": "铁桥新家园南区", "经度": 114.223458,
                                           "纬度": 30.563461, "测试值": 29}, "geometry": {"type": "Point", "coordinates": [114.223458, 30.563461]}},
        {"type": "Feature", "properties": {"项目编号": "DHGX0009", "项目名称": "欣隆·一号公馆", "经度": 114.220049,
                                           "纬度": 30.521738, "测试值": 11}, "geometry": {"type": "Point", "coordinates": [114.220049, 30.521738]}},
        {"type": "Feature", "properties": {"项目编号": "DHGX0010", "项目名称": "国博新城·碧园居", "经度": 114.231587,
                                           "纬度": 30.506109, "测试值": 38}, "geometry": {"type": "Point", "coordinates": [114.231587, 30.506109]}},
        {"type": "Feature", "properties": {"项目编号": "DHGX0012", "项目名称": "向阳雅居", "经度": 114.248985,
                                           "纬度": 30.522116, "测试值": 14}, "geometry": {"type": "Point", "coordinates": [114.248985, 30.522116]}},
        {"type": "Feature", "properties": {"项目编号": "DHGX0013", "项目名称": "鹦鹉苑", "经度": 114.243242,
                                           "纬度": 30.540235, "测试值": 27}, "geometry": {"type": "Point", "coordinates": [114.243242, 30.540235]}},
        {"type": "Feature", "properties": {"项目编号": "DHGX0014", "项目名称": "复地翠微新城1期", "经度": 114.26042,
                                           "纬度": 30.547723, "测试值": 18}, "geometry": {"type": "Point", "coordinates": [114.26042, 30.547723]}},
        {"type": "Feature", "properties": {"项目编号": "DHGX0015", "项目名称": "广电·兰亭都荟", "经度": 114.25547,
                                           "纬度": 30.534615, "测试值": 31}, "geometry": {"type": "Point", "coordinates": [114.25547, 30.534615]}},
        {"type": "Feature", "properties": {"项目编号": "DHGX0084", "项目名称": "水天蓝月", "经度": 114.274409,
                                           "纬度": 30.545347, "测试值": 9}, "geometry": {"type": "Point", "coordinates": [114.274409, 30.545347]}}
    ]
}


app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Div(
            '999999999',
            id='test_content',
            style={
                'padding': '15px',
                'fontSize': '25px',
            }
        ),
        flc.LeafletMap(
            [
                flc.LeafletTileLayer(
                    url='http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
                ),
                flc.LeafletGeoJSON(
                    data=geojson_data_hycsdzb,
                    showTooltip=True,
                    featureTooltipField='项目名称',
                    circleMarkerRadius=10,
                    id='test-xmdfb-map',
                    defaultStyle={
                        'color': 'white',
                        'weight': 1.5,
                        'fillOpacity': 1,
                    },
                    pointRenderMode='marker'
                ),
            ],
            center={
                'lng': 114.2003,
                'lat': 30.5522
            },
            zoom=11,
            zoomControl=False,  # 隐藏自带的放大缩小控件
            style={
                'position': 'absolute',
                'width': '80%',
                'height': '80%'
            }
        ),
    ],
    style={
        'padding': '50px',
        # 'width': '100%',
        # 'height': '100%'
    }
)


@app.callback(
    Output('test_content', 'children'),
    Input('test-xmdfb-map', '_clickedFeature'),
    prevent_initial_call=True,
)
def ztqk_map_xmdfb_update(xmdfb_feature_value):
    if xmdfb_feature_value:
        render_content = random.randint(5000, 1000000)
        return render_content
    return dash.no_update


if __name__ == '__main__':
    app.run(debug=True)
