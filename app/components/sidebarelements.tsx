"use client";
import Link from "next/link";
import type { ElementType } from "react";

type Props = {
  label: string;
  itemicon: ElementType;
  href: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  iscollapse:boolean
};




export default function Sidebarelements({
  label,
  itemicon: ItemIcon,
  href,
  index,
  activeIndex,
  setActiveIndex,
  iscollapse
}: Props) {
  const isActive = activeIndex === index;

  return (
    <Link
      href={href}
      onClick={() => setActiveIndex(index)}
      className={`w-full flex items-center gap-2 px-2 sm:px-3 md:px-4 py-2 rounded-lg transition font-medium ${
        isActive
          ? "bg-[#2563EB] text-white font-semibold"
          : "text-[#374151] hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      <ItemIcon
        color={isActive ? "white" : "#374151"}
        className="w-4 h-4 md:w-5 md:h-5 shrink-0"
      />
      <span  className={`truncate text-xs md:text-sm transition-all duration-300 ${
    iscollapse ? "hidden" : "inline"
  }`}>{label}</span>
    </Link>
  );
}
