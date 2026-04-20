import DashboardLayout from "@/components/shared/DashboardLayout";
import { trainerData } from "@/data/mockData";

export default function TrainerMembers() {
  const { assignedMembers } = trainerData;

  return (
    <DashboardLayout role="trainer">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Athlete <span className="text-primary">Roster</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Comprehensive view of all members under your professional guidance.
        </p>
      </section>

      <div className="bg-surface-container-low rounded-xl border border-outline-variant/5 overflow-hidden">
        <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
          <h4 className="text-xl font-bold display-font">Assigned Members</h4>
          <div className="flex gap-4">
            <input type="text" placeholder="Search athletes..." className="bg-surface-container-high border-none rounded-lg px-4 py-2 text-xs outline-none focus:ring-1 focus:ring-primary/50" />
            <button className="bg-surface-container-highest px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              Filter
            </button>
          </div>
        </div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-high/50 text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
              <th className="px-6 py-4">Member</th>
              <th className="px-6 py-4">Specialization</th>
              <th className="px-6 py-4">Goal</th>
              <th className="px-6 py-4">Sessions</th>
              <th className="px-6 py-4">Progress</th>
              <th className="px-6 py-4">Tier</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {assignedMembers.map((member) => (
              <tr key={member.id} className="hover:bg-surface-container-high transition-colors group">
                <td className="px-6 py-4">
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-mono">{member.id}</p>
                </td>
                <td className="px-6 py-4 text-xs font-medium">{member.specialization}</td>
                <td className="px-6 py-4 text-xs text-on-surface-variant">{member.goal}</td>
                <td className="px-6 py-4 text-xs font-mono">{member.sessions}</td>
                <td className="px-6 py-4 min-w-[120px]">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-secondary" style={{ width: `${member.progress}%` }}></div>
                    </div>
                    <span className="text-[10px] font-bold">{member.progress}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-[10px] font-bold uppercase tracking-tighter">
                    {member.tier}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <a href={`/trainer/progress?member=${member.id}`} className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">monitoring</a>
                  <a href={`/trainer/workout/edit?member=${member.id}`} className="material-symbols-outlined text-on-surface-variant hover:text-secondary transition-colors ml-4">edit_note</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
