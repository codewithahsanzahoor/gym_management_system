'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api";

export default function AdminLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await login(formData);
      router.push("/admin/dashboard"); // Success par dashboard par bhejo
    } catch (err: any) {
      console.error("Login Error:", err);
      setError("Invalid username or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-surface-container-lowest flex items-center justify-center p-6 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent">
      <div className="w-full max-w-md bg-surface-container-low rounded-[2.5rem] p-10 border border-outline-variant/10 shadow-2xl relative overflow-hidden">
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -mr-16 -mt-16"></div>

        <div className="mb-10 relative">
          <div className="w-16 h-16 bg-primary rounded-2xl mb-6 flex items-center justify-center kinetic-glow-primary">
            <span className="material-symbols-outlined text-on-primary text-3xl">fitness_center</span>
          </div>
          <h1 className="text-4xl font-black display-font tracking-tighter mb-2">
            Elite<span className="text-primary">Fit</span> Admin
          </h1>
          <p className="text-on-surface-variant text-sm font-medium">Please enter your credentials to access the command center.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-error/10 text-error p-4 rounded-2xl text-xs font-bold flex items-center gap-3 border border-error/20 animate-shake">
              <span className="material-symbols-outlined text-lg">error</span>
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Username / ID</label>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">person</span>
              <input 
                name="username"
                type="text" 
                required
                onChange={handleChange}
                placeholder="admin.alex" 
                className="w-full bg-surface-container-high border-none rounded-2xl py-4 pl-14 pr-6 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Password</label>
              <a href="#" className="text-[10px] font-bold text-primary hover:underline uppercase tracking-widest">Forgot?</a>
            </div>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">lock</span>
              <input 
                name="password"
                type="password" 
                required
                onChange={handleChange}
                placeholder="••••••••" 
                className="w-full bg-surface-container-high border-none rounded-2xl py-4 pl-14 pr-6 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" 
              />
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-5 bg-primary text-on-primary rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] kinetic-glow-primary transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? "Authenticating..." : "Authorize Access"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
          Secure Terminal v2.4.0
        </p>
      </div>
    </main>
  );
}
