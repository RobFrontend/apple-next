"use client";
import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export const useMenu = () => useContext(MenuContext);
