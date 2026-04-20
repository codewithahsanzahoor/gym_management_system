interface StatCardProps {
  label: string;
  value: string | number;
  icon: string;
  trend?: string;
  trendType?: "up" | "down" | "neutral";
  accentColor?: string; // Tailwind class like 'bg-primary'
}

export default function StatCard({
  label,
  value,
  icon,
  trend,
  trendType,
  accentColor = "bg-primary",
}: StatCardProps) {
  const isUp = trendType === "up";
  const isDown = trendType === "down";

  return (
    <div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group border border-outline-variant/5">
      <div
        className={`absolute top-0 left-0 w-1 h-full ${accentColor}/40`}
      ></div>
      <div className="flex justify-between items-start mb-4">
        <span
          className={`material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg`}
        >
          {icon}
        </span>
        {trend && (
          <span
            className={`text-xs font-bold flex items-center gap-1 ${isUp ? "text-secondary" : isDown ? "text-error" : "text-slate-500"}`}
          >
            {trendType && (
              <span className="material-symbols-outlined text-xs">
                {isUp
                  ? "trending_up"
                  : isDown
                    ? "trending_down"
                    : "horizontal_rule"}
              </span>
            )}
            {trend}
          </span>
        )}
      </div>
      <p className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold mb-1">
        {label}
      </p>
      <h3 className="text-3xl font-bold display-font tracking-tighter">
        {value}
      </h3>
    </div>
  );
}
