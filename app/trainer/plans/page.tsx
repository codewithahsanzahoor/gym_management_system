import DashboardLayout from "@/components/shared/DashboardLayout";
import { trainerData } from "@/data/mockData";

export default function TrainerPlans() {
  const { workoutPlans } = trainerData;

  return (
    <DashboardLayout role="trainer">
      <section className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
            Program <span className="text-primary">Library</span>
          </h2>
          <p className="text-on-surface-variant text-sm">
            Curate and manage proprietary workout protocols.
          </p>
        </div>
        <button className="bg-primary text-on-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest kinetic-glow-primary flex items-center gap-2">
          <span className="material-symbols-outlined">add_task</span>
          New Protocol
        </button>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workoutPlans.map((plan) => (
          <div key={plan.id} className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 flex flex-col group hover:border-primary/20 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold display-font mb-1">{plan.name}</h3>
                <div className="flex gap-3">
                  <span className="text-[10px] text-primary uppercase font-black tracking-widest">{plan.level}</span>
                  <span className="text-[10px] text-on-surface-variant uppercase font-black tracking-widest">•</span>
                  <span className="text-[10px] text-on-surface-variant uppercase font-black tracking-widest">{plan.duration}</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">fitness_center</span>
            </div>

            <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-1">
              {plan.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-surface-container-high rounded-xl p-4">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Active Athletes</p>
                <p className="text-xl font-bold display-font">{plan.activeMembers || 0}</p>
              </div>
              <div className="bg-surface-container-high rounded-xl p-4">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Avg. Session</p>
                <p className="text-xl font-bold display-font">{plan.avgSession || '65m'}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <a href={`/trainer/workout/edit?plan=${plan.id}`} className="flex-1 py-3 bg-surface-container-highest hover:bg-surface-bright transition-colors rounded-xl text-[10px] font-bold uppercase tracking-widest text-center">
                Refine Protocol
              </a>
              <button className="w-12 h-12 flex items-center justify-center bg-surface-container-highest hover:bg-error/10 hover:text-error transition-all rounded-xl">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
