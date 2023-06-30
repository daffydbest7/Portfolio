import React from "react";

//countup
import CountUp from 'react-countup'
import { motion } from "framer-motion";
import {fadeIn} from '../variants';
//intersection observer hook
import { useInView } from "react-intersection-observer";


const About = () => {
  
  const stats =[{
    id: 1,
    title: <p>Years of <br/>Experience </p>,
    value: 4,
  },
  {
    id: 2,
    title: <p>Projects <br/>Completed </p>,
    value: 10,
  },
  {
    id: 3,
    title: <p>Satisfied<br/> Clients</p>,
    value: 8,
  },
  {
    id: 4,
    title: <p>Hours <br/>Spent </p>,
    value: 1000,
  }
]
  const {ref, inView} = useInView([
    ])
    return (
        
         <section className="section pb-12 dark:bg-gradient-to-t from-black to-black dark:text-gray-300" name="about" ref={ref}>
          <div className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row lg:gap-x-12 lg:gap-y-0 lg:items-center h-[850px] lg:min-h-screen">
                {/* about image */}
                <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.5}}
                className="flex-1 bg-about h-[400px] bg-cover bg-no-repeat 
                mix-blend-luminosity bg-top rounded-2xl hover:scale-105 duration-300"></motion.div>
                {/* texts here */}
                <div className="flex-1 ">
                    <motion.h2 variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} 
                    className="text-4xl uppercase text-primary lg:text-6xl font-bold mb-4">
                    About me</motion.h2>
                    
                  <motion.h3 variants={fadeIn('left', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} 
                  className="mb-8 font-bold text-2xl">
                    I'm a freelance fullstack Developer with over 3 years of experience.
                  </motion.h3>
                    
                  <motion.p variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}
                  className="mb-4 text-justify text-2xl">                
                    lorem ipsum sit emet consectlorem ipsum sit emet consectlorem ipsum sit emet consect
                    lorem ipsum sit emet consect
                    lorem ipsum sit emet consectlorem ipsum sit emet consectlorem ipsum sit emet consect
                    lorem ipsum sit emet consectlorem ipsum sit emet consectlorem ipsum sit emet consect
                    lorem ipsum sit emet consectlorem ipsum sit emet consectlorem ipsum sit emet consect
                    lorem ipsum sit emet consect
                    lorem ipsum sit emet consectlorem ipsum sit emet consectlorem ipsum sit emet consect
                    lorem ipsum sit emet consectlorem ipsum sit emet consectlorem ipsum sit emet consect
                    lorem ipsum sit emet consectlorem ipsum sit emet consectlorem ipsum sit emet consect
                    
                    </motion.p>
                    <motion.div 
                    variants={fadeIn('left', 0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}
                    className="flex gap-x-6 lg:gap-x-10 mb-12">  
                    {stats.map(({id,value,title}) =>(

                    <div key={id}>
                    <div className="text-4xl text-primary font-bold mb-2">                    
                    {inView ? <CountUp start={0}  end={value} duration={6}/>: null}       
                    </div>
                    <div className="text-sm tracking-[2px] font-bold">
                    {title}
                    </div>
                    </div> 

                    ))}                                   
                                                   
                </motion.div>                
                </div>
            </div>
          </div>
        </section>
      
     
    )
}
export default About;

