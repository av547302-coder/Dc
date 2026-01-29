
import React, { useState, useEffect } from 'react';
import { Appointment } from '../types';

interface QueueTrackerProps {
  appointment?: Appointment;
}

const QueueTracker: React.FC<QueueTrackerProps> = ({ appointment }) => {
  const [currentServing, setCurrentServing] = useState(38);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentServing(prev => (prev < 42 ? prev + 1 : prev));
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  if (!appointment) return (
    <div className="max-w-4xl mx-auto py-20 text-center">
      <h2 className="text-2xl font-bold text-slate-900">No active appointment found to track.</h2>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-100 border border-slate-100">
        <div className="bg-blue-600 p-12 text-center text-white relative">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <svg className="w-32 h-32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
          </div>
          <p className="text-blue-100 font-bold uppercase tracking-widest text-sm mb-4">Live Token Tracking</p>
          <h2 className="text-6xl font-bold mb-4">{appointment.token}</h2>
          <p className="text-xl opacity-90">Estimated Wait: <span className="font-bold">{Math.max(0, (42 - currentServing) * 10)} Minutes</span></p>
        </div>
        
        <div className="p-8 md:p-12 space-y-12">
          <div className="flex justify-between items-center px-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">C-0{currentServing}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Now Serving</p>
            </div>
            <div className="w-16 h-px bg-slate-200"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{appointment.token}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Turn</p>
            </div>
          </div>

          <div className="relative">
            <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-1000" 
                style={{ width: `${(currentServing / 42) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>Queue Started</span>
              <span>Your Turn</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <h4 className="font-bold mb-4">Instructions</h4>
              <ul className="text-sm text-slate-600 space-y-3">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">1.</span>
                  Please arrive at the reception at least 5 mins before your turn.
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">2.</span>
                  Keep your ID and digital token ready for verification.
                </li>
              </ul>
            </div>
            <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-4">Location</h4>
              <p className="text-sm text-blue-700 leading-relaxed">
                Clinic Wing B, Floor 4, Room 402<br />
                Med3D Medical Center, Downtown.
              </p>
              <button className="mt-4 text-sm font-bold text-blue-600 hover:underline">Get Directions →</button>
            </div>
          </div>
          
          <div className="flex justify-center pt-8">
            <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-200 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.457 5.457l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Reception
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueTracker;
