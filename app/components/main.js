"use client";
import { useMenu } from "../context/MenuContext";

function Main({ children }) {
  const { isOpenMenu } = useMenu();
  return (
    <main
      className={
        isOpenMenu
          ? "main-padding blur-[20px] transition-all duration-500"
          : "main-padding transition-all duration-500"
      }
    >
      <div
        className={
          isOpenMenu
            ? "absolute top-0 left-0 h-screen w-full bg-white/40 z-[2] transition-all duration-1000"
            : "hidden transition-all duration-1000"
        }
      ></div>
      {children}
    </main>
  );
}

export default Main;
