import { useState } from 'react';
import { Phone, Mail, Briefcase, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import PartyBadge from './PartyBadge';
import TypeBadge from './TypeBadge';

export default function OfficialCard({ official }) {
  const [bioOpen, setBioOpen] = useState(false);

  const initials = official.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="bg-white rounded-xl border border-ocean-100 shadow-sm hover:shadow-md transition-shadow p-4">
      <div className="flex items-start gap-3">
        {/* Avatar — photo if available, initials fallback */}
        {official.photo ? (
          <img
            src={official.photo}
            alt={official.name}
            className="w-11 h-11 rounded-full object-cover shrink-0 border border-ocean-100"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div
          className="w-11 h-11 rounded-full bg-gradient-to-br from-ocean-200 to-tropic-200 items-center justify-center text-ocean-800 font-bold text-sm shrink-0"
          style={{ display: official.photo ? 'none' : 'flex' }}
        >
          {initials}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center flex-wrap gap-1.5 mb-1">
            <h4 className="font-bold text-ocean-950 text-sm">{official.name}</h4>
          </div>
          <p className="text-ocean-600 text-xs font-medium">{official.role}</p>
          {official.cabinetPosition && (
            <p className="text-coral-600 text-xs font-semibold flex items-center gap-1 mt-0.5">
              <Briefcase size={11} />
              {official.cabinetPosition}
            </p>
          )}
          <div className="flex flex-wrap gap-1.5 mt-2">
            <PartyBadge party={official.party} />
            <TypeBadge type={official.type} />
          </div>
          {official.termEnds && (
            <p className="flex items-center gap-1 mt-1.5 text-[11px] text-ocean-400">
              <Clock size={10} />
              Term ends {official.termEnds}
            </p>
          )}
        </div>
      </div>

      {/* Bio toggle */}
      {official.bio && (
        <div className="mt-3">
          <button
            onClick={() => setBioOpen((v) => !v)}
            className="flex items-center gap-1 text-xs text-ocean-500 hover:text-ocean-700 transition-colors font-medium"
          >
            {bioOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            {bioOpen ? 'Hide bio' : 'About'}
          </button>
          {bioOpen && (
            <p className="mt-2 text-xs text-ocean-700 leading-relaxed border-t border-ocean-100 pt-2">
              {official.bio}
            </p>
          )}
        </div>
      )}

      {(official.phone || official.email) && (
        <div className="flex gap-2 mt-3 pt-3 border-t border-ocean-100">
          {official.phone && (
            <a
              href={`tel:${official.phone}`}
              className="flex items-center gap-1.5 text-xs text-ocean-600 hover:text-ocean-800 transition-colors bg-ocean-50 rounded-lg px-2.5 py-1.5"
            >
              <Phone size={12} />
              Call
            </a>
          )}
          {official.email && (
            <a
              href={`mailto:${official.email}`}
              className="flex items-center gap-1.5 text-xs text-ocean-600 hover:text-ocean-800 transition-colors bg-ocean-50 rounded-lg px-2.5 py-1.5"
            >
              <Mail size={12} />
              Email
            </a>
          )}
        </div>
      )}
    </div>
  );
}
