"use client"
import { useState } from "react";
import Link from "next/link";
import { FaTelegramPlane, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

// Типы для подменю
interface SubMenuItem {
  route: string;
  title: string;
}

interface MenuItem {
  title: string;
  route: string;
  children?: SubMenuItem[]; // Опциональные подменю
}

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
    <div className="absolute top-16 left-0 right-0 bg-black/80 p-4 rounded-lg md:hidden z-50">
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
                <li key={subIndex} className="mb-2">
                  <Link
                    href={subItem.route}
                    onClick={toggleMenu}
                    className="text-gray-300 hover:text-white"
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div className="mt-4">
        {/* Социальные иконки */}
        <div className="flex justify-between gap-4">
          <Link href="https://t.me/fluttriumchannel" target="_blank">
            <FaTelegramPlane className="text-white text-2xl" />
          </Link>
          <Link href="https://github.com/orgs/Fluttrium" target="_blank">
            <FaGithub className="text-white text-2xl" />
          </Link>
          <Link href="https://www.instagram.com/fluttrium/" target="_blank">
            <FaInstagram className="text-white text-2xl" />
          </Link>
          <Link href="https://www.youtube.com/channel/UCcBh05h-yxZOzXhnOz9ub5w" target="_blank">
            <FaYoutube className="text-white text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
