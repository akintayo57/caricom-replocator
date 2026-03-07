import { Building2, Landmark, Users } from 'lucide-react';
import OfficialCard from './OfficialCard';

function TierSection({ icon: Icon, title, subtitle, officials, color }) {
  if (!officials || officials.length === 0) return null;

  return (
    <div className="animate-fade-in-up">
      <div className="flex items-center gap-2 mb-3">
        <div className={`p-1.5 rounded-lg ${color}`}>
          <Icon size={16} className="text-white" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-ocean-900">{title}</h3>
          {subtitle && (
            <p className="text-[11px] text-ocean-500">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        {officials.map((o) => (
          <OfficialCard key={o.id} official={o} />
        ))}
      </div>
    </div>
  );
}

export default function RepStack({ officials }) {
  if (!officials) return null;

  const cabinetMembers = officials.national.filter((o) => o.cabinetPosition);

  return (
    <div className="space-y-6">
      <TierSection
        icon={Building2}
        title="Local Council"
        subtitle="Village/City representatives"
        officials={officials.local}
        color="bg-tropic-600"
      />

      <TierSection
        icon={Landmark}
        title="Member of Parliament"
        subtitle="Your constituency representative"
        officials={officials.national}
        color="bg-ocean-700"
      />

      {cabinetMembers.length > 0 && (
        <div className="bg-gradient-to-r from-coral-400/10 to-sand-100/50 rounded-xl p-3 border border-coral-400/20 animate-fade-in-up">
          <p className="text-xs font-semibold text-coral-600 flex items-center gap-1.5">
            <Landmark size={13} />
            Your MP holds a Cabinet position
          </p>
        </div>
      )}

      <TierSection
        icon={Users}
        title="Senate"
        subtitle="Appointed governing body members"
        officials={officials.senate}
        color="bg-ocean-950"
      />
    </div>
  );
}
