import DashboardLayout from "@/components/shared/DashboardLayout";

export default function AdminAddPlan() {
  return (
    <DashboardLayout role="admin">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Create <span className="text-primary">Plan</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Design a new membership tier and benefit package.
        </p>
      </section>

      <div className="max-w-4xl bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden">
        <div className="p-8 border-b border-outline-variant/10">
          <h4 className="text-xl font-bold display-font">Plan Details</h4>
        </div>
        
        <form className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Plan Name</label>
              <input type="text" placeholder="Kinetic Ultra" className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Monthly Price ($)</label>
              <input type="number" placeholder="199" className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Features & Benefits</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['24/7 Access', 'Group Classes', 'Personal Training', 'Recovery Lab', 'Guest Passes', 'Nutrition Plans'].map(feature => (
                <label key={feature} className="flex items-center gap-3 p-4 bg-surface-container-high rounded-xl cursor-pointer group hover:bg-surface-bright transition-colors">
                  <input type="checkbox" className="w-5 h-5 rounded border-none bg-surface-container-highest text-primary focus:ring-offset-0 focus:ring-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button type="submit" className="flex-1 py-4 bg-primary text-on-primary rounded-xl text-xs font-bold uppercase tracking-widest kinetic-glow-primary">
              Launch Membership Plan
            </button>
            <a href="/admin/plans" className="px-8 py-4 bg-surface-container-highest hover:bg-surface-bright transition-colors rounded-xl text-xs font-bold uppercase tracking-widest">
              Cancel
            </a>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
