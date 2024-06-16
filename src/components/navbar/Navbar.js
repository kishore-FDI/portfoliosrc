import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [isWideScreen, setIsWideScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 640); // Adjust the width value as needed
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Check screen size on mount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0, x: '-20%' },
    visible: { opacity: 1, x: '-50%', transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={navbarVariants}
      className={isWideScreen ? 
        "z-50 fixed top-0 left-1/2 transform -translate-x-1/2 h-[6rem] w-full sm:w-[36rem] sm:rounded-full border-opacity-40 bg-green-50 bg-opacity-70 shadow-xl backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem]" : 
        "fixed top-0 h-[6rem] flex justify-center left-1/2 transform -translate-x-1/2 w-full max-w-[39rem] sm:top-0 sm:h-[6rem] sm:w-full z-50 bg-white bg-opacity-70 border-opacity-40 shadow-xl backdrop-blur-[0.5rem]"}
      style={{ boxShadow: '-5px 0 10px -2px rgba(0, 0, 0, 0.1), 5px 0 10px -2px rgba(0, 0, 0, 0.1)' }}
    >
      <div className={`flex justify-center items-center h-full ${isWideScreen ? "":" left-1/2 w-1/2"} `}>
        <ul className={`flex ${isWideScreen ? 'items-center gap-8' : 'items-center flex-wrap justify-center gap-3'} text-bodyColor`}>
          {navLinksdata.map(({ _id, title, link }) => (
            <li className="text-base font-normal tracking-wide cursor-pointer hover:text-green-500 duration-100" 
                key={_id}>
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
