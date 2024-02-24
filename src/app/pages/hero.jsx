"use client";
import React from "react";
import { motion } from "framer-motion";

function hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row justify-center mx-auto px-4 md:px-auto gap-x-12">
        {" "}
        <div className="flex flex-col">
          <motion.div
            className="flex pb-4 overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 2 }}
          >
            <h1 className="text-6xl md:text-8xl font-clash">
              Hey there
              <span className="text-primary pt-2">!</span>
            </h1>
          </motion.div>

          <span className="text-lg md:text-2xl">i am</span>
          <span className="text-2xl md:text-4xl pb-6 font-league">
            Saminda Tharuka
          </span>
        </div>
        <div className="flex flex-col px-4 justify-center border-l-2 border-primary overflow-hidden">
          <motion.div
            className="flex flex-col"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            <span className="text-2xl md:text-3xl">Designer</span>
            <span className="text-2xl md:text-3xl">Product Manager</span>
            <span className="text-2xl md:text-3xl">Web Developer</span>
            <span className="text-2xl md:text-3xl">
              Creating beautiful and engaging digital experiences
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default hero;
