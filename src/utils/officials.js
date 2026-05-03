import data from '../data/officials.json';

export function getOfficialsForConstituency(constituencyId, country) {
  const all = data.officials.filter(
    (o) => o.country === country
  );

  return { all };
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

export function getCountryHierarchy(country) {
  return data.countries[country]?.governmentHierarchy || [];
}

export function applyHierarchyFilter(official, filterConfig, context) {
  const { filterType, filterValue, scope } = filterConfig;
  const { country, constituencyId } = context;

  // Check country match
  if (official.country !== country) return false;

  // Check scope-based constituency filtering (constituencyId may be an array)
  if (scope === 'local') {
    const ids = Array.isArray(constituencyId) ? constituencyId : [constituencyId];
    if (!ids.includes(official.constituency_id)) return false;
  }

  // Apply type-specific filter
  switch (filterType) {
    case 'tier':
      return official.tier === filterValue;

    case 'roleMatch':
      { const rolesArray = Array.isArray(filterValue) ? filterValue : [filterValue];
      return rolesArray.includes(official.role); }

    case 'flag':
      return official[filterValue] === true;

    default:
      return false;
  }
}
