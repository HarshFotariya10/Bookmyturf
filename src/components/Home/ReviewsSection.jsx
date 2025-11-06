import React from 'react';
import { Star } from 'lucide-react';

const ReviewsSection = ({ isVisible, reviews }) => {
  return (
    <section id="reviews" className="py-20 bg-gray-800/30" data-animate>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${
          isVisible('reviews') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300">Real experiences from real sports enthusiasts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-500 transform ${
                isVisible('reviews') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-400">{review.sport}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 italic">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;