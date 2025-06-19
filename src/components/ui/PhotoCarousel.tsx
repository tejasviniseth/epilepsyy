import React, { useState, useEffect } from 'react';

const PhotoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      title: "Peaceful Meditation",
      description: "Finding calm in daily practice"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
      title: "Healthy Living",
      description: "Nutrition for better health"
    },
    {
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop",
      title: "Stay Active",
      description: "Exercise for wellness"
    },
    {
      url: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop",
      title: "Medical Care",
      description: "Professional support"
    },
    {
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop",
      title: "Family Support",
      description: "Together we're stronger"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="relative h-96 overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      {/* Photo Cards Container */}
      <div className="relative h-full flex items-center justify-center perspective-1000">
        <div className="relative w-full max-w-6xl mx-auto px-8">
          <div className="flex items-center justify-center space-x-8">
            {photos.map((photo, index) => {
              const offset = index - currentIndex;
              const isActive = offset === 0;
              const isNext = offset === 1 || (offset === -photos.length + 1);
              const isPrev = offset === -1 || (offset === photos.length - 1);
              
              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-1000 ease-in-out transform-gpu ${
                    isActive 
                      ? 'scale-110 z-30 opacity-100 translate-x-0 rotate-0' 
                      : isNext 
                      ? 'scale-75 z-20 opacity-70 translate-x-80 rotate-12' 
                      : isPrev 
                      ? 'scale-75 z-20 opacity-70 -translate-x-80 -rotate-12' 
                      : 'scale-50 z-10 opacity-30 translate-x-96'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="relative w-80 h-56 rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                      <p className="text-sm opacity-90">{photo.description}</p>
                    </div>
                    
                    {/* 3D Border Effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/30 pointer-events-none"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-pink-400/50 rounded-full animate-bounce animation-delay-1000"></div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-blue-400/50 rounded-full animate-bounce animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400/50 rounded-full animate-bounce animation-delay-1500"></div>
      <div className="absolute bottom-10 right-10 w-5 h-5 bg-indigo-400/50 rounded-full animate-bounce animation-delay-500"></div>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
