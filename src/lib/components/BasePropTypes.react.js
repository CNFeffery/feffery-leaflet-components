import PropTypes from 'prop-types';

const pathOptionsPropTypes = PropTypes.exact({
    // 设置是否绘制多边形轮廓线，默认为true
    stroke: PropTypes.bool,
    // 设置多边形轮廓线颜色，默认为#3388ff
    color: PropTypes.string,
    // 设置多边形轮廓线像素宽度，默认为3
    weight: PropTypes.number,
    // 设置多边形轮廓线透明度，默认为1
    opacity: PropTypes.number,
    // 设置多边形轮廓线的line-cap属性，参考：https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-linecap
    // 默认为'round'
    lineCap: PropTypes.string,
    // 设置多边形轮廓线的line-join属性，参考：https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-linejoin
    // 默认为'round'
    lineJoin: PropTypes.string,
    // 设置多边形轮廓线的dash-array属性，参考：https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray
    // 默认为null
    dashArray: PropTypes.string,
    // 设置多边形轮廓线的dash-offset属性，参考：https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dashoffset
    // 默认为null
    dashOffset: PropTypes.string,
    // 设置是否绘制多边形填充颜色，默认为true
    fill: PropTypes.bool,
    // 设置多边形填充颜色，默认为#3388ff
    fillColor: PropTypes.string,
    // 设置多边形填充透明度，默认为0.2
    fillOpacity: PropTypes.number
});


export {
    pathOptionsPropTypes
};