import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_0px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_top,rgba(0,0,0,10),rgba(0,0,0,0)_70%)]
    [mask-repeat:no-repeat] [mask-position:center] [mask-size:100%]"
      />

      {/* Main Content */}
      <div className="relative z-10 flex mt-20 justify-center min-h-screen px-6 sm:px-8 lg:px-12">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div className="mb-6" variants={itemVariants}>
            <motion.span
              className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-sm sm:text-base font-medium text-purple-300 border border-purple-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hello, I'm
            </motion.span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Arpan Gautam
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light mb-8 text-slate-300"
            variants={itemVariants}
          >
            Software Developer &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-medium">
              Creative Problem Solver
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className=" sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-[180%] "
            variants={itemVariants}
          >
            I craft clean, responsive websites that feel intuitive and look
            sharp. I'm also drawn to AI, cloud systems, and infrastructure—tools
            that shape how we build and scale. Every project for me is a chance
            to make something useful, reliable, and a little smarter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.button
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = "/#projects";
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FiArrowRight />
                </motion.div>
              </span>
            </motion.button>

            <motion.button
              className="group px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
              onClick={() => {
                window.open(
                  "https://www.dropbox.com/scl/fi/spga819stemn5ah612wzu/Arpan-Gautam-Resume-Final.pdf?rlkey=lgeqs33716i6lemfo99vjs42w&st=mdzcpsz1&dl=0",
                  "_blank"
                );
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <FiDownload />
                Download Resume
              </span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            variants={itemVariants}
          >
            {[
              {
                icon: FiGithub,
                href: "https://github.com/arpangautam",
                label: "GitHub",
              },
              {
                icon: FiLinkedin,
                href: "https://www.linkedin.com/in/arpangautam/",
                label: "LinkedIn",
              },
              {
                icon: FiMail,
                href: "mailto:gautamarpan8@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="group p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-purple-500 transition-all duration-300 backdrop-blur-sm"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6 text-slate-400 group-hover:text-purple-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="relative top-5 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="flex flex-col items-center gap-2 text-white/40"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm">Scroll to explore</span>
              <div className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
