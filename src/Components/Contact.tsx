import Location from "../../public/assets/Location.png";
import Phone from "../../public/assets/Phone.png";
import Gmail from "../../public/assets/Gmail.png";

function Contact() {
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
      <div className="flex justify-center items-center text-[#E3B81E]">
        <button className="bg-[#f6f2e2] rounded-full px-[20px] py-[3px]">
          CONTACT
        </button>
      </div>
      <div className="flex justify-center items-center text-[30px] mt-[20px]">
        <h1 className="text-[#444444]">
          Contact <span className="text-[#E3B81E]">US</span>
        </h1>
      </div>
      <div className="flex justify-center items-center mt-[15px] m-width-[70px] text-center text-[#444444] px-[10px]">
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita <br /> at voluptas atque vitae autem.
        </p>
      </div>

      <div className="max-w-[770px] mt-[40px] lg:max-w-[948px] xl:max-w-[1674px] 2xl:max-w-[1944px] px-[15px]">
        <iframe
          width="100%"
          height="350px"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sulkhan%20Tsintsadze%206&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex justify-center ml-[20px] flex-col gap-[35px] mt-[80px]">
        {categories.map((category, index) => (
          <div key={index} className="flex gap-[10px]">
            <div className="flex justify-center items-center gap-[5px] rounded-full p-[7px] bg-[#f6f2e2]">
              <img src={category.src} alt={category.title} />
            </div>
            <div>
              <h4 className="">{category.title}</h4>
              <a href={category.href} target="_blank" rel="noopener noreferrer">
                <p className="">{category.text}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
