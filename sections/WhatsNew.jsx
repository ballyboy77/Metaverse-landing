'use client';

import { motion } from 'framer-motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';
import { newFeatures } from '../constants';
import styles from '../styles';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className=" flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats New?" />
        <TitleText
          title={
            <>
              Whats new about
              <br /> Metaversus?{' '}
            </>
          }
        />
        <div className=" mt-[48px] flex  flex-wrap gap-6 ">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          className=" h-[90%] w-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
