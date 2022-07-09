/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undefined */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import L from "leaflet";
// import "./utils/leaflet-easyprint"
import "leaflet-easyprint";
import { omitBy, isUndefined } from 'lodash';
import { useMap } from 'react-leaflet';

// 定义地图导出组件LeafletExport
// 挂载后不可更新
const LeafletExport = (props) => {
    // 取得必要属性或参数
    const {
        id,
        position,
        tileWait,
        filename,
        hidden,
        hideControlContainer,
        customSizeTooltip,
        customSize,
        setProps,
        loading_state
    } = props;

    let {
        sizeModes
    } = props;

    const map = useMap()
    const [initialFlag, setInitialFlag] = useState(false)

    useEffect(() => {
        // 若地图实例已初始化且当前地图导出插件未挂载
        if (map && !initialFlag) {
            // 自定义尺寸规格
            if (customSize && customSize.width && customSize.height) {
                const customSizeMode = {
                    width: customSize.width,
                    height: customSize.height,
                    className: 'customSizeClass',
                    tooltip: customSizeTooltip || '标准尺寸'
                }
                // 修复重复叠加自定义规格导出按钮的问题
                sizeModes = sizeModes.slice(0, 2)
                sizeModes.push(customSizeMode)
            }

            L.easyPrint({
                ...omitBy(
                    {
                        position,
                        sizeModes,
                        tileWait,
                        filename,
                        hidden,
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

    return <div />;
}

// 定义参数或属性
LeafletExport.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 设置导出控件方位，可选的有'topleft'、'topright'、'bottomleft'、'bottomright'
    // 默认为'topleft'
    position: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),

    // 设置图片导出的尺寸规格，可选的有'A4Landscape'（横向A4）、'A4Portrait'（纵向A4）
    sizeModes: PropTypes.arrayOf(PropTypes.oneOf(['A4Landscape', 'A4Portrait'])),

    // 设置底图瓦片文件渲染等待时长（单位：毫秒），默认为500
    tileWait: PropTypes.number,

    // 设置导出文件名称，默认为'map'
    filename: PropTypes.string,

    // 设置是否隐藏默认导出按钮，适合在可控导出方式下使用，默认为false
    hidden: PropTypes.bool,

    // 设置导出图片时是否隐藏地图上其其他控件，默认为true
    hideControlContainer: PropTypes.bool,

    // 设置自定义导出尺寸下的tooltip信息
    customSizeTooltip: PropTypes.string,

    // 设置自定义导出尺寸下的图片像素长宽
    customSize: PropTypes.exact({
        // 像素宽度
        width: PropTypes.number,
        // 像素高度
        height: PropTypes.number
    }),

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
LeafletExport.defaultProps = {
    sizeModes: ['A4Landscape', 'A4Portrait'],
    filename: 'map'
}

export default React.memo(LeafletExport);