
import React, { useState } from 'react';
import { Doctor } from '../types';

interface DoctorProfileProps {
  doctor: Doctor;
  onBook: (doc: Doctor) => void;
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ doctor, onBook }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
              <div className="relative">
                <img src={doctor.image} alt={doctor.name} className="w-40 h-40 md:w-56 md:h-56 rounded-[3rem] object-cover" />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white w-16 h-16 rounded-3xl flex flex-col items-center justify-center border-4 border-white shadow-xl">
                  <span className="text-lg font-bold">15+</span>
                  <span className="text-[10px] uppercase font-bold opacity-80">Years</span>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-blue-100">Top Rated</span>
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-green-100">Verified</span>
                </div>
                <h1 className="text-4xl font-bold text-slate-900">{doctor.name}</h1>
                <p className="text-xl text-blue-600 font-semibold">{doctor.specialty} Specialist</p>
                <div className="flex items-center gap-8 py-4 border-y border-slate-100">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-900">{doctor.rating}</p>
                    <p className="text-xs text-slate-400 font-semibold uppercase">Rating</p>
                  </div>
                  <div className="text-center border-x border-slate-100 px-8">
                    <p className="text-2xl font-bold text-slate-900">{doctor.reviews}+</p>
                    <p className="text-xs text-slate-400 font-semibold uppercase">Reviews</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-900">${doctor.fee}</p>
                    <p className="text-xs text-slate-400 font-semibold uppercase">Consult Fee</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-8 border-b border-slate-100 mb-8">
              {['Overview', 'Reviews', 'Experience'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-bold transition-all relative ${
                    activeTab === tab ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full"></div>}
                </button>
              ))}
            </div>

            {activeTab === 'Overview' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">About {doctor.name}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {doctor.bio}
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  {['Specialized Surgery', 'Chronic Care', 'Preventive Meds', '24/7 Support'].map(s => (
                    <div key={s} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">✓</div>
                      <span className="font-bold text-slate-800">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'Reviews' && (
              <div className="space-y-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex gap-6 items-start">
                    <img src={`https://i.pravatar.cc/100?u=${i+10}`} className="w-14 h-14 rounded-2xl" alt="user" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-bold text-slate-900">Patient {i}</h4>
                        <span className="text-yellow-500 font-bold">★★★★★</span>
                      </div>
                      <p className="text-slate-500 text-sm">"Extremely professional and knowledgeable. The treatment plan worked perfectly for me."</p>
                      <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-widest">2 Days Ago</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Sticky Booking Widget */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 rounded-[3rem] p-8 text-white sticky top-28 shadow-2xl shadow-blue-200">
            <h3 className="text-2xl font-bold mb-6">Book Appointment</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Availability</p>
                <div className="flex gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div 
                      key={day}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold ${
                        doctor.availability.includes(day) ? 'bg-blue-600' : 'bg-slate-800 text-slate-600'
                      }`}
                    >
                      {day[0]}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Consultation Fee</span>
                  <span className="font-bold text-white">${doctor.fee}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Tax & Fees</span>
                  <span className="font-bold text-white">$15</span>
                </div>
                <div className="h-px bg-white/10 my-4"></div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Total Amount</span>
                  <span className="text-2xl font-bold text-blue-400">${doctor.fee + 15}</span>
                </div>
              </div>

              <button 
                onClick={() => onBook(doctor)}
                className="w-full py-5 bg-blue-600 hover:bg-blue-500 rounded-[2rem] font-bold text-lg shadow-xl shadow-blue-900/40 transition-all flex items-center justify-center gap-3"
              >
                Continue to Booking
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <p className="text-center text-slate-500 text-xs">No payment required until consultation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
