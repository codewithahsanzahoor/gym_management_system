import DashboardLayout from "@/components/shared/DashboardLayout";
import { trainerData } from "@/data/mockData";

export default function TrainerAttendance() {
  const { assignedMembers } = trainerData;

  return (
    <DashboardLayout role="trainer">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Mark <span className="text-primary">Attendance</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Verify athlete presence and session completion.
        </p>
      </section>

      <div className="bg-surface-container-low rounded-xl border border-outline-variant/5 overflow-hidden">
        <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-high/20">
          <div>
            <h4 className="text-xl font-bold display-font">Session Log</h4>
            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mt-1">Monday, Nov 25, 2024</p>
          </div>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest kinetic-glow-primary">
            Sync To Cloud
          </button>
        </div>
        
        <div className="divide-y divide-outline-variant/5">
          {assignedMembers.map((member) => (
            <div key={member.id} className="p-6 flex flex-wrap items-center justify-between gap-6 hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-4 min-w-[200px]">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center border border-outline-variant/10">
                  <span className="material-symbols-outlined text-on-surface-variant">person</span>
                </div>
                <div>
                  <p className="text-sm font-bold">{member.name}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">{member.specialization}</p>
                </div>
              </div>

              <div className="flex-1 flex gap-8">
                <div>
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Scheduled</p>
                  <p className="text-sm font-medium">04:00 PM</p>
                </div>
                <div>
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Status</p>
                  <span className="px-2 py-0.5 bg-surface-container-highest rounded text-[10px] font-bold uppercase">Awaiting</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-5 py-2.5 bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 transition-all rounded-lg text-[10px] font-black uppercase tracking-widest">
                  Present
                </button>
                <button className="px-5 py-2.5 bg-error/10 text-error border border-error/20 hover:bg-error/20 transition-all rounded-lg text-[10px] font-black uppercase tracking-widest">
                  Absent
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-surface-container-highest rounded-lg text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">more_vert</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
