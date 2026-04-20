import DashboardLayout from "@/components/shared/DashboardLayout";
import StatCard from "@/components/shared/StatCard";
import { memberData } from "@/data/mockData";

export default function MemberDashboard() {
  const { profile, stats } = memberData;

  return (
    <DashboardLayout role="member">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Athlete <span className="text-primary">Dashboard</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Welcome back, {profile.name.split(' ')[0]}. You&apos;ve reached <span className="text-secondary font-medium">{stats.goalProgress}% of your monthly target</span>.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard
          label="Current Weight"
          value={`${stats.weight} kg`}
          icon="scale"
          trend={`${stats.weightChange} kg`}
          trendType={stats.weightChange < 0 ? "up" : "down"}
          accentColor="bg-primary"
        />
        <StatCard
          label="Body Fat"
          value={`${stats.bodyFat}%`}
          icon="monitoring"
          trend="Stable"
          trendType="neutral"
          accentColor="bg-secondary"
        />
        <StatCard
          label="Total Workouts"
          value={stats.totalWorkouts}
          icon="fitness_center"
          trend="+12"
          trendType="up"
          accentColor="bg-tertiary-container"
        />
        <StatCard
          label="Goal Progress"
          value={`${stats.goalProgress}%`}
          icon="track_changes"
          trend="On Track"
          trendType="up"
          accentColor="bg-primary"
        />
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Biometric Grid */}
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5">
            <h4 className="text-xl font-bold display-font mb-8">Biometric Overview</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">BMI</p>
                <p className="text-2xl font-bold display-font">{stats.currentBMI}</p>
                <p className="text-[10px] text-secondary font-bold uppercase tracking-tighter">{stats.bmiStatus}</p>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Resting HR</p>
                <p className="text-2xl font-bold display-font">{stats.restingHR} <span className="text-sm">BPM</span></p>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">Optimal</p>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Hydration</p>
                <p className="text-2xl font-bold display-font">{stats.hydration}</p>
                <p className="text-[10px] text-secondary font-bold uppercase tracking-tighter">Good</p>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Vol. (Monthly)</p>
                <p className="text-2xl font-bold display-font">{stats.monthlyTrainingVolume} <span className="text-sm">T</span></p>
                <p className="text-[10px] text-primary font-bold uppercase tracking-tighter">+8.4%</p>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5">
            <h4 className="text-xl font-bold display-font mb-8">Workout Intensity (Last 7 Days)</h4>
            <div className="h-48 flex items-end gap-3 px-2">
              {[45, 80, 0, 65, 90, 75, 40].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                   <div className="w-full bg-surface-container-high rounded-t-lg relative overflow-hidden h-full">
                      <div className={`absolute bottom-0 left-0 w-full rounded-t-lg transition-all duration-500 ${h > 75 ? 'bg-primary' : 'bg-secondary'}`} style={{ height: `${h}%` }}></div>
                   </div>
                   <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                   </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5">
            <h4 className="text-xl font-bold display-font mb-6">Today&apos;s Macros</h4>
            <div className="space-y-6">
              {[
                { label: 'Protein', current: 145, goal: 200, color: 'bg-primary' },
                { label: 'Carbs', current: 180, goal: 300, color: 'bg-secondary' },
                { label: 'Fats', current: 62, goal: 80, color: 'bg-tertiary' }
              ].map(macro => (
                <div key={macro.label}>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                    <span>{macro.label}</span>
                    <span className="text-on-surface-variant">{macro.current}g / {macro.goal}g</span>
                  </div>
                  <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className={`h-full ${macro.color}`} style={{ width: `${(macro.current/macro.goal)*100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full py-3 bg-surface-container-high hover:bg-surface-bright transition-colors rounded-xl text-[10px] font-bold uppercase tracking-widest">
              Log Meal
            </button>
          </div>

          <div className="bg-primary rounded-2xl p-8 border border-primary/20 kinetic-glow-primary relative overflow-hidden group cursor-pointer">
            <div className="relative z-10">
              <p className="text-[10px] text-on-primary/60 font-black uppercase tracking-[0.3em] mb-2">Up Next</p>
              <h4 className="text-2xl font-bold display-font text-on-primary mb-1">Push Day (Heavy)</h4>
              <p className="text-sm text-on-primary/80 mb-6">Chest, Shoulders & Triceps • 75 min</p>
              <span className="bg-on-primary text-primary px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest group-hover:px-6 transition-all">Start Session</span>
            </div>
            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-on-primary/10 rotate-12 group-hover:rotate-0 transition-transform">exercise</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
