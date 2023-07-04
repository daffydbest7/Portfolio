import React from "react";

//countup
import CountUp from 'react-countup'
import { motion } from "framer-motion";
import {fadeIn} from '../variants';
import about from '../images/about2.jpg';
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
          <div className="dark:bg-gradient-to-b from-black/95 to-black dark:text-gray-500">
         <section className="lg:container lg:mx-12 section pt-8 lg:min-h-screen pb-12" name="about" ref={ref}>
          <div className="container mx-auto h-full ">
            <div className="flex  flex-col-reverse lg:flex-row lg:gap-x-12 lg:gap-y-0 lg:items-start ">
                {/* about image */}
                <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}}
                className="hidden md:block flex-1 bg-about h-[200px] md:h-[300px] lg:h-[300px] xl:h-[300px] bg-cover bg-no-repeat 
                mix-blend-luminosity bg-top rounded-2xl hover:scale-105 duration-300"></motion.div>
                {/** about image for sm */}
                <div className="md:hidden ">
                  <img src={about} className="h-2/3 rounded-md dark:mix-plus-lighter" alt="small screen pic"/>
                </div>
                {/* texts here */}
                <div className="flex-1 ">
                    <motion.h2 variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}} 
                    className="text-2xl uppercase text-primary lg:text-3xl font-bold mb-4">
                    About me</motion.h2>
                    
                  <motion.h3 variants={fadeIn('left', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}} 
                  className="mb-8 font-bold text-md md:text-xl">
                    I'm a freelance fullstack Developer with over 3 years of experience.
                  </motion.h3>
                    
                  <motion.p variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}}
                  className="mb-4 text-justify md:text-md">                
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
                    className="flex gap-x-4 lg:gap-x-10 mb-12 ">  
                    {stats.map(({id,value,title}) =>(

                    <div key={id}>
                    <div className="text-2xl md:text-3xl text-primary font-bold mb-2">                    
                    {inView ? <CountUp start={0}  end={value} duration={6}/>: null}       
                    </div>
                    <div className="lg:text-sm tracking-[0px] font-bold">
                    {title}
                    </div>
                    </div> 

                    ))}                                   
                                                   
                </motion.div>                
                </div>
            </div>
          </div>
        </section>
      </div>
     
    )
}
export default About;

