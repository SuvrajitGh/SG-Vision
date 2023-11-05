"use client";
import ExperienceCard from "@/app/Templates/ExperienceCard";
import { experienceData } from "@/app/utils/Experiencedata";
import { motion } from "framer-motion";
const WorkExperience = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen gap-8 p-5 mt-5 md:p-5 overflow-hidden"
      >
        <h1 className="text-4xl mb-12 tracking-[15px] text-center uppercase">Experience</h1>
        <div className="flex snap overflow-x-scroll gap-10 mt-5 scrollbar-thin scrollbar-tract-gray-400/20 scrollbar-thumb-indigo-400 scrollbar-rounded-full">
          {experienceData.map((ele) => (
            <ExperienceCard
              key={ele.id}
              imageSrc={ele.imageSrc}
              title={ele.title}
              subtitle={ele.subtitle}
              mode={ele.mode}
              programmingLanguages={ele.programmingLanguages}
              summarypoints={ele.summarypoints}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default WorkExperience;
