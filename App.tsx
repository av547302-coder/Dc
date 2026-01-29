
import React, { useState, useEffect } from 'react';
import { AppView, Doctor, Appointment, BookingState } from './types';
import { DOCTORS } from './constants';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import DoctorListing from './components/DoctorListing';
import DoctorProfile from './components/DoctorProfile';
import BookingFlow from './components/BookingFlow';
import PatientDashboard from './components/PatientDashboard';
import DoctorDashboard from './components/DoctorDashboard';
import AdminPanel from './components/AdminPanel';
import QueueTracker from './components/QueueTracker';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [bookingData, setBookingData] = useState<BookingState>({
    doctorId: null,
    type: null,
    date: null,
    time: null,
    patientDetails: { name: '', phone: '', age: '', reason: '' }
  });
  
  // Mock appointments
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 'a1',
      doctorId: 'd1',
      doctorName: 'Dr. Sarah Mitchell',
      patientName: 'Alex Johnson',
      date: '2024-05-20',
      time: '10:30 AM',
      type: 'In-clinic',
      status: 'Upcoming',
      token: 'C-042'
    }
  ]);

  const navigateTo = (view: AppView, doc?: Doctor) => {
    if (doc) setSelectedDoctor(doc);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookNow = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setBookingData(prev => ({ ...prev, doctorId: doctor.id }));
    setCurrentView(AppView.BOOKING_FLOW);
  };

  const completeBooking = (details: BookingState) => {
    const newAppointment: Appointment = {
      id: Math.random().toString(36).substr(2, 9),
      doctorId: details.doctorId || '',
      doctorName: DOCTORS.find(d => d.id === details.doctorId)?.name || 'Unknown',
      patientName: details.patientDetails.name,
      date: details.date || '',
      time: details.time || '',
      type: details.type || 'In-clinic',
      status: 'Upcoming',
      token: `T-${Math.floor(Math.random() * 999).toString().padStart(3, '0')}`
    };
    setAppointments([newAppointment, ...appointments]);
    setCurrentView(AppView.PATIENT_DASHBOARD);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={currentView} onNavigate={navigateTo} />
      
      <main className="flex-grow pt-20">
        {currentView === AppView.LANDING && (
          <LandingPage onSearch={() => navigateTo(AppView.DOCTOR_LIST)} onBookDoctor={handleBookNow} />
        )}
        
        {currentView === AppView.DOCTOR_LIST && (
          <DoctorListing onSelectDoctor={(d) => navigateTo(AppView.DOCTOR_PROFILE, d)} />
        )}
        
        {currentView === AppView.DOCTOR_PROFILE && selectedDoctor && (
          <DoctorProfile doctor={selectedDoctor} onBook={handleBookNow} />
        )}
        
        {currentView === AppView.BOOKING_FLOW && selectedDoctor && (
          <BookingFlow 
            doctor={selectedDoctor} 
            onComplete={completeBooking}
            onCancel={() => navigateTo(AppView.DOCTOR_PROFILE, selectedDoctor)}
          />
        )}
        
        {currentView === AppView.PATIENT_DASHBOARD && (
          <PatientDashboard appointments={appointments} />
        )}
        
        {currentView === AppView.DOCTOR_DASHBOARD && (
          <DoctorDashboard appointments={appointments.filter(a => a.doctorId === 'd1')} />
        )}
        
        {currentView === AppView.ADMIN_PANEL && (
          <AdminPanel />
        )}

        {currentView === AppView.QUEUE_TRACKER && (
          <QueueTracker appointment={appointments[0]} />
        )}
      </main>

      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-blue-400">Med</span>3D
            </h3>
            <p className="text-slate-400 text-sm">
              Revolutionizing healthcare with immersive 3D technology and patient-first booking experiences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><button onClick={() => navigateTo(AppView.LANDING)}>Home</button></li>
              <li><button onClick={() => navigateTo(AppView.DOCTOR_LIST)}>Find Doctors</button></li>
              <li><button onClick={() => navigateTo(AppView.QUEUE_TRACKER)}>Track Token</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Emergency</h4>
            <p className="text-rose-400 font-bold text-lg mb-2">1-800-MED-URGENT</p>
            <p className="text-slate-400 text-sm">Available 24/7 for critical emergencies.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">FB</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">TW</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">IG</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-xs">
          © 2024 Med3D Healthcare Systems. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
