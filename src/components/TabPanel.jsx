import OfficialCard from './OfficialCard';

export default function TabPanel({ id, isActive, officials, title }) {
  if (!isActive) return null;

  return (
    <div
      id={`panel-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      className="animate-fade-in-up"
    >
      {officials && officials.length > 0 ? (
        <div className="space-y-2">
          {officials.map((official) => (
            <OfficialCard key={official.id} official={official} />
          ))}
        </div>
      ) : (
        <div className="py-8 text-center">
          <p className="text-ocean-500 text-sm">
            No officials in this category
          </p>
        </div>
      )}
    </div>
  );
}
