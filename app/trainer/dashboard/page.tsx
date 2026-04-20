import DashboardLayout from "@/components/shared/DashboardLayout";
import StatCard from "@/components/shared/StatCard";
import { trainerData } from "@/data/mockData";

export default function TrainerDashboard() {
  const { stats, assignedMembers } = trainerData;

  return (
    <DashboardLayout role="trainer">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Coaching <span className="text-primary">Console</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Welcome back, Coach Sarah. Your athlete roster is performing at <span className="text-secondary font-medium">87% target capacity</span>.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard
          label="Active Roster"
          value={stats.activeRosters}
          icon="group"
          trend={stats.rosterTrend}
          trendType="up"
          accentColor="bg-primary"
        />
        <StatCard
          label="Today's Presence"
          value={`${stats.todayPresence.current}/${stats.todayPresence.target}`}
          icon="calendar_today"
          trend={`${stats.todayPresence.percentage}%`}
          trendType="neutral"
          accentColor="bg-secondary"
        />
        <StatCard
          label="Avg. Roster BMI"
          value={stats.avgBMI}
          icon="monitoring"
          trend="Optimal"
          trendType="up"
          accentColor="bg-tertiary-container"
        />
        <StatCard
          label="Program Completion"
          value={`${stats.avgCompletion}%`}
          icon="task_alt"
          trend="+4.2%"
          trendType="up"
          accentColor="bg-primary"
        />
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden">
          <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
            <h4 className="text-xl font-bold display-font">Priority Athletes</h4>
            <a href="/trainer/members" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors">View Full Roster</a>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high/50 text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
                <th className="px-6 py-4">Member</th>
                <th className="px-6 py-4">Goal</th>
                <th className="px-6 py-4">Progress</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {assignedMembers.slice(0, 5).map((member) => (
                <tr key={member.id} className="hover:bg-surface-container-high transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-[10px] text-on-surface-variant uppercase font-mono">{member.id}</p>
                  </td>
                  <td className="px-6 py-4 text-xs">{member.goal}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${member.progress}%` }}></div>
                      </div>
                      <span className="text-[10px] font-bold font-mono">{member.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[10px] font-bold uppercase tracking-widest bg-surface-container-highest px-3 py-1.5 rounded hover:bg-surface-bright transition-colors">Adjust Plan</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5">
          <h4 className="text-xl font-bold display-font mb-6">Upcoming Sessions</h4>
          <div className="space-y-6">
            {[
              { time: "02:00 PM", member: "Marcus Thorne", type: "Powerlifting", focus: "Squat Volume" },
              { time: "03:30 PM", member: "Elena Vance", type: "Hybrid Training", focus: "Metabolic conditioning" },
              { time: "05:00 PM", member: "Sarah Chen", type: "Endurance", focus: "Zone 2 Baseline" }
            ].map((session, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="text-right min-w-[60px]">
                  <p className="text-sm font-bold display-font">{session.time.split(' ')[0]}</p>
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase">{session.time.split(' ')[1]}</p>
                </div>
                <div className="w-1 bg-primary/20 rounded-full group-hover:bg-primary transition-colors"></div>
                <div>
                  <p className="text-sm font-bold text-on-surface">{session.member}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">{session.type} • {session.focus}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-10 w-full py-3 bg-surface-container-high hover:bg-surface-bright transition-colors rounded-xl text-[10px] font-bold uppercase tracking-widest">
            View Schedule
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
