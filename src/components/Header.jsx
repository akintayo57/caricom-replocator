import { MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Header() {
  const { state, dispatch } = useApp();

  return (
    <header className="bg-gradient-to-r from-ocean-800 to-ocean-950 text-white px-4 py-4 shadow-lg">
      <div className="max-w-lg mx-auto flex items-center justify-between">
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <div className="bg-tropic-500 rounded-lg p-1.5">
            <MapPin size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">CARICOM RepLocator</h1>
            <p className="text-ocean-300 text-[10px] uppercase tracking-wider">Find Your Representatives</p>
          </div>
        </button>
        {state.step === 'results' && (
          <button
            onClick={() => dispatch({ type: 'RESET' })}
            className="text-xs text-ocean-300 hover:text-white border border-ocean-600 rounded-full px-3 py-1 transition-colors"
          >
            New Search
          </button>
        )}
      </div>
    </header>
  );
}
