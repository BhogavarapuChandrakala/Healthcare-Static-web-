
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import AppointmentCards from './AppointmentCards';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="main-content">
      <div className="dashboard-grid">
        {/* Top Section: Image with health cards on right */}
        <section className="top-section">
          <div className="anatomy-section">
            <AnatomySection />
          </div>
          <div className="right-sidebar">
            <HealthStatusCards />
            <AppointmentCards />
          </div>
        </section>
        
        {/* Middle Section: Calendar and Schedule side by side */}
        <section className="middle-section">
          <div className="calendar-section">
            <CalendarView />
          </div>
          <div className="schedule-section">
            <UpcomingSchedule />
          </div>
        </section>
        
        {/* Bottom Section: Activity Feed */}
        <section className="bottom-section">
          <ActivityFeed />
        </section>
      </div>
    </main>
  );
};

export default DashboardMainContent;
