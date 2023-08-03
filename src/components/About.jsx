import React from "react";

//countup
import CountUp from 'react-countup'
import { motion } from "framer-motion";
import {fadeIn} from '../variants';
import about from '../images/DAVEGROOVE.jpg';
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
    value: 15,
  },
  {
    id: 3,
    title: <p>Teams <br/>Lead </p>,
    value: 4,
  },
  {
    id: 4,
    title: <p>Satisfied<br/> Clients</p>,
    value: 15,
  },
  {
    id: 5,
    title: <p>Hours <br/>Spent </p>,
    value: 11,
    text:"k+",
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
                  <img src={about} className="rounded-lg dark:mix-plus-lighter animate-pulse" alt="small screen pic"/>
                </div>
                {/* texts here */}
                <div className="flex-1 ">
                    <motion.h2 variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}} 
                    className="text-2xl uppercase text-primary lg:text-3xl font-bold mb-4">
                    About me</motion.h2>
                    
                  <motion.h3 variants={fadeIn('left', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}} 
                  className="mb-8 font-bold text-md md:text-xl">
                    I'm a Passionate Developer with over 4 years in web development, 
                    having core knowledge on the concept of programming,Graphic Designs, Data Analysis
                    and Research.
                  </motion.h3>
                    
                  <motion.p variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}}
                  className="mb-4 text-justify text-sm md:text-md lg:text-lg">                
                    Enthusiastic and passionate about web3 and blockchain development, currently specializing in the MERN stack (MongoDB, Express.js, React, and Node.js) through the help of
                    the <span className="font-bold italic">Utiva x Binance Charity scholarship</span> and because of the roadmap it takes to achieving my desire of being relevant in the 
                    <span className="font-bold italic"> future of web (Web3/blockchain). </span> <br/><br/>
                    My journey in the world of programming has been a thrilling ride, and I find immense joy in crafting elegant and efficient solutions. In my quest
                     to be groomed all round i've been able to also try out the Low-Code/No-Code concepts for building faster and 
                    increase turnaround time with the help of enormous solutions out there. 
                    I have a varse knowledge of theoretical and practical programming having read and carried out hands-on practices and projects using diverse concepts 
                    and stacks. This has given me an edge to smoothly dive into conversations, fit in within teams, take a role as an associate, product manager,  consultant 
                    or Freelance.
                    
                    </motion.p>
                    <motion.div 
                    variants={fadeIn('left', 0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}
                    className="flex gap-x-4 lg:gap-x-10 mb-12 ">  
                    {stats.map(({id,value,title,text}) =>(
                      <div className="grid grid-cols-3 gap-2">
                    <div key={id} >
                    <div className="text-xl md:text-3xl text-primary font-bold mb-2">                    
                    {inView ? <CountUp start={0}  end={value} duration={6}/>: null}{text}  
                    </div>
                    <div className="text-sm tracking-[0px] font-bold">
                    {title}
                    </div>
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

