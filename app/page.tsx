import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 text-center max-w-2xl">
        <div className="w-20 h-20 bg-primary-container rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl kinetic-glow-primary">
          <span className="material-symbols-outlined text-4xl text-on-primary-container">bolt</span>
        </div>
        
        <h1 className="text-6xl font-bold display-font tracking-tighter mb-4">
          Elite<span className="text-primary">Fit</span>
        </h1>
        <p className="text-xl text-on-surface-variant mb-12 uppercase tracking-[0.4em] font-light">
          Kinetic Management Ecosystem
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/admin/dashboard"
            className="group bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/40 transition-all hover:-translate-y-1"
          >
            <span className="material-symbols-outlined text-3xl text-primary mb-4 block">admin_panel_settings</span>
            <h3 className="text-lg font-bold display-font mb-2">Admin</h3>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Facility Operations</p>
          </Link>

          <Link 
            href="/trainer/dashboard"
            className="group bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 hover:border-secondary/40 transition-all hover:-translate-y-1"
          >
            <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">fitness_center</span>
            <h3 className="text-lg font-bold display-font mb-2">Trainer</h3>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Athlete Coaching</p>
          </Link>

          <Link 
            href="/member/dashboard"
            className="group bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 hover:border-tertiary/40 transition-all hover:-translate-y-1"
          >
            <span className="material-symbols-outlined text-3xl text-tertiary mb-4 block">person</span>
            <h3 className="text-lg font-bold display-font mb-2">Member</h3>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Performance Portal</p>
          </Link>
        </div>

        <p className="mt-16 text-xs text-on-surface-variant/40 uppercase tracking-[0.2em]">
          Powered by Obsidian Kinetic Design System
        </p>
      </div>
    </div>
  );
}
