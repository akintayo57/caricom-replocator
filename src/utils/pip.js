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
