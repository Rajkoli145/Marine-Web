import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Waves, 
  BookOpen, 
  User, 
  Menu, 
  X, 
  ChevronDown,
  Fish,
  Compass,
  Award,
  Users
} from 'lucide-react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courseCategories = [
    { name: 'Marine Biology', icon: Fish, count: 24 },
    { name: 'Ocean Navigation', icon: Compass, count: 18 },
    { name: 'Marine Conservation', icon: Award, count: 12 },
    { name: 'Oceanography', icon: Waves, count: 16 }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="relative">
              <Waves className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              <div className="absolute -inset-1 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
            <span className="text-2xl font-bold text-gray-800 font-poppins group-hover:text-blue-700 transition-colors duration-300">
              MarineVerse
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 animate-fade-in">
                  <div className="px-4 pb-3 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-800 mb-1">Explore Courses</h3>
                    <p className="text-sm text-gray-600">Dive into marine knowledge</p>
                  </div>
                  <div className="py-2">
                    {courseCategories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          navigate('/courses');
                          setIsCoursesOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-blue-50 transition-colors duration-200 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                            <category.icon className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="font-medium text-gray-700 group-hover:text-blue-700">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="px-4 pt-3 border-t border-gray-100">
                    <button
                      onClick={() => {
                        navigate('/courses');
                        setIsCoursesOpen(false);
                      }}
                      className="w-full text-center py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      View All Courses →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              <Users className="w-4 h-4" />
              <span>Community</span>
            </button>

            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigate('/auth')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/auth')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg animate-slide-down">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => {
                  navigate('/courses');
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-3 w-full text-left py-3 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">Courses</span>
              </button>
              
              <button className="flex items-center space-x-3 w-full text-left py-3 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <Users className="w-5 h-5" />
                <span className="font-medium">Community</span>
              </button>
              
              <button className="flex items-center space-x-3 w-full text-left py-3 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <Award className="w-5 h-5" />
                <span className="font-medium">Certifications</span>
              </button>
              
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <button
                  onClick={() => {
                    navigate('/auth');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    navigate('/auth');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;