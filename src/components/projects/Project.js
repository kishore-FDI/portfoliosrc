import Spline from '@splinetool/react-spline'
import {React,useState,useEffect} from 'react'
import Title from '../Title/Title'
import './ProjectCard2.css';
import { RiInformationLine,RiGithubLine } from 'react-icons/ri';
import { proj1,proj2,proj3,proj4,proj5} from '../../assests';

const Project = () => {
  const [showSpline, setShowSpline] = useState(false);

  const toggleSpline = () => {
    setShowSpline(!showSpline);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 760);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section id="projects" className='w-full py-[0rem] pt-[5rem] mt-[5rem]'>
      <Title title={"My Projects"}/>
      <div className='flex flex-col pt-10 mt-10 ml-2 gap-8 items-center '>
      <div className='  w-1/2'><span className=''>{isSmallScreen && `The images and 3D model is disabled by default , please use a higher resolution device to see them `}</span></div>
                <div className={`flex justify-center flex-${isSmallScreen?"wrap gap-8 ":"row "}`}>
                <div class="container" >
                  <div class="card">
                    <div class="card__border">
                      <div class="class_prefil">
                        {!isSmallScreen && <img src={proj1} alt="Card" class="card__img"/>}
                      </div>
                    </div>
                    <h3 class="card__name">Medical Assisstant</h3>
                    <div className='flex justify-center flex-col gap-3'>
                    <div className='flex justify-center gap-3'>
                    <span class="card__skill-disp">LLMs</span>
                    <span class="card__skill-disp">Streamlit</span>
                    <span class="card__skill-disp">Vector DB</span>
                    </div>
                    <div className='flex justify-center gap-3'>
                    <span class="card__skill-disp">API</span>
                    <span class="card__skill-disp">Python</span>
                    </div>
                    </div>
                    <div class="card__social">
                        <a href="https://github.com/kishore-FDI/multimodelmedbot" rel="noreferrer" target="_blank" class="card__social-link">
                          <span class="card__social-icon">
                            <RiGithubLine color='black'/>
                          </span>
                        </a>
                      </div>
                    <div class='info'>
                      <div class="info__icon">
                      <RiInformationLine color="black" />
                      </div>
                      <div class="info__border">
                        <div class="info__prefil">
                          {/* <img src={projectOne} alt="alt" class="info__img"/> */}
                          <h2>Brief description</h2>
                        </div>
                      </div>
                      <div class="info_data">
                        <h3 class="info__name">Medical and Legal chat assisstant using Langchain and Gemini-1.5 API</h3>
                        <span class="info__profession">In this project we utilized the Google's Gemini-pro model to answer users' basic medical questions through text , images and video by storing them in multi-vector database. We also developed a similar system to answer questions about Indian Law and ask for opinion</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div class="container" >
                  <div class="card">
                    <div class="card__border">
                      <div class="class_prefil" style={{ paddingLeft: '20px' }}>
                      {!isSmallScreen && <img src={proj3} alt="Card" class="card__img"/>}
                      </div>
                    </div>
                    <h3 class="card__name">Pest Detector</h3>
                    <div className='flex justify-center flex-col gap-3'>
                    <div className='flex justify-center gap-3'>
                    <span class="card__skill-disp">Flask</span>
                    <span class="card__skill-disp">React JS</span>
                    <span class="card__skill-disp">Python</span>
                    </div>
                    <div className='flex justify-center gap-3'>
                    <span class="card__skill-disp">YOLOv9</span>
                    <span class="card__skill-disp">OpenCV</span>
                    </div>
                    </div>
                    <div class="card__social">
                        <a href="https://github.com/kishore-FDI/Live_object_detection" rel="noreferrer" target="_blank" class="card__social-link">
                          <span class="card__social-icon">
                            <RiGithubLine color='black'/>
                          </span>
                        </a>
                      </div>
                    <div class='info'>
                      <div class="info__icon">
                      <RiInformationLine color="black" />
                      </div>
                      <div class="info__border">
                        <div class="info__prefil">
                          {/* <img src={projectOne} alt="alt" class="info__img"/> */}
                          <h2>Brief description</h2>
                        </div>
                      </div>
                      <div class="info_data">
                        <h3 class="info__name">Pest Detection Using YOLOv9</h3>
                        <span class="info__profession">We made a platform for farmers where i contributed by <i><b>fine tuning</b></i> the state-of-the-art YOLO model to detect pests in the farm land and immedietly alarming the user about the detection. The model was connected to the platform with the use of Flask-python framework</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
                </div>  
                <div className={`flex justify-center flex-${isSmallScreen?"wrap gap-8":"row"}`}>
                <div class="container" >
                  <div class="card">
                    <div class="card__border">
                      <div class="class_prefil">
                      {!isSmallScreen && <img src={proj2} alt="Card" class="card__img"/>}
                      </div>
                    </div>
                    <h3 class="card__name">General Chat Assisstant</h3>
                    <div className='flex justify-center flex-col gap-3'>
                    <div className='flex justify-center gap-3'>
                    <span class="card__skill-disp">Android Studio</span>
                    <span class="card__skill-disp">React Native</span>
                    <span class="card__skill-disp">API</span>
                    </div>
                    <div className='flex justify-center gap-3'>
                    <span class="card__skill-disp">Express JS</span>
                    <span class="card__skill-disp">React JS</span>
                    </div>
                    </div>
                    <div class="card__social">
                        <a href="https://github.com/kishore-FDI/AiAPP" rel="noreferrer" target="_blank" class="card__social-link">
                          <span class="card__social-icon">
                            <RiGithubLine color='black'/>
                          </span>
                        </a>
                      </div>
                    <div class='info'>
                      <div class="info__icon">
                      <RiInformationLine color="black" />
                      </div>
                      <div class="info__border">
                        <div class="info__prefil">
                          {/* <img src={projectOne} alt="alt" class="info__img"/> */}
                          <h2>Brief description</h2>
                        </div>
                      </div>
                      <div class="info_data">
                        <h3 class="info__name">AI assisstants</h3>
                        <span class="info__profession">In this mobile app , I connected to Google's gemini model through thier API . Then I created several chat assisstances with different personalities by adjusting the prompts. These assisstances are meant to entertain the users with thier humour and role playing the famous charecters like Captain America,Iron Man,Spider Man , etc </span>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div class="container" >
                  <div class="card" style={{paddingBottom:60}}>
                    <div class="card__border">
                      <div class="class_prefil">
                      {!isSmallScreen && <img src={proj4} alt="Card" class="card__img" style={{ height: 'auto' }}/>}
                      </div>
                    </div>
                    <h3 style={{paddingTop:20}}class="card__name">Gesture Controls</h3>
                    <div className='flex justify-center flex-col gap-3'>
                    <div className='flex justify-center gap-3'>
                    <span class="card__skill-disp">Open CV</span>
                    <span class="card__skill-disp">Python</span>
                    <span class="card__skill-disp">Mediapipe</span>
                    </div>
                    <div className='flex justify-center gap-3'>
                    <span class="card__skill-disp">ctupes</span>
                    {/* <span class="card__skill-disp">Python</span> */}
                    </div>
                    </div>
                    <div class="card__social">
                        <a href="https://github.com/kishore-FDI/openCVControls" rel="noreferrer" target="_blank" class="card__social-link">
                          <span class="card__social-icon">
                            <RiGithubLine color='black'/>
                          </span>
                        </a>
                      </div>
                    <div class='info'>
                      <div class="info__icon">
                      <RiInformationLine color="black" />
                      </div>
                      <div class="info__border">
                        <div class="info__prefil">
                          {/* <img src={projectOne} alt="alt" class="info__img"/> */}
                          <h2>Brief description</h2>
                        </div>
                      </div>
                      <div class="info_data">
                        <h3 class="info__name">Inputs Through Gestures </h3>
                        <span class="info__profession">With the help the OpenCV , ctypes and App opener packages and Mediapipe prediction model , I manage to give inputs to system just by change my hand gestures and operated apps likes Whatsapp and games like Hill Climb Racing along with voice inputs aswell .</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
                </div> 
                <div className={`flex justify-center flex-${isSmallScreen?"wrap gap-8":"row"}`}>
                <div className="container">
                      <div className="card relative">
                        <div className="absolute top-0 left-0 mt-3 ml-5 flex items-center gap-2">
                          <span>{showSpline ? 'Disable Model' : 'Enable Model'}</span>
                          
                          <label className="switch">
                            <input type="checkbox" checked={showSpline} onChange={toggleSpline} />
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <span>{showSpline ? '' : 'Model is disabled by default to accomodate all devices'}</span>
                        <div className="card__border">
                          <div className="class_prefil">
                            {/* Toggle Spline component visibility */}
                            {showSpline && (
                              <Spline scene="https://prod.spline.design/hIFm6O4d9XGjpvNC/scene.splinecode" />
                            )}
                          </div>
                        </div>
                        <h3 className="card__name" style={{ paddingTop: 20 }}>3D Modeling</h3>
                        <div className="flex justify-center flex-col gap-3">
                          <div className="flex justify-center gap-3">
                            <span className="card__skill-disp">Spline</span>
                            <span className="card__skill-disp">React JS</span>
                            {/* <span className="card__skill-disp">Vector DB</span> */}
                          </div>
                          <div className="flex justify-center gap-3">
                            <span className="card__skill-disp">Tailwind CSS</span>
                            {/* <span className="card__skill-disp">Python</span> */}
                          </div>
                        </div>
                        <div className="card__social">
                          <a href="https://google.com" rel="noreferrer" target="_blank" className="card__social-link">
                            <span className="card__social-icon">
                              <RiGithubLine color="black" />
                            </span>
                          </a>
                        </div>
                        <div className="info">
                          <div className="info__icon">
                            <RiInformationLine color="black" />
                          </div>
                          <div className="info__border">
                            <div className="info__prefil">
                              {/* <img src={projectOne} alt="alt" className="info__img" /> */}
                              <h2>Brief description</h2>
                            </div>
                          </div>
                          <div className="info_data">
                            <h3 className="info__name">Embedding 3D Model In Website</h3>
                            <span className="info__profession">I made a simple coin faced robot head in spline then made it to follow the cursor of the user. Then the model is imported to the website with the help of Spline React Tools package.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                <div class="container" >
                  <div class="card">
                    <div class="card__border">
                      <div class="class_prefil">
                      {!isSmallScreen && <img src={proj5} alt="Card" class="card__img"/>}
                      </div>
                    </div>
                    <h3 class="card__name">AI Agents</h3>
                    <div className='flex justify-center flex-col gap-3'>
                    <div className='flex justify-center gap-3'>
                    <span class="card__skill-disp">LLMs</span>
                    <span class="card__skill-disp">Gradio</span>
                    <span class="card__skill-disp">Vector DB</span>
                    </div>
                    <div className='flex justify-center gap-3'>
                    <span class="card__skill-disp">Langchain</span>
                    <span class="card__skill-disp">Python</span>
                    <span class="card__skill-disp">Custom Tools</span>
                    </div>
                    </div>
                    <div class="card__social">
                        <a href="https://google.com" rel="noreferrer" target="_blank" class="card__social-link">
                          <span class="card__social-icon">
                            <RiGithubLine color='black'/>
                          </span>
                        </a>
                      </div>
                    <div class='info'>
                      <div class="info__icon">
                      <RiInformationLine color="black" />
                      </div>
                      <div class="info__border">
                        <div class="info__prefil">
                          {/* <img src={projectOne} alt="alt" class="info__img"/> */}
                          <h2>Brief description</h2>
                        </div>
                      </div>
                      <div class="info_data">
                        <h3 class="info__name">AI Agents With User Defined and AI Created Tools</h3>
                        <span class="info__profession">With the help of the incredible Langchain framework . I enabled the AI agent to utilize the In-Built Tools in the Langchain framework and also created several custom-defined tools among them , i created a tool which will allow the the agent to create tool by itself whenever it needs it and also by providing the access to write in local memory , it was able to continue the conversation even after creating a new sessionchro </span>
                      </div>
                      
                    </div>
                  </div>
                   </div>
                </div> 
                </div>
      <div className='flex gap-2 justify-center items-center mt-8'>
        <a href="https://github.com/kishore-FDI" class=" inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-black border-2 border-black rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all hover:bg-white hover:text-black focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
             To See More 
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
        </a>
        <div className='gap-0 flex'>
        <a href="https://github.com/kishore-FDI" target="_blank" rel="noreferrer" class="inline-flex items-center px-3 py-3 text-sm font-medium text-black bg-white border-2 border-black rounded-full mx-2 hover:bg-black hover:text-white focus:scale-115 hover:scale-115 active:scale-105 transition focus:ring-4 focus:ring-primary-300 cursor-pointer">
          <RiGithubLine/>
        </a>
        </div>
        </div>
    </section>
  )
}
export default Project