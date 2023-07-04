import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import benny1 from '../images/bennyspecsLanding.png';
import bennyteam from '../images/Bennyspecsteam.png';
import  wclone1 from '../images/websiteclone1.png';
import  wclone2 from '../images/websiteclone2.png';
import  wclone3 from '../images/websiteclone3.png';                                 
import  djangoportfolio from '../images/djangoportfolio .png';
import  javadrum1 from '../images/javascriptDrumClick.png';
import  javadrum2 from '../images/javascriptkeydown.png';
import  myissapi from '../images/myissapi.png';                             
import  figma0 from '../images/figmaGtbank.png';
import  figma1 from '../images/figmaGtbank0.png';
import  figma2 from '../images/figmaGtbank1.png';

import  developer from '../images/developer.jpg';
import  analysis from '../images/analysis.jpg';
import  services from '../images/services.jpg';



const Portfolio =() =>{                                         

    const portfolios =[ 
        {                           
            id:1, src: benny1, desc: "Bennyspecs delivery Integrated Services",  
        },          
        {
            id:2, src: bennyteam, desc: "Among Team of Bennydrop.com for the mockup, analysis and development phase", 
        },
        {
            id:3,src: wclone1, desc: "Team project Utiva for a website clone",  
        },
        {
            id:4, src: wclone2,  desc: "Team project Utiva for a website clone ",     
        },
        {
            id:5, src: wclone3,  desc: "Team project Utiva for a website clone",   
        },
        {
            id:6,src: javadrum1, desc: "Built a drumkit using Javascript click event",  
        },
        {
            id:7,src: javadrum2, desc: "Converted the drumkit to a Keydown event",  
        },
        {
            id:8, src: figma0, desc: "Product design using Figma", 
        },
        {
            id:9, src: figma1, desc: "Product design using Figma", 
        },
        {
            id:10,src: figma2, desc: "Product design using Figma",   
        },
        {
            id:11,src: myissapi, desc: "Used a rest api to display the live position of ISS",  
        },
        {
            id:12,src: djangoportfolio, desc: "My personal portfolio built using python and Django",  
        },
        {
            id:13,src: developer, desc: "Freelance development",  
        },
        {
            id:14,src: analysis, desc: "Analysis of data using Excel functions", 
        },
        {
            id:15,src: services,  desc: "Service oriented", 
        },
    ]



    return(
        <div className="pb-8  dark:bg-gradient-to-b from-black/95 to-black dark:text-gray-300">
        <section name="portfolio" className="container mx-auto section ">
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center">
               {/** Portfolio header here */}
                <div className="pb-8">
                    <p className="text-center text-teal-500 text-2xl lg:text-3xl font-bold lg:inline lg:border-b-4 lg:border-teal-500">Portfolio</p>
                    <p className="text-center py-6 lg:text-start lg:text-xl text-md">Check out some of my work right here</p>
                </div>

                {/**portfolio cards here */}
                <motion.div  variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.1}}
                className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 ">
                {
                    portfolios.map(({id,src,desc}) => (                       
                        <div key={id} className="max-h-[250px] shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 lg:text-md">
                        <img src={src} alt="img" className="w-full h-[170px] mx-auto rounded-md "/>
                        <div className="">
                            <p className=" text-sm  px-2  m-2 duration-200 hover:scale-105 text-teal-500  uppercase ">{desc}</p>
                            <button className=" text-sm md:text-md m-2 duration-200 hover:scale-105 text-teal-500 font-bold uppercase ">Demo</button>
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