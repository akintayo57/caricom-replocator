import { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, GeoJSON } from 'react-leaflet';
import { useApp } from '../context/AppContext';
import { getCountryMeta } from '../utils/officials';

function ClickHandler({ onPinDrop }) {
  useMapEvents({
    click(e) {
      onPinDrop(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export default function PinDropMap({ country, onPinDrop }) {
  const { state } = useApp();
  const [pin, setPin] = useState(null);

  const meta = getCountryMeta(country || 'Grenada');
  const center = meta?.center || [12.12, -61.68];
  const zoom = meta?.zoom || 10;

  const countryFeatures = useMemo(() => {
    if (!state.geojson || !country) return null;
    return {
      type: 'FeatureCollection',
      features: state.geojson.features.filter(
        (f) => f.properties.country === country
      ),
    };
  }, [state.geojson, country]);

  function handleClick(lat, lng) {
    setPin([lat, lng]);
    onPinDrop(lat, lng);
  }

  return (
    <div className="rounded-xl overflow-hidden border-2 border-ocean-200 shadow-sm">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: 280 }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countryFeatures && (
          <GeoJSON
            data={countryFeatures}
            style={() => ({
              color: '#1347e1',
              weight: 1.5,
              fillColor: '#337dff',
              fillOpacity: 0.12,
            })}
          />
        )}
        <ClickHandler onPinDrop={handleClick} />
        {pin && <Marker position={pin} />}
      </MapContainer>
    </div>
  );
}
