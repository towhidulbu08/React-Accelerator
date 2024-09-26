import { motion } from "framer-motion";
import React from "react";

const Keyframe = () => {
  return (
    <motion.div
      className="bg-blue-500 border w-32 h-32 m-4"
      animate={{
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        rotate: [0, 90, 180, 270, 0],
        scale: [0, 0.2, 0.5, 0.75, 1],
      }}
      transition={{ duration: 1.8 }}
    />
  );
};

export default Keyframe;
