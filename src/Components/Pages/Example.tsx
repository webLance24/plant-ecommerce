import { useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDimensions } from "../use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { MyContext } from "../Context";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Example = () => {
  const context = useContext(MyContext);
  const { isOpen, toggleOpen }: any = context;

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.0 }}
            onClick={() => {
              toggleOpen(!isOpen);
            }}
          ></motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen(!isOpen)} />
      </motion.nav>
    </>
  );
};
