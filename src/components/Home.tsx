import React, { useState, useEffect } from 'react';
import {
  Heart,
  Calendar,
  Target,
  Star,
  TrendingUp,
  Clock,
  Pill,
  BarChart3,
  Users,
  Activity
} from 'lucide-react';
import SeizureChart from './ui/SeizureChart';
import PhotoCarousel from './ui/PhotoCarousel';
import VideoDemo from './ui/VideoDemo';

interface QuickStat {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
  color: string;
}

const Home: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const quickStats: QuickStat[] = [
    {
      title: "Days Seizure-Free",
      value: "7",
      icon: <Calendar className="w-6 h-6" />,
      trend: "+2 from last week",
      color: "text-green-600"
    },
    {
      title: "Medication Adherence",
      value: "98%",
      icon: <Target className="w-6 h-6" />,
      trend: "+5% this month",
      color: "text-blue-600"
    },
    {
      title: "Mood Score",
      value: "8.2/10",
      icon: <Heart className="w-6 h-6" />,
      trend: "Stable",
      color: "text-pink-600"
    },
    {
      title: "Daily Streak",
      value: "12",
      icon: <Star className="w-6 h-6" />,
      trend: "Personal best!",
      color: "text-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section with App Name and Quote */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white border-b-2 rounded-b-2 ">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-6 py-16 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
              SeizureSavvy
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in animation-delay-300">
            "Every day is a victory, every moment is progress - together we conquer epilepsy"
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-300 to-pink-300 mx-auto rounded-full animate-scale-in"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce animation-delay-1500"></div>
      </div>

      {/* Photo Carousel Section */}
      <PhotoCarousel />

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Welcome Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Sarah!</h2>
            <p className="text-gray-600">You're doing great! Here's your epilepsy management overview.</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-800">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-600">{currentTime.toLocaleDateString()}</div>
          </div>
        </div>

        {/* Quick Stats with 3D Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <div 
              key={index}
              className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-pink-200/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 perspective-1000"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color.replace('text-', 'bg-').replace('-600', '-100')} transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  {stat.icon}
                </div>
                <TrendingUp className="w-4 h-4 text-green-500 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-3xl transition-all duration-300">{stat.value}</h3>
              <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
              <p className={`text-xs ${stat.color} font-medium`}>{stat.trend}</p>
            </div>
          ))}
        </div>

        {/* Seizure Tracking Chart */}
        <SeizureChart />

        {/* Today's Overview with Enhanced 3D Cards */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pink-200/50 shadow-xl">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Today's Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-all duration-300 shadow-lg">
                <Pill className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">Medications</h3>
              <p className="text-sm text-gray-600 mb-3">2 of 2 taken</p>
              <div className="w-full bg-green-200 rounded-full h-3 shadow-inner">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full w-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="group text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-all duration-300 shadow-lg">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">Activity Level</h3>
              <p className="text-sm text-gray-600 mb-3">Moderate</p>
              <div className="w-full bg-blue-200 rounded-full h-3 shadow-inner">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full w-3/4 animate-pulse"></div>
              </div>
            </div>
            
            <div className="group text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-all duration-300 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">Mood</h3>
              <p className="text-sm text-gray-600 mb-3">Good (8/10)</p>
              <div className="w-full bg-purple-200 rounded-full h-3 shadow-inner">
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full w-4/5 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Demo Section */}
        <VideoDemo />

        {/* Recent Activity with Enhanced Design */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pink-200/50 shadow-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center space-x-2">
            <Clock className="w-5 h-5 text-pink-500" />
            <span>Recent Activity</span>
          </h3>
          
          <div className="space-y-4">
            {[
              { action: "Medication taken", time: "2 hours ago", type: "medication" },
              { action: "Mood entry added", time: "5 hours ago", type: "mood" },
              { action: "Weekly report generated", time: "1 day ago", type: "report" },
              { action: "Caregiver notification sent", time: "2 days ago", type: "caregiver" }
            ].map((activity, index) => (
              <div key={index} className="group flex items-center space-x-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-102 hover:shadow-md">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md ${
                  activity.type === 'medication' ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white' :
                  activity.type === 'mood' ? 'bg-gradient-to-br from-purple-400 to-purple-600 text-white' :
                  activity.type === 'report' ? 'bg-gradient-to-br from-green-400 to-green-600 text-white' :
                  'bg-gradient-to-br from-pink-400 to-pink-600 text-white'
                }`}>
                  {activity.type === 'medication' ? <Pill className="w-6 h-6" /> :
                   activity.type === 'mood' ? <Heart className="w-6 h-6" /> :
                   activity.type === 'report' ? <BarChart3 className="w-6 h-6" /> :
                   <Users className="w-6 h-6" />}
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium group-hover:text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
