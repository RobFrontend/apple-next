"use client";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import NavMenu from "./navMenu";
import { useMenu } from "../context/MenuContext";
import MobileNavMenu from "./mobileNavMenu";
import { useState } from "react";
import { TbMenu } from "react-icons/tb";

function Navigation() {
  const { isOpenMenu, setIsOpenMenu } = useMenu();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={isOpenMenu ? "navigation bg-white" : "navigation bg-white/80"}
      onMouseLeave={() => setIsOpenMenu(false)}
    >
      <ul className="flex gap-14 items-center justify-center max-lg:justify-between">
        <li>
          <Link href="#">
            <FaApple />
          </Link>
        </li>
        <li className="max-lg:hidden">
          <NavMenu />
        </li>
        <div>
          <ul className="flex gap-14 items-center justify-center">
            <li>
              <Link href="#" onMouseEnter={() => setIsOpenMenu(false)}>
                <IoIosSearch />
              </Link>
            </li>
            <li>
              <Link href="#" onMouseEnter={() => setIsOpenMenu(false)}>
                <IoBagOutline />
              </Link>
            </li>
            <li className="min-lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="grid items-center justify-center cursor-pointer"
              >
                <TbMenu />
              </button>
              <MobileNavMenu
                isOpen={isMobileMenuOpen}
                setIsOpen={setIsMobileMenuOpen}
              />
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
