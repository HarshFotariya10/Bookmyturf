export const heroImages = [
  'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1920&h=1080&fit=crop'
];

export const popularSports = [
  {
    _id: '1',
    name: 'Premium Football Ground',
    description: 'Professional FIFA standard football ground with floodlights',
    location: 'Downtown Sports Complex',
    category: 'Team Sport',
    timeSlots: ['6:00 AM - 8:00 AM', '6:00 PM - 8:00 PM', '8:00 PM - 10:00 PM'],
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
    rating: 4.8,
    price: 2500
  },
  {
    _id: '2',
    name: 'Elite Cricket Stadium',
    description: 'International standard cricket ground with pavilion',
    location: 'Central Cricket Hub',
    category: 'Team Sport',
    timeSlots: ['5:00 AM - 9:00 AM', '4:00 PM - 8:00 PM'],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop',
    rating: 4.9,
    price: 3000
  },
  {
    _id: '3',
    name: 'Royal Tennis Court',
    description: 'Clay court with professional lighting and seating',
    location: 'Elite Sports Club',
    category: 'Racquet',
    timeSlots: ['6:00 AM - 10:00 AM', '4:00 PM - 10:00 PM'],
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop',
    rating: 4.7,
    price: 1500
  },
  {
    _id: '4',
    name: 'Platinum Badminton Court',
    description: 'Indoor AC badminton court with wooden flooring',
    location: 'Metro Sports Center',
    category: 'Indoor',
    timeSlots: ['5:00 AM - 11:00 PM'],
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
    rating: 4.6,
    price: 800
  },
  {
    _id: '5',
    name: 'Championship Basketball Court',
    description: 'NBA standard court with electronic scoreboard',
    location: 'Sports Arena Plus',
    category: 'Team Sport',
    timeSlots: ['6:00 AM - 10:00 PM'],
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop',
    rating: 4.8,
    price: 2000
  },
  {
    _id: '6',
    name: 'Premium Swimming Pool',
    description: 'Olympic size swimming pool with certified lifeguards',
    location: 'Aquatic Center',
    category: 'Fitness',
    timeSlots: ['5:00 AM - 10:00 PM'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
    rating: 4.9,
    price: 1200
  },
  {
    _id: '7',
    name: 'Professional Volleyball Court',
    description: 'Indoor volleyball court with wooden floors and net',
    location: 'City Sports Hub',
    category: 'Team Sport',
    timeSlots: ['6:00 AM - 10:00 PM'],
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&h=300&fit=crop',
    rating: 4.7,
    price: 1800
  },
  {
    _id: '8',
    name: 'Elite Squash Court',
    description: 'Glass-back squash court with air conditioning',
    location: 'Premium Club',
    category: 'Racquet',
    timeSlots: ['5:00 AM - 11:00 PM'],
    image: 'https://images.unsplash.com/photo-1551633575-0c03c8200b3b?w=400&h=300&fit=crop',
    rating: 4.8,
    price: 1000
  },
  {
    _id: '9',
    name: 'Modern Table Tennis Hall',
    description: 'Multiple tables with professional lighting',
    location: 'Sports Complex',
    category: 'Indoor',
    timeSlots: ['6:00 AM - 10:00 PM'],
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop',
    rating: 4.5,
    price: 600
  }
];

export const reviews = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Amazing experience! The booking process was seamless and the ground quality was excellent.',
    sport: 'Football Ground',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Love the variety of sports available. Booked a tennis court and it was perfect!',
    sport: 'Tennis Court',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b217?w=100&h=100&fit=crop'
  },
  {
    name: 'Amit Patel',
    rating: 4,
    comment: 'Great platform for sports enthusiasts. Easy to use and reliable booking system.',
    sport: 'Cricket Ground',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  }
];

export const howItWorks = [
  {
    step: 1,
    title: 'Browse Sports',
    description: 'Explore our wide range of sports facilities in your area',
    icon: '🏃'
  },
  {
    step: 2,
    title: 'Select Time Slot',
    description: 'Choose your preferred date and time from available slots',
    icon: '⏰'
  },
  {
    step: 3,
    title: 'Book & Pay',
    description: 'Secure your booking with our safe payment gateway',
    icon: '💳'
  },
  {
    step: 4,
    title: 'Play & Enjoy',
    description: 'Show up and enjoy your game at the booked facility',
    icon: '🎯'
  }
];

export const whyChooseUsFeatures = [
  { 
    title: 'Verified Venues', 
    desc: 'All venues are quality checked and verified',
    iconName: 'CheckCircle'
  },
  { 
    title: 'Instant Booking', 
    desc: 'Book your slot instantly with real-time availability',
    iconName: 'Clock'
  },
  { 
    title: 'Community Driven', 
    desc: 'Join thousands of sports enthusiasts',
    iconName: 'Users'
  },
  { 
    title: 'Best Prices', 
    desc: 'Competitive pricing with exclusive offers',
    iconName: 'Star'
  }
];