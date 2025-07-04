import React, { useState, useEffect } from 'react';

const DolphinMascot: React.FC = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative mb-12 flex justify-center">
      {/* Speech Bubble */}
      {showBubble && (
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 animate-bubble-appear">
          <div className="relative bg-white/90 backdrop-blur-sm text-slate-800 px-6 py-3 rounded-2xl shadow-lg">
            <p className="text-sm font-medium whitespace-nowrap">
              Ready to explore the ocean depths?
            </p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white/90" />
            </div>
          </div>
        </div>
      )}

      {/* Dolphin */}
      <div className="animate-dolphin-swim">
        <svg
          width="80"
          height="60"
          viewBox="0 0 80 60"
          className="text-cyan-400 drop-shadow-lg"
        >
          {/* Dolphin Body */}
          <path
            d="M10 30 Q20 15 40 20 Q60 25 70 30 Q60 35 40 40 Q20 45 10 30 Z"
            fill="currentColor"
            className="opacity-90"
          />
          
          {/* Dolphin Fin */}
          <path
            d="M25 20 Q30 10 40 15 Q35 20 25 20 Z"
            fill="currentColor"
            className="opacity-80"
          />
          
          {/* Dolphin Tail */}
          <path
            d="M5 25 Q0 20 5 15 Q10 20 15 25 Q10 30 5 35 Q0 40 5 35 Q10 30 5 25 Z"
            fill="currentColor"
            className="opacity-80"
          />
          
          {/* Dolphin Eye */}
          <circle
            cx="45"
            cy="28"
            r="2"
            fill="white"
            className="animate-blink"
          />
          <circle
            cx="46"
            cy="27"
            r="1"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default DolphinMascot;