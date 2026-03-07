const PARTY_COLORS = {
  NDC: { bg: 'bg-tropic-100', text: 'text-tropic-800', border: 'border-tropic-300' },
  NNP: { bg: 'bg-sand-100', text: 'text-yellow-800', border: 'border-sand-200' },
  DLP: { bg: 'bg-red-50', text: 'text-red-800', border: 'border-red-200' },
  UWP: { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-200' },
  IND: { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300' },
};

export default function PartyBadge({ party }) {
  const colors = PARTY_COLORS[party] || PARTY_COLORS.IND;

  return (
    <span
      className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}
    >
      {party}
    </span>
  );
}
