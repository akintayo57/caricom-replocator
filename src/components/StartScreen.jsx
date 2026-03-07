import { MapPin, ChevronDown, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useGeolocation } from '../hooks/useGeolocation';

export default function StartScreen() {
  const { state, dispatch } = useApp();
  const { locate } = useGeolocation();

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 gap-6 text-center animate-fade-in-up">
      <div className="bg-gradient-to-br from-ocean-100 to-tropic-100 rounded-full p-6">
        <MapPin size={48} className="text-ocean-700" />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-ocean-900">Find Your Representatives</h2>
        <p className="text-ocean-600 mt-2 text-sm max-w-xs mx-auto">
          Locate your elected officials in Grenada and Dominica based on your exact location.
        </p>
      </div>

      <button
        onClick={locate}
        disabled={state.geojsonLoading}
        className="w-full max-w-xs bg-gradient-to-r from-ocean-600 to-ocean-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-ocean-200 hover:shadow-ocean-300 hover:from-ocean-700 hover:to-ocean-800 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <MapPin size={18} />
        {state.geojsonLoading ? 'Loading Map Data...' : 'Find My Reps'}
      </button>

      <div className="flex items-center gap-3 w-full max-w-xs">
        <div className="h-px bg-ocean-200 flex-1" />
        <span className="text-ocean-400 text-xs uppercase tracking-wider">or</span>
        <div className="h-px bg-ocean-200 flex-1" />
      </div>

      <button
        onClick={() => dispatch({ type: 'SET_STEP', payload: 'fallback' })}
        disabled={state.geojsonLoading}
        className="w-full max-w-xs border-2 border-ocean-200 text-ocean-700 font-medium py-3 px-6 rounded-xl hover:border-ocean-400 hover:bg-ocean-50 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <Search size={16} />
        Search Manually
      </button>
    </div>
  );
}
