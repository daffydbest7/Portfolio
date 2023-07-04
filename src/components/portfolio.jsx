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
        <div className="pb-8  dark:bg-gradient-to-b from-black/95 to-black dark:text-gray-300">
        <section name="portfolio" className="container mx-auto section md:h-screen ">
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full">
               {/** Portfolio header here */}
                <div className="pb-8">
                    <p className="text-center text-teal-500 text-2xl lg:text-3xl font-bold lg:inline lg:border-b-4 lg:border-teal-500">Portfolio</p>
                    <p className="text-center py-6 lg:text-start lg:text-xl text-md">Check out some of my work right here</p>
                </div>

                {/**portfolio cards here */}
                <motion.div  variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.1}}
                className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 ">
                {
                    portfolios.map(({id,src}) => (                       
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 lg:text-md">
                        <img src={src} alt="img" className="rounded-md "/>
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 text-sm md:text-md px-6 py-3 m-2 duration-200 hover:scale-105 text-teal-500 font-bold uppercase">Code</button>
                            <button className="w-1/2 text-sm md:text-md px-6 py-3 m-2 duration-200 hover:scale-105 text-teal-500 font-bold uppercase">Demo</button>
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