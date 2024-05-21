import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Services() {
  // on scroll show component smooth effect
  useEffect(() => {
    const config = {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 300,
      opacity: 0,
      easing: "ease-in-out",
      reset: true,
    };

    ScrollReveal().reveal("#services", config);
  }, []);

  const services = [
    "Service one",
    "Service two",
    "Service three",
    "Service four",
  ];

  return (
    <div id="services" className="pt-[75px] px-[30px]">
      <div className="flex justify-center items-center text-[15px] text-[#E3B81E] font-bold ">
        <button className="bg-[#f6f2e2] rounded-full px-[20px] py-[3px] ">
          Services
        </button>
      </div>

      <div className="flex justify-center items-center text-[30px] font-bold mt-[20px] text-center md:text-[32px] ">
        <h1 className="text-[#444444]">
          We do offer awesome{" "}
          <span className="text-[#E3B81E] ">
            <br />
            Services
          </span>
        </h1>
      </div>

      <div className="flex justify-center items-center mt-[15px] m-width-[70px] text-center text-[#444444] px-[10px]">
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita <br /> at voluptas atque vitae autem.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mx-auto mt-[15px] sm:flex-row sm:flex-wrap sm:justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-[300px] h-[300px] m-4 bg-gray-200 flex items-center justify-center text-center transform transition-transform duration-300 hover:bg-[#E3B81E] hover:scale-105"
          >
            <p className="text-lg font-bold text-[#111]">{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
