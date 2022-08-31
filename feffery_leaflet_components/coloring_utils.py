
import tree
import importlib
from typing import Union, List, Dict

__all__ = ['all_palettes', 'get_palette', 'SegmentedColoring']

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


__all_palettes_dict = {
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
__all_palettes_dict = {
    **__all_palettes_dict,
    'matplotlib': {
        palette: eval(f'palettable.matplotlib.{palette}.hex_colors')
        for palette in dir(palettable.matplotlib)
        if hasattr(eval(f'palettable.matplotlib.{palette}'),
                   'hex_colors')
    }
}

# 补充MyCarta调色方案
__all_palettes_dict = {
    **__all_palettes_dict,
    'mycarta': {
        palette: eval(f'palettable.mycarta.{palette}.hex_colors')
        for palette in dir(palettable.mycarta)
        if hasattr(eval(f'palettable.mycarta.{palette}'),
                   'hex_colors')
    }
}

# 补充tableau调色方案
__all_palettes_dict = {
    **__all_palettes_dict,
    'tableau': {
        palette: eval(f'palettable.tableau.{palette}.hex_colors')
        for palette in dir(palettable.tableau)
        if hasattr(eval(f'palettable.tableau.{palette}'),
                   'hex_colors')
    }
}

# 补充Wes Anderson调色方案
__all_palettes_dict = {
    **__all_palettes_dict,
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
    return tree.flatten(__get_paths(__all_palettes_dict))


class PalettePathInvalidError(BaseException):
    '''
    自定义非法调色方案路径错误
    '''

    pass


def get_palette(paths: str):
    '''
    根据传入的色彩方案路径返回对应的十六进制色彩字符数组
    '''

    paths = paths.split('.')

    if len(paths) <= 1:
        raise PalettePathInvalidError('Path invalid!')

    colors = __all_palettes_dict.get(paths[0])
    for i, path in enumerate(paths[1:]):

        try:
            # 尝试获取下一层路径色彩参数
            colors = colors[path]
        except:
            raise PalettePathInvalidError('Path invalid!')

        # 当遍历到最后一个path
        if i == len(paths) - 2:
            # 检查是否到达调色方案列表层
            if isinstance(colors, list):
                return colors
            raise PalettePathInvalidError('Path invalid!')


# 获取全部调色方案信息元组列表
all_palette_paths = show_all_palette_paths()
all_palettes = [
    (palette_path, get_palette(palette_path), len(get_palette(palette_path)))
    for palette_path in all_palette_paths
]


class SegmentedColoring:
    '''
    分段着色
    '''

    def __init__(self,
                 x: Union[List[int], List[float]] = [],
                 k: int = 5,
                 method: str = 'NaturalBreaks',
                 right: bool = True,
                 min_value: Union[int, float] = None) -> None:
        '''
        构建数据分箱模型并进行计算
        '''

        # 设置区间是否右闭
        self.right = right

        # 记录输入的数组值
        self.x = x

        # 当min_value未定义时
        if not min_value and min_value != 0:
            # 将输入数组中最小值作为min_value缺省值
            min_value = min(x)

        self.min_value = min_value

        # 检验算法合法性
        assert method in [
            'NaturalBreaks', 'EqualInterval', 'Quantiles'
        ], 'Invalid method! method should within "NaturalBreaks", "EqualInterval" and "Quantiles"'

        # 检验输入数组记录数量是否大于等于目标分段数量
        assert len(x) >= k, 'Length of x can not less than k!'

        # 取得相应的数据分箱模型类并执行分箱计算
        self.model = getattr(mc, method)(x, k=k)

    def get_colors(self, colors: Union[List[str], str]) -> List[str]:
        '''
        根据设置的色彩方案取得每个实例的对应色彩值
        '''

        # 若输入色彩参数为字符串，则视作内置调色方案路径进行颜色提取
        if isinstance(colors, str):
            colors = get_palette(colors)

            # 检查取得的调色方案数组长度是否满足分箱数量
            assert len(
                colors
            ) >= self.model.k, 'Length of colors can not less than k!'

        # 若输入色彩参数为列表，则
        if isinstance(colors, list):
            assert len(
                colors
            ) >= self.model.k, 'Length of colors can not less than k!'

        # 基于数据分箱标签及合法的色彩数组计算每个样本对应的区间色彩
        label_colors = []
        for x_ in self.x:
            for i, (bin_right, bin_color) in enumerate(zip(self.model.bins, colors)):
                # 若右闭
                if self.right:
                    if x_ <= bin_right:
                        label_colors.append(bin_color)
                        break
                else:
                    if x_ < bin_right or i == len(self.model.bins):
                        label_colors.append(bin_color)
                        break

        return label_colors

    def get_bins(self) -> List[Union[List[int], List[float]]]:
        '''
        获取LeafletGeoJSON适用的分段区间结果
        '''

        bins = [self.min_value, *self.model.bins]

        return [[left, right] for left, right in zip(bins[:-1], bins[1:])]

    def get_breakpoints(self) -> List[Union[int, float]]:
        '''
        获取数据分箱结果断点数组（含补充的最小值）
        '''

        return [self.min_value, *self.model.bins]


if __name__ == '__main__':
    # tests

    segmented_coloring = SegmentedColoring(x=range(10), k=3, right=False)
    segmented_coloring.get_colors('wesanderson.Royal1_4_r')
    get_palette('wesanderson.Royal1_4_r')
