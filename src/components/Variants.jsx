import { motion } from "framer-motion";
import React from "react";

const shapeVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,

      type: "spring",
    },
  },
};
const childVariants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 2,
    transition: {
      duration: 2,
    },
  },
};

const Variants = () => {
  return (
    <motion.div
      variants={shapeVariants}
      initial="initial"
      animate="animate"
      className="bg-green-700 relative flex mx-auto rounded-md border m-3 w-32 h-32"
    >
      <motion.div
        variants={childVariants}
        className="bg-red-600 absolute h-10 border  flex top-[35%]  left-[35%] w-10 rounded-full"
      ></motion.div>
    </motion.div>
  );
};

export default Variants;
