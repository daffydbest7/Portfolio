import React from "react";
import css from '../images/css.png';
import html from '../images/html.png';
import bootstrap from '../images/bootstrap.png';
import django from '../images/django.png';
import expressjs from '../images/expressjs.png';
import framermotion from '../images/framermotion.jpeg';
import github from '../images/github.svg';
import mongodb from '../images/mongodb.png';
import mysql from '../images/mysql.png';
import nodejs from '../images/nodejs.png';
import python from '../images/python.png';
import reactjs from '../images/reactjs.png';
import restapi from '../images/restapi.png';
import tailwind from '../images/tailwind.png';
import { fadeIn } from "../variants";
import { motion } from "framer-motion";


const Experience =() =>{

    const skills = [
        {
            id: 1, src: tailwind,  title: 'Tailwind',  style: 'shadow-teal-800 shadow-md  py-2 rounded-full',          
        },
        {
            id: 2,  src: reactjs, title: 'react', style: 'shadow-blue-800 shadow-md  py-2 rounded-full',
        },
        {
            id: 3,src: github, title: 'github', style: 'shadow-gray-800 shadow-md  py-2 rounded-full',
        },
        {
            id: 4,src: html, title: 'html5',style: 'shadow-orange-400 shadow-md  py-2 rounded-full',           
        },
        {
            id: 5, src: css, title: 'css3',style: 'shadow-green-800 shadow-md  py-2 rounded-full',     
        },
        {
            id: 6,  src: bootstrap,  title: 'bootstrap',  style: 'shadow-purple-800 shadow-md  py-2 rounded-full',           
        },
        {
            id: 7, src: nodejs,  title: 'nodejs',  style: 'shadow-yellow-800 shadow-md  py-2 rounded-full',          
        },
        {
            id: 8,  src: mongodb, title: 'mongodb', style: 'shadow-green-500 shadow-md  py-2 rounded-full',
        },
        {
            id: 9,src: mysql, title: 'mysql', style: 'shadow-blue-800 shadow-md  py-2 rounded-full',
        },
        {
            id: 10,src: restapi, title: 'rest api',style: 'shadow-yellow-400 shadow-md  py-2 rounded-full',           
        },
        {
            id: 11, src: python, title: 'python',style: 'shadow-red-500 shadow-md  py-2 rounded-full',     
        },
        {
            id: 12,  src: django,  title: 'django',  style: 'shadow-teal-800 shadow-md  py-2 rounded-full',           
        },
        {
            id: 13,  src: framermotion, title: 'framer', style: 'shadow-blue-500 shadow-md  py-2 rounded-full',
        },
        {
            id: 14,src: expressjs, title: 'express', style: 'shadow-gray-800 shadow-md  py-2 rounded-full',
        },

    ]
    return (
        <div name="experience" className="mx-auto  w-full dark:bg-gradient-to-t from-black to-black dark:text-gray-300">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
                <div>
                    <p className="text-2xl lg:text-3xl font-bold border-b-4 border-gray-500 p-2 inline text-teal-500">Experience</p>
                    <p className="py-6 text-md lg:text-lg">In cause of this awesome journey, I've not been scared to try out new things and ideas.
                    Listed here are relevant tech,languages & frameworks I have theoretical and practical knowledge about. The list Isn't exhuastive
                     as some were deliberately left out.</p>
                </div>

                <motion.div variants={fadeIn('right', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}}
                className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8  sm:px-0 lg:text-md ">

                    { skills.map(({id,src,title,style})=>(
                        <div key={id} className={`${style} rounded-full hover:animate-ping`}>
                        <img src={src} alt="skill"  className="w-20 h-20 mx-auto hover:scale-105 rounded-full duration-500"/>
                        <p className="pt-4 text-sm md:text-md uppercase font-bold"> {title} </p>
                        </div>
                    ))         
                    }

                </motion.div>
            </div>

        </div>
    )
}

export default Experience