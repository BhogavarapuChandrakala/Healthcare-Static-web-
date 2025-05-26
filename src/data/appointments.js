
export const todayAppointments = [
  {
    id: 1,
    title: 'Dentist',
    time: '09:00 AM',
    doctor: 'Dr. Smith',
    type: 'routine'
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    time: '11:00 AM', 
    doctor: 'Dr. Johnson',
    type: 'therapy'
  }
];

export const calendarAppointments = {
  '2021-10-06': ['09:00', '11:00'],
  '2021-10-08': ['13:00'],
  '2021-10-12': ['15:00'],
  '2021-10-15': ['09:00', '14:00'],
  '2021-10-22': ['10:00'],
  '2021-10-28': ['16:00']
};

export const upcomingSchedule = [
  {
    day: 'On Thursday',
    date: 'Oct 14',
    appointments: [
      { id: 1, title: 'Health checkup complete', time: '09:00 AM', status: 'completed' },
      { id: 2, title: 'Ophthalmologist', time: '11:00 AM', status: 'upcoming' }
    ]
  },
  {
    day: 'On Saturday', 
    date: 'Oct 16',
    appointments: [
      { id: 3, title: 'Cardiologist', time: '10:00 AM', status: 'upcoming' },
      { id: 4, title: 'Neurologist', time: '02:00 PM', status: 'upcoming' }
    ]
  }
];

export const activityData = {
  weeklyAppointments: 3,
  chartData: [
    { day: 'Mon', value: 0 },
    { day: 'Tue', value: 1 },
    { day: 'Wed', value: 2 },
    { day: 'Thu', value: 0 },
    { day: 'Fri', value: 3 },
    { day: 'Sat', value: 1 },
    { day: 'Sun', value: 0 }
  ]
};
