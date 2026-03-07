import { Vote, UserCheck } from 'lucide-react';

export default function TypeBadge({ type }) {
  if (type === 'elected') {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-ocean-100 text-ocean-700 border border-ocean-200">
        <Vote size={10} />
        Elected
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-coral-400/15 text-coral-600 border border-coral-400/30">
      <UserCheck size={10} />
      Appointed
    </span>
  );
}
