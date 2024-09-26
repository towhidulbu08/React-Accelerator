import { motion } from "framer-motion";
import React from "react";

const ButtonTap = () => {
  return (
    <div>
      <motion.button
        className="bg-black text-white p-1 border rounded-md m-2"
        whileTap={{ scale: 0.5 }}
        whileHover={{ scale: 1.4 }}
      >
        Tap Be
      </motion.button>
      <motion.button
        className="bg-black text-white p-1 border rounded-md m-2"
        whileTap={{ scale: 0.5 }}
        whileHover={{
          scale: 1.4,
          transition: { yoyo: Infinity },
        }}
      >
        Tap Be
      </motion.button>
    </div>
  );
};

export default ButtonTap;
