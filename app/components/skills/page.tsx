"use client";
import { skills } from "@/app/utils/SkillsData";
import Image from "next/image";
import { motion } from "framer-motion";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center relative z-1"
    >
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-40 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
      <div className="relative flex flex-col items-center w-full max-w-5xl gap-12">
        <div className="text-4xl  text-center mt-20 text-primary uppercase tracking-[15px]">
          Skills
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl::grid-cols-2 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="max-w-md bg-card border border-indigo-500 shadow-lg rounded-xl p-8 m-5"
            >
              <h2 className="text-2xl font-semibold text-secondary mb-6 text-center">
                {skill.title}
              </h2>
              <div className="grid grid-cols-3 gap-2 mb-6">
                {skill.skills.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    
                    className=" text-xs font-normal border border-gray-500 rounded-2xl px-2 py-3 flex gap-1 items-center "
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={18}
                      height={28}
                    />
                    {item.name}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

