"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const options = [
  { value: "", label: "Select a service" },
  { value: "ecommerce", label: "eCommerce Development" },
  { value: "rfid", label: "RFID Solutions" },
  { value: "3d", label: "3D Rendering" },
  { value: "manufacturing", label: "Manufacturing Solutions" },
  { value: "marketing", label: "Digital Marketing" },
  { value: "crm", label: "CRM Systems" },
];

export default function CustomSelect({ value, onChange }: any) {
  const [open, setOpen] = useState(false);
//   const containerRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);


  // Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Selected Box */}
      <div
        onClick={() => setOpen(!open)}
        className="
          w-full p-3 pr-10
          bg-white/5 border border-white/10 
          rounded-lg text-white cursor-pointer
          flex justify-between items-center
          focus-within:border-neon-cyan transition
        "
      >
        {value ? options.find(o => o.value === value)?.label : "Select a service"}

        <ChevronDown
          className={`
            w-5 h-5 transition 
            ${open ? "rotate-180 text-neon-cyan" : "text-white/70"}
          `}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <ul
          className="
            absolute left-0 right-0 mt-2 
            bg-[#0B0F15] border border-white/10 
            rounded-lg shadow-xl z-20 
            max-h-60 overflow-y-auto
          "
        >
          {options.map((opt, index) => (
            <li
              key={index}
              className={`
                px-4 py-3 text-sm cursor-pointer transition
                ${opt.value === value ? "bg-neon-cyan/20 text-neon-cyan" : "text-white"}
                hover:bg-neon-cyan/20
              `}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
