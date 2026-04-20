import DashboardLayout from "@/components/shared/DashboardLayout";
import { memberData } from "@/data/mockData";

export default function MemberDiet() {
  const { currentDietPlan } = memberData;

  return (
    <DashboardLayout role="member">
      <section className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
            Nutritional <span className="text-primary">Strategy</span>
          </h2>
          <p className="text-on-surface-variant text-sm">
            Fueling for <span className="text-on-surface font-medium">Hypertrophy & Fat Loss</span>
          </p>
        </div>
        <button className="bg-primary text-on-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest kinetic-glow-primary flex items-center gap-2">
          <span className="material-symbols-outlined">add_shopping_cart</span>
          Log Meal
        </button>
      </section>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden">
            <div className="p-6 border-b border-outline-variant/10 bg-surface-container-high/20 flex justify-between items-center">
              <h4 className="text-xl font-bold display-font">Today&apos;s Meal Schedule</h4>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">3 Meals Remaining</span>
            </div>
            <div className="divide-y divide-outline-variant/5">
              {currentDietPlan.meals.map((meal, i) => (
                <div key={i} className="p-6 flex items-center justify-between group hover:bg-surface-container-high transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center border border-outline-variant/10 text-primary">
                      <span className="material-symbols-outlined text-2xl">{meal.type === 'Breakfast' ? 'coffee' : meal.type === 'Lunch' ? 'lunch_dining' : 'icecream'}</span>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold">{meal.name}</h5>
                      <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">{meal.type} • {meal.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right hidden md:block">
                      <p className="text-xs font-bold">{meal.calories} kcal</p>
                      <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">{meal.protein}P / {meal.carbs}C</p>
                    </div>
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                      meal.status === 'Completed' ? 'bg-secondary/10 text-secondary' : 'bg-surface-container-highest text-on-surface-variant'
                    }`}>
                      {meal.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5">
            <h4 className="text-xl font-bold display-font mb-8">Daily Macro Split</h4>
            <div className="space-y-8">
              {[
                { label: 'Calories', current: currentDietPlan.dailyCalories.current, goal: currentDietPlan.dailyCalories.goal, color: 'bg-primary' },
                { label: 'Protein', current: currentDietPlan.macros.protein, goal: currentDietPlan.macros.proteinGoal, color: 'bg-secondary' },
                { label: 'Carbohydrates', current: currentDietPlan.macros.carbs, goal: currentDietPlan.macros.carbsGoal, color: 'bg-tertiary' },
                { label: 'Fats', current: currentDietPlan.macros.fats, goal: currentDietPlan.macros.fatsGoal, color: 'bg-primary' }
              ].map(macro => (
                <div key={macro.label}>
                  <div className="flex justify-between items-end mb-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{macro.label}</p>
                    <p className="text-sm font-bold">{macro.current} / {macro.goal}</p>
                  </div>
                  <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                    <div className={`h-full ${macro.color} transition-all duration-1000`} style={{ width: `${(macro.current/macro.goal)*100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Supplement Stack</h4>
            <div className="space-y-4">
              {['Creatine Monohydrate (5g)', 'Omega-3 Fish Oil', 'Vitamin D3 (2000 IU)', 'Whey Isolate (Post-Workout)'].map(sup => (
                <div key={sup} className="flex items-center gap-3 p-3 bg-surface-container-high/50 rounded-xl">
                  <span className="material-symbols-outlined text-sm text-secondary">pill</span>
                  <span className="text-xs font-medium">{sup}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
