import { useState } from 'react';
import { ChevronDown, MapPin, Navigation } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useGeolocation } from '../hooks/useGeolocation';
import {
  getCountries,
  getParishesForCountry,
  getConstituenciesForParish,
  getCountryMeta,
} from '../utils/officials';
import { getOfficialsForConstituency } from '../utils/officials';
import PinDropMap from './PinDropMap';

export default function FallbackSelector() {
  const { state, dispatch } = useApp();
  const { resolveLocation } = useGeolocation();
  const [country, setCountry] = useState(state.country || '');
  const [parish, setParish] = useState('');
  const [constituencyId, setConstituencyId] = useState('');
  const [showPinDrop, setShowPinDrop] = useState(false);
  const [addressText, setAddressText] = useState('');
  const [addressError, setAddressError] = useState('');

  const countries = getCountries();
  const parishes = country ? getParishesForCountry(country) : [];
  const constituencies = parish && country
    ? getConstituenciesForParish(parish, country, state.geojson)
    : [];

  function handleCountryChange(e) {
    setCountry(e.target.value);
    setParish('');
    setConstituencyId('');
    dispatch({ type: 'SET_COUNTRY', payload: e.target.value });
  }

  function handleParishChange(e) {
    setParish(e.target.value);
    setConstituencyId('');
  }

  function handleConstituencySelect(e) {
    const id = e.target.value;
    setConstituencyId(id);
    if (!id) return;

    const feature = state.geojson.features.find(
      (f) => f.properties.constituency_id === id
    );
    if (!feature) return;

    const coords = feature.geometry.coordinates[0];
    const avgLat = coords.reduce((s, c) => s + c[1], 0) / coords.length;
    const avgLng = coords.reduce((s, c) => s + c[0], 0) / coords.length;

    const officials = getOfficialsForConstituency(id, country);
    dispatch({
      type: 'SHOW_RESULTS',
      payload: {
        constituency: feature.properties,
        coordinates: { lat: avgLat, lng: avgLng },
        officials,
        country,
      },
    });
  }

  function handleAddressSearch() {
    if (!addressText.trim()) return;
    setAddressError(
      'Could not resolve that address. Try dropping a pin on the map instead.'
    );
    setShowPinDrop(true);
  }

  function handlePinDrop(lat, lng) {
    resolveLocation(lat, lng);
  }

  const selectClass =
    'w-full appearance-none bg-white border-2 border-ocean-200 rounded-xl px-4 py-3 pr-10 text-ocean-900 font-medium text-sm focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 transition-all';

  return (
    <div className="px-4 py-6 max-w-lg mx-auto animate-fade-in-up">
      <div className="flex items-center gap-2 mb-6">
        <Navigation size={18} className="text-ocean-600" />
        <h2 className="text-lg font-bold text-ocean-900">Select Your Location</h2>
      </div>

      {state.error && (
        <div className="bg-coral-400/10 border border-coral-400/30 text-coral-600 text-sm rounded-xl px-4 py-3 mb-4">
          {state.error}
        </div>
      )}

      <div className="space-y-3 mb-6">
        <div className="relative">
          <select value={country} onChange={handleCountryChange} className={selectClass}>
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-ocean-400 pointer-events-none" />
        </div>

        {country && (
          <div className="relative">
            <select value={parish} onChange={handleParishChange} className={selectClass}>
              <option value="">Select Parish</option>
              {parishes.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-ocean-400 pointer-events-none" />
          </div>
        )}

        {parish && (
          <div className="relative">
            <select value={constituencyId} onChange={handleConstituencySelect} className={selectClass}>
              <option value="">Select Constituency</option>
              {constituencies.map((c) => (
                <option key={c.constituency_id} value={c.constituency_id}>
                  {c.name}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-ocean-400 pointer-events-none" />
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-ocean-200 flex-1" />
        <span className="text-ocean-400 text-xs uppercase tracking-wider">or search address</span>
        <div className="h-px bg-ocean-200 flex-1" />
      </div>

      <div className="flex gap-2 mb-2">
        <input
          type="text"
          maxLength={200}
          value={addressText}
          onChange={(e) => {
            setAddressText(e.target.value);
            setAddressError('');
          }}
          placeholder={`e.g. "Market Square, St. George's"`}
          className="flex-1 border-2 border-ocean-200 rounded-xl px-4 py-3 text-sm text-ocean-900 placeholder:text-ocean-400 focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200"
        />
        <button
          onClick={handleAddressSearch}
          className="bg-ocean-600 text-white px-4 rounded-xl hover:bg-ocean-700 transition-colors font-medium text-sm"
        >
          Search
        </button>
      </div>

      {addressError && (
        <p className="text-coral-600 text-xs mb-3">{addressError}</p>
      )}

      {showPinDrop && (
        <div className="mt-4">
          <p className="text-ocean-600 text-sm font-medium mb-2 flex items-center gap-1.5">
            <MapPin size={14} />
            Tap the map to drop a pin at your location
          </p>
          <PinDropMap
            country={country}
            onPinDrop={handlePinDrop}
          />
        </div>
      )}

      <button
        onClick={() => dispatch({ type: 'SET_STEP', payload: 'start' })}
        className="mt-6 w-full text-ocean-500 text-sm font-medium hover:text-ocean-700 transition-colors"
      >
        &larr; Back to GPS lookup
      </button>
    </div>
  );
}
