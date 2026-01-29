
import React from 'react';
import { Appointment } from '../types';

interface PatientDashboardProps {
  appointments: Appointment[];
}

const PatientDashboard: React.FC<PatientDashboardProps> = ({ appointments }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold text-slate-900">Welcome back, Alex! 👋</h1>
          <p className="text-slate-500">You have {appointments.length} upcoming consultations this week.</p>
        </div>
        <div className="bg-white p-4 rounded-3xl border border-slate-100 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">👤</div>
          <div>
            <p className="font-bold text-slate-900">Alex Johnson</p>
            <p className="text-xs text-slate-500">ID: PT-294021</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              Upcoming Appointments
              <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full">{appointments.length}</span>
            </h2>
            <div className="space-y-6">
              {appointments.map(apt => (
                <div key={apt.id} className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8 group hover:shadow-xl transition-all">
                  <div className="bg-slate-50 p-6 rounded-3xl text-center min-w-[120px]">
                    <p className="text-blue-600 font-bold text-xl">{new Date(apt.date).getDate()}</p>
                    <p className="text-xs text-slate-400 font-bold uppercase">{new Date(apt.date).toLocaleString('default', { month: 'short' })}</p>
                    <div className="h-px bg-slate-200 my-3"></div>
                    <p className="text-sm font-bold text-slate-700">{apt.time}</p>
                  </div>
                  <div className="flex-1 space-y-2 text-center md:text-left">
                    <h3 className="text-2xl font-bold">{apt.doctorName}</h3>
                    <p className="text-blue-600 font-semibold">{apt.type} Consultation</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                      <div className="px-4 py-2 bg-slate-50 rounded-xl text-sm font-bold flex items-center gap-2">
                        <span className="text-slate-400">Token</span>
                        <span className="text-blue-600">{apt.token}</span>
                      </div>
                      <div className="px-4 py-2 bg-slate-50 rounded-xl text-sm font-bold flex items-center gap-2">
                        <span className="text-slate-400">Status</span>
                        <span className="text-green-600">{apt.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-auto">
                    <button className="px-6 py-3 bg-slate-900 text-white rounded-2xl text-sm font-bold hover:bg-blue-600 transition-colors">Reschedule</button>
                    <button className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl text-sm font-bold hover:bg-rose-50 hover:text-rose-600 hover:border-rose-100 transition-colors">Cancel</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <h3 className="text-xl font-bold mb-6">Medical Wallet</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">📄</div>
                    <span className="font-bold">Prescription_04.pdf</span>
                  </div>
                  <span className="text-xs text-slate-500">May 15</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">🔬</div>
                    <span className="font-bold">Blood_Report.pdf</span>
                  </div>
                  <span className="text-xs text-slate-500">May 10</span>
                </div>
              </div>
              <button className="w-full mt-8 py-3 bg-white text-slate-900 rounded-xl font-bold text-sm">Upload New Record</button>
            </div>
            
            <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Virtual Queue Status</h3>
              <div className="text-center py-4">
                <p className="text-5xl font-bold mb-2">C-042</p>
                <p className="text-blue-100 text-sm font-medium uppercase tracking-widest">Your Token Number</p>
              </div>
              <div className="space-y-4 mt-6">
                <div className="flex justify-between text-xs font-bold opacity-70">
                  <span>Current Being Served</span>
                  <span>C-038</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-4/5 rounded-full"></div>
                </div>
                <p className="text-center text-sm font-bold">Estimated Wait: 12 Mins</p>
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-6">Health Vitals</h3>
            <div className="space-y-6">
              {[
                { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', color: 'bg-rose-50 text-rose-600' },
                { label: 'Heart Rate', value: '72', unit: 'bpm', color: 'bg-blue-50 text-blue-600' },
                { label: 'Blood Glucose', value: '98', unit: 'mg/dL', color: 'bg-green-50 text-green-600' },
              ].map(v => (
                <div key={v.label} className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">{v.label}</p>
                    <p className="text-2xl font-bold text-slate-900">{v.value} <span className="text-xs font-medium text-slate-400">{v.unit}</span></p>
                  </div>
                  <div className={`px-2 py-0.5 rounded text-[10px] font-bold ${v.color}`}>Normal</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-8 text-white">
            <h3 className="font-bold mb-4">Med3D Care+</h3>
            <p className="text-sm opacity-80 mb-6 leading-relaxed">Upgrade to premium for family health tracking and priority bookings.</p>
            <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-bold text-sm">Explore Plans</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PatientDashboard;
