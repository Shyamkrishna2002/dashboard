'use client';
import { ChevronDown } from "lucide-react";
import { useState } from "react";


export default function HeaderPage() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [ismobopen, setismobopen] = useState(false);


    
  return (
   

<header className="border-b border-gray-200 px-2  sm:px-3 py-3 flex items-center justify-between ">
        
        <div className="flex items-center  p-2 ">
      <button
        className="h-10 w-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 md:hidden"
        onClick={
            () => setismobopen(!ismobopen)

        }
        aria-label="Open navigation"
      >
        ☰
      </button>
      {/* Empty div for desktop to maintain spacing */}
      <div className="hidden md:block w-10" />
    </div>
          
          {/* RIGHT: User Avatar Dropdown */}
          <div className="relative">
            <button
              className="h-10 px-3 rounded-full bg-gray-100 flex items-center gap-2 font-semibold"
             onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              {/* Avatar */}
              <img
                src="/images/img.png"
                alt="User Avatar"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover"
              />
  
              {/* Name — initials on mobile, full name on md+ */}
              <span className="md:hidden">JD</span>
              <span className="hidden md:inline">John Doe</span>
  
              {/* Dropdown icon — only on md+ */}
              <ChevronDown className="hidden md:block w-4 h-4" />
            </button>
  
            {/* Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-4 border-b border-gray-100">
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-500">Admin</p>
                </div>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Profile</button>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Settings</button>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-red-500">Logout</button>
              </div>
            )}
          </div>
        </header>
   
  );
}
