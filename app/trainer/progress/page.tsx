import DashboardLayout from "@/components/shared/DashboardLayout";
import { trainerData } from "@/data/mockData";

export default function TrainerProgress() {
  const { assignedMembers } = trainerData;
  const selectedMember = assignedMembers[0]; // Mocking selection for preview

  return (
    <DashboardLayout role="trainer">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Performance <span className="text-primary">Analysis</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Granular metabolic and strength data tracking for {selectedMember.name}.
        </p>
      </section>

      <div className="grid grid-cols-12 gap-8">
        {/* Member Selector Sidebar */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/5">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-4">Select Athlete</h4>
            <div className="space-y-2">
              {assignedMembers.map(member => (
                <button key={member.id} className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all border ${
                  member.id === selectedMember.id ? 'bg-primary/5 border-primary/20' : 'bg-surface-container-high/50 border-transparent hover:bg-surface-container-high'
                }`}>
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-xs">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold">{member.name}</p>
                    <p className="text-[10px] text-on-surface-variant uppercase">{member.tier} Tier</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/5">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Weight Delta</p>
              <p className={`text-3xl font-bold display-font ${selectedMember.weightLoss < 0 ? 'text-secondary' : 'text-error'}`}>
                {selectedMember.weightLoss > 0 ? `+${selectedMember.weightLoss}` : selectedMember.weightLoss} kg
              </p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/5">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Consistency</p>
              <p className="text-3xl font-bold display-font text-primary">{selectedMember.progress}%</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/5">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Sessions</p>
              <p className="text-3xl font-bold display-font">{selectedMember.sessions}</p>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5">
            <div className="flex justify-between items-center mb-10">
              <h4 className="text-xl font-bold display-font">Strength Progression</h4>
              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> Bench Press
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant ml-4">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span> Squat
                </span>
              </div>
            </div>
            <div className="h-48 flex items-end gap-1 px-2 relative">
              <div className="absolute inset-0 flex flex-col justify-between opacity-5 pointer-events-none">
                {[...Array(4)].map((_, i) => <div key={i} className="border-t border-on-surface w-full"></div>)}
              </div>
              {[60, 65, 62, 70, 75, 82, 80, 88, 95, 92, 100, 105].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col gap-1 items-center group">
                  <div className="w-full bg-primary/20 rounded-t-sm group-hover:bg-primary transition-colors" style={{ height: `${h * 0.4}%` }}></div>
                  <div className="w-full bg-secondary/20 rounded-t-sm group-hover:bg-secondary transition-colors" style={{ height: `${h * 0.5}%` }}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              <span>Week 1</span>
              <span>Week 4</span>
              <span>Week 8</span>
              <span>Week 12</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
