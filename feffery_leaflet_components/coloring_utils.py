
import tree
import importlib
from typing import Union, List, Dict

__all__ = ['show_all_palette_paths', 'get_colors', 'SegmentedColoring']

# 尝试导入着色工具所需的第三方依赖库
try:
    mc = importlib.import_module('mapclassify')
except ImportError:
    raise ImportError(
        'Missing optional dependency mapclassify. Use "pip install mapclassify" or "conda install -c conda-forge mapclassify" to install mapclassify.'
    )

try:
    palettable = importlib.import_module('palettable')
except ImportError:
    raise ImportError(
        'Missing optional dependency palettable. Use "pip install palettable" to install palettable.'
    )


all_palettes = {
    category: {
        color_type: {
            palette: eval(
                f'palettable.{category}.{color_type}.{palette}.hex_colors')
            for palette in dir(eval(f'palettable.{category}.{color_type}'))
            if hasattr(eval(f'palettable.{category}.{color_type}.{palette}'),
                       'hex_colors')
        }
        for color_type in ['diverging', 'qualitative', 'sequential']
        if hasattr(eval(f'palettable.{category}'), color_type)
    }
    for category in [
        'cartocolors', 'cmocean', 'colorbrewer', 'lightbartlein',
        'scientific'
    ]
}

# 补充matplotlib调色方案
all_palettes = {
    **all_palettes,
    'matplotlib': {
        palette: eval(f'palettable.matplotlib.{palette}.hex_colors')
        for palette in dir(palettable.matplotlib)
        if hasattr(eval(f'palettable.matplotlib.{palette}'),
                   'hex_colors')
    }
}

# 补充MyCarta调色方案
all_palettes = {
    **all_palettes,
    'mycarta': {
        palette: eval(f'palettable.mycarta.{palette}.hex_colors')
        for palette in dir(palettable.mycarta)
        if hasattr(eval(f'palettable.mycarta.{palette}'),
                   'hex_colors')
    }
}

# 补充tableau调色方案
all_palettes = {
    **all_palettes,
    'tableau': {
        palette: eval(f'palettable.tableau.{palette}.hex_colors')
        for palette in dir(palettable.tableau)
        if hasattr(eval(f'palettable.tableau.{palette}'),
                   'hex_colors')
    }
}

# 补充Wes Anderson调色方案
all_palettes = {
    **all_palettes,
    'wesanderson': {
        palette: eval(f'palettable.wesanderson.{palette}.hex_colors')
        for palette in dir(palettable.wesanderson)
        if hasattr(eval(f'palettable.wesanderson.{palette}'),
                   'hex_colors')
    }
}


def show_all_palette_paths():
    '''
    查看内置的所有调色方案路径
    '''

    def __get_paths(current_object: Union[List, Dict], current_paths: str = ''):
        '''
        递归生成调色方案路径
        '''

        if isinstance(current_object, dict):
            return [
                __get_paths(value, current_paths+'.' +
                            key if current_paths else key)
                for key, value in current_object.items()
            ]

        elif isinstance(current_object, list):
            return current_paths

    # 展平后返回
    return tree.flatten(__get_paths(all_palettes))


def get_colors(paths: str):
    '''
    根据传入的色彩方案路径返回对应的十六进制色彩字符数组
    '''

    paths = paths.split('.')

    assert len(paths) > 1

    colors = all_palettes.get(paths[0])
    for i, path in enumerate(paths[1:]):

        try:
            colors = colors.get(path)
        except:
            raise 'Paths invalid!'

        # 当遍历到最后一个path
        if i == len(paths) - 2:
            # 检查是否到达色彩列表层
            if isinstance(colors, list):
                return colors
            raise 'Paths invalid!'


class SegmentedColoring:
    '''
    分段着色
    '''

    def __init__(self,
                 method: str = 'NaturalBreaks',
                 x: Union[List[int], List[float]] = [],
                 k: int = 5,
                 min_value: Union[int, float] = None):
        '''
        构建数据分箱模型并进行计算
        '''

        if not min_value:
            min_value = min(x)

        self.min_value = min_value

        assert method in [
            'NaturalBreaks', 'EqualInterval', 'Quantiles'
        ], 'Invalid method!'
        assert len(x) <= k, 'Length of x can not less than k!'

        # 取得相应的数据分箱模型并执行分箱计算
        self.model = getattr(mc, method)(x, k=k)

    def get_colors(self, colors: Union[List, str]):
        '''
        根据设置的色彩方案取得每个实例的对应色彩值
        '''

        if isinstance(colors, str):
            colors = get_colors(colors)

        if isinstance(colors, list):
            assert len(
                colors) >= self.model.k, 'Length of colors can not less than k!'

        return [
            colors[i] for i in self.model.yb
        ]

    def get_bins(self):
        '''
        获取LeafletGeoJSON适用的分段区间结果
        '''

        bins = [self.min_value, *self.model.bins]

        return [[left, right] for left, right in zip(bins[:-1], bins[1:])]
