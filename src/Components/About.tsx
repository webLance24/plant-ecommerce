import { useContext, useEffect } from "react";
import Rice from "../../public/assets/grains.png";
// import Grains from "../../public/assets/grains.jpg";
import ScrollReveal from "scrollreveal";
import { MyContext } from "./Context";

function About() {
  const context = useContext(MyContext);
  const { changeLanguage }: any = context;

  // on scroll show component smooth effect
  useEffect(() => {
    const config = {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 300,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    };

    ScrollReveal().reveal("#about", config);
  }, []);

  return (
    <div id="about" className="pt-[75px]">
      <div className="flex justify-center items-center text-[#E3B81E] px-[15px]">
        <button className="bg-[#f6f2e2] rounded-full px-[20px] py-[3px] font-bold">
          {changeLanguage === "ENG" ? "About" : "შესახებ"}
        </button>
      </div>
      <div className="flex justify-center items-center mt-[20px] px-[15px]">
        <h1 className="text-[#444444] text-[22px] md:text-[28px] lg:text-[32px] font-bold">
          {changeLanguage === "ENG" ? "Learn More " : "გაიგეთ მეტი "}
          <span className="text-[#E3B81E]">
            {changeLanguage === "ENG" ? "About Us" : "ჩვენს შესახებ"}
          </span>
        </h1>
      </div>

      <div className="flex justify-center items-center mt-[15px] m-width-[70px] text-center text-[#444444] px-[15px]">
        <p>
          {changeLanguage === "ENG"
            ? "We are one of the leading grain importing companies in the Caucasus region"
            : "ჩვენ ვართ კავკასიის რეგიონში ერთ-ერთი წამყვანი ბურღულეულის შემომტანი კომპანია"}
        </p>
      </div>

      <div className="flex-wrap justify-center items-center mt-[40px] px-[15px] grid">
        <p className="text-center md:max-w-[800px] ">
          {changeLanguage === "ENG"
            ? "We have been active in the market for several years, have satisfied customers, and our goal is to offer quality products to them."
            : "ჩვენ აქტიურად ვართ ბაზარზე უკვე რამდენიმე წელია, გვყავს კმაყოფილი მომხმარებლები და ჩვენი მიზანია მომხარებლებს შევთავაზოთ ხარისხიანი პროდუქცია"}
        </p>

        <div className="mt-[20px] m-auto flex flex-col">
          <p className="flex items-center gap-[5px]">
            <img src={Rice} alt="" className="w-[25px] h-[25px]" />
            {changeLanguage === "ENG"
              ? "Quality products"
              : "ხარისხიანი პროდუქცია"}
          </p>
          <p className="flex items-center gap-[5px]">
            <img src={Rice} alt="" className="w-[25px] h-[25px]" />
            {changeLanguage === "ENG" ? "Best prices" : "საუკეთესო ფასები"}
          </p>
          <p className="flex items-center gap-[5px]">
            <img src={Rice} alt="" className="w-[25px] h-[25px]" />
            {changeLanguage === "ENG" ? "Fast service" : "სწრაფი მომსახურება"}
          </p>
        </div>
      </div>

      <div className="relative mt-[30px] bg-image">
        {/* <img src={Grains} alt="Grains" className="w-full h-auto" /> */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#E3B81E] text-2xl font-bold ">
            Express Trade
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
