import DashboardLayout from "@/components/shared/DashboardLayout";

export default function TrainerEditWorkout() {
  return (
    <DashboardLayout role="trainer">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Protocol <span className="text-primary">Designer</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Precision engineering for athlete workout plans.
        </p>
      </section>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden">
            <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
              <h4 className="text-xl font-bold display-font">Exercise Selection</h4>
              <button className="text-[10px] font-bold uppercase tracking-widest text-primary">+ Add Movement</button>
            </div>
            
            <div className="p-6 space-y-4">
              {[
                { name: "Barbell Back Squat", sets: 4, reps: "6-8", rpe: 8, rest: "180s" },
                { name: "Romanian Deadlift", sets: 3, reps: "10-12", rpe: 7, rest: "120s" },
                { name: "Bulgarian Split Squat", sets: 3, reps: "12/leg", rpe: 9, rest: "90s" }
              ].map((ex, i) => (
                <div key={i} className="flex flex-wrap items-center gap-4 p-4 bg-surface-container-high rounded-xl border border-outline-variant/5">
                  <div className="flex-1 min-w-[200px]">
                    <p className="text-sm font-bold">{ex.name}</p>
                    <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Primary Movement</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">Sets</p>
                      <input type="text" defaultValue={ex.sets} className="w-12 bg-surface-container-highest text-center rounded py-1 text-xs outline-none" />
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">Reps</p>
                      <input type="text" defaultValue={ex.reps} className="w-16 bg-surface-container-highest text-center rounded py-1 text-xs outline-none" />
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">RPE</p>
                      <input type="text" defaultValue={ex.rpe} className="w-12 bg-surface-container-highest text-center rounded py-1 text-xs outline-none" />
                    </div>
                  </div>
                  <button className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors">delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5">
            <h4 className="text-xl font-bold display-font mb-6">Plan Parameters</h4>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-1">Protocol Name</label>
                <input type="text" defaultValue="Hypertrophy Phase 1" className="w-full bg-surface-container-high border-none rounded-xl px-5 py-3 text-sm focus:ring-1 focus:ring-primary/50 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-1">Focus Area</label>
                <select className="w-full bg-surface-container-high border-none rounded-xl px-5 py-3 text-sm outline-none appearance-none">
                  <option>Strength & Power</option>
                  <option>Hypertrophy</option>
                  <option>Metabolic Conditioning</option>
                </select>
              </div>
            </div>
            <button className="mt-10 w-full py-4 bg-primary text-on-primary rounded-xl text-[10px] font-black uppercase tracking-[0.2em] kinetic-glow-primary">
              Deploy Protocol
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
