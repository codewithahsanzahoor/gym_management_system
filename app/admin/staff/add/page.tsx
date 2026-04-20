import DashboardLayout from "@/components/shared/DashboardLayout";

export default function AdminAddStaff() {
  return (
    <DashboardLayout role="admin">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Onboard <span className="text-primary">Trainer</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Add a new professional coach to the EliteFit team.
        </p>
      </section>

      <div className="max-w-4xl bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden">
        <div className="p-8 border-b border-outline-variant/10">
          <h4 className="text-xl font-bold display-font">Trainer Profile</h4>
        </div>
        
        <form className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Trainer Name</label>
              <input type="text" placeholder="Sarah Jenkins" className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Specialization</label>
              <input type="text" placeholder="HIIT / Powerlifting" className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Experience Level</label>
              <select className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none appearance-none">
                <option>Junior (1-3 Years)</option>
                <option>Senior (4-8 Years)</option>
                <option>Master (8+ Years)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Contract Type</label>
              <select className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none appearance-none">
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Contractor</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Professional Background</label>
            <textarea placeholder="Certifications, previous experience, and coaching philosophy..." rows={4} className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none resize-none"></textarea>
          </div>

          <div className="flex gap-4 pt-4">
            <button type="submit" className="flex-1 py-4 bg-primary text-on-primary rounded-xl text-xs font-bold uppercase tracking-widest kinetic-glow-primary">
              Register Trainer
            </button>
            <a href="/admin/staff" className="px-8 py-4 bg-surface-container-highest hover:bg-surface-bright transition-colors rounded-xl text-xs font-bold uppercase tracking-widest">
              Cancel
            </a>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
