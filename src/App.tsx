import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import { Example } from "./Components/Pages/Example";
import { useState } from "react";
import { Link } from "react-scroll";
import arrowup from "../public/assets/arrowup.png";
import withLoading from "./Components/withLoading";

function App() {
  const [selected, setSelected] = useState<string>("Home");
  const [isOpen, toggleOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [changeLanguage, setChangeLanguage] = useState<string>("ENG");

  return (
    <>
      <MyContext.Provider
        value={{
          selected,
          setSelected,
          isOpen,
          toggleOpen,
          scrolled,
          setScrolled,
          loading,
          setLoading,
          changeLanguage,
          setChangeLanguage,
        }}
      >
        <Header />
        <Example />
        <Home />
        <About />
        <Services />
        <Contact />
        <Link
          to={"home"}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => setSelected("Home")}
        >
          <div
            className={`fixed right-[10px] bottom-[10px] circle cursor-pointer w-[40px] h-[40px] rounded-[50%] hover:bg-[#dccd97] duration-300 ease-in-out outline-none bg-[${
              scrolled ? "#E3B81E" : "transparent"
            }] flex justify-center items-center transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
            style={{ transition: "background-color 0.3s ease-in-out" }}
          >
            <img
              src={arrowup}
              className="hover:scale-105 transition-all duration-300 w-[25px] h-[25px]"
              alt="Scroll Up"
            />
          </div>
        </Link>
      </MyContext.Provider>
    </>
  );
}

export default withLoading(App);
