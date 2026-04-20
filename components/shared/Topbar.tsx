"use client";

import { memberData } from "@/data/mockData";

interface TopbarProps {
  role: "admin" | "trainer" | "member";
}

export default function Topbar({ role }: TopbarProps) {
  const user = role === "admin" ? { name: "Alex Sterling", role: "Head Admin", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVh06GYbPhrDx5yFKWGdg2TJ-F1EjQoZ-nt7codTobYMYPQp5xEs_qhRutmhOJWcjKgMXTkjCC4yE2Dsthwj2NNfZqTU8r44-S2rHouXyk3qgJ3Eu_nUANvNKh_w8LcS7u82SCkxokqIb1LJtyCpwHFcozqU8dKtb7q-3Epwuh3DgtV6BkqMsZKyhKBaWbVO7czdEqBmgR6QFILn4a58VfPoYQmOmjPFJ4lxKTnio3GVvNBgWEoNai4otUXBuKrYPd42pxv_0N2Xs" } : 
               role === "trainer" ? { name: "Sarah Jenkins", role: "Senior Trainer", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVh06GYbPhrDx5yFKWGdg2TJ-F1EjQoZ-nt7codTobYMYPQp5xEs_qhRutmhOJWcjKgMXTkjCC4yE2Dsthwj2NNfZqTU8r44-S2rHouXyk3qgJ3Eu_nUANvNKh_w8LcS7u82SCkxokqIb1LJtyCpwHFcozqU8dKtb7q-3Epwuh3DgtV6BkqMsZKyhKBaWbVO7czdEqBmgR6QFILn4a58VfPoYQmOmjPFJ4lxKTnio3GVvNBgWEoNai4otUXBuKrYPd42pxv_0N2Xs" } : 
               { name: memberData.profile.name, role: memberData.profile.tier, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVh06GYbPhrDx5yFKWGdg2TJ-F1EjQoZ-nt7codTobYMYPQp5xEs_qhRutmhOJWcjKgMXTkjCC4yE2Dsthwj2NNfZqTU8r44-S2rHouXyk3qgJ3Eu_nUANvNKh_w8LcS7u82SCkxokqIb1LJtyCpwHFcozqU8dKtb7q-3Epwuh3DgtV6BkqMsZKyhKBaWbVO7czdEqBmgR6QFILn4a58VfPoYQmOmjPFJ4lxKTnio3GVvNBgWEoNai4otUXBuKrYPd42pxv_0N2Xs" };

  return (
    <header className="fixed top-0 right-0 h-16 bg-surface/80 backdrop-blur-md flex justify-between items-center ml-64 px-8 w-[calc(100%-16rem)] z-40 border-b border-outline-variant/10">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
          <input
            className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary/40 rounded-lg pl-10 pr-4 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/50 transition-all"
            placeholder="Search kinetics, members, or staff..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-on-surface-variant hover:text-primary transition-all relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full border-2 border-surface"></span>
        </button>
        <button className="text-on-surface-variant hover:text-primary transition-all">
          <span className="material-symbols-outlined">help</span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/20">
          <div className="text-right">
            <p className="text-xs font-bold text-on-surface uppercase tracking-tight">{user.name}</p>
            <p className="text-[10px] text-on-surface-variant uppercase">{user.role}</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="User Profile Avatar"
            className="w-10 h-10 rounded-full border-2 border-primary/20 object-cover"
            src={user.avatar}
          />
        </div>
      </div>
    </header>
  );
}
