import { useState } from 'react';
import TabBar from './TabBar';
import TabPanel from './TabPanel';

export default function RepStackTabs({ officials, country, constituencyId }) {
  const [activeTab, setActiveTab] = useState('local');

  if (!officials) return null;

  // Filter officials by tab
  const filteredOfficials = {
    local: officials.local || [],
    mp: officials.national?.filter(
      (o) => o.role === 'Member of Parliament' && o.constituency_id === constituencyId
    ) || [],
    headOfGovernment: officials.national?.filter(
      (o) => o.isHeadOfGovernment === true && o.country === country
    ) || [],
    headOfState: officials.national?.filter(
      (o) => (o.role === 'Governor General' || o.role === 'President' || o.role === 'Monarch') &&
             o.country === country
    ) || [],
  };

  return (
    <div className="space-y-4">
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="px-4">
        <TabPanel
          id="local"
          isActive={activeTab === 'local'}
          officials={filteredOfficials.local}
          title="Local Council"
        />
        <TabPanel
          id="mp"
          isActive={activeTab === 'mp'}
          officials={filteredOfficials.mp}
          title="Members of Parliament"
        />
        <TabPanel
          id="headOfGovernment"
          isActive={activeTab === 'headOfGovernment'}
          officials={filteredOfficials.headOfGovernment}
          title="Head of Government"
        />
        <TabPanel
          id="headOfState"
          isActive={activeTab === 'headOfState'}
          officials={filteredOfficials.headOfState}
          title="Head of State"
        />
      </div>
    </div>
  );
}
