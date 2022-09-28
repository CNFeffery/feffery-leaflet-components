> 本项目当前处于早期测试阶段，API可能会经常变更，且文档内容远远落后于最新开发版本的功能内容，请暂时不要在生产项目中重度使用！

<p align="center">
	<img src="./flc-logo.svg" height=200></img>
</p>
<h1 align="center">feffery-leaflet-components</h1>
<div align="center">


[![GitHub](https://img.shields.io/github/license/plotly/dash.svg?color=dark-green)](https://github.com/plotly/dash/blob/master/LICENSE)
[![PyPI](https://img.shields.io/pypi/v/feffery-leaflet-components.svg?color=dark-green)](https://pypi.org/project/feffery-leaflet-components/)
[![Downloads](https://pepy.tech/badge/feffery-leaflet-components)](https://pepy.tech/project/feffery-leaflet-components)
[![Downloads](https://pepy.tech/badge/feffery-leaflet-components/month)](https://pepy.tech/project/feffery-leaflet-components)
[![Downloads](https://pepy.tech/badge/feffery-leaflet-components/week)](https://pepy.tech/project/feffery-leaflet-components)

</div>

`feffery-components`计划子项目，`Plotly Dash`第三方组件库，基于`Leaflet`，将更好用的地图交互及可视化组件引入`Dash`的世界🥳，最新版本：`0.0.1-a1`

## 1 最新版本安装方式

```bash
pip install feffery-leaflet-components -U
```

## 2 最新开发版本安装方式

```bash
pip install git+https://github.com/CNFeffery/feffery-leaflet-components.git
```

国内镜像加速安装方式：

```bash
pip install git+https://github.91chi.fun/https://github.com/CNFeffery/feffery-leaflet-components.git
```

## 3 静态资源CDN加速方法

```Python
# 非debug模式下对Dash()传入参数serve_locally=False会强制浏览器端从unpkg加载各个依赖的
# xxx.min.js等静态资源，从而避免占用服务器带宽，适合中小型站点加速访问
app = dash.Dash(serve_locally=False)
```

## 4 在线交互式说明文档

<a href='http://flc.feffery.tech/' target='_blank'>文档地址</a>
