import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import NavMenu from "./navMenu";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="flex gap-14 items-center justify-center">
        <li>
          <Link href="#">
            <FaApple />
          </Link>
        </li>
        <li>
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
