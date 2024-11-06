"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { navItems } from "./Navbar.data";

export default function NavbarMobile() {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const handleDropdownToggle = (name: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const NavItem = ({ item, depth = 0 }: { item: any; depth?: number }) => {
    const isOpen = openDropdowns.includes(item.name);

    const handleItemClick = () => {
      if (item.subItems) {
        handleDropdownToggle(item.name);
      }
      if (item.href) {
        window.location.href = item.href;
      }
    };

    return (
      <div className="relative w-full">
        {item.subItems ? (
          <>
            <button
              className={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 ${
                depth > 0 ? "pl-8" : ""
              }`}
              onClick={handleItemClick}
            >
              {item.name}
              <ChevronDown
                className={`ml-1 h-4 w-4 transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="pl-4">
                {item.subItems.map((subItem: any, index: number) => (
                  <NavItem key={index} item={subItem} depth={depth + 1} />
                ))}
              </div>
            )}
          </>
        ) : (
          <a
            href={item.href}
            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
              depth > 0 ? "pl-8" : ""
            }`}
          >
            {item.name}
          </a>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-white shadow-md lg:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navItems.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>
    </nav>
  );
}
