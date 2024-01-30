'use client';

import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';

const Navbar = () => (
  <motion.nav
    id="#home"
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className=" absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 `}>
      <img
        src="/search.svg"
        alt="search"
        className=" w-[24px] h-[24px] object-contain"
      />
      <motion.h2
        drag
        dragConstraints={{
          top: 1,
          right: -1,
          left: -1,
          bottom: 1,
        }}
        className=" cursor-pointer font-extrabold text-[2rem] leading-[30px] text-white  "
      >
        METAVERSE
      </motion.h2>
      <img
        src="/menu.svg"
        alt="menu"
        className=" w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
