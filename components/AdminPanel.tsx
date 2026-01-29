
import React from 'react';

const AdminPanel: React.FC = () => {
  const stats = [
    { label: 'Total Doctors', value: '48', change: '+2', color: 'bg-blue-50 text-blue-600' },
    { label: 'Today Appointments', value: '184', change: '+12%', color: 'bg-green-50 text-green-600' },
    { label: 'Revenue', value: '$12,450', change: '+8%', color: 'bg-purple-50 text-purple-600' },
    { label: 'Clinic Branches', value: '06', change: 'Stable', color: 'bg-amber-50 text-amber-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Systems Administration</h1>
        <p className="text-slate-500">Monitor and manage all clinic activities across branches.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map(s => (
          <div key={s.label} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${s.color}`}>{s.change}</span>
            </div>
            <p className="text-3xl font-bold text-slate-900 mb-1">{s.value}</p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[3rem] p-8 border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-bold">Activity Performance</h2>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-full">Weekly</button>
              <button className="px-4 py-1.5 bg-slate-100 text-slate-500 text-xs font-bold rounded-full">Monthly</button>
            </div>
          </div>
          
          <div className="h-64 flex items-end gap-4">
            {[40, 70, 55, 90, 65, 80, 50].map((h, i) => (
              <div key={i} className="flex-1 space-y-2 group">
                <div className="relative h-full flex flex-col justify-end">
                   <div 
                    style={{ height: `${h}%` }} 
                    className="w-full bg-blue-100 group-hover:bg-blue-600 rounded-t-xl transition-all duration-700"
                   ></div>
                </div>
                <p className="text-[10px] text-center font-bold text-slate-400 uppercase">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-8 text-white">
          <h2 className="text-xl font-bold mb-8">System Health</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-500">●</div>
              <div>
                <p className="font-bold">Real-time Booking</p>
                <p className="text-xs text-slate-500">Active & Syncing</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-500">●</div>
              <div>
                <p className="font-bold">WhatsApp Gateway</p>
                <p className="text-xs text-slate-500">Connected</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500">↻</div>
              <div>
                <p className="font-bold">Database Backup</p>
                <p className="text-xs text-slate-500">Last synced 2m ago</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-12 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl font-bold text-sm transition-all">Generate Full Audit</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
