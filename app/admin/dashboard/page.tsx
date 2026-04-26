'use client';

import { useState, useEffect } from "react";
import DashboardLayout from "@/components/shared/DashboardLayout";
import StatCard from "@/components/shared/StatCard";
import { getDashboardStats } from "@/lib/api";
import { adminData } from "@/data/mockData"; // Hum abhi bhi recent activity ke liye mock data use karenge

interface Stats {
  totalMembers: number;
  totalTrainers: number;
  activePlans: number;
  todayAttendance: number;
  totalRevenue: number;
  memberTrend: string;
  revenueTrend: string;
  attendanceTrend: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const { recentActivity } = adminData;

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <DashboardLayout role="admin">
      {/* Welcome Hero */}
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Performance <span className="text-primary">Overview</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Welcome back, Alex. Your facility is operating dynamically from the database today.
        </p>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {loading ? (
          <p className="col-span-4 text-center animate-pulse py-10 font-bold text-primary">Loading Real-time Metrics...</p>
        ) : (
          <>
            <StatCard
              label="Total Members"
              value={stats?.totalMembers || 0}
              icon="group"
              trend={stats?.memberTrend}
              trendType="up"
              accentColor="bg-primary"
            />
            <StatCard
              label="Total Revenue"
              value={`$${stats?.totalRevenue.toLocaleString()}`}
              icon="payments"
              trend={stats?.revenueTrend}
              trendType="up"
              accentColor="bg-secondary"
            />
            <StatCard
              label="Active Plans"
              value={stats?.activePlans || 0}
              icon="assignment_turned_in"
              trend="Stable"
              trendType="neutral"
              accentColor="bg-tertiary-container"
            />
            <StatCard
              label="Today's Attendance"
              value={stats?.todayAttendance || 0}
              icon="calendar_today"
              trend={stats?.attendanceTrend}
              trendType="down"
              accentColor="bg-primary"
            />
          </>
        )}
      </div>

      {/* Bento Layout: Analytics & Feeds */}
      <div className="grid grid-cols-12 gap-6">
        {/* Large Analytics Chart Placeholder */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-8 border border-outline-variant/5">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h4 className="text-xl font-bold display-font">Attendance Analytics</h4>
              <p className="text-xs text-on-surface-variant">Real-time gym floor occupancy metrics</p>
            </div>
          </div>
          
          <div className="h-64 flex items-end gap-2 relative">
            <div className="absolute inset-0 flex flex-col justify-between opacity-5 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="border-t border-on-surface w-full"></div>
              ))}
            </div>
            {[40, 60, 85, 70, 50, 65, 90, 95, 75, 60, 45, 55].map((height, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-sm hover:bg-primary/20 transition-all cursor-pointer relative group ${
                  i === 3 ? "bg-primary" : i === 7 ? "bg-secondary" : "bg-surface-container-highest"
                }`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-xl p-8 border border-outline-variant/5 flex flex-col">
          <div className="mb-6">
            <h4 className="text-xl font-bold display-font">Live Activity</h4>
            <p className="text-xs text-on-surface-variant">Real-time facility events</p>
          </div>
          
          <div className="space-y-6 flex-1">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex gap-4 group">
                <div className="relative">
                  <div className={`w-2 h-2 rounded-full mt-1.5 ${
                    activity.type === 'registration' ? 'bg-primary' : 
                    activity.type === 'payment' ? 'bg-secondary' : 
                    activity.type === 'maintenance' ? 'bg-error' : 'bg-tertiary'
                  }`}></div>
                  <div className="absolute top-4 left-[3px] w-[2px] h-full bg-outline-variant/10 group-last:hidden"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-on-surface">{activity.detail || activity.name}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">
                    {activity.member || activity.item} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
