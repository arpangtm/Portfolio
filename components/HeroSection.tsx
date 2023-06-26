import React from "react";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail, SiFacebook } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "500" });

function HeroSection() {
  const parent = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const child = {
    initial: { scale: 0 },
    whileInView: { scale: 1 },
  };

  return (
    <section className="bg-transparent h-4/5 flex flex-col-reverse md:flex-row w-full items-center gap-10 md:gap-32 md:mx-6  lg:mx-40">
      <div className="flex gap-32 text-center md:text-left">
        <motion.div
          variants={parent}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="bg-white text-gray-800 rounded-full p-4 max-h-fit md:flex md:flex-col items-center justify-center gap-10 text-3xl lg:text-5xl mt-10 hidden"
        >
          <motion.div variants={child}>
            <Link target="_blank" href="https://github.com/arpangtm">
              <AiFillGithub className="hover:scale-105"></AiFillGithub>
            </Link>
          </motion.div>
          <motion.div variants={child}>
            <Link target="_blank" href="https://www.linkedin.com/in/arpangtm/">
              <AiFillLinkedin className="hover:scale-105"></AiFillLinkedin>
            </Link>
          </motion.div>
          <motion.div variants={child}>
            <Link
              target="_blank"
              href="https://www.facebook.com/arpan.gautam.9678/"
            >
              <SiFacebook className="hover:scale-105"></SiFacebook>
            </Link>
          </motion.div>
        </motion.div>
        <div className="flex flex-col items-center md:inline-block ">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className={`${ubuntu.className} font-bold text-3xl text-center md:text-left lg:text-5xl whitespace-pre-wrap leading-relaxed lg:leading-loose`}
          >
            {`Hey There👋 \nI am Arpan, \nI am A <Software Dev/>`}
          </motion.h1>
          <motion.a
            href="#contact"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            viewport={{ once: true }}
            className="hover:bg-[#B6EADA] hover:text-gray-800 font-bold p-3 rounded-lg mt-10 flex gap-2 items-center max-w-fit bg-transparent border-2 
            text-white border-[#B6EADA] transition-all duration-200 ease-in-out text-center"
          >
            Contact Me
            <BsArrowRight
              className="group-hover:right-10 transition-all ease-in-out"
              style={{ strokeWidth: 1 }}
            ></BsArrowRight>
          </motion.a>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        viewport={{ once: true }}
        className=" left-4 sm:left-4"
        style={{
          WebkitMaskImage:
            "url(data:image/svg+xml;base64,IDxzdmcNCiAgICAgICAgICAgIHZlcnNpb249IjEuMSINCiAgICAgICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgICAgICAgICAgIHZpZXdCb3g9IjAgMCA1MDAgNTAwIg0KICAgICAgICAgICAgd2lkdGg9IjE0MiUiDQogICAgICAgICAgICBpZD0iZGFya2JsdWUiDQogICAgICAgICAgICBzdHlsZT0ib3BhY2l0eToxIg0KICAgICAgICAgICAgY2xhc3NOYW1lPSJ6LTIwIg0KICAgICAgICAgID4NCiAgICAgICAgICAgIHsiICJ9DQogICAgICAgICAgICA8ZGVmcz4NCiAgICAgICAgICAgICAgeyIgIn0NCiAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJzZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj4NCiAgICAgICAgICAgICAgICB7IiAifQ0KICAgICAgICAgICAgICAgIDxzdG9wDQogICAgICAgICAgICAgICAgICBvZmZzZXQ9IjAlIg0KICAgICAgICAgICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IHJnYigyMSwgMCwgODApIg0KICAgICAgICAgICAgICAgID48L3N0b3A+eyIgIn0NCiAgICAgICAgICAgICAgICA8c3RvcA0KICAgICAgICAgICAgICAgICAgb2Zmc2V0PSIxNDAlIg0KICAgICAgICAgICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IHJnYigyMSwgMCwgODApIg0KICAgICAgICAgICAgICAgID48L3N0b3A+eyIgIn0NCiAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD57IiAifQ0KICAgICAgICAgICAgPC9kZWZzPnsiICJ9DQogICAgICAgICAgICA8cGF0aCBpZD0iYmxvYiIgZmlsbD0idXJsKCNzZ3JhZGllbnQpIiBzdHlsZT0ib3BhY2l0eToxIj4NCiAgICAgICAgICAgICAgPGFuaW1hdGUNCiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPSJkIg0KICAgICAgICAgICAgICAgIGR1cj0iMTBzIg0KICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIg0KICAgICAgICAgICAgICAgIHZhbHVlcz0iTTQyOSwzMjhRNDM3LDQwNiwzNjIsNDMzUTI4Nyw0NjAsMjE4LDQ0MlExNDksNDI0LDEyMi41LDM2NVE5NiwzMDYsNzQuNSwyNDJRNTMsMTc4LDk0LjUsMTE1UTEzNiw1MiwyMDYuNSw3M1EyNzcsOTQsMzQ3LjUsMTAxLjVRNDE4LDEwOSw0MTkuNSwxNzkuNVE0MjEsMjUwLDQyOSwzMjhaO000MzMuMDIzMiwzMDkuOTE5MlEzOTMuMDEyODEsMzY5LjgzODQxLDMzOC4zMzUyLDQwNi40MDg4MVEyODMuNjU3Niw0NDIuOTc5MjEsMjIxLjc3NTIsNDI0LjQ5MjgxUTE1OS44OTI4LDQwNi4wMDY0LDExOS4yMzg0LDM1OC45ODY0UTc4LjU4NCwzMTEuOTY2NCw3MC41MzA0LDI0Ni43NzUyUTYyLjQ3NjgsMTgxLjU4NCw5Ny43NTUyLDExNC40NDY0UTEzMy4wMzM2LDQ3LjMwODgsMjA2LjIwOCw2NC42MTExOVEyNzkuMzgyNCw4MS45MTM1OSwzNDIuMjA4LDEwMC44MTkyUTQwNS4wMzM2LDExOS43MjQ4LDQzOS4wMzM2LDE4NC44NjI0UTQ3My4wMzM2LDI1MCw0MzMuMDIzMiwzMDkuOTE5Mlo7TTQxOS4wNjI1NCwzMTcuNzk1MTdRNDExLjExMTE4LDM4NS41OTAzMywzNDkuNjY4NDMsNDI1LjU5ODk0UTI4OC4yMjU2OCw0NjUuNjA3NTUsMjI4LjM0NTQ3LDQyOC40NTgzMVExNjguNDY1MjYsMzkxLjMwOTA2LDEyMC4yNDEyNCwzNTMuMTk2MjJRNzIuMDE3MjIsMzE1LjA4MzM4LDY5Ljg2MTAzLDI0OS40MDgwMVE2Ny43MDQ4MywxODMuNzMyNjMsMTAzLjQ3MjIxLDEyMC43MzI2M1ExMzkuMjM5NTgsNTcuNzMyNjMsMjE1LjM2NjMxLDM2Ljc1MzQ3UTI5MS40OTMwNSwxNS43NzQzMiwzNDYuNDE0OTUsNjkuMzUyNDJRNDAxLjMzNjg2LDEyMi45MzA1MSw0MTQuMTc1MzgsMTg2LjQ2NTI2UTQyNy4wMTM5LDI1MCw0MTkuMDYyNTQsMzE3Ljc5NTE3WjtNNDUzLjU3MTkxLDMyOC41Mzc1MlE0MzcuMDg3NTQsNDA3LjA3NTAzLDM2NC41NzgxNiw0NDguNzQzODZRMjkyLjA2ODc4LDQ5MC40MTI2OSwyMTkuNTU2MjgsNDU5LjE2NTdRMTQ3LjA0Mzc3LDQyNy45MTg3MSwxMDguOTkzNzUsMzcxLjQ2ODc0UTcwLjk0MzcyLDMxNS4wMTg3Niw1Ni41MjgxNCwyNDQuNTI4MTRRNDIuMTEyNTUsMTc0LjAzNzUyLDg2LjAyODE0LDEwNy45Njg3NFExMjkuOTQzNzIsNDEuODk5OTUsMjA5Ljk4NzQ5LDMxLjg0OTkzUTI5MC4wMzEyNiwyMS43OTk5MSwzNDYuMDE4NzYsNzEuODk2ODNRNDAyLjAwNjI1LDEyMS45OTM3NSw0MzYuMDMxMjYsMTg1Ljk5Njg3UTQ3MC4wNTYyOCwyNTAsNDUzLjU3MTkxLDMyOC41Mzc1Mlo7TTQyNS41NzkzNCwzMjMuNzk1OTlRNDI2LjIyNzM0LDM5Ny41OTE5NywzNTUuMTAxMDQsNDE5LjQxNTE2UTI4My45NzQ3NCw0NDEuMjM4MzQsMjIyLjI5MjQyLDQyMy4wMDkwN1ExNjAuNjEwMSw0MDQuNzc5NzksOTUuNDk2NDQsMzY3LjMzMDMxUTMwLjM4Mjc3LDMyOS44ODA4Myw0NC41ODEyOCwyNTUuMTM1MzZRNTguNzc5NzksMTgwLjM4OTksOTkuNzQxOSwxMjAuNDExNTlRMTQwLjcwNDAxLDYwLjQzMzI5LDIxNC41NzIyMSw0NS40OTI4N1EyODguNDQwNDIsMzAuNTUyNDYsMzUwLjYxMzY3LDcyLjI5NzkyUTQxMi43ODY5MiwxMTQuMDQzMzksNDE4Ljg1OTE0LDE4Mi4wMjE3UTQyNC45MzEzNSwyNTAsNDI1LjU3OTM0LDMyMy43OTU5OVo7TTQyOSwzMjhRNDM3LDQwNiwzNjIsNDMzUTI4Nyw0NjAsMjE4LDQ0MlExNDksNDI0LDEyMi41LDM2NVE5NiwzMDYsNzQuNSwyNDJRNTMsMTc4LDk0LjUsMTE1UTEzNiw1MiwyMDYuNSw3M1EyNzcsOTQsMzQ3LjUsMTAxLjVRNDE4LDEwOSw0MTkuNSwxNzkuNVE0MjEsMjUwLDQyOSwzMjhaIg0KICAgICAgICAgICAgICA+PC9hbmltYXRlPg0KICAgICAgICAgICAgPC9wYXRoPg0KICAgICAgICAgIDwvc3ZnPg0K)",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <Image
          src="/me/me1.png"
          width={500}
          height={500}
          className="md:h-96 -ml-10 md:-mt-16"
          alt="my photo"
        ></Image>
      </motion.div>
    </section>
  );
}

export default HeroSection;
