"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "<Hey it's Suvrajit/>",
      "<Full Stack Developer/>",
      "<A freelance photographer./>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex relative items-center justify-center text-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="false"
        className="object-cover w-full h-full absolute top-0 left-0 z-[-1] opacity-70"
      >
        <source src="/final_bg.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="relative w-48 h-48 overflow-hidden rounded-full hero_avatar"
        >
          <Image src="/coder.png" width={192} height={100} alt="useravatare" />
        </motion.div>
        <div className="mt-5 text-white text-2xl text-center text-shadow">
          <h2 className="text-sm text-gray-500 pb-2 font-semibold uppercase tracking-[15px]">
            Full-Stack Developer
          </h2>
          <h1 className="text-5xl">
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
