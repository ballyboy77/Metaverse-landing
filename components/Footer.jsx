"use client";

import { motion } from "framer-motion";
import { footerVariants, staggerContainer } from "../utils/motion";
import styles from "../styles";
import { TypingText } from "./CustomTexts";
import { socials } from "../constants";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className=" flex items-center justify-between flex-wrap gap-5">
        <h4 className=" font-bold md:text-[64px] text-[44px] text-white">
          ENTER THE METAVERSE
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] hover:bg-slate-400 duration-500"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className=" w-[30px] h-[30px] object-contain"
          />
          <motion.span
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className=" font-normal text-[16px] text-white"
          >
            <TypingText title="Enter Metaverse" />
          </motion.span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className=" mb-[50px] h-[2px] bg-white opacity-20" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className=" font-extrabold text-[24px] text-white">META Co.</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright @ 2023-2024 Meta Co. All rights reserved
          </p>
          <div className=" flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className=" w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
