import DashboardLayout from "@/components/shared/DashboardLayout";
import { adminData } from "@/data/mockData";

export default function AdminStaff() {
  const { trainers } = adminData;

  return (
    <DashboardLayout role="admin">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Elite <span className="text-primary">Trainers</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Management of professional coaching staff.
        </p>
      </section>

      <div className="bg-surface-container-low rounded-xl border border-outline-variant/5 overflow-hidden">
        <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
          <h4 className="text-xl font-bold display-font">Coaching Staff</h4>
          <a href="/admin/staff/add" className="bg-primary text-on-primary px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest kinetic-glow-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">person_add</span>
            Add Trainer
          </a>
        </div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-high/50 text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Trainer</th>
              <th className="px-6 py-4">Specialization</th>
              <th className="px-6 py-4">Experience</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {trainers.map((trainer) => (
              <tr key={trainer.id} className="hover:bg-surface-container-high transition-colors group">
                <td className="px-6 py-4 text-xs font-mono text-on-surface-variant">{trainer.id}</td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium">{trainer.name}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {trainer.specialization.split(' / ').map((spec) => (
                      <span key={spec} className="bg-surface-container-highest px-2 py-0.5 rounded text-[10px] font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">{trainer.experience}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter ${
                    trainer.status === 'Available' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'
                  }`}>
                    {trainer.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">edit</button>
                  <button className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors ml-4">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
