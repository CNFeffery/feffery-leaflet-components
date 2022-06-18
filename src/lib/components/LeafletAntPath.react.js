import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { antPath } from 'leaflet-ant-path';
import { useMap } from 'react-leaflet';
import { pathOptionsPropTypes } from './BasePropTypes.react';

// 定义蚂蚁路径图层组件LeafletAntPath
const LeafletAntPath = (props) => {

    // 取得必要属性或参数
    const {
        positions
    } = props;

    const map = useMap();

    // 存储流线图层状态
    const [antPathLayer, setAntPathLayer] = useState(null);

    useEffect(() => {
        if (map) {
            if (antPathLayer) {
                antPathLayer.remove()
            }
            setAntPathLayer(
                antPath(positions,
                    {
                        pmIgnore: true
                    })
            )
        }
    }, [positions])

    useEffect(() => {
        if (antPathLayer) {
            antPathLayer.addTo(map)
        }
    }, [antPathLayer])

    // 返回定制化的前端组件
    return <></>;
}

// 定义参数或属性
LeafletAntPath.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 设置折线中折点坐标数组，必填
    positions: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.exact({
                // 经度
                lng: PropTypes.number,

                // 纬度
                lat: PropTypes.number
            })
        ),
        PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.exact({
                    // 经度
                    lng: PropTypes.number,

                    // 纬度
                    lat: PropTypes.number
                })
            )
        )
    ]),

    // 设置样式相关参数
    pathOptions: pathOptionsPropTypes,

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
LeafletAntPath.defaultProps = {
}

export default React.memo(LeafletAntPath);