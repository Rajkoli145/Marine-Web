import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Filter,
  Search,
  Play,
  Award,
  ChevronDown,
  Fish,
  Compass,
  Waves,
  Globe
} from 'lucide-react';
import Navbar from './Navbar';

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Marine Biology', 'Ocean Navigation', 'Conservation', 'Oceanography', 'Marine Technology'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const courses = [
    {
      id: 1,
      title: "Introduction to Marine Biology",
      instructor: "Dr. Sarah Chen",
      category: "Marine Biology",
      level: "Beginner",
      duration: "8 weeks",
      students: 1250,
      rating: 4.9,
      price: 99,
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      description: "Explore the fascinating world of marine life and ecosystems in this comprehensive introduction course.",
      lessons: 24,
      certificate: true
    },
    {
      id: 2,
      title: "Ocean Navigation Fundamentals",
      instructor: "Captain Mike Torres",
      category: "Ocean Navigation",
      level: "Intermediate",
      duration: "6 weeks",
      students: 890,
      rating: 4.8,
      price: 129,
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      description: "Master the art of maritime navigation using modern and traditional techniques.",
      lessons: 18,
      certificate: true
    },
    {
      id: 3,
      title: "Marine Conservation Strategies",
      instructor: "Dr. Elena Rodriguez",
      category: "Conservation",
      level: "Advanced",
      duration: "10 weeks",
      students: 650,
      rating: 4.9,
      price: 159,
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      description: "Learn cutting-edge conservation methods to protect marine ecosystems and biodiversity.",
      lessons: 30,
      certificate: true
    },
    {
      id: 4,
      title: "Deep Sea Exploration",
      instructor: "Prof. James Wilson",
      category: "Oceanography",
      level: "Advanced",
      duration: "12 weeks",
      students: 420,
      rating: 4.7,
      price: 199,
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      description: "Dive into the mysteries of the deep ocean and discover its hidden wonders.",
      lessons: 36,
      certificate: true
    },
    {
      id: 5,
      title: "Coral Reef Ecosystems",
      instructor: "Dr. Maria Santos",
      category: "Marine Biology",
      level: "Intermediate",
      duration: "7 weeks",
      students: 980,
      rating: 4.8,
      price: 119,
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      description: "Study the complex relationships within coral reef ecosystems and their conservation.",
      lessons: 21,
      certificate: true
    },
    {
      id: 6,
      title: "Marine Technology & Innovation",
      instructor: "Dr. Alex Kim",
      category: "Marine Technology",
      level: "Advanced",
      duration: "9 weeks",
      students: 340,
      rating: 4.6,
      price: 179,
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      description: "Explore the latest technologies revolutionizing marine research and exploration.",
      lessons: 27,
      certificate: true
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Marine Biology': return Fish;
      case 'Ocean Navigation': return Compass;
      case 'Conservation': return Globe;
      case 'Oceanography': return Waves;
      default: return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
              Explore Our Courses
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Dive into comprehensive marine education with expert-led courses designed for every skill level
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, instructors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-300/50 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
                <div className="flex flex-col md:flex-row gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            <div className="text-gray-600">
              Showing {filteredCourses.length} of {courses.length} courses
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => {
              const CategoryIcon = getCategoryIcon(course.category);
              
              return (
                <div
                  key={course.id}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border border-gray-100"
                >
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-6 h-6 text-blue-600 ml-1" />
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <CategoryIcon className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-800">{course.category}</span>
                    </div>
                    
                    {/* Level Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.level}
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {course.instructor.charAt(0)}
                      </div>
                      <span className="text-gray-700 font-medium">{course.instructor}</span>
                    </div>
                    
                    {/* Course Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{course.lessons} lessons</span>
                        </div>
                      </div>
                      {course.certificate && (
                        <div className="flex items-center space-x-1 text-blue-600">
                          <Award className="w-4 h-4" />
                          <span className="text-xs">Certificate</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Rating and Students */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium text-gray-800">{course.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{course.students.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        ${course.price}
                      </div>
                    </div>
                    
                    {/* Enroll Button */}
                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                      Enroll Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Request a custom course or suggest new topics. Our expert instructors are always creating new content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Request Course
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
              Contact Instructor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;