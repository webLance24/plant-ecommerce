import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import { Example } from "./Components/Pages/Example";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState<string>("Home");
  const [isOpen, toggleOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

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
        }}
      >
        <Header />
        <Example />
        <Home />
        <About />
        <Services />
        <Contact />
      </MyContext.Provider>
    </>
  );
}

export default App;
