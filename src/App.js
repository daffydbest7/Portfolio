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
    <div className={darkMode ? "dark" : ""}>
      <div name="home" className="dark:bg-gradient-to-t from-black/95 to-black/90 dark:text-white">
        <div className="container mx-auto  min-h-[15vh] lg:min-h-[30vh]">
            <nav className='md:container py-10 flex justify-between'>
                <h1 className='text-md md:text-3xl hover:scale-110 duration-200 font-signature'> developedbydave</h1>
                <ul className='flex items-center'>
                  <li onClick={()=>setDarkMode(!darkMode)}>
                    {darkMode ? <WiDaySunny  className='cursor-pointer text-md md:text-2xl hover:text-teal-400 hover:scale-110 duration-200'/> 
                    
                    :
                    <BsFillMoonStarsFill className='cursor-pointer text-md md:text-2xl hover:text-teal-400 hover:scale-110 duration-200'/> }</li>
                    
                  <li> <button className='bg-gradient-to-r from-cyan-400 to-teal-600 text-white text-xl px-2 py-2 rounded-md ml-8 md:ml-12 
                  md:px-2 md:py-2 md:text-xl hover:bg-gradient-to-l from-cyan-400 to-teal-600 hover:scale-105 duration-200' href="#">Hire Me</button></li>
                </ul>
            </nav>
           
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
