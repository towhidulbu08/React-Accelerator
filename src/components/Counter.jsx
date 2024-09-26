import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";

const Counter = () => {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 1 });

    return animation.stop;
  }, []);

  return <motion.div>{roundedValue}</motion.div>;
};
export default Counter;
