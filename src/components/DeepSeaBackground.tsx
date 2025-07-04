import React from 'react';

const DeepSeaBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Deep Sea Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-black" />
      
      {/* Shipwreck */}
      <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2">
        <div className="relative opacity-30">
          {/* Ship Hull */}
          <div className="w-32 h-16 bg-gradient-to-t from-amber-900 to-amber-700 rounded-t-3xl border-t-4 border-amber-600" />
          {/* Mast */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-1 h-12 bg-amber-800" />
          {/* Torn Sail */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-8 h-6 bg-gray-600 rounded opacity-60" />
        </div>
      </div>

      {/* Glowing Coral */}
      <div className="absolute bottom-0 right-1/4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-glow"
            style={{
              bottom: `${i * 8}px`,
              right: `${i * 4}px`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <div 
              className="w-3 h-8 bg-gradient-to-t from-pink-600 to-purple-500 rounded-t-full opacity-40"
              style={{ transform: `rotate(${i * 15}deg)` }}
            />
          </div>
        ))}
      </div>

      {/* Bioluminescent Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Swimming Deep Sea Creatures */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-deep-swim"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `-10%`,
              animationDelay: `${i * 4}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            <div className="w-6 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full relative opacity-60">
              <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-gradient-to-r from-indigo-400 to-transparent rounded-l-full" />
              <div className="absolute left-1 top-0 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Floating Debris */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-debris opacity-30"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <div 
              className="w-2 h-3 bg-amber-700 rounded transform rotate-45"
              style={{ transform: `rotate(${Math.random() * 360}deg)` }}
            />
          </div>
        ))}
      </div>

      {/* Deep Sea Vents */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-vent"
            style={{
              bottom: '0px',
              left: `${i * 40 - 40}px`,
              animationDelay: `${i * 1}s`
            }}
          >
            <div className="w-1 h-20 bg-gradient-to-t from-yellow-600/50 to-transparent rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeepSeaBackground;