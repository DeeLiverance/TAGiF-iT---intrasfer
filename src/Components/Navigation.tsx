import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { QrCode, UserCircle, BarChart3, LogOut, Home } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <QrCode className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold">Tagify-It</span>
          </Link>

          <div className="flex items-center space-x-4">
            <NavLink to="/" active={isActive('/')}>
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </NavLink>

            <NavLink to="/smart-tags" active={isActive('/smart-tags')}>
              <QrCode className="h-5 w-5" />
              <span>Smart Tags</span>
            </NavLink>

            <NavLink to="/analytics" active={isActive('/analytics')}>
              <BarChart3 className="h-5 w-5" />
              <span>Analytics</span>
            </NavLink>

            <NavLink to="/profile" active={isActive('/profile')}>
              <UserCircle className="h-5 w-5" />
              <span>Profile</span>
            </NavLink>

            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`flex items-center space-x-1 px-4 py-2 transition-colors ${
      active
        ? 'text-red-600 border-b-2 border-red-600'
        : 'text-gray-600 hover:text-red-600'
    }`}
  >
    {children}
  </Link>
);

export default Navigation;