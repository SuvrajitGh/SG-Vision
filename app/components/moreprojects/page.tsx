"use client";
import { CardData, moreProjectData } from "@/app/utils/MoreProjectsdata"; // Import the data and CardData interface
import { motion } from "framer-motion";

const MoreProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="p-4 m-5"
    >
      <p className="text-4xl mb-4 text-center tracking-[15px]">More Projects</p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {moreProjectData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </motion.div>
  );
};

interface CardType extends CardData {}

const Card = ({ title, subtitle, Icon, href }: CardType) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border border-gray-600 hover:border-indigo-500 relative overflow-hidden group bg-slate-900"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-white group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default MoreProjects;
