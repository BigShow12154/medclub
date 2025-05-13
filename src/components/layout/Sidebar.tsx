import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Home, 
  User,
  Activity,
  FileText,
  Users,
  Heart,
  ShoppingBag,
  Map,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const location = useLocation();
  const { user } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { path: '/profile', label: 'My Profile', icon: <User size={20} /> },
    { path: '/body-map', label: 'Symptom Checker', icon: <Map size={20} /> },
    { path: '/health-reports', label: 'Health Reports', icon: <FileText size={20} /> },
    { path: '/doctors', label: 'Find Doctors', icon: <Heart size={20} /> },
    { path: '/family', label: 'Family Members', icon: <Users size={20} /> },
    { path: '/marketplace', label: 'Marketplace', icon: <ShoppingBag size={20} /> },
  ];

  return (
    <>
      {/* Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white border-r transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:z-10 md:top-16`}
      >
        <div className="flex flex-col h-full">
          <div className="md:hidden flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <div className="bg-primary p-1.5 rounded-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" 
                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="ml-2 text-lg font-semibold">HealthHub</span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="md:hidden p-4 border-b">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
                {user?.name.charAt(0).toUpperCase()}
              </div>
              <div className="ml-3">
                <p className="font-semibold text-sm">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => onClose()}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-3 font-medium text-sm">{item.label}</span>
                  </div>
                  {isActive(item.path) && <ChevronRight size={16} />}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="p-4 border-t">
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <Activity className="text-primary" size={20} />
                <span className="ml-2 font-medium text-sm text-gray-800">Daily Health Tips</span>
              </div>
              <p className="mt-2 text-xs text-gray-600">Stay hydrated! Drink at least 8 glasses of water daily to maintain optimal health.</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;