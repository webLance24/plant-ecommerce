import { createContext, useContext } from "react";

interface ComponentsProps {
  // hidden: boolean;
  // setHidden: (hidden: boolean) => void;
  // menu: boolean;
  // setMenu: (menu: boolean) => void;
  selected: string;
  setSelected: (selected: string) => void;
  isOpen: boolean;
  toggleOpen: (isOpen: boolean) => void;
  scrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
  // changeLanguage: string;
  // setChangeLanguage: (changeLanguage: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  changeLanguage: string;
  setChangeLanguage: (changeLanguage: string) => void;
}

export const MyContext = createContext<ComponentsProps | null>(null);

export function Context() {
  const context = useContext(MyContext);
  return context;
}
