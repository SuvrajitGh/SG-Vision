"use client";
import TestimonialCard from "@/app/Templates/TestimonialCard";
import { TestimonialData } from "@/app/utils/Testimonialdata";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-4xl tracking-[15px] text-center my-28 px-2">Testimonials</h1>
      <Marquee speed={50} pauseOnClick>
        {TestimonialData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            imageSrc={testimonial.imageSrc}
            name={testimonial.name}
            content={testimonial.content}
          />
        ))}
      </Marquee>
    </motion.div>
  );
};

export default Testimonials;
