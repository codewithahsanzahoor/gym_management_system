export const adminData = {
  stats: {
    totalMembers: 1240,
    memberTrend: '+12%',
    totalRevenue: 15400,
    revenueTrend: '+4.2%',
    activePlans: 850,
    todayAttendance: 142,
    attendanceTrend: '-2%',
    facilityCapacity: {
      current: 142,
      max: 220,
      percentage: 65,
    },
    growthTarget: 82, // percentage of monthly goal
  },
  recentActivity: [
    { id: 1, type: 'registration', member: 'John Doe', time: '2 minutes ago', detail: 'Basic Plan' },
    { id: 2, type: 'payment', amount: 50, member: 'Sarah Smith', time: '15 minutes ago', detail: 'Invoice #8842' },
    { id: 3, type: 'class', name: 'Morning Yoga', time: '1 hour ago', attendees: 14 },
    { id: 4, type: 'maintenance', item: 'Treadmill #4', time: '3 hours ago', status: 'Offline' },
    { id: 5, type: 'checkin', member: 'James Dalton', time: '06:45 AM', detail: 'High Intensity Interval' },
  ],
  members: [
    { id: 'EF-2024-001', name: 'Marcus Vane', email: 'marcus.v@elitefit.com', plan: 'Elite Pro', status: 'Active', joinDate: 'Jan 12, 2024' },
    { id: 'EF-2024-042', name: 'Elena Rossi', email: 'elena.r@kinetic.io', plan: 'Kinetic Elite', status: 'Active', joinDate: 'Feb 05, 2024' },
    { id: 'EF-2023-998', name: 'David Chen', email: 'd.chen@gmail.com', plan: 'Standard', status: 'Inactive', joinDate: 'Nov 18, 2023' },
    { id: 'EF-2024-112', name: 'Sasha Grey', email: 'sasha.g@training.com', plan: 'Elite Pro', status: 'Pending', joinDate: 'Mar 01, 2024' },
    { id: 'EF-2024-205', name: 'Adrian Sterling', email: 'a.sterling@elitefit.com', plan: 'Elite Pro', status: 'Active', joinDate: 'Jan 20, 2024' },
    { id: 'EL-8821', name: 'James Dalton', email: 'j.dalton@gmail.com', plan: 'Elite Pro', status: 'Active', joinDate: 'Dec 10, 2023' },
    { id: 'EL-1044', name: 'Sarah Koenig', email: 's.koenig@outlook.com', plan: 'Kinetic Elite', status: 'Active', joinDate: 'Jan 05, 2024' },
    { id: 'EL-9032', name: 'Marcus Price', email: 'm.price@tech.com', plan: 'Standard', status: 'Active', joinDate: 'Feb 12, 2024' },
    { id: 'EL-4521', name: 'Liam Thorne', email: 'l.thorne@fitness.net', plan: 'Standard', status: 'Active', joinDate: 'Mar 15, 2024' },
  ],
  trainers: [
    { id: 'EF-TRAIN-092', name: 'Sarah Jenkins', specialization: 'HIIT / Powerlifting', experience: '8 Years', status: 'Available' },
    { id: 'EF-TRAIN-114', name: 'Marcus Thorne', specialization: 'Mobility / Yoga Master', experience: '12 Years', status: 'In-Session' },
    { id: 'EF-TRAIN-041', name: 'Aria Vane', specialization: 'Vinyasa / Breathwork', experience: '5 Years', status: 'Available' },
    { id: 'EF-TRAIN-205', name: 'David Kalu', specialization: 'Endurance / Marathon', experience: '15 Years', status: 'In-Session' },
    { id: 'EF-TRAIN-001', name: 'Alex Rivera', specialization: 'Head Trainer', experience: '10 Years', status: 'Available' },
    { id: 'EF-TRAIN-005', name: 'Elena Vance', specialization: 'Hybrid Training', experience: '7 Years', status: 'Available' },
  ],
};

export const adminAnalytics = {
  annualRevenue: {
    value: '$1.24M',
    growth: '+24.8%',
  },
  retentionData: [
    { month: 'Jan', retention: 85, churn: 15 },
    { month: 'Mar', retention: 88, churn: 12 },
    { month: 'May', retention: 92, churn: 8 },
    { month: 'Jul', retention: 90, churn: 10 },
    { month: 'Sep', retention: 94, churn: 6 },
    { month: 'Nov', retention: 95, churn: 5 },
  ],
  peakHours: {
    morning: { label: '6-9 AM', percentage: 88 },
    evening: { label: '5-8 PM', percentage: 94 },
    midday: { percentage: 45 },
  },
  equipmentUtilization: [
    { name: 'Cardio Deck', value: 82, color: 'primary' },
    { name: 'Weight Zone', value: 95, color: 'secondary' },
    { name: 'HIIT Studio', value: 64, color: 'tertiary' },
  ],
  membershipPerformance: [
    { name: 'Kinetic VIP', members: 1240, contribution: 42, trend: '+12.4%', color: 'primary' },
    { name: 'Elite Pro', members: 3890, contribution: 35, trend: '+5.8%', color: 'secondary' },
    { name: 'Standard', members: 8120, contribution: 23, trend: '-1.2%', color: 'tertiary' },
  ]
};

export const adminInventory = {
  globalStockValue: {
    value: '$142,850',
    trend: '+12.4%',
  },
  categories: ['Supplements', 'Equipment', 'Apparel', 'Tech'],
  items: [
    { 
      id: 'SUPP-042', 
      name: 'Elite Whey Isolate', 
      stock: 84, 
      maxStock: 100, 
      velocity: 'High', 
      status: 'Optimal', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB66ibGVwb5c5dRrXPsnFHw0KGODqhLUQjS28EBk4ZSWQN28JsnEf8QJ7t2ayQWVzcbhLRyESoKU-zusVU_3Cn_TtXWCbokX58omtndTzgk-ztMT_UwVWKsffnlGCKewJlx-vTR5ZWtGnvPo33Wf5fyrFqUe-6VESifyILcf8LPC2P4wdfzXJlWzUu0uShCDUhyalX1GxPvWb6okrmVVCniqhO4Na_z5q1vvt7qGGvIj6rOLgJUlqDO4ljXPl_iEopEfWh_r3oZ2Y' 
    },
    { 
      id: 'GEAR-901', 
      name: 'Kinetic Grip Gloves', 
      stock: 12, 
      maxStock: 150, 
      eta: '48 Hours', 
      status: 'Critical', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG218NV4URMjkCkIdmKHdZaSQx1ur36-RKVT2gMWPhNtzBQt059oom_NVESsniC7JX2sPwBgoUW5DMkrwEk7WQrQdMCaQLoFOFS11MQcZnCy218GHgAkN-obCR6CtLMqH4ThnaoGX7rGeMSkQUjMjE96UycPfyPhQt9QfJG8WM7pSvcMoizQXNs4Ci79YbqgTy9OoEY42UFSfBqixVRGP3PEiLycPsZxqdHa8L3NkpzVpxjfCseMWGAzh0VvkZIHYJVsu2-Cvrd4I' 
    },
    { 
      id: 'TECH-002', 
      name: 'Heart Rate Monitor V2', 
      stock: 45, 
      maxStock: 60, 
      batch: 'Active', 
      status: 'Tech Asset', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8IbYnn7Cu5BNu5GoneoPrPM_TRzkPHi--dbDT9DRzqLD9PdZW0n7YJbAuCG9BWNUEGXBWT4WLqcw4bkEUgdWL87PB1QtCyPjUw8PhBq1GA9qnt7qG3y9RD9Hwtas-sVEmddFsUVlyOtramkpnu3SnvuXZ6kyKA2bciStcM4hCsnBPCbcqEtgkVJJyXeUPFbu_IjQooJCd0nNbzgtMEe3NSbnCVdBV5kW32hmX0ku9-50Qg6EJre-4hF-ONfVWCYdzcahjzsj9zjc' 
    },
  ],
  logistics: [
    { id: '#L-98422', vendor: 'Global Supplements Co.', amount: '$12,400.00', status: 'In Transit' },
    { id: '#L-98419', vendor: 'Titan Equipment Ltd.', amount: '$4,120.00', status: 'Processing' },
  ]
};

export const adminSettings = {
  facility: {
    timezone: 'UTC -05:00 (Eastern Standard Time)',
    openingHours: '05:00',
    closingHours: '23:00',
    capacityThreshold: 250,
  },
  integrations: [
    { name: 'Stripe', type: 'Payments & Billing', status: true, icon: 'credit_card' },
    { name: 'Postmark', type: 'Transactional Email', status: true, icon: 'mail' },
    { name: 'IoT Access', type: 'Door Control Units', status: true, icon: 'sensor_door' },
  ],
  api: {
    key: '••••••••••••••••••••••••ef3a',
    webhook: 'https://api.elitefit.io/v2/hooks/system_event',
    lastRotated: '2d ago',
  },
  lockers: {
    online: 98,
    offline: 2,
  }
};

export const trainerData = {
  stats: {
    activeRosters: 42,
    rosterTrend: '+12%',
    todayPresence: { current: 28, target: 32, percentage: 87 },
    avgBMI: 23.4,
    activePrograms: 12,
    avgCompletion: 84,
    enrolledMembers: 142,
  },
  assignedMembers: [
    { id: 'EV-2024', name: 'Elena Vance', specialization: 'Hybrid Training', goal: 'Weight Loss', weightLoss: -8.4, sessions: '24/30', progress: 80, tier: 'Elite' },
    { id: 'MT-2024', name: 'Marcus Thorne', specialization: 'Powerlifting', goal: 'Strength Gain', weightLoss: +2.1, sessions: '12/15', progress: 65, tier: 'Pro' },
    { id: 'SC-2024', name: 'Sarah Chen', specialization: 'Endurance', goal: 'Weight Loss', weightLoss: -4.2, sessions: '18/20', progress: 90, tier: 'Elite' },
    { id: 'DM-2024', name: 'David Miller', specialization: 'Beginner Core', goal: 'Consistency', weightLoss: -0.5, sessions: '04/12', progress: 33, tier: 'New' },
    { id: 'AS-2024', name: 'Adrian Sterling', specialization: 'Hypertrophy', goal: 'Muscle Gain', weightLoss: -1.2, sessions: '28/30', progress: 92, tier: 'Elite' },
  ],
  workoutPlans: [
    { id: 'WP-001', name: 'Hypertrophy Phase 1', level: 'Advanced', duration: '12 Weeks', description: 'Systematic volume progression targeting primary muscle groups with eccentric focus.', activeMembers: 24 },
    { id: 'WP-002', name: 'Endurance Baseline', level: 'Intermediate', duration: '8 Weeks', description: 'Metabolic conditioning foundation building aerobic capacity and work threshold.', activeMembers: 18 },
    { id: 'WP-003', name: 'Olympic Lifting Protocol', level: 'Advanced', duration: 'On-going', description: 'Technical mastery of the snatch and clean & jerk. Requires professional coaching oversight.', avgSession: '90 Minutes' },
    { id: 'WP-004', name: 'Mobility Flow 2.0', level: 'Beginner', duration: '4 Weeks', description: 'Joint health and range of motion optimization for functional performance.', activeMembers: 32 },
  ],
  dietPlans: [
    { id: 'DP-001', name: 'Lean Bulk Protocol', protein: '40%', carbs: '40%', fats: '20%', kcal: 3200 },
    { id: 'DP-002', name: 'Keto Shred', protein: '30%', carbs: '5%', fats: '65%', kcal: 2200 },
    { id: 'DP-003', name: 'Balanced Athlete', protein: '30%', carbs: '45%', fats: '25%', kcal: 2800 },
  ],
};

export const memberData = {
  profile: {
    name: 'Adrian Sterling',
    tier: 'Premium Active',
    branch: 'New York Downtown',
    goal: 'Hypertrophy & Fat Loss',
    since: 'January 2024',
  },
  stats: {
    currentBMI: 22.4,
    bmiStatus: 'Optimal',
    weight: 78.2,
    weightChange: -4.2,
    totalWorkouts: 142,
    goalProgress: 84,
    monthlyTrainingVolume: 42.8, // in tons
    restingHR: 58,
    bodyFat: 16.4,
    hydration: 'Good',
  },
  attendanceHistory: [
    { date: '2024-11-24', session: 'Lower Body Hypertrophy', time: '06:28 AM', duration: '84 min', calories: 642, status: 'Attended' },
    { date: '2024-11-22', session: 'HIIT Metabolic Blast', time: '06:45 AM', duration: '45 min', calories: 510, status: 'Attended' },
    { date: '2024-11-21', session: 'Upper Body Strength', time: 'N/A', duration: '0 min', calories: 0, status: 'Missed' },
    { date: '2024-11-20', session: 'Active Recovery Yoga', time: '07:15 AM', duration: '60 min', calories: 210, status: 'Attended' },
    { date: '2024-11-18', session: 'Push Day (Heavy)', time: '06:30 AM', duration: '75 min', calories: 580, status: 'Attended' },
  ],
  currentWorkoutPlan: {
    name: 'Hypertrophy Phase II',
    focus: 'Hypertrophy & Strength',
    weeklyVolume: '18,450 kg',
    avgSession: '68 min',
    completion: '92%',
    schedule: [
      { day: 'Monday', name: 'Push Day (Heavy)', duration: '75 min', exercises: ['Barbell Bench Press', 'Overhead Press', 'Incline DB Fly', 'Tricep Pushdowns'], focus: 'Chest / Shoulders / Triceps' },
      { day: 'Tuesday', name: 'Pull Day (Hypertrophy)', duration: '60 min', exercises: ['Deadlifts', 'Pull-ups', 'Barbell Rows', 'Bicep Curls'], focus: 'Back / Biceps' },
      { day: 'Wednesday', name: 'Active Recovery', duration: '45 min', exercises: ['Light Jogging', 'Mobility Drills'], focus: 'Light Cardio' },
      { day: 'Thursday', name: 'Leg Day (Volume)', duration: '90 min', exercises: ['Squats', 'Leg Press', 'Romanian Deadlifts', 'Calf Raises'], focus: 'Quads / Hamstrings / Calves' },
    ],
  },
  currentDietPlan: {
    dailyCalories: { current: 2450, goal: 2800 },
    macros: { protein: 185, proteinGoal: 200, carbs: 240, carbsGoal: 300, fats: 72, fatsGoal: 80 },
    meals: [
      { name: 'Greek Yogurt Power Bowl', type: 'Breakfast', time: '07:30 AM', calories: 420, protein: 35, carbs: 45, status: 'Completed' },
      { name: 'Grilled Chicken & Quinoa Harvest', type: 'Lunch', time: '01:00 PM', calories: 680, protein: 52, carbs: 78, status: 'Pending' },
      { name: 'Mixed Raw Nuts & Protein Shake', type: 'Snack', time: '04:30 PM', calories: 310, protein: 28, carbs: 12, status: 'Pending' },
    ],
  },
};

export const globalData = {
  navigationLinks: {
    admin: [
      { label: 'Dashboard', icon: 'dashboard', path: '/admin/dashboard' },
      { label: 'Analytics', icon: 'monitoring', path: '/admin/analytics' },
      { label: 'Members', icon: 'group', path: '/admin/members' },
      { label: 'Staff', icon: 'badge', path: '/admin/staff' },
      { label: 'Inventory', icon: 'inventory_2', path: '/admin/inventory' },
      { label: 'Settings', icon: 'settings', path: '/admin/settings' },
    ],
    trainer: [
      { label: 'Dashboard', icon: 'dashboard', path: '/trainer/dashboard' },
      { label: 'Members', icon: 'group', path: '/trainer/members' },
      { label: 'Workout Plans', icon: 'fitness_center', path: '/trainer/plans' },
      { label: 'Progress', icon: 'monitoring', path: '/trainer/progress' },
      { label: 'Attendance', icon: 'calendar_month', path: '/trainer/attendance' },
      { label: 'Profile', icon: 'account_circle', path: '/trainer/profile' },
    ],
    member: [
      { label: 'Dashboard', icon: 'home', path: '/member/dashboard' },
      { label: 'My Trainer', icon: 'person_search', path: '/member/trainer' },
      { label: 'Workout', icon: 'exercise', path: '/member/workout' },
      { label: 'Diet', icon: 'restaurant', path: '/member/diet' },
      { label: 'Attendance', icon: 'event_available', path: '/member/attendance' },
      { label: 'Notifications', icon: 'notifications', path: '/member/notifications' },
      { label: 'Profile', icon: 'person', path: '/member/profile' },
    ],
  },
  membershipPlans: [
    { id: 1, name: 'Standard', price: 89, period: 'month', features: ['General Gym Access', 'Locker Room Access'], subscribers: 1248, churnRate: '4.2%' },
    { id: 2, name: 'Elite Pro', price: 149, period: 'month', features: ['24/7 Premium Access', 'Group Fitness Classes', 'Guest Passes (2/mo)'], subscribers: 3892, popular: true, churnRate: '1.8%' },
    { id: 3, name: 'Kinetic Elite', price: 299, period: 'month', features: ['All Access + Recovery Lab', '4 Personal Training /mo', 'Custom Nutrition Plan'], subscribers: 842, churnRate: '0.4%' },
  ],
  notifications: [
    { id: 1, type: 'workout', title: 'New Workout Added', message: "Your trainer uploaded 'High Intensity Leg Day V2'.", time: '2m ago', unread: true },
    { id: 2, type: 'payment', title: 'Membership Renewal Reminder', message: "Your 'Premium Monthly' plan expires in 48 hours. Update payment.", time: '1h ago', unread: true, urgent: true },
    { id: 3, type: 'message', title: 'Trainer Message', message: '"Great form on those deadlifts today, Marcus! Keep it up."', time: '4h ago', unread: true },
    { id: 4, type: 'achievement', title: 'Achievement Unlocked', message: "You've hit a 30-day attendance streak! New badge added.", time: 'Yesterday', unread: false },
    { id: 5, type: 'inventory', title: 'Inventory Update', message: 'The new shipment of Organic Whey Protein has arrived in-store.', time: 'Aug 24', unread: false },
  ],
};
