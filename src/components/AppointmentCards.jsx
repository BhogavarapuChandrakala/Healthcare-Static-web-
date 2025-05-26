
import { todayAppointments } from '../data/appointments';

const AppointmentCards = () => {
  return (
    <div className="appointment-cards">
      {todayAppointments.map((appointment) => (
        <div key={appointment.id} className={`appointment-card ${appointment.type}`}>
          <div className="appointment-info">
            <h4>{appointment.title}</h4>
            <p className="appointment-time">{appointment.time}</p>
            <p className="appointment-doctor">{appointment.doctor}</p>
          </div>
          <div className="appointment-status">
            <div className="status-dot"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentCards;
