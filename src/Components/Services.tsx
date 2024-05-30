import { useContext, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { MyContext } from "./Context";

function Services() {
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

    ScrollReveal().reveal("#services", config);
  }, []);

  const services = [
    { en: "Service one", ka: "სერვისი ერთი" },
    { en: "Service two", ka: "სერვისი ორი" },
    { en: "Service three", ka: "სერვისი სამი" },
    { en: "Service four", ka: "სერვისი ოთხი" },
  ];

  return (
    <div id="services" className="pt-[75px] px-[30px]">
      <div className="flex justify-center items-center text-[15px] text-[#E3B81E] font-bold ">
        <button className="bg-[#f6f2e2] rounded-full px-[20px] py-[3px] ">
          {changeLanguage === "ENG" ? "Services" : "სერვისები"}
        </button>
      </div>

      <div className="flex justify-center items-center text-[30px] font-bold mt-[20px] text-center md:text-[32px] ">
        <h1 className="text-[#444444]">
          {changeLanguage === "ENG"
            ? "We do offer awesome"
            : "ჩვენ გთავაზობთ გასაოცარ"}
          <span className="text-[#E3B81E] ">
            <br />
            {changeLanguage === "ENG" ? "Services" : "სერვისებს"}
          </span>
        </h1>
      </div>

      <div className="flex justify-center items-center mt-[15px] m-width-[70px] text-center text-[#444444] px-[10px]">
        <p>
          {changeLanguage === "ENG"
            ? "Services will be added soon"
            : "სერვისები მალე დაემატება"}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mx-auto mt-[15px] sm:flex-row sm:flex-wrap sm:justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-[300px] h-[300px] m-4 bg-gray-200 flex items-center justify-center text-center transform transition-transform duration-300 hover:bg-[#E3B81E] hover:scale-105"
          >
            <p className="text-lg font-bold text-[#111]">
              {changeLanguage === "ENG" ? service.en : service.ka}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
