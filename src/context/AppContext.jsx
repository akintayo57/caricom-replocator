import { createContext, useContext, useReducer, useEffect, useRef } from 'react';

const AppContext = createContext(null);

const initialState = {
  step: 'start', // start | locating | fallback | results
  country: null,
  parish: null,
  constituency: null,
  coordinates: null,
  geojson: null,
  geojsonLoading: true,
  officials: null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_GEOJSON':
      return { ...state, geojson: action.payload, geojsonLoading: false };
    case 'SET_COUNTRY':
      return { ...state, country: action.payload, parish: null, constituency: null };
    case 'SET_PARISH':
      return { ...state, parish: action.payload, constituency: null };
    case 'SET_CONSTITUENCY':
      return { ...state, constituency: action.payload };
    case 'SET_COORDINATES':
      return { ...state, coordinates: action.payload };
    case 'SET_STEP':
      return { ...state, step: action.payload };
    case 'SET_OFFICIALS':
      return { ...state, officials: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SHOW_RESULTS':
      return {
        ...state,
        step: 'results',
        constituency: action.payload.constituency,
        coordinates: action.payload.coordinates,
        officials: action.payload.officials,
        country: action.payload.country,
      };
    case 'RESET':
      return { ...initialState, geojson: state.geojson, geojsonLoading: false };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const geojsonLoaded = useRef(false);

  useEffect(() => {
    if (geojsonLoaded.current) return;
    geojsonLoaded.current = true;

    import('../data/constituencies.json').then((mod) => {
      dispatch({ type: 'SET_GEOJSON', payload: mod.default || mod });
    }).catch((err) => {
      console.error('Failed to load GeoJSON:', err);
    });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
