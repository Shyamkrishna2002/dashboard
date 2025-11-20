'use client';
import Link from "next/link";
import {
    LineChart,
    CalendarCheck,
    Building,
    CreditCard,
    List,
    Globe,
    Settings,
    ChevronDown,
    Icon,
 
  } from "lucide-react";
import { useState } from "react";
import MainContent from "./maincontent";
import { usePathname } from "next/navigation";
import Sidebarelements from "./sidebarelements";

export default function Sidebar() {
  const navItems = [
    { label: "Dashboard", icon: LineChart, href: "/dashboard" },
    { label: "Reservation", icon: CalendarCheck,href: "/reservation" },
    { label: "Front Office", icon: Building,href: "/frontoffice" },
    { label: "Bill and Payments", icon: CreditCard ,href: "/billsanpayments"},
    { label: "Reports", icon: List,href: "/reports" },
    { label: "Website CMS", icon: Globe ,href: "/webcms"},
    { label: "Settings", icon: Settings ,href: "/settings"},
  ];
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  
  const [activeIndex, setActiveIndex] = useState(0);
  

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col md:flex-row">
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden" 
        onClick={() => setIsMobileNavOpen(false)} />
      )}

      <aside className={`hidden md:flex flex-col bg-[#FFFFFF] border-l border-gray-200  p-2 
    isCollapsed ? "w-15" : "w-64"
  } `}>
    <div>
    <button
  className="p-2 text-gray-500 hover:bg-gray-100 rounded"
  onClick={() => setIsCollapsed(!isCollapsed)}
>
  {isCollapsed ? "→" : "←"} {/* Or use a lucide-react icon */}
</button>

    </div>
      <nav className="space-y-1 text-sm font-medium">
         {navItems.map(( item,index ) => 
         
         (
          <Sidebarelements  key={item.label} label={item.label} itemicon={item.icon} href={item.href} index={index}
           activeIndex={activeIndex} // 👈 shared state
           setActiveIndex={setActiveIndex} iscollapse={isCollapsed} />
         ))}
       </nav>
       
        
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
        <nav className="space-y-1 text-sm font-medium">
         {navItems.map(( item,index ) => 
         
         (
          <Sidebarelements  key={item.label} label={item.label} itemicon={item.icon} href={item.href} index={index} activeIndex={0} setActiveIndex={function (index: number): void {
             throw new Error("Function not implemented.");
           } } iscollapse={isCollapsed} />
          
         ))}
       </nav>
        
      </div>

     
    </div>
  );
}