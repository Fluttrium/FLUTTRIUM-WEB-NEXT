import { useState } from "react";
import Link from "next/link";
import { MenuItem } from "@/types";

// Типизация, если нужна

interface MobileMenuProps {
  menuItems: MenuItem[];
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems, toggleMenu }) => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="absolute top-16 left-0 right-0 bg-black/80 p-4 rounded-lg md:hidden">
      {menuItems.map((item, index) => (
        <div key={index} className="mb-2">
          <button
            onClick={() => toggleExpand(index)}
            className="text-white font-semibold w-full text-left"
          >
            {item.title}
          </button>
          {expanded[index] && (
            <ul className="mt-2 pl-4">
              {item.children?.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subItem.route}
                    onClick={toggleMenu}
                    className="text-gray-300"
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;
