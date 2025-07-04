import React from 'react';

interface MarineBackgroundProps {
  scrollY: number;
}

const MarineBackground: React.FC<MarineBackgroundProps> = ({ scrollY }) => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-950" />
      
      {/* Animated Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.1)}px)`
            }}
          />
        ))}
      </div>

      {/* Swimming Fish */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-swim"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `-5%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              transform: `translateY(${scrollY * 0.05}px)`
            }}
          >
            <div className="w-8 h-4 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full relative">
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-6 bg-gradient-to-r from-blue-400 to-transparent rounded-l-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Floating Seaweed */}
      <div className="absolute bottom-0 left-0 right-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 animate-sway"
            style={{
              left: `${i * 8}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `translateY(${scrollY * 0.03}px)`
            }}
          >
            <div 
              className="w-2 bg-gradient-to-t from-green-800 to-green-600 rounded-t-full"
              style={{ height: `${60 + Math.random() * 40}px` }}
            />
          </div>
        ))}
      </div>

      {/* Jellyfish */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-jellyfish"
            style={{
              top: `${30 + Math.random() * 40}%`,
              left: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 3}s`,
              transform: `translateY(${scrollY * 0.08}px)`
            }}
          >
            <div className="relative">
              <div className="w-12 h-8 bg-gradient-to-b from-purple-400/50 to-pink-400/50 rounded-full animate-pulse" />
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {[...Array(4)].map((_, j) => (
                  <div
                    key={j}
                    className="w-0.5 bg-purple-300/60 rounded-full animate-wave"
                    style={{ 
                      height: `${8 + Math.random() * 6}px`,
                      animationDelay: `${j * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Boat Silhouettes */}
      <div className="absolute top-0 left-0 right-0 h-24">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute top-4 animate-boat"
            style={{
              left: `${i * 30 + 10}%`,
              animationDelay: `${i * 8}s`,
              animationDuration: '25s'
            }}
          >
            <div className="w-16 h-4 bg-black/40 rounded-b-full relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-black/40" />
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-black/30 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarineBackground;