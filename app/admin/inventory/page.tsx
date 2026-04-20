import DashboardLayout from "@/components/shared/DashboardLayout";

export default function AdminInventory() {
  const inventoryItems = [
    { name: "Elite Whey Isolate", category: "Supplements", stock: 85, critical: false, image: "bolt" },
    { name: "Kinetic Grip Gloves", category: "Apparel", stock: 12, critical: true, image: "front_hand" },
    { name: "Heart Rate Monitor V2", category: "Tech", stock: 4, critical: true, image: "monitoring" },
    { name: "Creatine Monohydrate", category: "Supplements", stock: 42, critical: false, image: "science" },
    { name: "BCAA Recovery Mix", category: "Supplements", stock: 15, critical: false, image: "medication" },
    { name: "Premium Weight Belt", category: "Equipment", stock: 8, critical: true, image: "fitness_center" },
  ];

  return (
    <DashboardLayout role="admin">
      <section className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-bold display-font tracking-tight mb-2">
            Inventory <span className="text-primary">Control</span>
          </h2>
          <p className="text-on-surface-variant text-sm">
            Total Stock Value: <span className="text-secondary font-medium">$42,850.00</span>
          </p>
        </div>
        <div className="flex gap-2">
          {["Supplements", "Equipment", "Apparel", "Tech"].map(cat => (
            <button key={cat} className="px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-surface-container-low hover:bg-surface-container-high transition-colors border border-outline-variant/5">
              {cat}
            </button>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {inventoryItems.map((item, i) => (
          <div key={i} className={`bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5 relative overflow-hidden group hover:-translate-y-1 transition-all ${item.critical ? 'kinetic-glow-error' : ''}`}>
            {item.critical && <div className="absolute top-0 left-0 w-1 h-full bg-error"></div>}
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-3 rounded-xl">{item.image}</span>
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${item.critical ? 'bg-error/10 text-error' : 'bg-secondary/10 text-secondary'}`}>
                {item.critical ? 'Low Stock' : 'In Stock'}
              </span>
            </div>
            <h4 className="text-xl font-bold display-font mb-1">{item.name}</h4>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-medium mb-6">{item.category}</p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-1">
                <span>Units</span>
                <span>{item.stock} / 100</span>
              </div>
              <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                <div className={`h-full ${item.critical ? 'bg-error' : 'bg-primary'}`} style={{ width: `${item.stock}%` }}></div>
              </div>
            </div>
            
            <button className="mt-8 w-full py-3 bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all rounded-xl text-[10px] font-bold uppercase tracking-widest">
              Restock Item
            </button>
          </div>
        ))}
      </div>

      {/* Action Panel */}
      <div className="fixed bottom-12 left-[calc(16rem+2rem)] right-[2rem] z-30">
        <div className="glass-panel p-6 rounded-2xl flex justify-between items-center shadow-2xl">
          <div className="flex gap-8">
            <div>
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Pending Orders</p>
              <p className="text-xl font-bold display-font text-primary">04</p>
            </div>
            <div>
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Audit Status</p>
              <p className="text-xl font-bold display-font text-secondary">Verified</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-surface-container-highest hover:bg-surface-bright transition-colors rounded-xl text-[10px] font-bold uppercase tracking-widest">
              Batch Reorder
            </button>
            <button className="px-8 py-3 bg-primary text-on-primary rounded-xl text-[10px] font-bold uppercase tracking-widest kinetic-glow-primary">
              Full Audit
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
