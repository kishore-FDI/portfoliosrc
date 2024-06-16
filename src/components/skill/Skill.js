import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPython, FaJava, FaLinkedinIn, FaArrowAltCircleRight } from "react-icons/fa";
import { SiOpencv, SiNumpy } from "react-icons/si";
import { DiMysql, DiLinux } from "react-icons/di";
import {
  RiReactjsLine,
  RiJavascriptFill,
  RiHtml5Fill,
  RiCss3Line,
  RiGithubLine,
  RiNodejsLine,
  RiTailwindCssLine,
  RiBrainLine
} from 'react-icons/ri';
import { TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";
import { FcSalesPerformance } from "react-icons/fc";
import Title from '../Title/Title';

const items = [
  { text: 'Python', icon: FaPython, color: '#3572A5' },
  { text: 'Java', icon: FaJava, color: '#B07219' },
  { text: 'OpenCV', icon: SiOpencv, color: '#FF7D00' },
  { text: 'MySQL', icon: DiMysql, color: '#4479A1' },
  { text: 'Linux', icon: DiLinux, color: '#E95420' },
  { text: 'React JS', icon: RiReactjsLine, color: '#61DAFB' },
  { text: 'JavaScript', icon: RiJavascriptFill, color: '#F7DF1E' },
  { text: 'HTML5', icon: RiHtml5Fill, color: '#E34F26' },
  { text: 'CSS3', icon: RiCss3Line, color: '#1572B6' },
  { text: 'GitHub', icon: RiGithubLine, color: '#181717' },
  { text: 'Node JS', icon: RiNodejsLine, color: '#68A063' },
  { text: 'Tailwind', icon: RiTailwindCssLine, color: '#38B2AC' },
  { text: 'AI/ML', icon: RiBrainLine, color: '#D00000' },
  { text: 'Numpy', icon: SiNumpy, color: '#013243' },
  { text: 'React Native', icon: TbBrandReactNative, color: '#61DAFB' },
  { text: 'TypeScript', icon: TbBrandTypescript, color: '#3178C6' },
  { text: 'Sales', icon: FcSalesPerformance, color: '#FF4500' },
];

const fadeInAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

const textAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: items.length * 0.2, // start after the last icon animation
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const FarmerMotion = () => {
  const controls = useAnimation();
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('#skills');
      if (section && !animationInProgress) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setAnimationInProgress(true);
          controls.start((index) => 'visible').then(() => {
            setAnimationInProgress(false);
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
  }, [controls, animationInProgress]);

  return (
    <section id="skills" className="w-full flex justify-center items-center my-[10rem] py-[5rem]">
      <div className='flex w-[700px] flex-col items-center'>
        <Title title={"Skills"} />
        <ul className="flex flex-wrap items-center justify-center pt-8 gap-10">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.li
                key={index}
                className="flex border flex-col text-center rounded-full py-2 items-center px-4"
                custom={index}
                variants={fadeInAnimationVariants}
                initial="hidden"
                animate={controls}
                style={{
                  transition: 'transform 0.2s',
                  transform: 'scale(1)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.5)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onTouchStart={(e) => e.currentTarget.style.transform = 'scale(1.5)'}
                onTouchEnd={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {isLargeScreen && <IconComponent className="text-4xl" style={{ color: item.color }} />}
                <p className="text-black">
                  {item.text}
                </p>
              </motion.li>
            );
          })}
        </ul>
        <div className='flex items-center justify-center gap-4 text-center mt-2'>
            <motion.p
              className=" inline-flex gap-3 items-center justify-center px-5 py-0.5 text-sm font-medium text-white bg-black border-2 border-black rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all hover:bg-white hover:text-black focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 mt-5"
              variants={textAnimationVariants}
              initial="hidden"
              animate={controls}
            >
              Know More <FaArrowAltCircleRight/>
            </motion.p>
            <motion.p
              className=" inline-flex items-center px-5 py-1.5 text-sm font-medium text-white bg-black border-2 border-black rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all hover:bg-white hover:text-black focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 mt-5"
              variants={textAnimationVariants}
              initial="hidden"
              animate={controls}
            >
            <a className="underline " rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kkube"> <FaLinkedinIn/></a> 
            </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FarmerMotion;
