import DashboardLayout from "@/components/shared/DashboardLayout";
import { adminData } from "@/data/mockData";

export default function MemberTrainer() {
  // Mocking assigned trainer for Adrian Sterling
  const trainer = adminData.trainers[0]; 

  return (
    <DashboardLayout role="member">
      <section className="mb-10">
        <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
          My <span className="text-primary">Trainer</span>
        </h2>
        <p className="text-on-surface-variant text-sm">
          Expert guidance tailored for your specific fitness journey.
        </p>
      </section>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-5">
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant/5 overflow-hidden">
            <div className="aspect-square bg-surface-container-high flex items-center justify-center relative overflow-hidden">
              <span className="material-symbols-outlined text-[120px] text-on-surface-variant/20">person</span>
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-background to-transparent">
                <h3 className="text-3xl font-bold display-font">{trainer.name}</h3>
                <p className="text-[10px] text-secondary font-black uppercase tracking-[0.2em]">{trainer.specialization}</p>
              </div>
            </div>
            <div className="p-8 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-high rounded-xl p-4">
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Experience</p>
                  <p className="text-xl font-bold display-font">{trainer.experience}</p>
                </div>
                <div className="bg-surface-container-high rounded-xl p-4">
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Status</p>
                  <p className="text-xl font-bold display-font text-secondary">Available</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/10 pb-2">Philosophy</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed italic">
                  &quot;Fitness is not a destination, it&apos;s a systematic progression of metabolic and psychological adaptation. My goal is to engineer the best version of you.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 space-y-8">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5">
            <h4 className="text-xl font-bold display-font mb-8">Coaching Services</h4>
            <div className="space-y-4">
              {[
                { title: 'Personal Programming', detail: 'Custom workout protocols updated weekly based on performance metrics.' },
                { title: 'Nutritional Oversight', detail: 'Caloric and macro-nutrient tracking with bi-weekly adjustments.' },
                { title: 'Form Analysis', detail: 'Virtual or in-person review of lifting mechanics and safety.' },
                { title: 'Direct Messaging', detail: 'Priority access for questions and real-time motivation.' }
              ].map((service, i) => (
                <div key={i} className="p-6 bg-surface-container-high rounded-2xl flex gap-6 group hover:bg-surface-bright transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm mb-1">{service.title}</h5>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{service.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5">
             <h4 className="text-xl font-bold display-font mb-6">Contact Coach</h4>
             <form className="space-y-4">
                <textarea placeholder="Send a message to your trainer..." rows={3} className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-sm outline-none focus:ring-1 focus:ring-primary/50 resize-none"></textarea>
                <button className="w-full py-3 bg-primary text-on-primary rounded-xl text-[10px] font-black uppercase tracking-widest kinetic-glow-primary">Send Message</button>
             </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
