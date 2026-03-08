import { Building2, Landmark, Users, Crown } from 'lucide-react';

const iconMap = {
  'Building2': Building2,
  'Landmark': Landmark,
  'Users': Users,
  'Crown': Crown,
};

export default function TabBar({ activeTab, onTabChange, hierarchy = [] }) {
  function handleKeyDown(e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const currentIndex = hierarchy.findIndex(t => t.id === activeTab);
      if (currentIndex > 0) {
        onTabChange(hierarchy[currentIndex - 1].id);
      }
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const currentIndex = hierarchy.findIndex(t => t.id === activeTab);
      if (currentIndex < hierarchy.length - 1) {
        onTabChange(hierarchy[currentIndex + 1].id);
      }
    }
  }

  return (
    <div className="border-b border-ocean-200">
      <div className="flex gap-1 overflow-x-auto">
        {hierarchy.map((tier) => {
          const Icon = iconMap[tier.icon];
          const isActive = activeTab === tier.id;

          return (
            <button
              key={tier.id}
              onClick={() => onTabChange(tier.id)}
              onKeyDown={handleKeyDown}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tier.id}`}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                isActive
                  ? `${tier.color} border-b-2 border-current`
                  : 'text-ocean-400 border-b-2 border-transparent hover:text-ocean-600'
              }`}
            >
              {Icon && <Icon size={16} />}
              <span className="hidden sm:inline">{tier.label}</span>
              <span className="sm:hidden text-xs">{tier.label.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
