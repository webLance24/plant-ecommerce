import { useContext, useEffect } from "react";
import { Link } from "react-scroll";
import ScrollReveal from "scrollreveal";
import { MyContext } from "./Context";

function Home() {
  const context = useContext(MyContext);
  const { changeLanguage }: any = context;

  // on scroll show component smooth effect
  useEffect(() => {
    const config = {
      origin: "bottom",
      distance: "0px",
      duration: 1000,
      delay: 300,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    };

    ScrollReveal().reveal("#home", config);
  }, []);

  return (
    <div
      id="home"
      className="flex justify-center items-center flex-col px-[12px] bg-[black] bg-opacity-60"
    >
      <div className="bg-[rgb(21,22,24,0.5)] text-center rounded-[25px] py-[10px] px-[30px] mb-[15px] lg:mb-[30px] outline-none">
        <h3 className="text-[20px] text-[white] font-light lg:text-[26px]">
          {changeLanguage === "ENG" ? "Welcome To " : "მოგესალმებით "}
          <span className="text-[#E3B81E] font-bold">Express Trade</span>
        </h3>
      </div>
      <h1 className="text-[white] text-[28px] lg:text-[38px] text-center uppercase">
        {changeLanguage === "ENG"
          ? "We Are a Grain Import Company"
          : "ჩვენ ვართ ბურღულეულის იმპორტიორი კომპანია"}
      </h1>
      <p className="text-[white] text-[14px] mb-[35px] text-center lg:text-[24px]">
        {changeLanguage === "ENG"
          ? "In Georgia Azerbaijan and Armenia"
          : "საქართველოში აზერბაიჯანსა და სომხეთში"}
      </p>
      <Link to={"about"} spy={true} smooth={true} offset={0} duration={500}>
        <button className="bg-[rgb(21,22,24,0.5)] rounded-[25px] py-[8px] px-[30px] text-[white]  outline-none border-[white] hover:bg-[#E3B81E] duration-300 ease-in-out border-[1px] uppercase font-bold">
          {changeLanguage === "ENG" ? "Get Started" : "დაწყება"}
        </button>
      </Link>
    </div>
  );
}

export default Home;
