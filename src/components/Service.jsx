import React from "react";
//icon
import { BsArrowRight } from "react-icons/bs";
//variants
import { fadeIn } from "../variants";
//motion
import { motion } from "framer-motion";


// services

const services =[{
    name: 'Data Analysis',
    description: 'Meet David, a data enthusiast with a keen eye for patterns and insights. Armed with a strong background in data analysis, effortlessly navigates through complex datasets, uncovering hidden gems that drive informed decision-making. My expertise lies in rendering top-notch data analysis services, where I transform raw numbers into meaningful stories, empowering businesses to thrive in the data-driven world. With me by your side, expect clarity, accuracy, and actionable results that elevate your organization to new heights.',
    link: 'Learn more',
},
{
    name: 'Software Development',
    description: 'As a skilled software developer, I have a passion for crafting exceptional solutions. With a solid foundation in coding languages and frameworks, I thrive in the world of software development. From conceptualization to implementation, my expertise shines as I transform ideas into feature-rich applications. Whether its front-end wizardry or back-end mastery, my skills bridge the gap between imagination and reality, delivering cutting-edge software that meets and exceeds expectations. Collaborating with me guarantees innovation, reliability, and a seamless user experience that propels projects to the forefront of the digital landscape. Embrace the power of software development with me at the helm.',
    link: 'Learn more',
},
{
    name: 'Product Management',
    description: 'I thrive in driving innovation and delivering customer-centric solutions. With a data-driven approach and a passion for success, I excel at transforming ideas into impactful products that resonate with the market. Collaborate with me to navigate the product development journey and achieve business growth through strategic decision-making and seamless execution. Lets create exceptional products together.',
    link: 'Learn more',
},
{
    name: 'Research',
    description: 'As a dedicated researcher, I am driven by a passion for knowledge discovery and problem-solving. With a keen eye for detail and a methodical approach, I excel in conducting thorough investigations and generating valuable insights. Collaborate with me to explore new frontiers and make meaningful contributions to the world of research. Lets embark on a journey of discovery together.',
    link: 'Learn more',
}]

const Services =()=>{
    return(
       <section className="w-full pt-8 pb-4 lg:pb-12 dark:bg-gradient-to-t from-black/95 to-black dark:text-gray-300" name="service">
        <div className="lg:container mx-auto ">
            <div className="container flex flex-col justify-between lg:flex-row">
                {/* text & image*/}
                
                <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}}
                className=" text-center flex-1 lg:bg-service_img bg-cover  lg:max-w-[600px] lg:bg-bottom lg:mb-0 lg:bg-no-repeat dark:lg:mix-blend-luminosity rounded-2xl lg:hover:scale-110 duration-300">
                    
                    <h2 className="text-teal-500 lg:text-white font-bold text-2xl uppercase mb-6 pt-4 lg:text-5xl"> What I Do.</h2>
                    <h3 className="dark:text-white text-md mb-16 lg:text-xl lg:text-white">
                    Major Highlights of My Capabilities... 
                    </h3>
                    
                </motion.div>
            
                {/* services */}
                <motion.div variants={fadeIn('left', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}}>
                    {/* services list */}
                    <div>
                        {services.map((service, index)=>{
                            //destructure service
                            const {name, description, link} = service
                           return(
                            <div className="border border-b border-teal-500 dark:border-white mb-4 hover:scale-105 duration-300 " key={index}>
                                <div className="lg:max-w-[450px] ml-4">
                                <h4 className="text-teal-500 mt-2 text-xl lg:text-2xl">{name} </h4>  
                                <p className="mb-4 text-sm lg:text-lg text-justify pr-2">{description}</p>
                                </div>
                                <div className="flex text-sm mb-2 ml-4 text-teal-500 items-center "><button href="#" >{link}</button> <BsArrowRight size={8} className="ml-2"/></div>   
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