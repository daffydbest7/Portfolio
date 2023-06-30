import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import {AiFillInstagram} from 'react-icons/ai';
import {TfiUser} from 'react-icons/tfi';

const SocialLinks =() =>{

    const links =[
        {
            id: 1,
            child: (
                <>
                Resume <TfiUser size={30}/>
                </>
            ),           
            style: 'rounded-tr-md bg-gradient-to-r from-teal-400 to-teal-700',
            href: '/DAVIDLAWRENCE.pdf',
            download: true,
        },
        {
            id: 2,
            child: (
                <>
                GitHub<FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/daffydbest7',  
            style: 'bg-gradient-to-r from-gray-600 to-github',      
        },
        {
            id: 3,
            child: (
                <>
                LinkedIn<FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/david-lawrence-6b2513b0',
            style: 'bg-gradient-to-r from-blue-400 to-blue-700',           
        },
        {
            id: 4,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:daffydbest@gmail.com',
            style: 'bg-gradient-to-r from-black to-gray-600',
            
        },
        {
            id: 5,
            child: (
                <>
                Twitter <BsTwitter size={25}/>
                </>
            ),  
            href: 'https://twitter.com/daffydbest',        
            style: 'bg-gradient-to-r from-blue-300 to-twitter',  
        },
        {
            id: 6,
            child: (
                <>
                Instagram <AiFillInstagram size={30}/>
                </>
            ),
            href: 'https://instagram.com/daffydbest',
            style: 'rounded-br-md bg-gradient-to-r from-igorange to-igpurple',         
        },
    ]    
    return(
        <div name="socialLinks" className="hidden lg:flex flex-col top-[35%] left-0 fixed">
          <ul>  
            {links.map(({id,child,href,style,download})=>(

                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4  ml-[-75px] hover:ml-[-10px] hover:rounded-md duration-300 hover:scale-110" +" "+ style}>
                <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer"> {child} </a></li>
            ))}
            
        </ul> 
           
        </div>
    )
}

export default SocialLinks;