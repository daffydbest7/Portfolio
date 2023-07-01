import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/About';
import Services from './components/Service';
import Portfolio from './components/portfolio';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {WiDaySunny} from 'react-icons/wi';

function App() {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div className={darkMode? "dark" : ""}>
      <div name="home" className="dark:bg-gradient-to-t from-black/95 to-black/90 dark:text-white">
        <div className="container mx-auto min-h-[25vh] lg:min-h-[40vh] ">
            <nav className='py-10 mb-12 flex justify-between'>
                <h1 className='text-3xl md:text-4xl hover:scale-110 duration-200 font-signature'> developedbydave</h1>
                <ul className='flex items-center'>
                  <li onClick={()=>setDarkMode(!darkMode)}>
                    {darkMode ? <WiDaySunny  className='cursor-pointer text-2xl md:text-3xl hover:text-teal-400 hover:scale-110 duration-200' size={30}/> 
                    
                    :
                    <BsFillMoonStarsFill className='cursor-pointer text-2xl md:text-3xl hover:text-teal-400 hover:scale-110 duration-200'/> }</li>
                    
                  <li> <button className='bg-gradient-to-r from-cyan-400 to-teal-600 text-white text-2xl px-4 py-2 rounded-md ml-8 md:ml-12 
                  md:px-8 md:py-4 md:text-3xl hover:bg-gradient-to-l from-cyan-400 to-teal-600 hover:scale-105 duration-200' href="#">Hire Me</button></li>
                </ul>
            </nav>
            <div className="hidden text-white text-2xl dark:block"> NightLife</div>
            </div>
      <Home/>
      </div>
      <SocialLinks />
      <About/>
      <Services/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Footer/>
      <Navbar />
      </div>
      
   
  );
}

export default App;
