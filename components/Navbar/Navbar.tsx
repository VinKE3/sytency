"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-16">
        <div className="flex items-center">
          <div className="">
            <div className="flex items-baseline ">
              <ul className="flex items-center justify-center space-x-10 px-4 py-2 text-md font-medium">
                <li className="font-semibold text-white  hover:text-masyp">
                  <Link href="#">Inicio</Link>
                </li>
                <li className="font-semibold text-white  hover:text-masyp">
                  <Link href="#">Nosotros</Link>
                </li>
                <li className="font-semibold text-white  hover:text-masyp">
                  <Link href="#">Servicios</Link>
                </li>
                <li className="font-semibold text-white  hover:text-masyp">
                  <Link href="#">Portafolio</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
