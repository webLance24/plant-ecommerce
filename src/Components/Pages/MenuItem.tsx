import { motion } from "framer-motion";
import contact from "../../../public/assets/contact.png";
import heart from "../../../public/assets/heart.png";
import home from "../../../public/assets/home.png";
import search from "../../../public/assets/search.png";
import { MyContext } from "../Context";
import { useContext } from "react";
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

const text = ["Home", "About", "Services", "Contact"];
const imgs = [home, search, heart, contact];

export const MenuItem = ({ i }: any) => {
  const context = useContext(MyContext);
  const { selected, setSelected, isOpen, toggleOpen }: any = context;

  const categoryId = text[i].toLowerCase();

  const style = { color: "#ffffff" };
  return (
    // here is hamburger menu text list like ul and li
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
          setSelected(text[i]);
          toggleOpen(!isOpen);
        }}
        style={
          selected === text[i]
            ? {
                background:
                  "linear-gradient(to left, #E3B81E 10%, rgba(21, 73, 56, 0) 70%)",
                borderLeft: "(to left, 2px solid rgb(227, 184, 30))",
              }
            : {}
        }
      >
        {/* div for text and images which is in hamburger styles */}

        <div className="text-placeholder" style={style}>
          <p
            className="uppercase text-[14px] font-medium"
            style={
              selected === text[i]
                ? {
                    color: "#E3B81E",
                  }
                : {}
            }
          >
            {text[i]}
          </p>
          <img
            className="w-[20px] h-[20px] image-hover-effect"
            src={imgs[i]}
            alt="here add images for each text"
            style={
              selected === text[i]
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
