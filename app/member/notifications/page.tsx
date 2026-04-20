import DashboardLayout from "@/components/shared/DashboardLayout";
import { globalData } from "@/data/mockData";

export default function MemberNotifications() {
  const { notifications } = globalData;

  return (
    <DashboardLayout role="member">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Notifications <span className="text-primary">Center</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Stay updated with your training, nutrition, and facility news.
        </p>
      </section>

      <div className="max-w-4xl bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden">
        <div className="p-6 border-b border-outline-variant/10 bg-surface-container-high/20 flex justify-between items-center">
          <h4 className="text-xl font-bold display-font">All Alerts</h4>
          <button className="text-[10px] font-bold uppercase tracking-widest text-primary">Mark all as read</button>
        </div>
        <div className="divide-y divide-outline-variant/5">
          {notifications.map((note) => (
            <div key={note.id} className={`p-8 flex gap-6 hover:bg-surface-container-high transition-colors relative ${note.unread ? 'bg-primary/5' : ''}`}>
              {note.unread && <div className="absolute left-0 top-0 w-1 h-full bg-primary"></div>}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-outline-variant/10 ${
                note.urgent ? 'bg-error/10 text-error' : 'bg-surface-container-high text-primary'
              }`}>
                <span className="material-symbols-outlined">{
                  note.type === 'workout' ? 'exercise' : 
                  note.type === 'payment' ? 'payments' : 
                  note.type === 'achievement' ? 'military_tech' : 'chat_bubble'
                }</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-bold text-sm">{note.title}</h5>
                  <span className="text-[10px] font-mono text-on-surface-variant uppercase">{note.time}</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{note.message}</p>
                <div className="flex gap-4">
                  <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline transition-all">View Details</button>
                  <button className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-error transition-all">Dismiss</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
