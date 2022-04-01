/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    MapContainer,
    Popup,
    TileLayer,
    Marker
} from 'react-leaflet';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import {
    markerIcon,
    marker2xIcon,
    markerShadow,
    layersIcon,
    layers2xIcon,
} from './exportImages.react'

console.log(new L.Icon.Default())

const icon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: marker2xIcon,
    shadowUrl: markerShadow,
    iconAnchor: [12, 41],
    iconSize: [25, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    tooltipAnchor: [16, -28]
});


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
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                style={{ height: 800 }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}
                    icon={icon}
                >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
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
