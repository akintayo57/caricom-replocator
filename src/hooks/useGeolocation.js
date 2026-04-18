import { useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { findConstituency, findAllConstituencies } from '../utils/pip';
import { getOfficialsForConstituency } from '../utils/officials';

export function useGeolocation() {
  const { state, dispatch } = useApp();

  const locate = useCallback(() => {
    if (!navigator.geolocation) {
      dispatch({ type: 'SET_STEP', payload: 'fallback' });
      dispatch({ type: 'SET_ERROR', payload: 'Geolocation is not supported by your browser.' });
      return;
    }

    dispatch({ type: 'SET_STEP', payload: 'locating' });
    dispatch({ type: 'SET_ERROR', payload: null });

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        resolveLocation(latitude, longitude);
      },
      () => {
        dispatch({ type: 'SET_STEP', payload: 'fallback' });
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, [state.geojson]);

  const resolveLocation = useCallback(
    (lat, lng) => {
      if (!state.geojson) {
        dispatch({ type: 'SET_ERROR', payload: 'Map data is still loading.' });
        return;
      }

      const match = findConstituency(lat, lng, state.geojson);

      if (!match) {
        dispatch({ type: 'SET_ERROR', payload: 'Your location doesn\'t fall within a known constituency. Try the manual selector.' });
        dispatch({ type: 'SET_STEP', payload: 'fallback' });
        dispatch({ type: 'SET_COORDINATES', payload: { lat, lng } });
        return;
      }

      const allMatches = findAllConstituencies(lat, lng, state.geojson);
      const allConstituencyIds = allMatches.map(m => m.constituency_id);

      const officials = getOfficialsForConstituency(match.constituency_id, match.country);
      dispatch({
        type: 'SHOW_RESULTS',
        payload: {
          constituency: match,
          coordinates: { lat, lng },
          officials,
          country: match.country,
          allConstituencyIds,
        },
      });
    },
    [state.geojson, dispatch]
  );

  return { locate, resolveLocation };
}
