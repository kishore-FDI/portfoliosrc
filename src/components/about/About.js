import React, { useEffect } from 'react';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';

const About = () => {
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let animationInProgress = false;

    const handleScroll = () => {
      const section = document.querySelector('#about');
      if (section && !animationInProgress) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          animationInProgress = true;
          controls.start('visible').then(() => {
            animationInProgress = false;
          });
        } else {
          controls.start('hidden');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const animationVariants = shouldReduceMotion ? {} : {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="about-section mb-28 sm:mb-40 mt-20 mx-2 p-2 flex justify-center items-center scroll-mt-28 py-[5rem]"
      id="about"
    >
      <div className="flex flex-col gap-4 font-titleFont text-black items-center right-[1/2] mx-auto text-center max-w-prose">
        <h3 className="heading text-3xl font-light tracking-wide flex">About Me</h3>
        <div className="tracking-wide flex flex-col gap-2 text-base font-normal">
          <motion.p
            className="text-justify flex items-center gap-2"
            variants={animationVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.75 }}
          >
            📍 Hey there! I'm Kishore Kumar K from Puzhal, Chennai. I'm currently majoring in 🎓 Electronics and Communication Engineering and have a deep passion for my field. I'm dedicated to getting things done and always strive for excellence.
          </motion.p>
          <motion.p
            className="text-justify flex items-center gap-2"
            variants={animationVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            🤖 A big AI and Web Development enthusiast constantly learning about the new releases and work. I crave to update myself on a daily basis about the new technologies and optimizing my works on any given chance.
          </motion.p>
          <motion.p
            className="text-justify flex items-center gap-2"
            variants={animationVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.75, delay: 0.4 }}
          >
            🎨 In my free time, I usually work on 3D modeling, animations, and games. ✍️ I also love writing poems and learning a new language. 🌐 I am currently learning Japanese and German.
          </motion.p>
          <motion.p
            className="text-justify flex items-center gap-2"
            variants={animationVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.75, delay: 0.6 }}
          >
            🌍 At present, working on improving my social media presence and attending several events to meet like-minded people.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
