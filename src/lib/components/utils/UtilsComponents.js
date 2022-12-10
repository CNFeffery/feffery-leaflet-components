import propTypes from 'prop-types';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const AutoViewCorrection = (props) => {
    const {
        size
    } = props;

    const map = useMap();

    useEffect(() => {
        if (size) {
            map.invalidateSize();
        }
    }, [size])

    return null;
}

AutoViewCorrection.propTypes = {
    size: propTypes.any
}

export { AutoViewCorrection };