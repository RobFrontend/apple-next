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
      {children}
    </main>
  );
}

export default Main;
