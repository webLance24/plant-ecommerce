import { useEffect } from "react";
import Rice from "../../public/assets/grains.png";
// import Grains from "../../public/assets/grains.jpg";
import ScrollReveal from "scrollreveal";

function About() {
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
          ABOUT
        </button>
      </div>
      <div className="flex justify-center items-center mt-[20px] px-[15px]">
        <h1 className="text-[#444444] text-[30px] lg:text-[32px] font-bold">
          Learn More <span className="text-[#E3B81E]">About US</span>
        </h1>
      </div>

      <div className="flex justify-center items-center mt-[15px] m-width-[70px] text-center text-[#444444] px-[15px]">
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita <br /> at voluptas atque vitae autem.
        </p>
      </div>

      <div className="flex-wrap justify-center items-center mt-[40px] px-[15px] grid">
        <p className="text-center md:max-w-[800px] ">
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="mt-[20px]">
          <p className="flex items-center justify-center gap-[5px]">
            <img src={Rice} alt="" className="w-[25px] h-[25px]" />
            Ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <p className="flex items-center justify-center gap-[5px]">
            <img src={Rice} alt="" className="w-[25px] h-[25px]" />
            Ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <p className="flex items-center justify-center gap-[5px]">
            <img src={Rice} alt="" className="w-[25px] h-[25px]" />
            Ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </div>
      </div>

      <div className="relative mt-[30px] bg-image">
        {/* <img src={Grains} alt="Grains" className="w-full h-auto" /> */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">Intel Express</span>
        </div>
      </div>
    </div>
  );
}

export default About;
