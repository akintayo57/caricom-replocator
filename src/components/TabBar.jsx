import { Building2, Landmark, Users } from 'lucide-react';

const tabs = [
  { id: 'local', label: 'Local', icon: Building2, color: 'text-tropic-700' },
  { id: 'mp', label: 'Members of Parliament', icon: Landmark, color: 'text-ocean-700' },
  { id: 'headOfGovernment', label: 'Head of Government', icon: Landmark, color: 'text-coral-600' },
  { id: 'headOfState', label: 'Head of State', icon: Users, color: 'text-ocean-950' },
];

export default function TabBar({ activeTab, onTabChange }) {
  function handleKeyDown(e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const currentIndex = tabs.findIndex(t => t.id === activeTab);
      if (currentIndex > 0) {
        onTabChange(tabs[currentIndex - 1].id);
      }
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const currentIndex = tabs.findIndex(t => t.id === activeTab);
      if (currentIndex < tabs.length - 1) {
        onTabChange(tabs[currentIndex + 1].id);
      }
    }
  }

  return (
    <div className="border-b border-ocean-200">
      <div className="flex gap-1 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              onKeyDown={handleKeyDown}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                isActive
                  ? `${tab.color} border-b-2 border-current`
                  : 'text-ocean-400 border-b-2 border-transparent hover:text-ocean-600'
              }`}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
