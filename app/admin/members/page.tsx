import DashboardLayout from "@/components/shared/DashboardLayout";
import { adminData } from "@/data/mockData";

export default function AdminMembers() {
  const { members } = adminData;

  return (
    <DashboardLayout role="admin">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          Member <span className="text-primary">Management</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Overview of all members enrolled in EliteFit.
        </p>
      </section>

      <div className="bg-surface-container-low rounded-xl border border-outline-variant/5 overflow-hidden">
        <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
          <h4 className="text-xl font-bold display-font">All Members</h4>
          <a href="/admin/members/add" className="bg-primary text-on-primary px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest kinetic-glow-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">person_add</span>
            Add Member
          </a>
        </div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-high/50 text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Plan</th>
              <th className="px-6 py-4">Join Date</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-surface-container-high transition-colors group">
                <td className="px-6 py-4 text-xs font-mono text-on-surface-variant">{member.id}</td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-[10px] text-on-surface-variant">{member.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">{member.plan}</td>
                <td className="px-6 py-4 text-sm">{member.joinDate}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter ${
                    member.status === 'Active' ? 'bg-secondary/10 text-secondary' : 
                    member.status === 'Pending' ? 'bg-primary/10 text-primary' : 'bg-surface-container-highest text-on-surface-variant'
                  }`}>
                    {member.status}
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
