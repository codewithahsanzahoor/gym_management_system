'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/shared/DashboardLayout";
import { createMember } from "@/lib/api";

export default function AdminAddMember() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "Password123", // Default password, user can change later
    phone: "",
    address: "",
    role: "member"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      await createMember(formData);
      router.push("/admin/members"); // Success par list par wapas jao
    } catch (err: any) {
      console.error("Failed to register member:", err);
      setError(err.response?.data ? JSON.stringify(err.response.data) : "Failed to register member. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout role="admin">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          New <span className="text-primary">Enrollment</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Register a new member into the EliteFit ecosystem.
        </p>
      </section>

      <div className="max-w-4xl bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden">
        <div className="p-8 border-b border-outline-variant/10 flex justify-between items-center">
          <h4 className="text-xl font-bold display-font">Member Information</h4>
          {error && <span className="text-error text-xs font-bold bg-error/10 px-4 py-2 rounded-lg">{error}</span>}
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Username</label>
              <input 
                name="username" 
                type="text" 
                required 
                placeholder="johndoe" 
                onChange={handleChange}
                className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Email Address</label>
              <input 
                name="email" 
                type="email" 
                required 
                placeholder="j.doe@example.com" 
                onChange={handleChange}
                className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Phone Number</label>
              <input 
                name="phone" 
                type="tel" 
                placeholder="+92 300 0000000" 
                onChange={handleChange}
                className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Default Password</label>
              <input 
                name="password" 
                type="text" 
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Address / Notes</label>
            <textarea 
              name="address" 
              placeholder="Any medical history or specific fitness goals..." 
              rows={4} 
              onChange={handleChange}
              className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none resize-none"
            ></textarea>
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="flex-1 py-4 bg-primary text-on-primary rounded-xl text-xs font-bold uppercase tracking-widest kinetic-glow-primary disabled:opacity-50"
            >
              {loading ? "Processing..." : "Complete Registration"}
            </button>
            <button 
              type="button"
              onClick={() => router.push("/admin/members")}
              className="px-8 py-4 bg-surface-container-highest hover:bg-surface-bright transition-colors rounded-xl text-xs font-bold uppercase tracking-widest"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
