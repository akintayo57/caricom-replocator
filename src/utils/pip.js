import { point as turfPoint, booleanPointInPolygon } from '@turf/turf';

export function findConstituency(lat, lng, geojson) {
  const pt = turfPoint([lng, lat]);
  for (const feature of geojson.features) {
    if (booleanPointInPolygon(pt, feature)) {
      return feature.properties;
    }
  }
  return null;
}

// Returns ALL matching polygons for a point (e.g. municipality + enclosing region)
export function findAllConstituencies(lat, lng, geojson) {
  const pt = turfPoint([lng, lat]);
  return geojson.features
    .filter(f => booleanPointInPolygon(pt, f))
    .map(f => f.properties);
}
