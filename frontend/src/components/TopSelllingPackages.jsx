import { useQuery } from '@tanstack/react-query';
import { fetchTopPackages } from '../api';
import React, { useState } from 'react';
import { Star, Calendar, Users, ArrowRight } from 'lucide-react';

const TopSellingPackages = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['topPackages'], 
    queryFn: fetchTopPackages
  });
  const packages = data?.data || [];
  console.log(packages);
  const [hoveredPackage, setHoveredPackage] = useState(null);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            Best Sellers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Top Selling Tour Packages
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of satisfied travelers on our most popular adventures
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(isLoading ? Array(6).fill({}) : Array.isArray(packages)? packages : []).map((pkg, idx) => (
            <div 
              key={idx}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredPackage(idx)}
              onMouseLeave={() => setHoveredPackage(null)}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                {isLoading ? (
                  <div className="h-full bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse" />
                ) : (
                  <>
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </>
                )}

                {/* Bestseller Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  🔥 BESTSELLER
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {isLoading ? (
                    <div className="h-6 w-4/5 bg-slate-200 animate-pulse rounded" />
                  ) : (
                    pkg.title
                  )}
                </h3>

                {/* Rating & Reviews */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {isLoading ? (
                      <div className="h-4 w-20 bg-slate-200 animate-pulse rounded" />
                    ) : (
                      <>
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(pkg.rating || 4.5) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} 
                          />
                        ))}
                        <span className="ml-2 text-sm font-medium text-slate-700">{pkg.rating}</span>
                      </>
                    )}
                  </div>
                  {!isLoading && (
                    <span className="text-sm text-slate-500">({pkg.totalReviews || 89} reviews)</span>
                  )}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg group/btn">
                  <span className="flex items-center justify-center gap-2">
                    Book Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 transition-opacity duration-300 ${hoveredPackage === idx ? 'opacity-100' : 'opacity-0'} pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingPackages;