
import { Search, Bell, Plus, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Healthcare.</h1>
      </div>
      
      <div className="header-center">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
        </div>
      </div>
      
      <div className="header-right">
        <button className="add-btn">
          <Plus size={20} />
        </button>
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        <div className="user-profile">
          <div className="user-avatar">
            <User size={20} />
          </div>
          <span className="user-name">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
