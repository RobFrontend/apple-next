"use client";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import NavMenu from "./navMenu";
import { useMenu } from "../context/MenuContext";

function Navigation() {
  const { isOpenMenu } = useMenu();
  return (
    <nav
      className={isOpenMenu ? "navigation bg-white" : "navigation bg-white/80"}
    >
      <ul className="flex gap-14 items-center justify-center">
        <li>
          <Link href="#">
            <FaApple />
          </Link>
        </li>
        <li className="max-lg:hidden">
          <NavMenu />
        </li>
        <li>
          <Link href="#">
            <IoIosSearch />
          </Link>
        </li>
        <li>
          <Link href="#">
            <IoBagOutline />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
