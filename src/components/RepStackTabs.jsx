import { useState } from 'react';
import TabBar from './TabBar';
import TabPanel from './TabPanel';
import { applyHierarchyFilter } from '../utils/officials';

export default function RepStackTabs({ officials, country, constituencyId, hierarchy = [] }) {
  const [activeTab, setActiveTab] = useState(hierarchy?.[0]?.id || 'local');

  if (!officials || !hierarchy || hierarchy.length === 0) return null;

  // Filter officials for a specific hierarchy tier
  const filterOfficialsForTier = (tierConfig) => {
    const context = { country, constituencyId };

    // Determine which officials array to use based on scope
    const officialsToFilter = tierConfig.scope === 'local'
      ? officials.local
      : officials.national;

    if (!officialsToFilter) return [];

    return officialsToFilter.filter(o =>
      applyHierarchyFilter(o, tierConfig, context)
    );
  };

  return (
    <div className="space-y-4">
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} hierarchy={hierarchy} />
      <div className="px-4">
        {hierarchy.map((tier) => (
          <TabPanel
            key={tier.id}
            id={tier.id}
            isActive={activeTab === tier.id}
            officials={filterOfficialsForTier(tier)}
            title={tier.label}
          />
        ))}
      </div>
    </div>
  );
}
