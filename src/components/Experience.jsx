import React from "react";
import tailwind from '../images/analysis.jpg';
import react from '../images/developer.jpg';
import github from '../images/services.jpg';
import { fadeIn } from "../variants";
import { motion } from "framer-motion";


const Experience =() =>{

    const skills = [
        {
            id: 1,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400',

        },
        {
            id: 2,
            src: react,
            title: 'react',
            style: 'shadow-blue-500',

        },
        {
            id: 3,
            src: github,
            title: 'github',
            style: 'shadow-gray-800',

        },

    ]
    return (
        <div name="experience" className="mx-auto lg:h-screen  w-full dark:bg-gradient-to-t from-black to-black dark:text-gray-300">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-teal-500">Experience</p>
                    <p className="py-6 text-2xl">Here are the technologies i have worked with</p>
                </div>

                <motion.div variants={fadeIn('right', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}}
                className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 text-2xl">

                    { skills.map(({id,src,title,style})=>(
                        <div key={id} className={"shadow-md  py-2 rounded-lg"+ style}>
                        <img src={src} alt="" className="w-60 mx-auto hover:scale-110 rounded-md duration-500"/>
                        <p className="mt-4 uppercase"> {title} </p>
                        </div>
                    ))         
                    }

                </motion.div>
            </div>

        </div>
    )
}

export default Experience