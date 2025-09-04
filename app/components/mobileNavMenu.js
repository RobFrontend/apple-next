import { useState } from "react";
import gnb from "../gnb/gnb";
import { RiCloseLargeFill } from "react-icons/ri";
import Link from "next/link";

function MobileNavMenu({ isOpen, setIsOpen }) {
  const gnbArr = gnb;
  const [isOpenGnb, setIsOpenGnb] = useState(false);
  const [isActiveId, setIsActiveId] = useState(null);

  function openGnbSide(e) {
    setIsActiveId(e);
    setIsOpenGnb(true);
  }

  function hideGnbSide() {
    setIsActiveId(null);
    setIsOpenGnb(false);
  }

  function closeAllGnb() {
    setIsActiveId(null);
    setIsOpenGnb(false);
    setIsOpen(false);
  }

  return (
    <div
      className={
        isOpen ? "mobile-nav show-down" : "mobile-nav hide-up relative"
      }
    >
      <ul className="mobile-nav-box">
        <p
          onClick={hideGnbSide}
          className={isOpenGnb ? "z-[9999] cursor-pointer w-min" : "opacity-0"}
        >
          Back
        </p>
        <div className="test">
          {gnbArr.map((g) => (
            <li
              key={g.id}
              onClick={() => openGnbSide(g.id)}
              className="cursor-pointer"
            >
              {g.title}

              <div
                className={
                  isOpenGnb && isActiveId === g.id
                    ? "gnb-aside show-left cursor-default"
                    : " gnb-aside hide-right"
                }
              >
                <div className="p-[6rem]">
                  {g.content.map((g) => (
                    <div key={g.l2} className="flex flex-col p-[2rem]">
                      <p className="gnbmo-l2">{g.l2}</p>
                      {g.l3.map((l3) => (
                        <Link
                          href={l3.link}
                          key={l3.title}
                          className="gnbmo-l3"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          {l3.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </div>
      </ul>
      <div className="z-[9999]">
        <button onClick={closeAllGnb} className="cursor-pointer">
          <RiCloseLargeFill />
        </button>
      </div>
    </div>
  );
}

export default MobileNavMenu;
