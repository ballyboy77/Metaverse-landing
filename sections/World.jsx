"use client";

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText
        title="| People Connected To MetaVerse Around The Globe"
        textStyles="text-center"
      />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className=" relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className=" w-full object-cover" />

        <div className=" absolute top-[12rem] right-[9rem] w-[70px] h-[70px] p-[6px] rounded-full bg-green-500 lg:top-[11rem] lg:right-[32rem] hover:scale-50 hover:animate-bounce duration-1000 cursor-pointer">
          <img
            src="/people-01.png"
            alt="people"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className=" absolute bottom-[12rem] right-[22rem] w-[70px] h-[70px] p-[6px] rounded-full bg-green-500 lg:bottom-[10rem] left-[20rem] hover:animate-bounce duration-1000 cursor-pointer">
          <img
            src="/people-02.png"
            alt="people"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className=" absolute top-[0rem] right-[9rem] w-[70px] h-[70px] p-[6px] rounded-full bg-green-500 lg:top-[5rem] left-[12rem] hover:animate-bounce duration-1000 cursor-pointer ">
          <img
            src="/people-03.png"
            alt="people"
            className=" w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
