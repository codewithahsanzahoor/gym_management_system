import DashboardLayout from "@/components/shared/DashboardLayout";
import { globalData } from "@/data/mockData";

export default function AdminPlans() {
  const { membershipPlans } = globalData;

  return (
    <DashboardLayout role="admin">
      <section className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
            Membership <span className="text-primary">Plans</span>
          </h2>
          <p className="text-on-surface-variant text-sm">
            Tiered access models and pricing strategies.
          </p>
        </div>
        <a href="/admin/plans/add" className="bg-primary text-on-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest kinetic-glow-primary flex items-center gap-2">
          <span className="material-symbols-outlined">add_card</span>
          Create New Plan
        </a>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {membershipPlans.map((plan) => (
          <div key={plan.id} className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 relative overflow-hidden flex flex-col">
            {plan.popular && (
              <div className="absolute top-4 right-[-40px] bg-secondary text-on-secondary px-12 py-1 rotate-45 text-[10px] font-black uppercase tracking-widest">
                Most Popular
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-2xl font-bold display-font mb-1">{plan.name}</h3>
              <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-[0.2em] mb-6">Subscription Tier</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold display-font tracking-tighter">${plan.price}</span>
                <span className="text-on-surface-variant text-sm font-medium">/{plan.period}</span>
              </div>
            </div>

            <div className="flex-1 space-y-4 mb-10">
              <p className="text-[10px] text-on-surface-variant uppercase font-black tracking-widest border-b border-outline-variant/10 pb-2">Includes</p>
              {plan.features.map((feature) => (
                <div key={feature} className="flex gap-3 items-center">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span className="text-sm font-medium text-on-surface">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-surface-container-high rounded-xl p-4 flex justify-between items-center mb-6">
              <div>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Active Users</p>
                <p className="text-xl font-bold display-font">{plan.subscribers}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Churn Rate</p>
                <p className="text-sm font-medium text-error">{plan.churnRate}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-3 bg-surface-container-highest hover:bg-surface-bright transition-colors rounded-xl text-[10px] font-bold uppercase tracking-widest">
                Edit Plan
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-error/10 hover:bg-error/20 text-error transition-colors rounded-xl">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
