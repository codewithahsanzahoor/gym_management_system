import DashboardLayout from "@/components/shared/DashboardLayout";

export default function TrainerProfile() {
  return (
    <DashboardLayout role="trainer">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Coach <span className="text-primary">Profile</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Management of professional credentials and availability.
        </p>
      </section>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5 text-center">
            <div className="w-32 h-32 bg-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-surface-container-high relative overflow-hidden group">
              <span className="material-symbols-outlined text-5xl text-secondary">person</span>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                <span className="material-symbols-outlined text-white">photo_camera</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold display-font">Sarah Jenkins</h3>
            <p className="text-[10px] text-secondary uppercase font-black tracking-widest mb-2">Master Trainer</p>
            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-6">HIIT / Powerlifting Specialist</p>
          </div>
          
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5">
            <h4 className="text-[10px] font-black uppercase tracking-widest mb-6 border-b border-outline-variant/10 pb-2">Professional Stats</h4>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-xs text-on-surface-variant font-medium">Experience</span>
                <span className="text-sm font-bold">8 Years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-on-surface-variant font-medium">Avg. Success Rate</span>
                <span className="text-sm font-bold text-secondary">94.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-on-surface-variant font-medium">Retention</span>
                <span className="text-sm font-bold">18 Months</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden">
          <div className="p-8 border-b border-outline-variant/10">
            <h4 className="text-xl font-bold display-font">Professional Credentials</h4>
          </div>
          <form className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Display Name</label>
                <input type="text" defaultValue="Sarah Jenkins" className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Email</label>
                <input type="email" defaultValue="s.jenkins@elitefit.com" className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Coaching Bio</label>
              <textarea defaultValue="Focused on high-performance metabolic conditioning and functional hypertrophy. NASM-CPT, PES, and CSCS certified." rows={4} className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none resize-none"></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-primary text-on-primary rounded-xl text-xs font-bold uppercase tracking-widest kinetic-glow-primary">
              Update Professional Profile
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
