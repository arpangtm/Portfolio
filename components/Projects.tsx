import React from "react";

import { motion } from "framer-motion";

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
    id: 1,
    key: 1,
    name: "3d Tech Shop",
    url: "https://3dtechnoverse.vercel.app/",
    tech: ["3JS", "TAILWIND", "NEXT JS", "MONGODB", "NextAuth"],
    desc: "A 3D ecommerce website that has everything you need. You can browse products in amazing 3D, easily make payments, and securely create an account",
    img: "/projects/3dtech.jpg",
  },
  {
    id: 2,
    key: 2,
    name: "Sanskar School",
    url: "https://www.sanskar.edu.np/",
    tech: ["HTML", "Typescript", "TAILWIND", "NEXT JS"],
    desc: "Official website for Sanskar Shikshyalaya with user-friendly interface that showcases school information, admissions, and curriculum details.",
    img: "/projects/sanskar.jpg",
  },
  {
    id: 3,
    key: 3,
    name: "Movie DB",
    url: "https://moviedb-tawny.vercel.app/",
    tech: ["IMDB API", "CSS", "React"],
    desc: "Powered by the IMDb API, this website delivers a seamless and immersive experience, ensuring you have all the details you need at your fingertips.",
    img: "/projects/moviedb.jpg",
  },
];

function Projects() {
  return (
    <section>
      <div id="projects" className="text-center font-black text-4xl mb-20">
        <h1>PROJECTS</h1>
      </div>
      <div className="flex flex-col mx-5 xl:mx-56 space-y-10">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              id={project.id}
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
          className={`object-cover w-full md:w-2/5 rounded-lg h-auto transition-all ease-in-out duration-300 group-hover:scale-125`}
          src={img}
          width={200}
          height={200}
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
