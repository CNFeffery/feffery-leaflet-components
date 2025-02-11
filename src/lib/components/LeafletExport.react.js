/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undefined */
// react核心
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// leaflet核心
import L from "leaflet";
import "./utils/leaflet-easyprint"
import { useMap } from 'react-leaflet';
// 辅助库
import { omitBy, isUndefined } from 'lodash';

/**
 * 地图导出组件LeafletExport
 */
const LeafletExport = ({
    position,
    tileWait,
    filename = 'map',
    hideControlContainer,
    customSizeTooltip,
    customSize,
    setProps
}) => {

    let sizeModes;

    const map = useMap()
    const [initialFlag, setInitialFlag] = useState(false)

    useEffect(() => {
        // 若地图实例已初始化且当前地图导出插件未挂载
        if (map && !initialFlag) {
            const customCurrentSizeMode = {
                width: map.getSize().x,
                height: map.getSize().y,
                className: 'customCurrentSizeClass',
                name: '当前尺寸'
            }

            // 自定义尺寸规格
            if (customSize && customSize.width && customSize.height) {
                const customSizeMode = {
                    width: customSize.width,
                    height: customSize.height,
                    className: 'customSizeClass',
                    name: customSizeTooltip || '默认尺寸'
                }
                sizeModes = [
                    customCurrentSizeMode,
                    'A4Landscape',
                    'A4Portrait',
                    customSizeMode
                ]
            } else {
                sizeModes = [
                    customCurrentSizeMode,
                    'A4Landscape',
                    'A4Portrait'
                ]
            }

            const printer = L.easyPrint({
                ...omitBy(
                    {
                        position,
                        sizeModes,
                        tileWait,
                        filename,
                        hideControlContainer
                    },
                    isUndefined
                ),
                title: '导出地图为图片',
                defaultSizeTitles: {
                    A4Landscape: 'A4横向',
                    A4Portrait: 'A4纵向',
                    customSizeClass: customSizeTooltip || '标准尺寸'
                },
                exportOnly: true
            }).addTo(map);
            setInitialFlag(true)
        }
    }, [map])

    return <></>;
}

LeafletExport.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 导出控件显示方位，可选项有`'topleft'`、`'topright'`、`'bottomleft'`、`'bottomright'`
     * 默认值：`'topleft'`
     */
    position: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),

    /**
     * 地图瓦片文件加载等待时长，单位：毫秒
     * 默认值：500
     */
    tileWait: PropTypes.number,

    /**
     * 图片导出文件名
     * 默认值：`'map'`
     */
    filename: PropTypes.string,

    /**
     * 导出图片时是否自动隐藏其他无关控件
     * 默认值：`true`
     */
    hideControlContainer: PropTypes.bool,

    /**
     * 为自定义导出尺寸控件设置提示文案内容
     */
    customSizeTooltip: PropTypes.string,

    /**
     * 配置自定义尺寸
     */
    customSize: PropTypes.exact({
        /**
         * 像素宽度
         */
        width: PropTypes.number,
        /**
         * 像素高度
         */
        height: PropTypes.number
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default React.memo(LeafletExport);