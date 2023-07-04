import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Contact = () =>{
    return (
        <div className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white dark:bg-gradient-to-t from-black/80 to-black/100 dark:text-gray-300" name="contact">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-2xl lg:text-3xl font-bold inline border-b-4 text-teal-500 border-gray-500">Contact</p>
                    <p className="py-6 text-md lg:text-xl">Submit the form below to get in touch with me</p>
                </div>
                <motion.div variants={fadeIn('right', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}
                className="flex justify-center items-center">
                    <form action="https://getform.io/f/3edaa17c-e0e6-4cd4-806c-eb3700a415f7" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Enter your name" 
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                        {/**hidden honeypot input to prevent spams */}
                        <input type="hidden" name="_gotcha" />

                        <input type="email" name="email" placeholder="Enter your email address" 
                        className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                        <textarea name="message" rows="10" placeholder="Hi, I think we need a frontend developer for our product at Company Y. How soon can you jump on to discuss this? "
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                        <button className="text-white bg-gradient-to-b from-teal-200 to-teal-500 px-4 py-2 lg:px-6 lg:py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">Hey! Let's talk</button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact;