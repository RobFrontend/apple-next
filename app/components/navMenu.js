"use client";
import Link from "next/link";
import { useMenu } from "../context/MenuContext";
import GnbPC from "./gnbPC";
import gnb from "../gnb/gnb";
import { useState } from "react";

function NavMenu() {
  const gnbArr = gnb;
  const { isOpenMenu, setIsOpenMenu } = useMenu();
  const [isActiveMenu, setIsActiveMenu] = useState(null);

  return (
    <div className="navigation-boxes">
      {gnbArr.map((g) => (
        <div key={g.id} onMouseEnter={() => setIsOpenMenu(true)}>
          <Link href={g.link} onMouseEnter={() => setIsActiveMenu(g.id)}>
            {g.title}
          </Link>
          {/* <GnbPC id={g.id} isActiveMenu={g.id} /> */}
          <div
            className={
              isOpenMenu && isActiveMenu == g.id
                ? "navigation-gnb show-down transition-all duration-500"
                : "navigation-gnb hide-up transition-all duration-500"
            }
          >
            <div
              className="bg-white"
              onMouseEnter={() => setIsOpenMenu(true)}
              onMouseLeave={() => setIsOpenMenu(false)}
            >
              <div className="gnb-box">
                {g.content.map((g) => (
                  <div
                    key={g.l2}
                    className="flex flex-col pt-[4.2rem] pb-[9.6rem]"
                  >
                    <p className="gnb-l2">{g.l2}</p>
                    {g.l3.map((l3) => (
                      <Link href={l3.link} key={l3.title} className="gnb-l3">
                        {l3.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className=" min-h-[80vh]"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NavMenu;
