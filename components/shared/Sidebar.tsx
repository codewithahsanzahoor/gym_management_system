"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { globalData } from "@/data/mockData";

interface SidebarProps {
  role: "admin" | "trainer" | "member";
}

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const links = globalData.navigationLinks[role];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-900/80 backdrop-blur-xl flex flex-col py-6 shadow-2xl shadow-blue-500/10 z-50 border-r border-outline-variant/10">
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary-container">bolt</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tighter text-slate-50">EliteFit</h1>
          <p className="text-[10px] text-primary tracking-widest uppercase font-medium">Kinetic Management</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-4 custom-scrollbar overflow-y-auto">
        {links.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`flex items-center gap-3 px-4 py-3 transition-all rounded-lg group ${
                isActive
                  ? "text-primary font-bold border-r-4 border-primary bg-primary/10"
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
              }`}
            >
              <span className={`material-symbols-outlined ${isActive ? "text-primary" : "group-hover:text-primary transition-colors"}`}>
                {link.icon}
              </span>
              <span className="text-sm">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 mt-auto">
        <button className="w-full py-3 bg-primary text-on-primary font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 kinetic-glow-primary">
          <span className="material-symbols-outlined text-sm">add</span>
          <span className="text-xs uppercase tracking-wider">
            {role === "admin" ? "Add New Entry" : role === "trainer" ? "New Plan" : "Log Activity"}
          </span>
        </button>
      </div>
    </aside>
  );
}
