import React from 'react';
import { Upload, X } from 'lucide-react';

const ImageUpload = ({ mediaFiles, onUpdate }) => {
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    files.forEach(file => {
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64Data = e.target.result.split(',')[1]; // Remove data:image/... prefix
          onUpdate([...mediaFiles, {
            fileType: file.type,
            base64Data: base64Data
          }]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (index) => {
    onUpdate(mediaFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-300">Upload Images</label>
      <div className="border-2 border-dashed border-slate-600/50 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group bg-slate-700/20">
        <div className="text-center">
          <Upload className="w-12 h-12 text-slate-500 mx-auto mb-4 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="imageUpload"
          />
          <label htmlFor="imageUpload" className="cursor-pointer text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300">
            Click to upload images
          </label>
          <p className="text-sm text-slate-500 mt-2">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
      
      {mediaFiles.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-4">
          {mediaFiles.map((file, index) => (
            <div key={index} className="relative group">
              <img
                src={`data:${file.fileType};base64,${file.base64Data}`}
                alt={`Upload ${index + 1}`}
                className="w-full h-24 object-cover rounded-xl border border-slate-600/50"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-lg"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;