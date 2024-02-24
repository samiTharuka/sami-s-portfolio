"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function welcome() {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded ? (
        <motion.section
          className="h-screen fixed inset-0 items-center justify-center flex w-full bg-black z-[90]"
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 1.5 }}
          exit={{ opacity: 0, x: -1000 }}
        >
          <div className="flex justify-center items-center overflow-hidden">
            <motion.div
              className="text-4xl text-white lg:text-9xl font-clash uppercase"
              initial={{ y: 0 }}
              animate={{ y: -1000 }}
              transition={{ duration: 2, delay: 1 }}
            >
              welcome
            </motion.div>
          </div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}

export default welcome;
