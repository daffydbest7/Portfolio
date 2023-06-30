import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
//variants
import { fadeIn } from "../variants";
//motion
import { motion } from "framer-motion";


// services

const services =[{
    name: 'Data Analysis',
    description: 'lorem ipsum dolor sit amet consectueurlorem ipsum dolor sit amet consectueur lorem ipsum dolor sit amet consectueur',
    link: 'Learn more',
},
{
    name: 'Software Development',
    description: 'lorem ipsum dolor sit amet consectueurlorem ipsum dolor sit amet consectueur lorem ipsum dolor sit amet consectueur',
    link: 'Learn more',
},
{
    name: 'Product Management',
    description: 'lorem ipsum dolor sit amet consectueurlorem ipsum dolor sit amet consectueur lorem ipsum dolor sit amet consectueur',
    link: 'Learn more',
},
{
    name: 'Research',
    description: 'lorem ipsum dolor sit amet consectueurlorem ipsum dolor sit amet consectueur lorem ipsum dolor sit amet consectueur',
    link: 'Learn more',
}]

const Services =()=>{
    return(
       <section className="w-full h-screen dark:bg-gradient-to-b from-black to-black dark:text-gray-300" name="service">
        <div className="container mx-auto ">
            <div className="flex flex-col justify-between lg:flex-row">
                {/* text & image*/}
                
                <motion.div variants={fadeIn('right', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}
                className="text-teal-400 lg:text-white text-center flex-1 lg:bg-service_img bg-cover max-w-[700px] lg:bg-bottom lg:mb-0 lg:bg-no-repeat lg:mix-blend-luminosity rounded-2xl lg:hover:scale-110 duration-300">
                    
                    <h2 className="font-bold text-4xl uppercase mb-6 mt-4"> What I Do.</h2>
                    <h3 className="h3 text-2xl mb-16 ">
                    I'm a freelance fullstack Developer with over 3 years of experience.  
                    </h3>
                    
                </motion.div>
            
                {/* services */}
                <motion.div variants={fadeIn('left', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}>
                    {/* services list */}
                    <div>
                        {services.map((service, index)=>{
                            //destructure service
                            const {name, description, link} =service
                           return(
                            <div className="border border-b border-white mb-4 hover:scale-105 duration-300 text-2xl" key={index}>
                                <div className="max-w-[600px] ml-4">
                                <h4 className="text-teal-500 mt-2">{name} </h4>  
                                <p className="mb-4">{description}</p>
                                </div>
                                <div className="flex mb-2 ml-4 text-teal-500"><a href="#" >{link}</a> <BsArrowUpRight className="ml-2"/></div>   
                            </div>
                           ) 

                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    </section> 

    )
}
export default Services;