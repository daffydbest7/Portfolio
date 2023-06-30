import React from "react";
//import icons
import {BiHomeAlt, BiUser, BiHomeHeart} from 'react-icons/bi';
import { BsClipboardData, BsBriefcase } from "react-icons/bs";
import {GiSkills} from 'react-icons/gi';
import {MdOutlineConnectWithoutContact, MdOutlineMiscellaneousServices, MdWorkHistory} from 'react-icons/md';
import {GrServices} from 'react-icons/gr';



// link
import { Link } from "react-scroll";




const Navbar =() =>{
   
    const links =[
        {
            id: 1,
            icon: <BiHomeHeart size={30}/>,
            to: "home",
            
        },
        {
            id: 2,
            icon: <BiUser size={30}/>,
            to: "about",
          
        },
        {
            id: 3,
            icon: <MdOutlineMiscellaneousServices size={30}/>,
            to: "service",
           
        },
        {
            id: 4,
            icon: <MdWorkHistory size={30}/>,
            to: "portfolio",
        },
        {
            id: 5,
            icon: <GiSkills size={30}/>,
            to: "experience",
        },
        {
            id: 6,
            icon: <MdOutlineConnectWithoutContact size={40} />,
            to: "contact",
        },
    ]

    return(
        <nav name="navbar" className=" fixed bottom-[-2px] lg:bottom-8 w-full overflow-hidden z-50 ">
        <div className="sm:container-none mx-auto ">  
            {/* nav inner*/}
            <div className="bg-gradient-to-l from-black/60 to-black/100 h-[76px] backdrop-blur-2xl md:rounded-full lg:rounded-full 
           sm:max-w-full md:max-w-[500px] lg:max-w-[500px] xl:max-w-[500px] mx-auto px-5 flex drop-shadow-2xl
             justify-between items-center text-2xl text-white hover:bg-gradient-to-r from-black/60 to-black/100
              lg:dark:border border-teal-500 "> 
             { links.map(({id,icon,to})=>(
                <div className="">
                <Link activeClass="active-component" key={id} to={to}  smooth={true} spy={true} duration={1500} offset={0} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-teal-500">
                {icon}     
            </Link>
                </div>
             ))}
                
              
            </div>
        </div>
        </nav>
    )

};

export default Navbar;