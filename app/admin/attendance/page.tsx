'use client';

import { useState, useEffect } from "react";
import DashboardLayout from "@/components/shared/DashboardLayout";
import { getAttendance, markAttendance, getMembers } from "@/lib/api";

interface AttendanceRecord {
  id: number;
  username: string;
  date: string;
  check_in_time: string;
  status: string;
}

interface Member {
  id: number;
  username: string;
}

export default function AdminAttendance() {
  const [logs, setLogs] = useState<AttendanceRecord[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [selectedMember, setSelectedMember] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [attendanceData, membersData] = await Promise.all([
        getAttendance(),
        getMembers()
      ]);
      setLogs(attendanceData);
      setMembers(membersData);
    } catch (error) {
      console.error("Failed to fetch attendance data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAttendance = async () => {
    if (!selectedMember) return;
    setActionLoading(true);
    try {
      await markAttendance({ user: parseInt(selectedMember) });
      setSelectedMember("");
      fetchData(); // List refresh karo
    } catch (error) {
      alert("Failed to mark attendance");
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <DashboardLayout role="admin">
      <section className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
            Attendance <span className="text-primary">Logs</span>
          </h2>
          <p className="text-on-surface-variant text-sm">
            Daily traffic and facility utilization tracking (Real-time).
          </p>
        </div>
        
        {/* Quick Check-In Form */}
        <div className="flex gap-4 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/10">
          <select 
            value={selectedMember}
            onChange={(e) => setSelectedMember(e.target.value)}
            className="bg-surface-container-high border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none min-w-[200px]"
          >
            <option value="">Select Member</option>
            {members.map(m => (
              <option key={m.id} value={m.id}>{m.username}</p>
            ))}
          </select>
          <button 
            onClick={handleMarkAttendance}
            disabled={!selectedMember || actionLoading}
            className="bg-primary text-on-primary px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest kinetic-glow-primary disabled:opacity-50"
          >
            {actionLoading ? "..." : "Check-In"}
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em] mb-1">Today's Presence</p>
          <p className="text-4xl font-bold display-font tracking-tighter">{logs.length}</p>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em] mb-1">Total Members</p>
          <p className="text-4xl font-bold display-font tracking-tighter">{members.length}</p>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em] mb-1">Peak Hour</p>
          <p className="text-4xl font-bold display-font tracking-tighter">06:00 PM</p>
        </div>
      </div>

      <div className="bg-surface-container-low rounded-xl border border-outline-variant/5 overflow-hidden">
        <div className="p-6 border-b border-outline-variant/10">
          <h4 className="text-xl font-bold display-font">Attendance Records</h4>
        </div>
        
        {loading ? (
          <div className="p-20 text-center font-bold text-primary animate-pulse">Loading Logs...</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high/50 text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
                <th className="px-6 py-4">Member</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Check-In Time</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-surface-container-high transition-colors group">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium">{log.username}</p>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono">{log.date}</td>
                  <td className="px-6 py-4 text-sm font-mono">{log.check_in_time}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter bg-secondary/10 text-secondary">
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </DashboardLayout>
  );
}
