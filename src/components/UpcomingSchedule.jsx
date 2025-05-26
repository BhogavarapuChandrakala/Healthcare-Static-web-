
import { upcomingSchedule } from '../data/appointments';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className={`simple-appointment-card ${appointment.status}`}>
      <div className="appointment-icon">
        <div className="icon-dot"></div>
      </div>
      <div className="appointment-details">
        <h5>{appointment.title}</h5>
        <span className="appointment-time">{appointment.time}</span>
      </div>
    </div>
  );
};

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      
      <div className="schedule-list">
        {upcomingSchedule.map((scheduleDay, index) => (
          <div key={index} className="schedule-day">
            <div className="day-header">
              <h4>{scheduleDay.day}</h4>
              <span className="day-date">{scheduleDay.date}</span>
            </div>
            
            <div className="day-appointments">
              {scheduleDay.appointments.map((appointment) => (
                <SimpleAppointmentCard 
                  key={appointment.id} 
                  appointment={appointment} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
