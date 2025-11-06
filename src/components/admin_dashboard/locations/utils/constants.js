export const ADMIN_ID = 1;

export const MENU_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'TrendingUp' },
  { id: 'locations', label: 'Locations', icon: 'MapPin' },
  { id: 'bookings', label: 'Bookings', icon: 'Calendar' },
  { id: 'users', label: 'Users', icon: 'Users' }
];

export const SPORTS_CATEGORIES = [
  { id: 1, name: 'Outdoor Sports' },
  { id: 2, name: 'Indoor Sports' },
  { id: 3, name: 'Water Sports' },
  { id: 4, name: 'Adventure Sports' }
];

export const DAYS_OF_WEEK = [
  'MONDAY',
  'TUESDAY', 
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY'
];

export const API_ENDPOINTS = {
  LOCATIONS: '/api/locations',
  SPORTS: '/api/sports',
  BOOKINGS: '/api/bookings',
  USERS: '/api/users',
  AUTH: '/api/auth'
};

export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};