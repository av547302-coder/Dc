
import React from 'react';
import { Appointment } from '../types';

interface DoctorDashboardProps {
  appointments: Appointment[];
}

const DoctorDashboard: React.FC<DoctorDashboardProps> = ({ appointments }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-12">
        <div className="flex items-center gap-6">
          <img src="https://picsum.photos/seed/doctor1/300/300" className="w-20 h-20 rounded-[2rem] object-cover" alt="doctor" />
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dr. Sarah Mitchell</h1>
            <p className="text-blue-600 font-semibold">Cardiology Specialist • Clinic 04</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-6 py-4 rounded-3xl border border-slate-100 text-center shadow-sm">
            <p className="text-xs text-slate-400 font-bold uppercase mb-1">Total Patients</p>
            <p className="text-2xl font-bold">1,240</p>
          </div>
          <div className="bg-blue-600 px-6 py-4 rounded-3xl text-white text-center shadow-xl shadow-blue-100">
            <p className="text-xs text-blue-100 font-bold uppercase mb-1">Today's Revenue</p>
            <p className="text-2xl font-bold">$1,850</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-xl font-bold">Today's Appointment Queue</h2>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full">8 Appointments Left</span>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {appointments.map((apt, i) => (
                <div key={apt.id} className="p-8 hover:bg-slate-50 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-xl font-bold text-slate-400">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{apt.patientName}</h4>
                      <div className="flex gap-4 mt-1">
                        <span className="text-xs text-slate-500 font-bold">Token: {apt.token}</span>
                        <span className="text-xs text-blue-600 font-bold">{apt.time}</span>
                        <span className="text-xs text-slate-400">{apt.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="p-3 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="p-3 bg-slate-100 text-slate-400 rounded-xl hover:bg-slate-200 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <div className="bg-slate-900 rounded-[3rem] p-8 text-white">
            <h3 className="font-bold mb-6">Patient Analytics</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-xs font-bold uppercase mb-2 text-slate-500">
                  <span>General Health</span>
                  <span>78%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[78%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold uppercase mb-2 text-slate-500">
                  <span>Follow-up Rate</span>
                  <span>92%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 w-[92%]"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-sm">
            <h3 className="font-bold mb-6">Doctor's Note Pad</h3>
            <textarea 
              className="w-full h-40 bg-slate-50 rounded-2xl border-none outline-none p-4 text-sm placeholder:text-slate-400 resize-none"
              placeholder="Quick clinical notes for today's research..."
            ></textarea>
            <button className="w-full mt-4 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm">Save Notes</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DoctorDashboard;
