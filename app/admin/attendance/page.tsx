import DashboardLayout from "@/components/shared/DashboardLayout";

export default function AdminAttendance() {
  const attendanceLogs = [
    { id: 1, member: 'Marcus Vane', time: '08:42 AM', checkIn: '08:42', checkOut: '10:15', status: 'Active' },
    { id: 2, member: 'Elena Rossi', time: '09:15 AM', checkIn: '09:15', checkOut: '---', status: 'In Gym' },
    { id: 3, member: 'David Chen', time: '09:30 AM', checkIn: '09:30', checkOut: '11:00', status: 'Completed' },
    { id: 4, member: 'Sasha Grey', time: '10:05 AM', checkIn: '10:05', checkOut: '---', status: 'In Gym' },
    { id: 5, member: 'Adrian Sterling', time: '10:12 AM', checkIn: '10:12', checkOut: '---', status: 'In Gym' },
  ];

  return (
    <DashboardLayout role="admin">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Attendance <span className="text-primary">Logs</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Daily traffic and facility utilization tracking.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em] mb-1">In Gym Now</p>
          <p className="text-4xl font-bold display-font tracking-tighter">42</p>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em] mb-1">Today&apos;s Total</p>
          <p className="text-4xl font-bold display-font tracking-tighter">142</p>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em] mb-1">Peak Hour</p>
          <p className="text-4xl font-bold display-font tracking-tighter">06:00 PM</p>
        </div>
      </div>

      <div className="bg-surface-container-low rounded-xl border border-outline-variant/5 overflow-hidden">
        <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
          <h4 className="text-xl font-bold display-font">Today&apos;s Records</h4>
          <button className="bg-surface-container-highest px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-surface-bright transition-colors">
            Export Logs
          </button>
        </div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-high/50 text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
              <th className="px-6 py-4">Member</th>
              <th className="px-6 py-4">Check-In</th>
              <th className="px-6 py-4">Check-Out</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {attendanceLogs.map((log) => (
              <tr key={log.id} className="hover:bg-surface-container-high transition-colors group">
                <td className="px-6 py-4">
                  <p className="text-sm font-medium">{log.member}</p>
                </td>
                <td className="px-6 py-4 text-sm font-mono">{log.checkIn}</td>
                <td className="px-6 py-4 text-sm font-mono">{log.checkOut}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter ${
                    log.status === 'In Gym' ? 'bg-secondary/10 text-secondary' : 'bg-surface-container-highest text-on-surface-variant'
                  }`}>
                    {log.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">info</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
