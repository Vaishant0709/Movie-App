import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet, useLocation,Link } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const isCreateMoviePage = location.pathname === '/createMovie';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar on top */}
      <Navbar />

      {/* Main content area with Sidebar & Outlet */}
      <div className="flex flex-1">
        {/* Sidebar only on /createMovie route */}
        {isCreateMoviePage && (
          <div className="w-[250px] bg-zinc-800 text-white h-screen px-6 py-8">
          <h2 className="text-lg font-bold">Admin Panel</h2>
          <ul className="mt-4">
            <li className="py-2 cursor-pointer hover:bg-zinc-700 rounded-md px-2">
              <Link to="/createMovie">Add new Movie</Link>
            </li>
          </ul>
        </div>
        )}

        {/* Main page content (Outlet) taking full remaining space */}
        <div className={`flex-1`}>
          <Outlet />
        </div>
      </div>

      {/* Footer below everything */}
      <Footer />
    </div>
  );
}

export default Layout;
