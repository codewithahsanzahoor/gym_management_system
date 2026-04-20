import DashboardLayout from "@/components/shared/DashboardLayout";
import { adminData } from "@/data/mockData";

export default function AdminAssignTrainer() {
  const { members, trainers } = adminData;

  return (
    <DashboardLayout role="admin">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Assign <span className="text-primary">Coaches</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Connect members with the perfect training partners.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden">
          <div className="p-6 border-b border-outline-variant/10">
            <h4 className="text-xl font-bold display-font">1. Select Member</h4>
          </div>
          <div className="p-4 space-y-2 max-h-[500px] overflow-y-auto custom-scrollbar">
            {members.map(member => (
              <label key={member.id} className="flex items-center gap-4 p-4 bg-surface-container-high/50 rounded-xl cursor-pointer hover:bg-surface-container-high transition-colors border border-transparent has-[:checked]:border-primary/50 has-[:checked]:bg-primary/5">
                <input type="radio" name="member" className="w-5 h-5 text-primary bg-surface-container-highest border-none focus:ring-0" />
                <div>
                  <p className="text-sm font-bold">{member.name}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">{member.plan}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden">
          <div className="p-6 border-b border-outline-variant/10">
            <h4 className="text-xl font-bold display-font">2. Choose Trainer</h4>
          </div>
          <div className="p-4 space-y-2 max-h-[500px] overflow-y-auto custom-scrollbar">
            {trainers.map(trainer => (
              <label key={trainer.id} className="flex items-center gap-4 p-4 bg-surface-container-high/50 rounded-xl cursor-pointer hover:bg-surface-container-high transition-colors border border-transparent has-[:checked]:border-primary/50 has-[:checked]:bg-primary/5">
                <input type="radio" name="trainer" className="w-5 h-5 text-primary bg-surface-container-highest border-none focus:ring-0" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-bold">{trainer.name}</p>
                    <span className="text-[10px] text-secondary font-black uppercase tracking-tighter">{trainer.status}</span>
                  </div>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">{trainer.specialization}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="bg-primary text-on-primary px-10 py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] kinetic-glow-primary">
          Finalize Assignment
        </button>
      </div>
    </DashboardLayout>
  );
}
