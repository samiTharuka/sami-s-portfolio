"use client";
import { useState } from "react";
import { motion } from "framer-motion";

function nav() {
  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => {
    setNavbar(!navbar);
    if (!navbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="flex relative justify-between items-center mx-auto z-[80] px-2">
      {!navbar ? (
        <div className="flex justify-between items-center px-8 py-4 fixed top-10 w-full max-w-[1440px] bg-black/20 backdrop-blur-lg">
          <div className="group cursor-pointer flex">
            <span className="text-2xl font-clash uppercase">portfolio</span>
            <div className="hidden md:flex group-hover:translate-x-4 text-2xl font-clash uppercase group-hover:opacity-50 duration-300 opacity-0">
              scroll to explore
            </div>
          </div>
          <div className="cursor-pointer space-y-2" onClick={handleNavbar}>
            <div className="w-24 h-0.5 bg-primary"></div>
            <div className="w-24 h-0.5 bg-primary"></div>
          </div>
        </div>
      ) : (
        <motion.div
          className="flex md:flex-row flex-row-reverse items-center h-screen px-4 fixed top-0 left-0 w-screen bg-black"
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1, duration: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col w-full md:ps-12">
            <span className="text-4xl md:text-9xl font-clash border-b-2 border-primary w-[96%] cursor-pointer">
              about.
            </span>
            <span className="text-4xl md:text-9xl font-clash border-b-2 border-primary w-[90%] cursor-pointer">
              projects.
            </span>
            <span className="text-4xl md:text-9xl font-clash border-b-2 border-primary w-[90%] cursor-pointer">
              skills.
            </span>
            <span className="text-4xl md:text-9xl font-clash border-b-2 border-primary w-[96%] cursor-pointer">
              contact.
            </span>
          </div>

          <div
            className="rounded-full border-2 border-white mx-8 p-6 md:p-16 cursor-pointer"
            onClick={handleNavbar}
          ></div>
        </motion.div>
      )}
    </div>
  );
}

export default nav;
