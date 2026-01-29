
import React from 'react';
import { AppView, Doctor } from '../types';

interface NavbarProps {
  currentView: AppView;
  onNavigate: (view: AppView, doc?: Doctor) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate(AppView.LANDING)}
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">
              M
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Med<span className="text-blue-600">3D</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate(AppView.LANDING)}
              className={`text-sm font-medium transition-colors ${currentView === AppView.LANDING ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate(AppView.DOCTOR_LIST)}
              className={`text-sm font-medium transition-colors ${currentView === AppView.DOCTOR_LIST ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'}`}
            >
              Doctors
            </button>
            <button 
              onClick={() => onNavigate(AppView.PATIENT_DASHBOARD)}
              className={`text-sm font-medium transition-colors ${currentView === AppView.PATIENT_DASHBOARD ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => onNavigate(AppView.ADMIN_PANEL)}
              className={`text-sm font-medium transition-colors ${currentView === AppView.ADMIN_PANEL ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'}`}
            >
              Admin
            </button>
            <button 
              onClick={() => onNavigate(AppView.DOCTOR_DASHBOARD)}
              className={`text-sm font-medium transition-colors ${currentView === AppView.DOCTOR_DASHBOARD ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'}`}
            >
              For Doctors
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate(AppView.DOCTOR_LIST)}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              Book Now
            </button>
            <button className="md:hidden text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
