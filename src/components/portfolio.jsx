import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";
import bennyteam from '../images/Bennyspecsteam.png';
import  wclone1 from '../images/websiteclone1.png';                                
import  djangoportfolio from '../images/djangoportfolio .png';
import  javadrum1 from '../images/javascriptDrumClick.png';
import  qrcode_man from '../images/qrcode.png';
import  blog from '../images/blog.png';                             
import  developer from '../images/developer.jpg';
import binance from '../images/binance.png';
import graphics from '../images/graphics.jpeg';




const Portfolio =() =>{                                         

    const portfolios =[ 
        {                           
            id:1, src: binance, desc: "Binance Charity Chat: Utiva X Binance Africa discuss the importance of blockchain education across Africa.",  
            url: "https://x.com/BinanceBCF/status/1679173941586456577?s=20", target:"_blank", style: 'shadow-gray-800 shadow-lg rounded-lg ',  
        },          
        {
            id:2, src: bennyteam, desc: "Data / System Analyst For Bennyspecs Mobile App MockUp", 
            url: "#", target: "", style: 'shadow-teal-800 shadow-lg rounded-lg ',  
        },
        {
            id:8,src: graphics, desc: "Sample KingDavid Branded Graphics on Dribble",  
            url: "https://dribbble.com/KingDavid_001", target:"_blank", style: 'shadow-cyan-800 shadow-lg  rounded-lg ',  
        },
        
        {
            id:5,src: qrcode_man, desc: "Dynamic QrCode Generator With Payment API Integration",  
            url: "https://davidqrcode.onrender.com", target:"_blank",
            style: 'shadow-purple-800 shadow-lg rounded-lg ',  
        },       
        {
            id:6,src: blog, desc: "Personal Blog Project: Under Construction",  
            url: "https://byteplay.onrender.com", target:"_blank", style: 'shadow-red-800 shadow-lg  rounded-lg ',  
        },
        {
            id:3,src: wclone1, desc: "Official Cook Collective Landing Page Clone: Using HTML, CSS Web View ONLY",  
            url: "https://vhee4.github.io/Group_10_website_cloning/",target:"_blank", style: 'shadow-blue-800 shadow-lg rounded-lg ',  
        },
        {
            id:7,src: djangoportfolio, desc: "Portfolio Using Python and Django",  
            url: "#",  target: "", style: 'shadow-yellow-800 shadow-lg rounded-lg ',  
        },
       
        {
            id:4,src: javadrum1, desc: "Drumkit Using Javascript Click Event",  
            url: "https://daffydbest7.github.io/-JavaScript-30-days-challenge/JavaScript%20Drum%20Kit/click.html",
            target:"_blank",style: 'shadow-green-800 shadow-lg rounded-lg ',  
        },
        {
            id:9,src: developer, desc: "Freelancing Services",  
            url: "#", target: "", style: 'shadow-cyan-800 shadow-lg  rounded-lg ',  
        },
        
    ]



    return(
        <div className="pb-8  dark:bg-gradient-to-b from-black/95 to-black dark:text-gray-300">
        <section name="portfolio" className="container mx-auto section ">
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center">
               {/** Portfolio header here */}
                <div className="pb-8">
                    <p className="text-center text-teal-500 text-2xl lg:text-3xl font-bold lg:inline lg:border-b-4 lg:border-teal-500">Portfolio</p>
                    <p className="text-center py-6 lg:text-start lg:text-lg text-md">I'm passionate about the work and services I render. 
                    Having synced confidently with teams as well as working independently. Here are few Highlights for your reference...</p>
                </div>

                {/**portfolio cards here */}
                <motion.div  variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.1}}
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                {
                    portfolios.map(({id,src,desc,url,style,target}) => (                       
                        <div key={id} className={`max-h-[300px] lg:max-h-[270px] shadow-md rounded-lg duration-200 hover:animate-pulse hover:scale-105 lg:text-md ${style}`}>
                        <img src={src} alt="img" className="w-full h-[170px] mx-auto rounded-md"/> 
                        <div className="mx-auto text-center">
                            <p className="lg:text-sm  px-2  m-2 text-black dark:text-white font-bold ">{desc}</p>
                            <Link to={url} target={target} className="text-sm md:text-md m-2  text-teal-500 font-bold uppercase pb-12 lg:pb-2">Verify</Link>
                        </div>
                        </div>
                    
                    ))
                }
                </motion.div> 
                <p className="mt-8 text-center animate-pulse">and lots more...</p>
            </div>
        </section>
        </div>
    )
}

export default Portfolio;