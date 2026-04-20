import DashboardLayout from "@/components/shared/DashboardLayout";
import { memberData } from "@/data/mockData";

export default function MemberAttendance() {
  const { attendanceHistory } = memberData;

  return (
    <DashboardLayout role="member">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Attendance <span className="text-primary">History</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Track your consistency and commitment to the grind.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/5">
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em] mb-1">Weekly Streak</p>
          <p className="text-4xl font-bold display-font tracking-tighter">14 <span className="text-sm text-on-surface-variant font-medium uppercase tracking-widest">Days</span></p>
        </div>
        <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/5">
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em] mb-1">Monthly Ratio</p>
          <p className="text-4xl font-bold display-font tracking-tighter">92%</p>
        </div>
        <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/5">
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em] mb-1">Total Cal. Burned</p>
          <p className="text-4xl font-bold display-font tracking-tighter">12.4k</p>
        </div>
      </div>

      <div className="bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden">
        <div className="p-6 border-b border-outline-variant/10 bg-surface-container-high/20 flex justify-between items-center">
          <h4 className="text-xl font-bold display-font">Session History</h4>
          <button className="text-[10px] font-bold uppercase tracking-widest text-primary">Download Report</button>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-high/50 text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Session</th>
              <th className="px-6 py-4">Time / Duration</th>
              <th className="px-6 py-4">Calories</th>
              <th className="px-6 py-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {attendanceHistory.map((log, i) => (
              <tr key={i} className="hover:bg-surface-container-high transition-colors">
                <td className="px-6 py-4">
                  <p className="text-sm font-bold">{log.date}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium">{log.session}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm">{log.time}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">{log.duration}</p>
                </td>
                <td className="px-6 py-4 text-sm font-mono">{log.calories} kcal</td>
                <td className="px-6 py-4 text-right">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter ${
                    log.status === 'Attended' ? 'bg-secondary/10 text-secondary' : 'bg-error/10 text-error'
                  }`}>
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
