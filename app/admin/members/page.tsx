'use client';

import { useState, useEffect } from "react";
import DashboardLayout from "@/components/shared/DashboardLayout";
import { getMembers } from "@/lib/api";

interface Member {
  id: number;
  username: string;
  email: string;
  phone: string;
  date_joined?: string;
}

export default function AdminMembers() {
  const [members, setMembers] = useState<Member[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await getMembers();
        setMembers(data);
      } catch (error) {
        console.error("Failed to fetch members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  // Filtering logic
  const filteredMembers = members.filter(member => 
    member.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout role="admin">
      <section className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
            Gym <span className="text-primary">Members</span>
          </h2>
          <p className="text-on-surface-variant text-sm">
            Manage your athlete database and memberships.
          </p>
        </div>
        <div className="flex gap-4">
           {/* Search Input */}
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
            <input 
              type="text" 
              placeholder="Search members..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-surface-container-high border border-outline-variant/10 rounded-xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-primary/30 w-64 transition-all"
            />
          </div>
          <a href="/admin/members/add" className="bg-primary text-on-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest kinetic-glow-primary flex items-center gap-2">
            <span className="material-symbols-outlined">person_add</span>
            Register Member
          </a>
        </div>
      </section>

      <div className="bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden">
        {loading ? (
           <div className="p-20 text-center font-bold text-primary animate-pulse">Loading Members Database...</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high/50 border-b border-outline-variant/10">
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Member ID</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Member</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Contact</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Joined Date</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {filteredMembers.map((member) => (
                <tr key={member.id} className="hover:bg-surface-bright/50 transition-colors group">
                  <td className="p-6">
                    <span className="font-mono text-xs font-bold text-primary">EF-{member.id.toString().padStart(4, '0')}</span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {member.username[0].toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">{member.username}</p>
                        <p className="text-[10px] text-on-surface-variant font-medium">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <p className="text-sm font-medium text-on-surface">{member.phone || 'N/A'}</p>
                  </td>
                  <td className="p-6">
                    <p className="text-sm font-medium text-on-surface-variant">
                      {member.date_joined ? new Date(member.date_joined).toLocaleDateString() : 'N/A'}
                    </p>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-9 h-9 flex items-center justify-center bg-surface-container-highest rounded-lg text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button className="w-9 h-9 flex items-center justify-center bg-error/10 rounded-lg text-error hover:bg-error/20 transition-colors">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        
        {!loading && filteredMembers.length === 0 && (
          <div className="p-20 text-center">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4">search_off</span>
            <p className="text-on-surface-variant font-medium">No members found matching your search.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
