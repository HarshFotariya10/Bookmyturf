import React, { useState } from 'react';
import { X } from 'lucide-react';
import ImageUpload from './common/ImageUpload';
import Button from './ui/Button';
import { ADMIN_ID } from './utils/constants';
import { add_location } from '../../../services/operations/adminDashboard';
import { useDispatch, useSelector } from 'react-redux';

const AddLocationModal = ({ onClose, onAdd, loading }) => {

  const {token} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  const [newLocation, setNewLocation] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    mediaFiles: []
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // onAdd(newLocation);
    console.log(newLocation);
    dispatch(add_location(newLocation,token));
    console.log("api called");
  };

  const updateLocation = (field, value) => {
    setNewLocation(prev => ({ ...prev, [field]: value }));
  };

  const handleMediaFilesUpdate = (mediaFiles) => {
    setNewLocation(prev => ({ ...prev, mediaFiles }));
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-800/90 backdrop-blur-xl rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50 shadow-2xl transform animate-scaleIn">
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">Add New Location</h3>
              <p className="text-slate-400 text-sm mt-1">Create a new sports venue</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-700/50 rounded-xl transition-all duration-300 text-slate-400 hover:text-white hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300">Location Name</label>
              <input
                type="text"
                required
                value={newLocation.name}
                onChange={(e) => updateLocation('name', e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white placeholder-slate-400 transition-all duration-300"
                placeholder="Enter location name"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300">City</label>
              <input
                type="text"
                required
                value={newLocation.city}
                onChange={(e) => updateLocation('city', e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white placeholder-slate-400 transition-all duration-300"
                placeholder="Enter city"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Address</label>
            <textarea
              required
              value={newLocation.address}
              onChange={(e) => updateLocation('address', e.target.value)}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white placeholder-slate-400 transition-all duration-300 resize-none"
              rows="3"
              placeholder="Enter full address"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300">State</label>
              <input
                type="text"
                required
                value={newLocation.state}
                onChange={(e) => updateLocation('state', e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white placeholder-slate-400 transition-all duration-300"
                placeholder="Enter state"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300">Pincode</label>
              <input
                type="text"
                required
                value={newLocation.pincode}
                onChange={(e) => updateLocation('pincode', e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white placeholder-slate-400 transition-all duration-300"
                placeholder="Enter pincode"
              />
            </div>
          </div>

          {/* Image Upload */}
          <ImageUpload
            mediaFiles={newLocation.mediaFiles}
            onUpdate={handleMediaFilesUpdate}
          />

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t border-slate-700/50">
            <Button type="button" onClick={onClose} variant="ghost">
              Cancel
            </Button>
            <Button type="submit" variant="primary" loading={loading}>
              Add Location
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLocationModal;
