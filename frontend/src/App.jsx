import { useRef } from 'react';
import './App.css';
import ExploreDestinations from './components/ExploreDestinations';
import TopSellingPackages from './components/TopSelllingPackages';
import TestimonialSection from './components/Testimonialsection';
import OurAdvantages from './components/OurAdvantages';

function App() {
  const exploreRef = useRef(null);

  const scrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section with Background */}
      <div
        className="min-h-screen relative"
        style={{
          backgroundImage: 'url(/bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <main className="relative z-10 w-full">
          <section className="w-full px-6 py-16 text-center">
            <div className="max-w-4xl mx-auto mt-48">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                Explore the World
                <br />
                <span>Like Never Before</span>
              </h1>

              <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
                Discover breathtaking destinations and create unforgettable memories with our curated travel experiences
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={scrollToExplore}
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-800 transition-all transform hover:scale-105 bg-white/20 backdrop-blur-sm"
                >
                  Start Your Journey
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Explore Destinations */}
      <div ref={exploreRef} className="w-full">
        <ExploreDestinations />
      </div>
       <OurAdvantages/>
      {/* Top Selling Packages */}
      <TopSellingPackages />

      <TestimonialSection/>
    </>
  );
}

export default App;
