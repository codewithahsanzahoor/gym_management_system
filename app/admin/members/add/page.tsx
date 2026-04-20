import DashboardLayout from "@/components/shared/DashboardLayout";

export default function AdminAddMember() {
  return (
    <DashboardLayout role="admin">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          New <span className="text-primary">Enrollment</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Register a new member into the EliteFit ecosystem.
        </p>
      </section>

      <div className="max-w-4xl bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden">
        <div className="p-8 border-b border-outline-variant/10">
          <h4 className="text-xl font-bold display-font">Member Information</h4>
        </div>
        
        <form className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Full Name</label>
              <input type="text" placeholder="Johnathan Doe" className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Email Address</label>
              <input type="email" placeholder="j.doe@example.com" className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Membership Plan</label>
              <select className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none appearance-none">
                <option>Elite Pro (Popular)</option>
                <option>Standard</option>
                <option>Kinetic Elite</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Phone Number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Personal Bio / Notes</label>
            <textarea placeholder="Any medical history or specific fitness goals..." rows={4} className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none resize-none"></textarea>
          </div>

          <div className="flex gap-4 pt-4">
            <button type="submit" className="flex-1 py-4 bg-primary text-on-primary rounded-xl text-xs font-bold uppercase tracking-widest kinetic-glow-primary">
              Complete Registration
            </button>
            <a href="/admin/members" className="px-8 py-4 bg-surface-container-highest hover:bg-surface-bright transition-colors rounded-xl text-xs font-bold uppercase tracking-widest">
              Cancel
            </a>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
