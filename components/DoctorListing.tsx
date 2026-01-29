
import React, { useState } from 'react';
import { DOCTORS } from '../constants';
import { Doctor } from '../types';

interface DoctorListingProps {
  onSelectDoctor: (doc: Doctor) => void;
}

const DoctorListing: React.FC<DoctorListingProps> = ({ onSelectDoctor }) => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Cardiology', 'Pediatrics', 'Dermatology', 'Neurology'];
  
  const filteredDoctors = DOCTORS.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase()) || 
                         doc.specialty.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = activeFilter === 'All' || doc.specialty === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
        <div className="w-full md:max-w-md relative">
          <input 
            type="text" 
            placeholder="Search doctor, specialty, or clinic..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 no-scrollbar">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                activeFilter === f 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDoctors.map(doctor => (
          <div 
            key={doctor.id}
            onClick={() => onSelectDoctor(doctor)}
            className="group bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-2 transition-all cursor-pointer"
          >
            <div className="flex gap-6 items-start mb-6">
              <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-[2rem] object-cover ring-4 ring-slate-50" />
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Available</span>
                  <div className="flex items-center text-yellow-500 text-sm font-bold">
                    ★ <span className="ml-1 text-slate-900">{doctor.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3>
                <p className="text-blue-600 font-semibold text-sm">{doctor.specialty}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl text-sm">
                <span className="text-slate-500">Qualification</span>
                <span className="font-bold text-slate-800">{doctor.qualification}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl text-sm">
                <span className="text-slate-500">Exp / Fee</span>
                <span className="font-bold text-slate-800">{doctor.experience} • ${doctor.fee}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Next Slot</span>
                <span className="text-sm font-bold text-slate-700">Today, 04:30 PM</span>
              </div>
              <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-bold group-hover:bg-blue-600 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        ))}
        {filteredDoctors.length === 0 && (
          <div className="col-span-full py-20 text-center text-slate-500">
            <p className="text-xl font-bold">No doctors found matching your criteria.</p>
            <button onClick={() => { setSearch(''); setActiveFilter('All'); }} className="text-blue-600 mt-2 font-semibold">Clear filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorListing;
