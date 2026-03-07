import data from '../data/officials.json';

export function getOfficialsForConstituency(constituencyId, country) {
  const local = data.officials.filter(
    (o) => o.tier === 'local' && o.constituency_id === constituencyId
  );
  const national = data.officials.filter(
    (o) => o.tier === 'national' && o.constituency_id === constituencyId
  );
  const senate = data.officials.filter(
    (o) => o.tier === 'senate' && o.country === country
  );

  return { local, national, senate };
}

export function getCountries() {
  return Object.keys(data.countries);
}

export function getCountryMeta(country) {
  return data.countries[country] || null;
}

export function getParishesForCountry(country) {
  return data.countries[country]?.parishes || [];
}

export function getConstituenciesForParish(parish, country, geojson) {
  if (!geojson) return [];
  return geojson.features
    .filter(
      (f) =>
        f.properties.parish === parish && f.properties.country === country
    )
    .map((f) => f.properties);
}
