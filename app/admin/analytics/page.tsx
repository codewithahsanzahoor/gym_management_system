import DashboardLayout from "@/components/shared/DashboardLayout";
import StatCard from "@/components/shared/StatCard";

export default function AdminAnalytics() {
  return (
    <DashboardLayout role="admin">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Facility <span className="text-primary">Analytics</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Annual Revenue Growth: <span className="text-secondary font-medium">+24.8% / $1.2M</span>
        </p>
      </section>

      <div className="grid grid-cols-12 gap-8 mb-10">
        {/* Retention vs Churn Chart */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low p-8 rounded-2xl border border-outline-variant/5">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h4 className="text-xl font-bold display-font">Member Retention vs Churn</h4>
              <p className="text-xs text-on-surface-variant">Monthly adaptive metrics</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Retention</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-error"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Churn</span>
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end gap-3 relative">
             <div className="absolute inset-0 flex flex-col justify-between opacity-5 pointer-events-none">
              {[...Array(5)].map((_, i) => <div key={i} className="border-t border-on-surface w-full"></div>)}
            </div>
            {[65, 78, 82, 90, 88, 92, 95, 94, 91, 89, 93, 96].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/20 hover:bg-primary transition-all rounded-t-sm relative group" style={{ height: `${h}%` }}>
                <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-bright px-2 py-1 rounded text-[10px] font-bold border border-outline-variant/20">{h}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Peak Hour Distribution */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-low p-8 rounded-2xl border border-outline-variant/5">
          <h4 className="text-xl font-bold display-font mb-6">Peak Hour Distribution</h4>
          <div className="space-y-6">
            {[
              { label: "06:00 AM - 09:00 AM", percentage: 85, color: "bg-primary" },
              { label: "12:00 PM - 02:00 PM", percentage: 45, color: "bg-surface-container-highest" },
              { label: "05:00 PM - 08:00 PM", percentage: 95, color: "bg-secondary" },
              { label: "09:00 PM - 11:00 PM", percentage: 30, color: "bg-surface-container-highest" },
            ].map(item => (
              <div key={item.label}>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                  <span>{item.label}</span>
                  <span>{item.percentage}%</span>
                </div>
                <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipment Utilization */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { label: "Cardio Zone", value: "82%", status: "High Load", color: "text-secondary" },
          { label: "Resistance Machines", value: "64%", status: "Balanced", color: "text-primary" },
          { label: "Free Weights", value: "94%", status: "Peak Load", color: "text-error" },
        ].map(zone => (
          <div key={zone.label} className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/5 relative group cursor-default">
            <div className="absolute top-0 left-0 w-1 h-full bg-outline-variant/10 group-hover:bg-primary transition-colors"></div>
            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">{zone.label}</p>
            <h3 className="text-4xl font-bold display-font tracking-tighter mb-2">{zone.value}</h3>
            <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${zone.color}`}>{zone.status}</p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
