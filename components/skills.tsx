"use client";
import React from "react";
import SectionHeading from "./sectionheading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  //instead of using the return keywork we add parenthesis 
  animate: (index:number) => ({
    opacity: 1,
    y: 0,
    transition:{
        delay: 0.05 * index
    }
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.75);
  return (
    <section id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimation}
            initial="initial"
            //whileInView because we want to see the animation only when we in this section and not when we reload the page
            whileInView="animate"
            //also we want to see the animation only once 
            viewport={{
                once: true
            }}
            custom={index}

            
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
