import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Circle,
    CircleMarker,
    MapContainer,
    Polyline,
    Polygon,
    Popup,
    Rectangle,
    TileLayer,
    Marker,
    SVGOverlay
} from 'react-leaflet';
import "leaflet/dist/leaflet.css";

const position = [51.505, -0.09]
const bounds = [
    [51.49, -0.08],
    [51.5, -0.06],
]

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class FefferyLeafletComponents extends Component {
    render() {
        const { id, label, setProps, value } = this.props;

        return (
            <MapContainer center={position} zoom={13} style={{ height: 500 }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
                    <rect x="0" y="0" width="100%" height="100%" fill="blue" />
                    <circle r="5" cx="10" cy="10" fill="red" />
                    <text x="50%" y="50%" stroke="white">
                        text
                    </text>
                </SVGOverlay>
            </MapContainer>
        );
    }
}

FefferyLeafletComponents.defaultProps = {};

FefferyLeafletComponents.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
