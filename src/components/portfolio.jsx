import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";
import benny1 from '../images/bennyspecsLanding.png';
import bennyteam from '../images/Bennyspecsteam.png';
import  wclone1 from '../images/websiteclone1.png';                                
import  djangoportfolio from '../images/djangoportfolio .png';
import  javadrum1 from '../images/javascriptDrumClick.png';
import  javadrum2 from '../images/javascriptkeydown.png';
import  myissapi from '../images/myissapi.png';                             
import  developer from '../images/developer.jpg';
import  analysis from '../images/analysis.jpg';
import  services from '../images/services.jpg';



const Portfolio =() =>{                                         

    const portfolios =[ 
        {                           
            id:1, src: benny1, desc: "Bennyspecs Integrated Services (Analysis & MockUp)",  
            url: "https://bennydrop.com/",  style: 'shadow-gray-800 shadow-lg rounded-lg ',  
        },          
        {
            id:2, src: bennyteam, desc: "Data / System Analyst For Bennyspecs Mobile App MockUp", 
            url: "https://bennydrop.com/about-us/",  style: 'shadow-teal-800 shadow-lg rounded-lg ',  
        },
        {
            id:3,src: wclone1, desc: "Software Team Group Project",  
            url: "https://vhee4.github.io/Group_10_website_cloning/", style: 'shadow-blue-800 shadow-lg rounded-lg ',  
        },
    
        {
            id:6,src: javadrum1, desc: "Drumkit Using Javascript Click Event",  
            url: "https://daffydbest7.github.io/-JavaScript-30-days-challenge/JavaScript%20Drum%20Kit/click.html",
            style: 'shadow-green-800 shadow-lg rounded-lg ',  
        },
        {
            id:7,src: javadrum2, desc: "Drumkit Using Javascript Keydown Event",  
            url: "https://daffydbest7.github.io/-JavaScript-30-days-challenge/JavaScript%20Drum%20Kit/",
            style: 'shadow-purple-800 shadow-lg rounded-lg ',  
        },       
        {
            id:11,src: myissapi, desc: "Display the Live Position of ISS using FAKE REST API",  
            url: "https://myissapi.netlify.app/", style: 'shadow-red-800 shadow-lg  rounded-lg ',  
        },
        {
            id:12,src: djangoportfolio, desc: "My Personal Portfolio Built Using Python and Django",  
            url: "",  style: 'shadow-yellow-800 shadow-lg rounded-lg ',  
        },
        {
            id:13,src: developer, desc: "Freelance Development",  
            url: " ",  style: 'shadow-cyan-800 shadow-lg  rounded-lg ',  
        },
        {
            id:14,src: analysis, desc: "Analysis Of Data Using Excel Functions", 
            url: "",  style: 'shadow-green-800 shadow-lg   rounded-lg ',  
        },
        {
            id:15,src: services,  desc: "Service Oriented", 
            url: "",  style: 'shadow-pink-800 shadow-lg  rounded-lg ',  
        },
    ]



    return(
        <div className="pb-8  dark:bg-gradient-to-b from-black/95 to-black dark:text-gray-300">
        <section name="portfolio" className="container mx-auto section ">
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center">
               {/** Portfolio header here */}
                <div className="pb-8">
                    <p className="text-center text-teal-500 text-2xl lg:text-3xl font-bold lg:inline lg:border-b-4 lg:border-teal-500">Portfolio</p>
                    <p className="text-center py-6 lg:text-start lg:text-lg text-md">I'm passionate about the work and services I've rendered thus far. 
                    Having synced confidently with teams as well as working independently. Here are few Highlights for your reference...</p>
                </div>

                {/**portfolio cards here */}
                <motion.div  variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.1}}
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                {
                    portfolios.map(({id,src,desc,url,style}) => (                       
                        <div key={id} className={`max-h-[250px] shadow-md rounded-lg duration-200 hover:animate-pulse hover:scale-105 lg:text-md ${style}`}>
                        <img src={src} alt="img" className="w-full h-[170px] mx-auto rounded-md"/> 
                        <div className="mx-auto text-center">
                            <p className="text-sm  px-2  m-2 text-black dark:text-white uppercase text-justify font-bold ">{desc}</p>
                            <Link to={url} target="_blank" className="text-sm md:text-md m-2  text-teal-500 font-bold uppercase ">inspect</Link>
                        </div>
                        </div>
                    
                    ))
                }
                </motion.div> 
            </div>
        </section>
        </div>
    )
}

export default Portfolio;