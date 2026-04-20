import DashboardLayout from "@/components/shared/DashboardLayout";

export default function AdminProfile() {
  return (
    <DashboardLayout role="admin">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Admin <span className="text-primary">Profile</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Manage your system administrative credentials and preferences.
        </p>
      </section>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5 text-center">
            <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-surface-container-high">
              <span className="material-symbols-outlined text-5xl text-primary">admin_panel_settings</span>
            </div>
            <h3 className="text-2xl font-bold display-font">Alex Rivera</h3>
            <p className="text-[10px] text-primary uppercase font-black tracking-widest mb-6">Head Administrator</p>
            <button className="w-full py-3 bg-surface-container-high hover:bg-surface-bright transition-colors rounded-xl text-[10px] font-bold uppercase tracking-widest">
              Change Avatar
            </button>
          </div>
          
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Security Status</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">2FA</span>
                <span className="text-secondary font-bold">Enabled</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Last Login</span>
                <span className="text-on-surface">2 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden">
          <div className="p-8 border-b border-outline-variant/10">
            <h4 className="text-xl font-bold display-font">Account Settings</h4>
          </div>
          <form className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Username</label>
                <input type="text" defaultValue="arivera_admin" className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Email Address</label>
                <input type="email" defaultValue="alex.rivera@elitefit.com" className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">New Password</label>
              <input type="password" placeholder="••••••••••••" className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" />
            </div>

            <button type="submit" className="w-full py-4 bg-primary text-on-primary rounded-xl text-xs font-bold uppercase tracking-widest kinetic-glow-primary">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
