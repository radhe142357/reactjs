import { Link } from "react-router-dom"
import { useState } from 'react'

const Header = () => {
  const [menu, menuOpen] = useState(false);
  const handleCloseMenu = () => setMenu(false);

  return (
    <>
      <div className="container">
        <header className="overflow-hidden flex items-center justify-between gap-5 py-[18px] md:py-[35px]">
          <Link to={'/'}><img src="/Icons/logo.svg" alt="Logo" className=" w-auto" /></Link>

          <nav className=" ">
            <p onClick={() => menuOpen(!menu)} className="md:hidden " >
              {menu ?
                <img src="/Icons/cross.svg" alt="X" />
                :
                <img src="/Icons/menu.svg" alt="=" />
              }</p>

            <ul className={`${menu ? "left-0" : "-left-full"} 
                transition-[left] duration-[700ms] ease-in-out absolute md:relative top-[66px] flex md:items-center md:justify-between bg-white flex-col 
                w-full h-screen pl-5 md:pl-0 pt-5 md:pt-0  md:gap-x-[30px] md:flex-row md:h-full md:top-0 md:left-0 `}>

              <li className="md:w-auto md:mb-0 w-full mb-3.5"><Link to={'/'} onClick={() => setMenu(false)} className="font-medium text-lg leading-[100%] font-inter  pb-5 md:pb-0  border-b md:border-b-0 border-[#55555533]  block">Home</Link></li>
              <li className="md:w-auto md:mb-0 w-full mb-3.5"><Link to={'/about'} className="font-medium text-lg leading-[100%] font-inter  pb-5 md:pb-0  border-b md:border-b-0 border-[#55555533]   block">About</Link></li>
              <li className="md:w-auto md:mb-0 w-full mb-3.5"><Link to={'/work'} className="font-medium text-lg leading-[100%] font-inter  pb-5 md:pb-0 border-b md:border-b-0  border-[#55555533]  block">How It Works</Link></li>
              <li className="md:w-auto md:mb-0 w-full mb-3.5"><Link to={'/blog'} className="font-medium text-lg leading-[100%] font-inter  pb-5 md:pb-0 border-b md:border-b-0   border-[#55555533]  block">Blog</Link></li>
              <li className="md:w-auto md:mb-0 w-full mb-3.5"><Link to={'/contact'} className="font-medium text-lg leading-[100%] font-inter block">Contact</Link></li>
            </ul>

          </nav>
          <div className="lg:flex hidden items-center justify-between gap-x-[30px]  ">
            <Link to={'/'}>
              <img src="/Icons/bell.svg" alt="Logo" className="h-10 w-6" />
            </Link>
            <Link to={'/'}>
              <img src="/Icons/user.svg" alt="Logo" className="h-10 w-6" />
            </Link>
            <Link to={'/'}>
              <img src="/Icons/search.svg" alt="Logo" className="h-10 w-6" />
            </Link>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header