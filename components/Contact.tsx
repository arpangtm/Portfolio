import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail, SiFacebook } from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";
import { Instrument_Sans } from "next/font/google";

const sans= Instrument_Sans({subsets:["latin-ext"], weight:"700"})

function Contact() {
  const parent = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const child = {
    initial: { x: -50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  const [mail, showMail] = useState(false);

  return (
    <section id="contact" className="mt-32">
      <div id="projects" className="text-center font-white text-4xl mb-20">
        <h1 className={sans.className}>Contact Me</h1>
      </div>
      <div>
        <motion.div
          variants={parent}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex justify-center gap-10 text-5xl"
        >
          <motion.div variants={child}>
            <Link target="_blank" href="https://github.com/arpangtm">
              <AiFillGithub></AiFillGithub>
            </Link>
          </motion.div>
          <motion.div variants={child}>
            <Link target="_blank" href="https://www.linkedin.com/in/arpangtm/">
              <AiFillLinkedin></AiFillLinkedin>
            </Link>
          </motion.div>
          <motion.div variants={child}>
            <Link
              target="_blank"
              href="https://www.facebook.com/arpan.gautam.9678/"
            >
              <SiFacebook></SiFacebook>
            </Link>
          </motion.div>
          <motion.div
            onClick={() => showMail(true)}
            className=" cursor-pointer flex gap-2 items-center group"
            variants={child}
          >
            <SiGmail></SiGmail>
            <p
              className={`text-lg bg-gray-800 ${
                mail ? "inline-block" : "hidden"
              }`}
            >
              gautamarpan8@gmail.com
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
