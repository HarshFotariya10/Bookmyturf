import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  size = 'medium',
  icon: Icon,
  loading = false,
  disabled = false,
  className = ''
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 focus:ring-cyan-500/50",
    success: "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 focus:ring-emerald-500/50",
    ghost: "text-slate-400 hover:text-white hover:bg-slate-700/50 focus:ring-slate-500/50"
  };
  
  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3",
    large: "px-8 py-4 text-lg"
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
      )}
      {Icon && !loading && (
        <Icon className={`w-5 h-5 ${children ? 'mr-2' : ''} ${variant === 'primary' ? 'group-hover:rotate-90' : ''} transition-transform duration-300`} />
      )}
      {children}
    </button>
  );
};

export default Button;