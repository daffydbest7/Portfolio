import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import img1 from '../images/developer.jpg'
import img2 from '../images/analysis.jpg'
import img3 from '../images/services.jpg'


const Portfolio =() =>{

    const portfolios =[
        {
            id:1,
            src: img1,
        },
        {
            id:2,
            src: img2,
        },
        {
            id:3,
            src: img3,
        },
    ]

    return(
        <section name="portfolio" className="section  w-full  md:h-screen dark:bg-black dark:text-gray-300" id="portfolio">
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
               {/** Portfolio header here */}
                <div className="pb-8 ">
                    <p className="text-center text-teal-500 text-4xl font-bold lg:inline lg:border-b-4 lg:border-teal-500">Portfolio</p>
                    <p className="text-center py-6 lg:text-start text-2xl">Check out some of my work right here</p>
                </div>

                {/**portfolio cards here */}
                <motion.div  variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.5}}
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {
                    portfolios.map(({id,src}) => (                       
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 text-2xl">
                        <img src={src} alt="" className="rounded-md "/>
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-teal-500 font-bold uppercase">Code</button>
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-teal-500 font-bold uppercase">Demo</button>
                        </div>
                        </div>
                    
                    ))
                }
                </motion.div> 
            </div>
        </section>
    )
}

export default Portfolio;