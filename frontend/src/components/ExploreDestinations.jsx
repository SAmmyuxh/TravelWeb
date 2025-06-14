import { useQuery } from '@tanstack/react-query';
import { fetchDestinations } from '../api';
import React, { useState } from 'react';
import { Star, MapPin, Calendar, Users, Heart, ArrowRight, Sparkles } from 'lucide-react';
const ExploreDestinations = () => {
  const { data, isLoading } = useQuery({queryKey:['destinations'], queryFn:fetchDestinations});
  const destinations = data?.data || [];
const [hoveredCard, setHoveredCard] = useState(null);
  return (
   
<section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Most Popular
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-8">
            Explore Dream Destinations
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover breathtaking places that will create memories to last a lifetime
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(isLoading ? Array(6).fill({}) : destinations).map((dest, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                {isLoading ? (
                  <div className="h-full bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse" />
                ) : (
                  <>
                    <img 
                      src={dest.image} 
                      alt={dest.name} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                )}
                
                {/* Floating Heart Icon */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-50 hover:text-red-500">
                  <Heart className="w-5 h-5" />
                </button>

                {/* Price Badge */}
                {!isLoading && (
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-lg font-bold text-slate-800">{dest.price}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {isLoading ? (
                      <div className="h-6 w-32 bg-slate-200 animate-pulse rounded" />
                    ) : (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        {dest.name}
                      </div>
                    )}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  {isLoading ? (
                    <div className="h-4 w-24 bg-slate-200 animate-pulse rounded" />
                  ) : (
                    <>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium text-slate-700">{dest.rating || '4.5'}</span>
                      </div>
                      <span className="text-sm text-slate-500">({dest.reviews || '120'} reviews)</span>
                    </>
                  )}
                </div>

                {/* Description */}
                {!isLoading && dest.description && (
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{dest.description}</p>
                )}

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg group/btn">
                  <span className="flex items-center justify-center gap-2">
                    Explore Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 transition-opacity duration-300 ${hoveredCard === idx ? 'opacity-100' : 'opacity-0'} pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreDestinations;
