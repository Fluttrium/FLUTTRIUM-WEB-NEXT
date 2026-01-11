import Link from "next/link";
import { useState } from "react";

function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-sm font-semibold py-2 px-4 bg-gray-200 rounded-md"
      >
        Продукты
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-md w-48">
          <ul className="text-sm p-4">
            <li>
              <Link href="/retail" className="block py-1">
                Retail
              </Link>
            </li>
            <li>
              <Link href="/corporation" className="block py-1">
                Corporation
              </Link>
            </li>
            <li>
              <Link href="/internetshop" className="block py-1">
                Internet Shop
              </Link>
            </li>
            <li>
              <Link href="/crm" className="block py-1">
                CRM
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductDropdown;
