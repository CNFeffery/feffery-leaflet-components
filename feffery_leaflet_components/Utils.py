from math import sin, cos, sqrt, fabs, atan2
from math import pi as PI

__all__ = ['Converter']

a = 6378245.0
f = 1 / 298.3
b = a * (1 - f)
ee = 1 - (b * b) / (a * a)


def outOfChina(lng, lat):
    """check weather lng and lat out of china

    Arguments:
        lng {float} -- longitude
        lat {float} -- latitude

    Returns:
        Bollen -- True or False
    """
    return not (72.004 <= lng <= 137.8347 and 0.8293 <= lat <= 55.8271)


def transformLat(x, y):
    ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * \
        y * y + 0.1 * x * y + 0.2 * sqrt(fabs(x))
    ret = ret + (20.0 * sin(6.0 * x * PI) + 20.0 *
                 sin(2.0 * x * PI)) * 2.0 / 3.0
    ret = ret + (20.0 * sin(y * PI) + 40.0 * sin(y / 3.0 * PI)) * 2.0 / 3.0
    ret = ret + (160.0 * sin(y / 12.0 * PI) + 320.0 *
                 sin(y * PI / 30.0)) * 2.0 / 3.0
    return ret


def transformLon(x, y):
    ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * sqrt(fabs(x))
    ret = ret + (20.0 * sin(6.0 * x * PI) + 20.0 *
                 sin(2.0 * x * PI)) * 2.0 / 3.0
    ret = ret + (20.0 * sin(x * PI) + 40.0 * sin(x / 3.0 * PI)) * 2.0 / 3.0
    ret = ret + (150.0 * sin(x / 12.0 * PI) + 300.0 *
                 sin(x * PI / 30.0)) * 2.0 / 3.0
    return ret


def wgs2gcj(wgsLon, wgsLat):
    """wgs coord to gcj

    Arguments:
        wgsLon {float} -- lon
        wgsLat {float} -- lat

    Returns:
        tuple -- gcj coords
    """

    if outOfChina(wgsLon, wgsLat):
        return wgsLon, wgsLat
    dLat = transformLat(wgsLon - 105.0, wgsLat - 35.0)
    dLon = transformLon(wgsLon - 105.0, wgsLat - 35.0)
    radLat = wgsLat / 180.0 * PI
    magic = sin(radLat)
    magic = 1 - ee * magic * magic
    sqrtMagic = sqrt(magic)
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * PI)
    dLon = (dLon * 180.0) / (a / sqrtMagic * cos(radLat) * PI)
    gcjLat = wgsLat + dLat
    gcjLon = wgsLon + dLon
    return (gcjLon, gcjLat)


def gcj2wgs(gcjLon, gcjLat):
    g0 = (gcjLon, gcjLat)
    w0 = g0
    g1 = wgs2gcj(w0[0], w0[1])
    # w1 = w0 - (g1 - g0)
    w1 = tuple(map(lambda x: x[0]-(x[1]-x[2]), zip(w0, g1, g0)))
    # delta = w1 - w0
    delta = tuple(map(lambda x: x[0] - x[1], zip(w1, w0)))
    while (abs(delta[0]) >= 1e-6 or abs(delta[1]) >= 1e-6):
        w0 = w1
        g1 = wgs2gcj(w0[0], w0[1])
        # w1 = w0 - (g1 - g0)
        w1 = tuple(map(lambda x: x[0]-(x[1]-x[2]), zip(w0, g1, g0)))
        # delta = w1 - w0
        delta = tuple(map(lambda x: x[0] - x[1], zip(w1, w0)))
    return w1


def gcj2bd(gcjLon, gcjLat):
    z = sqrt(gcjLon * gcjLon + gcjLat * gcjLat) + \
        0.00002 * sin(gcjLat * PI * 3000.0 / 180.0)
    theta = atan2(gcjLat, gcjLon) + 0.000003 * \
        cos(gcjLon * PI * 3000.0 / 180.0)
    bdLon = z * cos(theta) + 0.0065
    bdLat = z * sin(theta) + 0.006
    return (bdLon, bdLat)


def bd2gcj(bdLon, bdLat):
    x = bdLon - 0.0065
    y = bdLat - 0.006
    z = sqrt(x * x + y * y) - 0.00002 * sin(y * PI * 3000.0 / 180.0)
    theta = atan2(y, x) - 0.000003 * cos(x * PI * 3000.0 / 180.0)
    gcjLon = z * cos(theta)
    gcjLat = z * sin(theta)
    return (gcjLon, gcjLat)


def wgs2bd(wgsLon, wgsLat):
    gcj = wgs2gcj(wgsLon, wgsLat)
    return gcj2bd(gcj[0], gcj[1])


def bd2wgs(bdLon, bdLat):
    gcj = bd2gcj(bdLon, bdLat)
    return gcj2wgs(gcj[0], gcj[1])


class Transform:

    def wgs2gcj(self, wgsLon, wgsLat):
        return wgs2gcj(wgsLon, wgsLat)

    def gcj2wgs(self, gcjLon, gcjLat):
        return gcj2wgs(gcjLon, gcjLat)

    def gcj2bd(self, gcjLon, gcjLat):
        return gcj2bd(gcjLon, gcjLat)

    def bd2gcj(self, bdLon, bdLat):
        return bd2gcj(bdLon, bdLat)

    def wgs2bd(self, wgsLon, wgsLat):
        return wgs2bd(wgsLon, wgsLat)

    def bd2wgs(self, bdLon, bdLat):
        return bd2wgs(bdLon, bdLat)


class Converter(Transform):
    """
    辅助工具类
    """

    @classmethod
    def __recursion_parse(cls, obj, source_crs, target_crs):

        if isinstance(obj, list):
            return [cls.__recursion_parse(item, source_crs, target_crs) for item in obj]

        elif isinstance(obj, dict):
            if source_crs and target_crs:
                # wgs -> gcj
                if source_crs == 'wgs' and target_crs == 'gcj':
                    x, y = cls.wgs2gcj(
                        obj['lng'],
                        obj['lat']
                    )
                    return [
                        round(x, 6),
                        round(y, 6)
                    ]

                # wgs -> bd
                elif source_crs == 'wgs' and target_crs == 'bd':
                    x, y = cls.wgs2bd(
                        obj['lng'],
                        obj['lat']
                    )
                    return [
                        round(x, 6),
                        round(y, 6)
                    ]

                # gcj -> wgs
                elif source_crs == 'gcj' and target_crs == 'wgs':
                    x, y = cls.gcj2wgs(
                        obj['lng'],
                        obj['lat']
                    )
                    return [
                        round(x, 6),
                        round(y, 6)
                    ]

                # gcj -> bd
                elif source_crs == 'gcj' and target_crs == 'bd':
                    x, y = cls.gcj2bd(
                        obj['lng'],
                        obj['lat']
                    )
                    return [
                        round(x, 6),
                        round(y, 6)
                    ]

                # bd -> wgs
                elif source_crs == 'bd' and target_crs == 'wgs':
                    x, y = cls.bd2wgs(
                        obj['lng'],
                        obj['lat']
                    )
                    return [
                        round(x, 6),
                        round(y, 6)
                    ]

                # bd -> gcj
                elif source_crs == 'bd' and target_crs == 'gcj':
                    x, y = cls.bd2gcj(
                        obj['lng'],
                        obj['lat']
                    )
                    return [
                        round(x, 6),
                        round(y, 6)
                    ]

            return [round(obj['lng'], 6), round(obj['lat'], 6)]

        raise TypeError('输入对象应为列表或字典')

    @classmethod
    def convert_drawn_shape(cls,
                            shape_object: dict,
                            source_crs=None,
                            target_crs=None):

        # 检查类型是否在可转换的类型中
        if shape_object['type'] not in ['Polygon', 'Marker',
                                        'CircleMarker', 'Line', 'Rectangle']:
            raise TypeError(
                "不支持的矢量类型，请确保类型在Polygon、Marker、CircleMarker、Line、Rectangle之中"
            )

        # Polygon类型
        if shape_object['type'] in ['Polygon', 'Rectangle', 'Line']:
            _shape = cls.__recursion_parse(
                shape_object['geometry']['latlngs'],
                source_crs,
                target_crs
            )
            return _shape

        # Marker类型
        elif shape_object['type'] in ['Marker', 'CircleMarker']:
            if source_crs and target_crs:
                # wgs -> gcj
                if source_crs == 'wgs' and target_crs == 'gcj':
                    x, y = cls.wgs2gcj(
                        shape_object['geometry']['latlng']['lng'],
                        shape_object['geometry']['latlng']['lat']
                    )
                    return [
                        round(x, 6),
                        round(y, 6)
                    ]

                # wgs -> bd
                elif source_crs == 'wgs' and target_crs == 'bd':
                    x, y = cls.wgs2bd(
                        shape_object['geometry']['latlng']['lng'],
                        shape_object['geometry']['latlng']['lat']
                    )
                    return [
                        round(x, 6),
                        round(y, 6)
                    ]

                # gcj -> wgs
                elif source_crs == 'gcj' and target_crs == 'wgs':
                    x, y = cls.gcj2wgs(
                        shape_object['geometry']['latlng']['lng'],
                        shape_object['geometry']['latlng']['lat']
                    )
                    return [
                        round(x, 6),
                        round(y, 6)
                    ]

                # gcj -> bd
                elif source_crs == 'gcj' and target_crs == 'bd':
                    x, y = cls.gcj2bd(
                        shape_object['geometry']['latlng']['lng'],
                        shape_object['geometry']['latlng']['lat']
                    )
                    return [
                        round(x, 6),
                        round(y, 6)
                    ]

                # bd -> wgs
                elif source_crs == 'bd' and target_crs == 'wgs':
                    x, y = cls.bd2wgs(
                        shape_object['geometry']['latlng']['lng'],
                        shape_object['geometry']['latlng']['lat']
                    )
                    return [
                        round(x, 6),
                        round(y, 6)
                    ]

                # bd -> gcj
                elif source_crs == 'bd' and target_crs == 'gcj':
                    x, y = cls.bd2gcj(
                        shape_object['geometry']['latlng']['lng'],
                        shape_object['geometry']['latlng']['lat']
                    )
                    return [
                        round(x, 6),
                        round(y, 6)
                    ]

            return [
                round(shape_object['geometry']['latlng']['lng']),
                round(shape_object['geometry']['latlng']['lat'])
            ]
