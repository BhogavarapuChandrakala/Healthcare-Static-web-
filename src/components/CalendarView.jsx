
import { calendarAppointments } from '../data/appointments';

const CalendarView = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthDays = Array.from({ length: 31 }, (_, i) => i + 1);
  
  const hasAppointments = (day) => {
    const dateKey = `2021-10-${day.toString().padStart(2, '0')}`;
    return calendarAppointments[dateKey];
  };

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h3>October 2021</h3>
      </div>
      
      <div className="calendar-grid">
        <div className="calendar-days-header">
          {daysOfWeek.map(day => (
            <div key={day} className="day-header">{day}</div>
          ))}
        </div>
        
        <div className="calendar-days">
          {/* Empty cells for month start offset */}
          {Array.from({ length: 5 }, (_, i) => (
            <div key={`empty-${i}`} className="calendar-day empty"></div>
          ))}
          
          {monthDays.map(day => {
            const appointments = hasAppointments(day);
            return (
              <div key={day} className={`calendar-day ${appointments ? 'has-appointments' : ''}`}>
                <span className="day-number">{day}</span>
                {appointments && (
                  <div className="appointment-dots">
                    {appointments.map((time, index) => (
                      <div key={index} className="appointment-dot">
                        <span className="appointment-time">{time}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
