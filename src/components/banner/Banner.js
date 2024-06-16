import {React , useState} from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { ju } from '../../assests'
import { useEffect } from 'react'
import { motion } from 'framer-motion';
const Banner = () => {
  const [isWideScreen, setIsWideScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768); // Adjust the width as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [text] = useTypewriter({
    words: ["Full Stack Development", "AI/ML and Computer Vision", "UI Designs", "3D Animations"],
    loop: true,
    typeSpeed: 10,
    deleteSpeed: 15,
    delaySpeed: 1500,
  });

  const bannerVariants = {
    hidden: { opacity: 0, x: '-20%' },
    visible: { opacity: 1, x: '0%', transition: { duration: 0.5, ease: 'easeOut' } }
  };
  return (
    <section id='home' className='w-full h-[650px] pt-24 sm:pt-32 pb-20 flex font-titleFont  justify-center pl-10'>
      <motion.div
      initial="hidden" 
      animate="visible" 
      variants={bannerVariants}
       className={`flex ${isWideScreen ? "flex-row":"flex-col"} gap-5 items-center sm:items-start pt-8 `}>
        <img
        
          alt=""
          fetchpriority="high"
          width="150"
          height="150"
          decoding="async"
          data-nimg="1"
          className="w-32 h-32 sm:w-64 sm:h-64 md:w-64 md:h-64 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
          style={{ color: 'transparent' }}
          src={ju}
        />
        <div className={`${isWideScreen?"pt-10 px-10 ":""} `}>
          <h1 className='text-3xl text-black font-extrabold  text-Black'>
            Hi, I'm <span className='capitalize'>Kishore Kumar</span>
          </h1>
          <h1 className=' text-gray-500 text-lg  font-normal  dark:text-grey-400 pt-3'>
            I Mostly Work on <br /><span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="."
              cursorColor='#'              
            />
          </h1>
          <p className=' text-gray-500 pb-3'>
            A Fervent Engineer and Tech Enthusiast 
          </p>
          <div className='flex gap-2'>
          <a href="#contact" class=" inline-flex items-center px-5 py-0.5 text-sm font-medium text-white bg-black border-2 border-black rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all hover:bg-white hover:text-black focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
             Contact Me
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
          </a>
          <div className='gap-0 flex'>
          <a href="https://www.linkedin.com/in/kkube/" target="_blank" rel="noreferrer" class="inline-flex items-center px-3.5 py-3 text-sm font-medium text-black bg-white border-2 border-black rounded-full mx-2 hover:bg-black hover:text-white focus:scale-115 hover:scale-115 active:scale-105 transition focus:ring-4 focus:ring-primary-300 cursor-pointer">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg>
          </a>
          <a href="https://wa.me/918124075301 " target="_blank" rel="noreferrer" class="inline-flex items-center px-3 py-3 text-sm font-medium text-black bg-white border-2 border-black rounded-full mx-2 hover:bg-black hover:text-white focus:scale-115 hover:scale-115 active:scale-105 transition focus:ring-4 focus:ring-primary-300 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
          </a>
          <a href="https://instagram.com/kishorkumar22k" target="_blank" rel="noreferrer" class="inline-flex items-center px-3 py-3 text-sm font-medium text-black bg-white border-2 border-black rounded-full mx-2 hover:bg-black hover:text-white focus:scale-115 hover:scale-115 active:scale-105 transition focus:ring-4 focus:ring-primary-300 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
          </svg>
          </a>
          </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Banner
