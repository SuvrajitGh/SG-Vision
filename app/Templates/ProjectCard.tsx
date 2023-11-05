"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
}

export function ProjectCard({ image, title, subtitle }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.2,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <Link href={"/"} target="_blank">
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "ease-in", damping: 2 }}
          className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis"
        >
          <Image
            src={image}
            alt="Laptop"
            width={700}
            height={700}
            className="aspect-video object-cover"
          />
          <div className="flex flex-col px-4 py-2 h-20">
            <div className="flex font-bold">{title}</div>
            <div className="flex text-info text-xs">{subtitle}</div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
