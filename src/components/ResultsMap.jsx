import { useMemo, memo } from 'react';
import { MapContainer, TileLayer, Marker, GeoJSON, Popup } from 'react-leaflet';
import { useApp } from '../context/AppContext';

function ResultsMap() {
  const { state } = useApp();
  const { coordinates, constituency, geojson } = state;

  const matchedFeature = useMemo(() => {
    if (!geojson || !constituency) return null;
    const feature = geojson.features.find(
      (f) => f.properties.constituency_id === constituency.constituency_id
    );
    if (!feature) return null;
    return {
      type: 'FeatureCollection',
      features: [feature],
    };
  }, [geojson, constituency?.constituency_id]);

  if (!coordinates) return null;

  return (
    <div className="rounded-xl overflow-hidden border-2 border-ocean-200 shadow-sm">
      <MapContainer
        center={[coordinates.lat, coordinates.lng]}
        zoom={13}
        style={{ height: 220 }}
        scrollWheelZoom={false}
        dragging={true}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {matchedFeature && (
          <GeoJSON
            data={matchedFeature}
            style={() => ({
              color: '#1347e1',
              weight: 2.5,
              fillColor: '#337dff',
              fillOpacity: 0.18,
              dashArray: '6 3',
            })}
          />
        )}
        <Marker position={[coordinates.lat, coordinates.lng]}>
          <Popup>
            <strong>{constituency?.name}</strong>
            <br />
            {constituency?.parish}, {constituency?.country}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default memo(ResultsMap);
