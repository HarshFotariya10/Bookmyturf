import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardTab from './DashboardTab';
import LocationsTab from './LocationsTab';
import AddLocationModal from './AddLocationModal';
import BackgroundElements from './common/BackgroundElements';
import { useLocations } from './hooks/useLocations';
import './styles/animations.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddLocationModal, setShowAddLocationModal] = useState(false);
  
  const {
    locations,
    loading,
    addLocation,
    fetchLocations
  } = useLocations();

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <DashboardTab 
            locations={locations}
            onAddLocationClick={() => setShowAddLocationModal(true)}
          />
        );
      case 'locations':
        return (
          <LocationsTab 
            locations={locations}
            loading={loading}
            onAddLocationClick={() => setShowAddLocationModal(true)}
            onRefresh={fetchLocations}
          />
        );
      default:
        return (
          <div className="text-center py-20 animate-fadeIn">
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-12 shadow-2xl">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h2>
              <p className="text-slate-400 text-lg">This section is coming soon...</p>
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <BackgroundElements />
      
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <div className="ml-64 p-8 relative z-10">
        {renderActiveTab()}
      </div>

      {showAddLocationModal && (
        <AddLocationModal
          onClose={() => setShowAddLocationModal(false)}
          onAdd={addLocation}
          loading={loading}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
