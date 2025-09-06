import React from "react";

import { motion } from "framer-motion";
import { Instrument_Sans } from "next/font/google";

interface CardData {
  name: String;
  id: number;
  tech: Array<String>;
  desc: string;
  img: string;
  url: string;
}

const projects = [
  {
    name: "Databooku",
    url: "https://www.databooku.com/",
    tech: ["Nextjs", "Typescript", "MONGODB"],
    desc: "A platform that consolidates public Jupyter Notebooks and Python scripts into a centralized location. It offers a showcase feature to demonstrate complete machine learning pipelines",
    img: "/projects/Databooku.png",
  },
  {
    name: "MovAI",
    url: "https://moviedb.arpangtm.com.np/",
    tech: [
      "ExpressJS",
      "Typescript",
      "AWS Dynamo DB",
      "Lambda Function",
      "React",
      "LLM",
    ],
    desc: "Powered by the IMDb API, this website delivers a seamless and immersive experience, ensuring you have all the details you need at your fingertips.",
    img: "/projects/MovieDB.png",
  },
  {
    name: "3d Tech Shop",
    url: "https://3dtechverse.arpangtm.com.np/",
    tech: ["3JS", "TAILWIND", "NEXT JS", "MONGODB", "NextAuth"],
    desc: "A 3D ecommerce website that has everything you need. You can browse products in amazing 3D, easily make payments, and securely create an account.",
    img: "/projects/3dtech.png",
  },

  {
    name: "Sanskar School",
    url: "https://www.sanskar.edu.np/",
    tech: ["HTML", "Typescript", "TAILWIND", "NEXT JS"],
    desc: "Official website for Sanskar Shikshyalaya with user-friendly interface that showcases school information, admissions, and curriculum details.",
    img: "/projects/Sanskar.png",
  },

  {
    name: "NexCLI",
    url: "https://github.com/arpangtm/nexcli",
    tech: ["Python", "Langchain", "RAG"],
    desc: "A command line interface for Nextjs projects",
    img: "/projects/nexcli.png",
  },
];
const sans = Instrument_Sans({ subsets: ["latin-ext"], weight: "700" });

function Projects() {
  return (
    <section>
      <div id="projects" className="text-center font-black text-4xl mb-20">
        <h1 className={sans.className}>PROJECTS</h1>
      </div>
      <div className="flex flex-col mx-5 xl:mx-56 space-y-10">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              id={index}
              name={project.name}
              tech={project.tech}
              desc={project.desc}
              img={project.img}
              url={project.url}
            ></ProjectCard>
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({ id, name, tech, desc, img, url }: CardData) {
  const iseven = id % 2 == 0 ? true : false;
  return (
    <a target="_blank" href={url}>
      <div
        className={`flex flex-col items-center justify-around w-full group border-0 rounded-lg shadow bg-transparent p-4 ${
          iseven ? "md:flex-row" : "md:flex-row-reverse"
        } gap-12 md:gap-4`}
      >
        <motion.img
          initial={{ x: iseven ? 50 : -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.5 }}
          transition={{
            duration: 1,
            scale: { duration: 0.2 },
          }}
          viewport={{ once: true }}
          className={`object-cover w-full md:w-2/5 rounded-lg h-auto transition-all ease-in-out duration-300 group-hover:scale-125 p-2`}
          style={{ boxShadow: "0 0 1px 2px #f0f,0 0 3px 4px #0ff", maxHeight:"250px" }}
          src={img}
          width={150}
          height={150}
          alt=""
        ></motion.img>
        <motion.div
          initial={{ x: iseven ? -50 : 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className={`flex flex-col justify-between leading-normal w-full md:w-2/5`}
        >
          <h5 className="mb-2 text-3xl font-bold tracking-tight transition-all ease-in-out duration-300 text-white">
            &lt;{name}/&gt;
          </h5>
          <h3 className="pr-5 w-auto h-1/2 line-clamp-3 md:text-clip overflow-hidden ...">
            {desc}
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {tech.map((tag) => {
              return (
                <span
                  key={null}
                  className="border-2 border-gray-500 bg-transparent rounded-lg px-2 py-1 text-gray-500"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </a>
  );
}

export default Projects;
