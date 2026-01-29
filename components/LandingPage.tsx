
import React, { useState } from 'react';
import { DOCTORS, SERVICES } from '../constants';
import { Doctor } from '../types';

interface LandingPageProps {
  onSearch: () => void;
  onBookDoctor: (doc: Doctor) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSearch, onBookDoctor }) => {
  const [activeRoom, setActiveRoom] = useState<string | null>(null);

  const rooms = [
    { id: 'r1', name: 'Cardiology', color: 'bg-blue-500', doctor: DOCTORS[0] },
    { id: 'r2', name: 'Pediatrics', color: 'bg-green-500', doctor: DOCTORS[1] },
    { id: 'r3', name: 'Dermatology', color: 'bg-purple-500', doctor: DOCTORS[2] },
    { id: 'r4', name: 'Reception', color: 'bg-slate-300', isService: true },
  ];

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            Seamless Healthcare Experience
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1]">
            Book Your <span className="text-blue-600">Appointment</span> in Seconds.
          </h1>
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            Trusted doctors, instant booking, and zero wait times. Experience medical consultation in a futuristic way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onSearch}
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-xl shadow-blue-200"
            >
              Find a Doctor
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Booking
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/medtech/800/600" alt="Med3D Experience" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl flex items-center justify-between shadow-lg">
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Live Availability</p>
                <p className="text-slate-900 font-bold">12 Doctors Online</p>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="doc" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Clinic Preview Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Interactive 3D Clinic Preview</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Visualize your clinic journey before you arrive. Click on specialized rooms to book your consultation directly.</p>
        </div>
        
        <div className="max-w-5xl mx-auto h-[500px] perspective-lg flex items-center justify-center">
          <div className="relative w-full h-full preserve-3d rotate-x-12 rotate-y-[-15deg] transition-all duration-500 hover:rotate-y-[-10deg]">
            {/* Floor */}
            <div className="absolute inset-0 bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-4 border-slate-100 rounded-[40px] transform translate-z-[-20px]"></div>
            
            {/* Rooms Grid */}
            <div className="absolute inset-0 p-8 grid grid-cols-2 gap-8 preserve-3d">
              {rooms.map((room, idx) => (
                <div 
                  key={room.id}
                  onMouseEnter={() => setActiveRoom(room.id)}
                  onMouseLeave={() => setActiveRoom(null)}
                  onClick={() => room.doctor && onBookDoctor(room.doctor)}
                  className={`relative clinic-room ${room.color} rounded-2xl shadow-xl preserve-3d flex flex-col items-center justify-center cursor-pointer overflow-hidden p-6 text-white`}
                >
                  <div className="absolute inset-0 opacity-10 bg-white/20"></div>
                  <div className="text-4xl mb-4 transform translate-z-20">
                    {room.name === 'Cardiology' ? '❤️' : room.name === 'Pediatrics' ? '👶' : room.name === 'Dermatology' ? '✨' : '🛎️'}
                  </div>
                  <h3 className="font-bold text-xl translate-z-10">{room.name}</h3>
                  {room.doctor && (
                    <p className="text-xs mt-2 opacity-90 translate-z-5">By {room.doctor.name}</p>
                  )}
                  {activeRoom === room.id && room.doctor && (
                    <div className="mt-4 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold animate-pulse">
                      Click to Book
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">World-Class Specialized Services</h2>
            <p className="text-slate-600 text-lg">We provide comprehensive medical care with state-of-the-art diagnostic and treatment facilities.</p>
          </div>
          <button onClick={onSearch} className="text-blue-600 font-bold hover:underline flex items-center gap-2">
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-2 transition-all cursor-pointer text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-blue-50 group-hover:scale-110 transition-all">
                {service.icon}
              </div>
              <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{service.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="bg-blue-600 py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Featured Specialists</h2>
            <p className="text-blue-100 opacity-80">Highly qualified and experienced doctors at your service.</p>
          </div>
          
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x">
            {DOCTORS.map((doctor) => (
              <div key={doctor.id} className="min-w-[300px] bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl snap-center group">
                <div className="relative mb-6">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute top-4 right-4 bg-white text-blue-600 font-bold px-3 py-1 rounded-full text-xs shadow-lg">
                    {doctor.rating} ★
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                <p className="text-blue-100 text-sm mb-4">{doctor.specialty} • {doctor.experience}</p>
                <button 
                  onClick={() => onBookDoctor(doctor)}
                  className="w-full py-3 bg-white text-blue-600 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -mr-32 -mt-32"></div>
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">What Our Patients Say</h2>
              <div className="space-y-8">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                  <p className="text-slate-300 italic mb-6">"The 3D preview made me feel so much more comfortable. I knew exactly where to go, and the booking was incredibly fast. Highly recommended!"</p>
                  <div className="flex items-center gap-4">
                    <img src="https://i.pravatar.cc/100?u=a" className="w-12 h-12 rounded-full" alt="avatar" />
                    <div>
                      <p className="text-white font-bold">Johnathan Doe</p>
                      <p className="text-slate-500 text-sm">Regular Patient</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="text-7xl font-bold text-blue-500">4.9/5</div>
              <p className="text-slate-400">Average Patient Rating</p>
              <div className="flex justify-center gap-1 text-yellow-400 text-xl">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
