
import { navLinks } from '../data/navigation';
import * as LucideIcons from 'lucide-react';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h3>General</h3>
      </div>
      
      <ul className="nav-links">
        {navLinks.map((link) => {
          const Icon = LucideIcons[link.icon];
          return (
            <li key={link.text} className={`nav-item ${link.active ? 'active' : ''}`}>
              <Icon size={20} />
              <span>{link.text}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
