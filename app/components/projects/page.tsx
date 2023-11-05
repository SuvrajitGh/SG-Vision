import projectdata from "@/app/utils/projectdata";
import { ProjectCard } from "@/app/Templates/ProjectCard";
import { motion, scroll } from "framer-motion";
const Project = () => {
  return (
    <>
      <section className="grid gap-8 p-5 mt-5 md:p-5 bg-[#000]">
      <h1 className="text-4xl tracking-[15px] text-center uppercase">Projects</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl::grid-cols-4 gap-5">
     
          {projectdata.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;

