import { MapPin, Map } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getCountryHierarchy } from '../utils/officials';
import ResultsMap from './ResultsMap';
import RepStackTabs from './RepStackTabs';

export default function ResultsScreen() {
  const { state } = useApp();
  const { constituency, allConstituencyIds, officials, country } = state;
  const hierarchy = getCountryHierarchy(country);

  return (
    <div className="px-4 py-6 max-w-lg mx-auto">
      <div className="mb-5 animate-fade-in-up">
        <div className="flex items-center gap-2 mb-1">
          <MapPin size={16} className="text-tropic-600" />
          <span className="text-xs font-semibold text-tropic-700 uppercase tracking-wider">
            Your Constituency
          </span>
        </div>
        <h2 className="text-xl font-bold text-ocean-950">{constituency?.name}</h2>
        <p className="text-sm text-ocean-600">
          {constituency?.parish}, {country}
        </p>
      </div>

      <div className="mb-6 animate-fade-in-up">
        <ResultsMap />
      </div>

      <div className="mb-3 animate-fade-in-up">
        <h3 className="text-xs font-bold text-ocean-400 uppercase tracking-widest">
          Your Representatives
        </h3>
      </div>

      <RepStackTabs
        officials={officials}
        country={country}
        constituencyId={allConstituencyIds || [constituency?.constituency_id].filter(Boolean)}
        hierarchy={hierarchy}
      />
    </div>
  );
}
