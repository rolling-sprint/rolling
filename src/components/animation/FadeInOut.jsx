import React from "react";
import { motion } from "framer-motion";

const FadeInOut = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOut;
