import React from 'react'
import logo from "../images/logoipsum-338.svg"
import { useLocation } from 'react-router-dom'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
function Navbar() {
  const location = useLocation();
  const isAuthRoute = location.pathname === "/login" || location.pathname === "/signup";
  const showSidebar = location.pathname === "/createMovie"; 

  return (
    <div className="flex w-screen">
      {/* Main Content with Navbar */}
      <div className="flex-1">
        <nav className="h-[90px] flex items-center justify-between px-[100px] bg-zinc-800/80 backdrop-blur-md">
          <img className="w-[80px]" src={logo} alt="" />
          <span className="text-xl font-bold text-black">Movie App</span>
          {!isAuthRoute && (
            <div className="flex items-center gap-2">
              <div className="flex bg-zinc-700 rounded-2xl p-2 mb-6 w-[200px] mt-6">
                <input
                  type="text"
                  className="bg-transparent border-0 outline-0 cursor-text text-white pl-2"
                  placeholder="Search Here..."
                />
              </div>
              <Avatar googleId="118096717852922241760" size="40" className="cursor-pointer" round={true} />
            </div>
          )}
        </nav>

        
      </div>
    </div>
  );
}

export default Navbar;