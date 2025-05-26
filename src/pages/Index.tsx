
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardMainContent from '../components/DashboardMainContent';
import '../styles/dashboard.css';

const Index = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-layout">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default Index;
