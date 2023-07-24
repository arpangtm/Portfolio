import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instrument_Sans } from "next/font/google";

const sans= Instrument_Sans({subsets:["latin-ext"], weight:"700"})
function Education() {
  return (
    <section id="education" className="mt-32">
      <div id="projects" className="text-center font-black text-4xl mb-20">
        <h1 className={sans.className}>Education</h1>
      </div>
      <div className="flex flex-col relative items-center">
        <Image
          //   className="absolute left-1/2"
          src="/whitecircle.png"
          width={200}
          height={200}
          alt="CircleTop"
          className="absolute -top-3 w-7"
        ></Image>

        <motion.img
          //   className="absolute left-1/2"
          src="/education/gems.png"
          width={200}
          height={200}
          alt="CircleTop"
          className="absolute top-[10%] w-44 z-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        ></motion.img>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="absolute top-1/4 md:top-[15%] w-4/5 md:w-1/3 md:left-[55%] text-gray-800 bg-white rounded-lg p-4"
        >
          <h1 className="text-xl md:text-2xl font-bold text-[#17366D]">GEMS</h1>
          <p className="border-gray-200">
            Graduated middle school from Graded English Medium School
          </p>
        </motion.div>

        <motion.img
          //   className="absolute left-1/2"

          src="/education/trinity.png"
          width={200}
          height={200}
          alt="CircleTop"
          className="absolute top-[35%] w-44 z-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 1,
            delay: 1.5,
          }}
          viewport={{ once: true }}
        ></motion.img>

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: true }}
          className="absolute top-1/2 md:top-[40%] w-4/5 mx-2 md:w-1/3 md:right-[55%] text-gray-800 bg-white rounded-lg p-4"
        >
          <h1 className="text-xl md:text-2xl font-bold text-[#FBB031]">
            Trinity
          </h1>
          <p>Graduated highschool From Trinity International College</p>
        </motion.div>
        <motion.img
          //   className="absolute left-1/2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 1,
            delay: 2,
          }}
          viewport={{ once: true }}
          src="/education/bachelors.png"
          width={200}
          height={200}
          alt="CircleTop"
          className="absolute top-[60%] w-44 z-10"
        ></motion.img>

        <div
          id="line"
          className="border-r-8 border-white h-screen w-0 rounded-full"
        ></div>
      </div>
    </section>
  );
}

export default Education;
