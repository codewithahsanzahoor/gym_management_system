import DashboardLayout from "@/components/shared/DashboardLayout";

export default function AdminSettings() {
  return (
    <DashboardLayout role="admin">
      <section className="mb-10">
        <div className="flex items-center gap-4 mb-2">
          <h2 className="text-4xl font-bold display-font tracking-tight">System <span className="text-primary">Configuration</span></h2>
          <span className="bg-secondary/10 text-secondary px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-secondary/20">System Status: Optimized</span>
        </div>
        <p className="text-on-surface-variant text-sm">Managing the kinetic backbone of EliteFit.</p>
      </section>

      <div className="grid grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="col-span-12 lg:col-span-3 space-y-2">
          {["Facility", "Billing", "Integrations", "Security", "Member Portal", "API Keys"].map((tab, i) => (
            <button key={tab} className={`w-full text-left px-6 py-4 rounded-xl text-sm font-medium transition-all ${i === 0 ? 'bg-primary/10 text-primary border border-primary/20' : 'hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="col-span-12 lg:col-span-9 space-y-8">
          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/5">
            <h4 className="text-xl font-bold display-font mb-8">Facility Settings</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Timezone</label>
                <div className="bg-surface-container-high p-4 rounded-xl text-sm font-medium cursor-pointer flex justify-between items-center group">
                  <span>Eastern Standard Time (GMT-5)</span>
                  <span className="material-symbols-outlined text-sm group-hover:text-primary transition-colors">expand_more</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Facility Capacity</label>
                <div className="bg-surface-container-high p-4 rounded-xl text-sm font-medium flex justify-between items-center">
                  <span>220 Maximum Members</span>
                  <button className="text-primary text-[10px] font-bold uppercase tracking-widest">Adjust</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/5">
            <h4 className="text-xl font-bold display-font mb-8">Third-Party Integrations</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Stripe", status: "Connected", icon: "payments" },
                { name: "Postmark", status: "Active", icon: "mail" },
                { name: "IoT Access", status: "Connected", icon: "sensors" }
              ].map(integration => (
                <div key={integration.name} className="bg-surface-container-high p-6 rounded-2xl border border-outline-variant/10 relative group">
                  <div className="flex justify-between items-start mb-6">
                    <span className="material-symbols-outlined text-primary bg-primary/20 p-2 rounded-lg">{integration.icon}</span>
                    <div className="w-10 h-5 bg-primary/20 rounded-full relative cursor-pointer">
                      <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-primary rounded-full shadow-[0_0_8px_rgba(173,198,255,0.6)]"></div>
                    </div>
                  </div>
                  <h5 className="font-bold mb-1">{integration.name}</h5>
                  <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">{integration.status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/5 border-dashed">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="text-xl font-bold display-font">API Architecture</h4>
                <p className="text-xs text-on-surface-variant">High-performance endpoint configurations</p>
              </div>
              <button className="bg-primary text-on-primary px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest kinetic-glow-primary">Generate New Key</button>
            </div>
            <div className="bg-surface-container-high p-4 rounded-xl font-mono text-xs flex justify-between items-center text-on-surface-variant">
              <span>ef_live_8821_kinetic_monolith_primary_key_mask</span>
              <span className="material-symbols-outlined text-sm hover:text-primary cursor-pointer transition-colors">content_copy</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
