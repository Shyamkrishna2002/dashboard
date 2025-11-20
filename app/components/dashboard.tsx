'use client';
import {
  LineChart,
  CalendarCheck,
  Building,
  CreditCard,
  List,
  Globe,
  Settings,
  ChevronDown,
  
  
} from "lucide-react";
import { useState } from "react";
import MainContent from "./maincontent";

export default function Dashboard() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", icon: LineChart },
    { label: "Reservation", icon: CalendarCheck },
    { label: "Front Office", icon: Building },
    { label: "Bill and Payments", icon: CreditCard },
    { label: "Reports", icon: List },
    { label: "Website CMS", icon: Globe },
    { label: "Settings", icon: Settings },
  ];
  const SidebarContent = () => (
    <>
     

     <nav className="space-y-1 text-sm font-medium">
      {navItems.map(( item,index ) => (
       <button
       key={item.label}
       onClick={() => setActiveIndex(index)}
       className={`w-full flex items-center gap-2 px-2 sm:px-3 md:px-4 py-2 rounded-lg transition font-medium
         ${
           activeIndex === index
             ? "bg-[#2563EB] text-white font-semibold"
             : "text-[#374151] hover:bg-gray-100 hover:text-gray-900"
         }`}
     >
       {/* Icon */}
       <item.icon
         color={activeIndex === index ? "white" : "#374151"}
         className="w-4 h-4 md:w-5 md:h-5 shrink-0"
       />
     
       {/* Label — hide on very small screens */}
       <span className=" sm:inline text-xs md:text-sm truncate">{item.label}</span>
     </button>
      ))}
    </nav>

      
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col md:flex-row">
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden" 
        onClick={() => setIsMobileNavOpen(false)} />
      )}

      <aside className="hidden md:flex flex-col bg-[#FFFFFF] border-l border-gray-200 w-64 p-2">
        <SidebarContent />
      </aside>

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-50 border-l border-gray-200 p-6 z-50 transition-transform duration-300 md:hidden ${
          isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-end justify-end mb-10">
          
          <button
            className="h-9 w-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500"
            onClick={() => setIsMobileNavOpen(false)}
            aria-label="Close navigation"
          >
            ✕
          </button>
        </div>
        <SidebarContent />
      </div>

      <main className="border-b border-black flex-1 min-w-0 flex flex-col">

      {/* HEADER */}
      <header className="border-b border-gray-200 px-4 sm:px-5 py-3 flex items-center justify-between ">
        
      <div className="flex items-center">
    <button
      className="h-10 w-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 md:hidden"
      onClick={() => setIsMobileNavOpen(true)}
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

      {/* MAIN CONTENT */}
      <div className="flex flex-col justify-center items-center h-full w-full">
        <MainContent index={activeIndex} name={navItems[activeIndex].label} />
      </div>
    </main>
      
    </div>
  );
}
