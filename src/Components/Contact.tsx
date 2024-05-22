import Location from "../../public/assets/Location.png";
import Phone from "../../public/assets/Phone.png";
import Gmail from "../../public/assets/Gmail.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Contact() {
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

    ScrollReveal().reveal("#contact", config);
  }, []);

  const categories = [
    {
      category: "Location",
      title: "Location",
      text: "Tbilisi, Georgia",
      src: Location,
      href: "https://www.google.com/maps",
    },
    {
      category: "Gmail",
      title: "Gmail",
      text: "giomamula20040211@gmail.com",
      src: Gmail,
      href: "mailto:giomamula20040211@gmail.com",
    },
    {
      category: "Phone",
      title: "Number",
      text: "+995 599 177 612",
      src: Phone,
      href: "tel:+995599177612",
    },
  ];

  return (
    <div id="contact" className="pt-[75px]">
      <div className="flex justify-center items-center text-[#E3B81E] font-bold text-[15px]">
        <button className="bg-[#f6f2e2] rounded-full px-[20px] py-[3px]">
          CONTACT
        </button>
      </div>
      <div className="flex justify-center items-center text-[30px] font-bold mt-[20px]">
        <h1 className="text-[#444444]">
          Contact <span className="text-[#E3B81E]">US</span>
        </h1>
      </div>
      <div className="flex justify-center items-center mt-[15px] m-width-[70px] text-center font-semibold	text-[#444444] px-[15px]">
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita <br /> at voluptas atque vitae autem.
        </p>
      </div>

      <div className="max-w-[770px] mt-[40px] lg:max-w-[948px] xl:max-w-[1674px] 2xl:max-w-[1944px] px-[15px]">
        <iframe
          width="100%"
          height="350px"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%E1%83%90%E1%83%AE%E1%83%90%E1%83%9A%E1%83%92%E1%83%90%E1%83%96%E1%83%A0%E1%83%93%E1%83%9D%E1%83%91%E1%83%98%E1%83%A1%20%E1%83%92%E1%83%90%E1%83%9B%E1%83%96%2056&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex justify-center ml-[20px] flex-col gap-[35px] mt-[80px]  lg:flex-row lg:gap-[190px] mb-[40px] px-[15px]">
        {categories.map((category, index) => (
          <div key={index} className="flex gap-[10px]">
            <div className="flex justify-center items-center gap-[5px] rounded-full p-[12px] bg-[#f6f2e2]">
              <img src={category.src} alt={category.title} />
            </div>
            <div>
              <h4 className="text-[22px] font-semibold">{category.title}</h4>
              <a href={category.href} target="_blank" rel="noopener noreferrer">
                <p className="text-[#816a6e] text-[14px]">{category.text}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <div className="bg-[black] py-[60px]">
          <h1 className="text-[#fff]  flex items-center justify-center">
            ExspressTrade.ge
          </h1>

          <p className="text-[#E3B81E] text-[15px] flex items-center justify-center pt-[10px]">
            Stay in touch with us
          </p>
          {/* <div className="flex justify-center items-center gap-[15px] mt-[20px]">
        <img src={Facebook} alt="" />
        <img src={Instagram} alt="" />
        </div> */}
          <div className="flex justify-center items-center mt-[20px]">
            <h1 className="text-[#E3B81E]">
              <span className="text-[#fff]">Made by </span>
              <a href="https://www.weblance.ge/" target="_blank">
                @webLance
              </a>
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
