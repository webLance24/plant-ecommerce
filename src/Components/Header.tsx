import { useContext, useEffect, useState } from "react";
import { MyContext } from "./Context";
import logo from "../../public/assets/logo.png";
import { Link } from "react-scroll";
import geo from "../../public/assets/ge.svg";
import eng from "../../public/assets/us.svg";

function Header() {
  const context = useContext(MyContext);
  const { scrolled, setScrolled, changeLanguage, setChangeLanguage }: any =
    context;

  const [selected, setSelected] = useState<{ en: string; ka: string }>({
    en: "Home",
    ka: "მთავარი",
  });

  const buttonCategories = [
    { en: "Home", ka: "მთავარი" },
    { en: "About", ka: "შესახებ" },
    { en: "Services", ka: "სერვისები" },
    { en: "Contact", ka: "კონტაქტი" },
  ];

  const categories = [
    {
      title: "ENG",
      src: eng,
    },
    {
      title: "GEO",
      src: geo,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const sections = buttonCategories.map((category) =>
      category.en.toLowerCase().replace(/\s+/g, "-")
    );
    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (
        section &&
        section.offsetTop <= window.scrollY + 100 &&
        section.offsetTop + section.offsetHeight > window.scrollY + 100
      ) {
        setSelected({
          en: buttonCategories[i].en,
          ka: buttonCategories[i].ka,
        });
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-${
        scrolled ? "black" : "transparent"
      } bg-opacity-80 w-[100%] h-[70px] flex fixed justify-between items-center z-[10]`}
    >
      <Link to={"home"} spy={true} smooth={true} offset={0} duration={500}>
        <img
          className="w-[60px] cursor-pointer ml-[32px] mr-[auto]"
          src={logo}
          alt="here is weblance logo"
        />
      </Link>
      <div className="hidden md:flex justify-center items-center flex-row gap-[40px] mr-[30px] ml-[auto]">
        {buttonCategories.map((category, index) => {
          const categoryId = category.en.toLowerCase().replace(/\s+/g, "-");
          return (
            <Link
              key={index}
              to={categoryId}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div
                key={index}
                onClick={() =>
                  setSelected({
                    en: category.en,
                    ka: category.ka,
                  })
                }
                className="group"
              >
                <span
                  className={`uppercase text-[15px] font-semibold pt-[3px] pb-[3px] rounded-[5px] text-[white] duration-300 ease-in-out cursor-pointer`}
                >
                  {changeLanguage === "ENG" ? category.en : category.ka}
                </span>
                <div
                  className={`w-full h-[2px] bg-[#E3B81E] transition-transform duration-300 ease-in-out transform origin-center ${
                    selected[changeLanguage === "ENG" ? "en" : "ka"] ===
                    (changeLanguage === "ENG" ? category.en : category.ka)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="dropdown-content px-[10px] py-[4px] z-10 rounded-[5px] flex flex-row gap-[10px] mr-[70px] md:mr-[30px]">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setChangeLanguage(category.title);
              }}
            >
              <img
                className="w-[15px] h-[15px] cursor-pointer hover:scale-125 transition-transform duration-500"
                src={category.src}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </header>
  );
}

export default Header;
