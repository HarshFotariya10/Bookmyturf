import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

const InputField = ({ 
  label, 
  type, 
  value, 
  onChange, 
  placeholder, 
  icon, 
  showPasswordToggle = false 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const getIconComponent = () => {
    switch(icon) {
      case 'mail': return Mail;
      case 'lock': return Lock;
      case 'user': return User;
      default: return Mail;
    }
  };

  const IconComponent = getIconComponent();
  const inputType = showPasswordToggle && showPassword ? 'text' : type;

  return (
    <div className="group">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <IconComponent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 sm:w-5 h-4 sm:h-5 group-focus-within:text-purple-500 transition-colors" />
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white hover:bg-white text-sm sm:text-base"
          placeholder={placeholder}
          required
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <EyeOff className="w-4 sm:w-5 h-4 sm:h-5" /> : <Eye className="w-4 sm:w-5 h-4 sm:h-5" />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;