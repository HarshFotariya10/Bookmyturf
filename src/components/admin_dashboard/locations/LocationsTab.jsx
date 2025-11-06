import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import LocationCard from './LocationCard';
import SearchBar from './SearchBar';
import LoadingSpinner from './LoadingSpinner';
import Button from './ui/Button';

const LocationsTab = ({ locations, loading, onAddLocationClick, onRefresh }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    onRefresh();
  }, [onRefresh]);

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Locations
          </h2>
          <p className="text-slate-400 mt-2">Manage your sports venues</p>
        </div>
        <Button onClick={onAddLocationClick} variant="primary" icon={Plus}>
          Add Location
        </Button>
      </div>

      {/* Search and Filter */}
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Loading State */}
      {loading && <LoadingSpinner />}

      {/* Locations Grid */}
      {!loading && filteredLocations.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          {filteredLocations.map((location, index) => (
            <LocationCard 
              key={location.id} 
              location={location} 
              index={index}
            />
          ))}
        </div>
      )}

      {/* No Locations State */}
      {!loading && filteredLocations.length === 0 && (
        <div className="text-center py-20 bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl animate-fadeIn">
          <div className="relative">
            <div className="w-20 h-20 text-slate-600 mx-auto mb-6 animate-bounce">
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">No Locations Added Yet</h3>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Start building your sports venue network by adding your first location
          </p>
          <Button onClick={onAddLocationClick} variant="primary" icon={Plus} size="large">
            Add Your First Location
          </Button>
        </div>
      )}
    </div>
  );
};

export default LocationsTab;
