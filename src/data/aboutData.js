import { Users, MapPin, Trophy, Star, Target, Heart, Zap, CheckCircle } from 'lucide-react';

export const sportCategories = [
  { name: 'Outdoor', icon: '🏟️', desc: 'Football, Cricket, Tennis' },
  { name: 'Indoor', icon: '🏢', desc: 'Basketball, Volleyball, Squash' },
  { name: 'Racquet', icon: '🎾', desc: 'Tennis, Badminton, Squash' },
  { name: 'Team Sport', icon: '⚽', desc: 'Football, Cricket, Basketball' },
  { name: 'Fitness', icon: '💪', desc: 'Gym, Yoga, CrossFit' },
  { name: 'Other', icon: '🎯', desc: 'Swimming, Cycling, Running' }
];

export const stats = [
  { number: '10K+', label: 'Active Users', icon: Users },
  { number: '500+', label: 'Sports Venues', icon: MapPin },
  { number: '50K+', label: 'Bookings Made', icon: Trophy },
  { number: '4.8', label: 'User Rating', icon: Star }
];

export const values = [
  { icon: Target, title: 'Accessibility', desc: 'Making sports accessible to everyone, everywhere' },
  { icon: Heart, title: 'Community', desc: 'Building stronger communities through sports' },
  { icon: Zap, title: 'Innovation', desc: 'Leveraging technology to enhance sports experiences' },
  { icon: CheckCircle, title: 'Quality', desc: 'Ensuring top-notch facilities and services' }
];