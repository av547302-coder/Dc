
import React, { useState } from 'react';
import { Doctor, BookingState } from '../types';

interface BookingFlowProps {
  doctor: Doctor;
  onComplete: (details: BookingState) => void;
  onCancel: () => void;
}

const BookingFlow: React.FC<BookingFlowProps> = ({ doctor, onComplete, onCancel }) => {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<BookingState>({
    doctorId: doctor.id,
    type: null,
    date: null,
    time: null,
    patientDetails: { name: '', phone: '', age: '', reason: '' }
  });

  const slots = ['09:00 AM', '10:30 AM', '11:15 AM', '02:00 PM', '03:45 PM', '05:00 PM'];

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-slate-900">Book Appointment</h2>
          <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">Step {step} of 5</span>
        </div>
        <div className="flex gap-2 h-2">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className={`flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
        {step === 1 && (
          <div className="p-8 md:p-12 space-y-8 animate-in slide-in-from-right-8 duration-500">
            <h3 className="text-2xl font-bold text-center">Select Consultation Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: 'In-clinic', icon: '🏢', title: 'In-clinic Visit', sub: 'Traditional face-to-face consultation at the clinic.' },
                { id: 'Video', icon: '📹', title: 'Video Call', sub: 'Remote consultation from the comfort of your home.' }
              ].map(t => (
                <div 
                  key={t.id}
                  onClick={() => { setBooking({...booking, type: t.id as any}); nextStep(); }}
                  className={`group p-8 rounded-3xl border-2 transition-all cursor-pointer ${
                    booking.type === t.id ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 hover:border-blue-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-5xl mb-6">{t.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{t.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{t.sub}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="p-8 md:p-12 space-y-8 animate-in slide-in-from-right-8 duration-500 text-center">
            <h3 className="text-2xl font-bold">Select Appointment Date</h3>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
              {Array.from({length: 14}).map((_, i) => {
                const date = new Date();
                date.setDate(date.getDate() + i);
                const isSelected = booking.date === date.toISOString().split('T')[0];
                return (
                  <div 
                    key={i}
                    onClick={() => { setBooking({...booking, date: date.toISOString().split('T')[0]}); nextStep(); }}
                    className={`p-4 rounded-2xl cursor-pointer transition-all ${
                      isSelected ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    <p className="text-[10px] uppercase font-bold opacity-60 mb-1">{date.toLocaleString('default', { weekday: 'short' })}</p>
                    <p className="text-lg font-bold">{date.getDate()}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-start">
              <button onClick={prevStep} className="font-bold text-slate-400 hover:text-slate-600">← Go Back</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="p-8 md:p-12 space-y-12 animate-in slide-in-from-right-8 duration-500 text-center perspective-lg">
            <h3 className="text-2xl font-bold">Choose a Time Slot</h3>
            
            {/* 3D-ish Time Slot Slider */}
            <div className="flex gap-6 overflow-x-auto py-12 px-8 preserve-3d">
              {slots.map((s, i) => (
                <div 
                  key={s}
                  onClick={() => { setBooking({...booking, time: s}); nextStep(); }}
                  className={`min-w-[140px] p-8 rounded-3xl preserve-3d transform transition-all cursor-pointer hover:translate-z-10 ${
                    booking.time === s 
                      ? 'bg-blue-600 text-white shadow-2xl shadow-blue-400 rotate-y-[-10deg]' 
                      : 'bg-white border-2 border-slate-100 shadow-xl rotate-y-[10deg] hover:rotate-y-0'
                  }`}
                >
                  <p className="text-lg font-bold">{s}</p>
                  <p className="text-[10px] uppercase mt-2 opacity-60">Available</p>
                </div>
              ))}
            </div>

            <div className="flex justify-start">
              <button onClick={prevStep} className="font-bold text-slate-400 hover:text-slate-600">← Go Back</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="p-8 md:p-12 space-y-8 animate-in slide-in-from-right-8 duration-500">
            <h3 className="text-2xl font-bold text-center">Patient Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="John Doe"
                  value={booking.patientDetails.name}
                  onChange={(e) => setBooking({...booking, patientDetails: {...booking.patientDetails, name: e.target.value}})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                <input 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="+1 234 567 890"
                  value={booking.patientDetails.phone}
                  onChange={(e) => setBooking({...booking, patientDetails: {...booking.patientDetails, phone: e.target.value}})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Age</label>
                <input 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="28"
                  value={booking.patientDetails.age}
                  onChange={(e) => setBooking({...booking, patientDetails: {...booking.patientDetails, age: e.target.value}})}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700">Reason for Visit</label>
                <textarea 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all h-32 resize-none"
                  placeholder="Briefly describe your symptoms or concern..."
                  value={booking.patientDetails.reason}
                  onChange={(e) => setBooking({...booking, patientDetails: {...booking.patientDetails, reason: e.target.value}})}
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between items-center pt-4">
              <button onClick={prevStep} className="font-bold text-slate-400 hover:text-slate-600">← Go Back</button>
              <button 
                onClick={nextStep}
                disabled={!booking.patientDetails.name || !booking.patientDetails.phone}
                className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-blue-200 disabled:opacity-50 disabled:shadow-none transition-all"
              >
                Review Summary
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="p-8 md:p-12 space-y-8 animate-in zoom-in-95 duration-500">
            <h3 className="text-3xl font-bold text-center">Confirmation</h3>
            <div className="bg-slate-50 rounded-[3rem] p-8 border border-slate-100">
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-200">
                <img src={doctor.image} className="w-20 h-20 rounded-2xl" alt="doc" />
                <div>
                  <h4 className="text-xl font-bold">{doctor.name}</h4>
                  <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Type</p>
                  <p className="font-bold text-slate-800">{booking.type}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Date</p>
                  <p className="font-bold text-slate-800">{booking.date}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Time</p>
                  <p className="font-bold text-slate-800">{booking.time}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Fee</p>
                  <p className="font-bold text-slate-800">${doctor.fee}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Patient</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{booking.patientDetails.name}</span>
                  <span className="text-slate-500">{booking.patientDetails.phone}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <button 
                onClick={() => onComplete(booking)}
                className="flex-1 bg-blue-600 text-white py-5 rounded-[2rem] font-bold text-xl shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all"
              >
                Confirm & Pay Now
              </button>
              <button 
                onClick={() => onComplete(booking)}
                className="flex-1 bg-white border-2 border-slate-200 text-slate-900 py-5 rounded-[2rem] font-bold text-xl hover:bg-slate-50 transition-all"
              >
                Confirm & Pay at Clinic
              </button>
            </div>
            <button onClick={prevStep} className="w-full text-slate-400 font-bold text-sm">Modify Details</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingFlow;
