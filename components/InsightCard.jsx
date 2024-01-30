'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.3, 1)}
    className=" flex md:flex-row flex-col gap-4 max-sm:pr-11"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className=" md:w-[270px] w-full h-[250px] rounded-[32px] object-cover m-5 "
    />
    <div className="w-full mx-[3rem] lg:mt-10 ">
      <div className=" flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className=" font-sans text-[3rem] text-white"> {title}</h4>
      </div>
      <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
        {subtitle}
      </p>
    </div>
    <div className=" lg:flex hidden items-center justify-center w-[100px] h-[65px] rounded-full bg-transparent border-[2px] border-white cursor-pointer hover:bg-slate-600 mt-10">
      <img src="/arrow.svg" alt="arrow down" className="" />
    </div>
  </motion.div>
);

export default InsightCard;
