import React from "react";
import { Link } from "react-scroll";
import { BsArrowUp } from "react-icons/bs";




const Quickscroll =() => {
    return(
        <div>
        <div name="scrollup" className="hidden lg:block fixed bottom-0 rounded-full right-0 bg-teal-500">
            <Link to="home" smooth={true} spy={true} duration={1500} offset={200} className="text-white font-bold "> <BsArrowUp size={15}/></Link>
        </div>
    </div>
    )
}

export default Quickscroll;

