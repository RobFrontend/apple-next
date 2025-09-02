"use client";

import Link from "next/link";
import { useMenu } from "../context/MenuContext";
import gnb from "../gnb/gnb";

function GnbPC() {
  const { isOpenMenu, setIsOpenMenu } = useMenu();
  const gnbArr = gnb[0].content;
  console.log(gnbArr);
  return (
    <div
      className={
        isOpenMenu
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
          {gnbArr.map((g) => (
            <div key={g.l2} className="flex flex-col pt-[4.2rem] pb-[9.6rem]">
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
  );
}

export default GnbPC;
