"use client";
import Link from "next/link";
import { useMenu } from "../context/MenuContext";
import GnbPC from "./gnbPC";

function NavMenu() {
  const { isOpenMenu, setIsOpenMenu } = useMenu();

  return (
    <div className="navigation-boxes">
      <div>
        <Link href="#" onMouseEnter={() => setIsOpenMenu(true)}>
          Store
        </Link>
        <GnbPC />
      </div>
      <Link href="#" onMouseEnter={() => setIsOpenMenu(true)}>
        Mac
      </Link>
      <Link href="#" onMouseEnter={() => setIsOpenMenu(true)}>
        iPad
      </Link>
      <Link href="#" onMouseEnter={() => setIsOpenMenu(true)}>
        iPhone
      </Link>
      <Link href="#" onMouseEnter={() => setIsOpenMenu(true)}>
        Watch
      </Link>
      <Link href="#" onMouseEnter={() => setIsOpenMenu(true)}>
        AirPods
      </Link>
      <Link href="#" onMouseEnter={() => setIsOpenMenu(true)}>
        TV & Home
      </Link>
      <Link href="#" onMouseEnter={() => setIsOpenMenu(true)}>
        Entertainment
      </Link>
      <Link href="#" onMouseEnter={() => setIsOpenMenu(true)}>
        Accessories
      </Link>
      <Link href="#" onMouseEnter={() => setIsOpenMenu(true)}>
        Support
      </Link>
    </div>
  );
}

export default NavMenu;
