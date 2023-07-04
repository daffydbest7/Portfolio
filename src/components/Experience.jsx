import React from "react";
import css from '../images/css.png';
import html from '../images/html.png';
import powerbi from '../images/Powerbi.png';
import bootstrap from '../images/bootstrap.png';
import django from '../images/django.png';
import expressjs from '../images/expressjs.png';
import framermotion from '../images/framermotion.jpeg';
import github from '../images/github.svg';
import mongodb from '../images/mongodb.png';
import mysql from '../images/mysql.png';
import nodejs from '../images/nodejs.png';
import powerapp from '../images/powerapp.png';
import powerautomate from '../images/powerautomate.png';
import python from '../images/python.png';
import reactjs from '../images/reactjs.png';
import restapi from '../images/restapi.png';
import tailwind from '../images/tailwind.png';
import { fadeIn } from "../variants";
import { motion } from "framer-motion";


const Experience =() =>{

    const skills = [
        {
            id: 1, src: tailwind,  title: 'Tailwind',  style: 'shadow-sky-400 shadow-md  py-2 rounded-lg',          
        },
        {
            id: 2,  src: reactjs, title: 'react', style: 'shadow-blue-500 shadow-md  py-2 rounded-lg',
        },
        {
            id: 3,src: github, title: 'github', style: 'shadow-gray-800 shadow-md  py-2 rounded-lg',
        },
        {
            id: 4,src: html, title: 'html5',style: 'shadow-sky-400 shadow-md  py-2 rounded-lg',           
        },
        {
            id: 5, src: css, title: 'css3',style: 'shadow-blue-500 shadow-md  py-2 rounded-lg',     
        },
        {
            id: 6,  src: bootstrap,  title: 'bootstrap',  style: 'shadow-gray-800 shadow-md  py-2 rounded-lg',           
        },
        {
            id: 7, src: nodejs,  title: 'nodejs',  style: 'shadow-sky-400 shadow-md  py-2 rounded-lg',          
        },
        {
            id: 8,  src: mongodb, title: 'mongodb', style: 'shadow-blue-500 shadow-md  py-2 rounded-lg',
        },
        {
            id: 9,src: mysql, title: 'mysql', style: 'shadow-gray-800 shadow-md  py-2 rounded-lg',
        },
        {
            id: 10,src: restapi, title: 'rest api',style: 'shadow-sky-400 shadow-md  py-2 rounded-lg',           
        },
        {
            id: 11, src: python, title: 'python',style: 'shadow-blue-500 shadow-md  py-2 rounded-lg',     
        },
        {
            id: 12,  src: django,  title: 'django',  style: 'shadow-gray-800 shadow-md  py-2 rounded-lg',           
        },
        {
            id: 13,  src: framermotion, title: 'framer', style: 'shadow-blue-500 shadow-md  py-2 rounded-lg',
        },
        {
            id: 14,src: expressjs, title: 'express', style: 'shadow-gray-800 shadow-md  py-2 rounded-lg',
        },
        {
            id: 15,src: powerapp, title: 'power app',style: 'shadow-sky-400 shadow-md  py-2 rounded-lg',           
        },
        {
            id: 16, src: powerautomate, title: 'power automate',style: 'shadow-blue-500 shadow-md  py-2 rounded-lg',     
        },
        {
            id: 17,  src: powerbi,  title: 'power bi',  style: 'shadow-gray-800 shadow-md  py-2 rounded-lg ',           
        },

    ]
    return (
        <div name="experience" className="mx-auto  w-full dark:bg-gradient-to-t from-black to-black dark:text-gray-300">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
                <div>
                    <p className="text-2xl lg:text-3xl font-bold border-b-4 border-gray-500 p-2 inline text-teal-500">Experience</p>
                    <p className="py-6 text-md">Here are the technologies i have worked with</p>
                </div>

                <motion.div variants={fadeIn('right', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}}
                className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8  sm:px-0 lg:text-md">

                    { skills.map(({id,src,title,style})=>(
                        <div key={id} className={style}>
                        <img src={src} alt=""  className="w-20 h-20 mx-auto hover:scale-105 rounded-md duration-500"/>
                        <p className="pt-4 text-sm md:text-md uppercase"> {title} </p>
                        </div>
                    ))         
                    }

                </motion.div>
            </div>

        </div>
    )
}

export default Experience