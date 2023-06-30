import {BsFillMoonStarsFill} from 'react-icons/bs';
const Header = ()=> {
  return (
 
  <main id="header" className='container mx-auto min-h-[200px]'>
    <section className=''>
      <nav className='py-10 mb-12 flex justify-between'>
        <h1 className='text-3xl md:text-5xl hover:scale-110 duration-200 font-signature'> developedbydave</h1>
        <ul className='flex items-center'>
          <li><BsFillMoonStarsFill className='cursor-pointer text-2xl md:text-3xl hover:text-teal-400 hover:scale-110 duration-200'/></li>
          <li> <a className='bg-gradient-to-r from-cyan-400 to-teal-600 text-white px-4 py-2 rounded-md ml-8 md:ml-12 
          md:px-8 md:py-4 md:text-xl hover:bg-gradient-to-l from-cyan-400 to-teal-600 hover:scale-105 duration-200' href="#">Hire Me</a></li>
        </ul>
      </nav> 
    </section>
  </main>

  ); 
}

export default Header;
