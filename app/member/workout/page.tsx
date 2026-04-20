import DashboardLayout from "@/components/shared/DashboardLayout";
import { memberData } from "@/data/mockData";

export default function MemberWorkout() {
  const { currentWorkoutPlan } = memberData;

  return (
    <DashboardLayout role="member">
      <section className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
            Training <span className="text-primary">Protocol</span>
          </h2>
          <p className="text-on-surface-variant text-sm">
            Current Focus: <span className="text-on-surface font-medium">{currentWorkoutPlan.focus}</span>
          </p>
        </div>
        <div className="bg-surface-container-low px-6 py-3 rounded-xl border border-outline-variant/5 flex gap-8">
          <div className="text-center">
            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Comp.</p>
            <p className="text-sm font-bold text-secondary">{currentWorkoutPlan.completion}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Vol/Wk</p>
            <p className="text-sm font-bold">{currentWorkoutPlan.weeklyVolume}</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {currentWorkoutPlan.schedule.map((session, i) => (
            <div key={i} className="bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden group">
              <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-high/20">
                <div>
                  <h4 className="text-xl font-bold display-font">{session.name}</h4>
                  <p className="text-[10px] text-primary uppercase font-black tracking-widest mt-1">{session.day} • {session.duration}</p>
                </div>
                <button className="bg-surface-container-highest px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest group-hover:bg-primary group-hover:text-on-primary transition-all">View Details</button>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {session.exercises.map((ex, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5">
            <h4 className="text-xl font-bold display-font mb-6">Protocol Notes</h4>
            <div className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
              <p>• Focus on explosive concentric movements this week.</p>
              <p>• Maintain a minimum of 180s rest between compound sets.</p>
              <p>• Log all RPE values in the tracker after each set.</p>
            </div>
            <button className="mt-10 w-full py-4 bg-surface-container-high hover:bg-surface-bright transition-colors rounded-xl text-[10px] font-bold uppercase tracking-widest">
              Download PDF
            </button>
          </div>
          
          <div className="bg-secondary rounded-2xl p-8 border border-secondary/20 relative overflow-hidden group cursor-pointer">
            <div className="relative z-10 text-on-secondary">
              <p className="text-[10px] text-on-secondary/60 font-black uppercase tracking-[0.3em] mb-2">Trainer&apos;s Tip</p>
              <h4 className="text-xl font-bold display-font mb-4">&quot;Progressive overload is not just weight; focus on tempo today.&quot;</h4>
              <p className="text-xs text-on-secondary/80">- Sarah Jenkins</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
