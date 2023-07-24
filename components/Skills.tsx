import React from "react";
import { animate, motion } from "framer-motion";
import { Instrument_Sans } from "next/font/google";


const languagesDB = [
  { name: "Javascript", src: "/skills/js.png", id: 1 },
  { name: "Python", src: "/skills/python.png", id: 2 },
  { name: "Typescript", src: "/skills/typescript.png", id: 6 },
  { name: "Kotlin", src: "/skills/kotlin.png", id: 3 },
  { name: "Mysql", src: "/skills/mysql.png", id: 4 },
  { name: "MongoDB", src: "/skills/mongodb.png", id: 5 },
];

const frameworks = [
  { name: "Reactjs", src: "/skills/react.png", id: 1 },
  { name: "Nextjs", src: "/skills/nextjs.png", id: 2 },
  { name: "Node", src: "/skills/nodejs.png", id: 3 },
  { name: "Expressjs", src: "/skills/expressjs.png", id: 4 },
  { name: "Tailwind CSS", src: "/skills/tailwind.png", id: 5 },
  { name: "Three JS", src: "/skills/threejs.png", id: 6 },
];

const others = [
  { name: "Docker", src: "/skills/docker.png", id: 1 },
  { name: "Linux", src: "/skills/linux.png", id: 5 },
  { name: "Git", src: "/skills/git.png", id: 2 },
  { name: "Github", src: "/skills/github.png", id: 3 },
  { name: "Websocket", src: "/skills/websocket.png", id: 4 },
  { name: "WebRTC", src: "/skills/webrtc.png", id: 5 },
];

const sans= Instrument_Sans({subsets:["latin-ext"], weight:"700"})

function Skills() {
  const parent = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const child = {
    initial: { scale: 0 },
    whileInView: { scale: 1 },
  };

  return (
    <section id="skills" className="mt-32 mx-5 md:mx-10 lg:mx-32">
      <div id="projects" className="text-center font-black text-4xl mb-20">
        <h1 className={sans.className}>Skills</h1>
      </div>
      <div>
        <h3 className="text-2xl font-bold">Language</h3>
        <motion.div
          className="flex flex-wrap gap-6 mt-14"
          variants={parent}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {languagesDB.map((item) => {
            return (
              <div key={item.id} className="group flex flex-col items-center ">
                <motion.img
                  // initial={{ scale: 0 }}
                  // whileInView={{ scale: 1 }}
                  variants={child}
                  className="h-20"
                  src={item.src}
                ></motion.img>
                <p className="p-2 bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                  {item.name}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
      <div>
        <h3 className="text-2xl font-bold">Libraries & Frameworks</h3>
        <motion.div
          className="flex flex-wrap gap-6 mt-14"
          variants={parent}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          {frameworks.map((item) => {
            return (
              <div key={item.id} className="group flex flex-col items-center">
                <motion.img
                  variants={child}
                  className="h-20"
                  src={item.src}
                ></motion.img>
                <p className="p-2 bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                  {item.name}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
      <div>
        <h3 className="text-2xl font-bold">Other Technologies</h3>
        <motion.div
          className="flex flex-wrap gap-6 mt-14"
          variants={parent}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ delay: 2 }}
        >
          {others.map((item) => {
            return (
              <div key={item.id} className="group flex flex-col items-center">
                <motion.img
                  variants={child}
                  className="h-20"
                  src={item.src}
                ></motion.img>
                <p className="p-2 bg-gray-800 max-w-fit rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                  {item.name}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

