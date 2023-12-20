import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import L from "leaflet";
import markerIcon from "../../assets/iconPosition.svg";
import mapUndefined from "../../assets/mapUndefined.png";

const MapComponent = ({ address }) => {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    const getCoordinates = async () => {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${address}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        setCoords([lat, lon]);
      }
    };

    getCoordinates();
  }, [address]);

  if (!coords) {
    return (
      <img
        class="mapContainer"
        src={mapUndefined}
        alt="map"
        className="mapUndefined"
      />
    );
  }

  const customMarkerIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [50, 82],
  });

  return (
    <div className="mapSection">
      <MapContainer
        center={coords}
        zoom={13}
        scrollWheelZoom={false}
        className="mapContainer"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={coords} icon={customMarkerIcon} />;
      </MapContainer>
    </div>
  );
};

MapComponent.propTypes = {
  address: PropTypes.string.isRequired,
};

export default MapComponent;
