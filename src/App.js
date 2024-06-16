
import './App.css';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Project from './components/projects/Project';
import Skill from './components/skill/Skill';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="w-full h-auto text-lightText">
      <div className='bg-[radial-gradient(169.40%_89.55%_at_5.76%_6.29%,rgba(0,256,0,0.25)_0%,rgba(255,255,255,0)_100%)] max-w-screen-2xl mx-auto px-16  '>
      <Navbar/>
      <Banner/>
      </div>
      <About/>
      <Project/>
      <Skill/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
