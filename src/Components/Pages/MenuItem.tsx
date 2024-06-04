import { motion } from "framer-motion";
import contact from "../../../public/assets/contact.png";
import about from "../../../public/assets/about.png";
import home from "../../../public/assets/home.png";
import services from "../../../public/assets/services-img.png";
import { MyContext } from "../Context";
import { useContext, useState } from "react";
import { Link } from "react-scroll";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const text = [
  { en: "Home", ka: "მთავარი" },
  { en: "About", ka: "შესახებ" },
  { en: "Services", ka: "სერვისები" },
  { en: "Contact", ka: "კონტაქტი" },
];
const imgs = [home, about, services, contact];

export const MenuItem = ({ i }: any) => {
  const context = useContext(MyContext);
  const { isOpen, toggleOpen, changeLanguage }: any = context;

  const [selected, setSelected] = useState<{ en: string; ka: string }>({
    en: "Home",
    ka: "მთავარი",
  });

  const categoryId = text[i].en.toLowerCase();

  const style = { color: "#ffffff" };

  return (
    <Link
      key={i}
      to={categoryId}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="menu-item"
        onClick={() => {
          setSelected({ en: text[i].en, ka: text[i].ka });
          toggleOpen(!isOpen);
        }}
        style={
          selected[changeLanguage === "ENG" ? "en" : "ka"] ===
          (changeLanguage === "ENG" ? text[i].en : text[i].ka)
            ? {
                background:
                  "linear-gradient(to left, #E3B81E 10%, rgba(21, 73, 56, 0) 70%)",
                borderLeft: "2px solid rgb(227, 184, 30)",
              }
            : {}
        }
      >
        <div className="text-placeholder" style={style}>
          <p
            className="uppercase text-[14px] font-medium"
            style={
              selected[changeLanguage === "ENG" ? "en" : "ka"] ===
              (changeLanguage === "ENG" ? text[i].en : text[i].ka)
                ? { color: "#E3B81E" }
                : {}
            }
          >
            {changeLanguage === "ENG" ? text[i].en : text[i].ka}
          </p>
          <img
            className="w-[20px] h-[20px] image-hover-effect"
            src={imgs[i]}
            alt="here add images for each text"
            style={
              selected[changeLanguage === "ENG" ? "en" : "ka"] ===
              (changeLanguage === "ENG" ? text[i].en : text[i].ka)
                ? {
                    filter:
                      "invert(40%) sepia(100%) saturate(400%) hue-rotate(370deg)",
                  }
                : {}
            }
          />
        </div>
      </motion.li>
    </Link>
  );
};
