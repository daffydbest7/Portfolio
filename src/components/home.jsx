import React from "react";
//import icons
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa';
//import animation
import {TypeAnimation} from 'react-type-animation';
//import motion
import {motion} from 'framer-motion';
//import variants
import {fadeIn} from '../variants';
//import image
import Profile from "../images/profile_.jpg";
import nightmode from "../images/nightmode.jpg";



const Home =() => {
  
    return(
        <div>
        <div name="home"  className="dark:bg-gradient-to-t from-black to-black/5 dark:text-gray-300">
            
            <div className="container min-h-[72vh] lg:min-h-[78vh] mx-auto font-bold">
            <div className="flex flex-col items-center mt-12 gap-y-8 lg:flex-row lg:items-center lg:gap-x-12"> 
                <div className="flex-1 text-center lg:text-left ">
                    <motion.h1 variants={
                        fadeIn('up', 0.3)
                    } initial="hidden"
                     whileInView={'show'} 
                     viewport={{once:false, amount:0.7}} 
                     className="text-4xl mb-2 font-bolder leading-[0.8] lg:text-6xl">
                        DAVID <span>LAWRENCE</span>
                    </motion.h1>
                    <motion.div 
                    variants={
                        fadeIn('up', 0.4)
                    } initial="hidden"
                     whileInView={'show'} 
                     viewport={{once:false, amount:0.7}} 
                     className="uppercase mb-6 text-2xl lg:text-4xl leading-[1]">
                    <span className="mr-4"> I am a</span>
                    <TypeAnimation sequence={[
                        'Full stack Developer',
                        2000,
                        'Data Analyst',
                        2000,
                        'Researcher',
                        2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="text-teal-500"
                    wrapper="span"

                    />  
                </motion.div>
                <motion.p 
                variants={
                    fadeIn('up', 0.5)
                } initial="hidden"
                 whileInView={'show'} 
                 viewport={{once:false, amount:0.7}} className="md:max-w-[600px] text-2xl">
                    lorem ipsum sit emet consectlorem ipsum sit emet consectlorem ipsum sit emet consect
                    lorem ipsum sit emet consect
                    lorem ipsum sit emet consectlorem ipsum sit emet consectlorem ipsum sit emet consect
                    lorem ipsum sit emet consectlorem ipsum sit emet consectlorem ipsum sit emet consect
                </motion.p>
                <motion.div 
                variants={
                    fadeIn('up', 0.6)
                } initial="hidden"
                 whileInView={'show'} 
                 viewport={{once:false, amount:0.7}} 
                 className="flex justify-center lg:justify-start  space-x-3 my-4 text-2xl text-black lg:text-4xl my-8 lg:hidden">                  
                    <a href="#"> <FaGithub className="hover:text-teal-500 hover:scale-105 duration-300"/></a>
                    <a href="#"><FaInstagram className="hover:text-teal-500 hover:scale-105 duration-300"/></a>
                    <a href="#"><FaTwitter className="hover:text-teal-400 hover:scale-105 duration-300" /></a>                               
                </motion.div>
                <motion.div 
                variants={
                    fadeIn('up', 0.7)
                } initial="hidden"
                 whileInView={'show'} 
                 viewport={{once:false, amount:0.7}} 
                 className=" mt-8">
                    <button className="group flex mx-auto p-2 btn btn-lg rounded-xl text-white 
                    bg-teal-500 drop-shadow-lg lg:m-0 cursor-pointer items-center"><span>PORTOLIO</span> <span className="group-hover:rotate-90 duration-300"><MdOutlineKeyboardArrowRight size={25}/></span> </button>
                </motion.div>
                </div>
                {/** daylight mode image */}
                <motion.div
                variants={
                    fadeIn('down', 0.6)
                } initial="hidden"
                 whileInView={'show'} 
                 viewport={{once:false, amount:0.7}} 
                  className="dark:hidden">
                    <img src={Profile} className="max-w-[200px] max-h-[200px] lg:max-w-[300px] lg:max-h-[300px] rounded-full " alt="pic"/>
                </motion.div>

                {/**night mode image */}
                <motion.div
                variants={
                    fadeIn('down', 0.6)
                } initial="hidden"
                 whileInView={'show'} 
                 viewport={{once:false, amount:0.7}} 
                  className="hidden dark:block">
                    <img src={nightmode} className="max-w-[200px] max-h-[200px] lg:max-w-[250px] lg:max-h-[250px] rounded-full hover:scale-105 duration-300 " alt="nightlifeimage"/>
                </motion.div>
            </div>
        </div>
    </div>
    </div>
    )
};

export default Home;
