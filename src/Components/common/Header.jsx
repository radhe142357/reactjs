import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className="max-w-[1320px] m-auto flex items-center justify-between gap-5 px-5	py-[35px]">
        <Link to={'/'}>
          <img src="/Icons/logo.svg" alt="Logo" className=" w-auto" />
        </Link>

        <nav className=" ">
          <ul className="flex items-center justify-between gap-x-[30px]">
            <li><Link to={'/'} className="font-medium text-[18px] leading-[100%] font-inter">Home</Link></li>
            <li><Link to={'/about'} className="font-medium text-[18px] leading-[100%] font-inter">About</Link></li>
            <li><Link to={'/work'} className="font-medium text-[18px] leading-[100%] font-inter">How It Works</Link></li>
            <li><Link to={'/blog'} className="font-medium text-[18px] leading-[100%] font-inter">Blog</Link></li>
            <li><Link to={'/contact'} className="font-medium text-[18px] leading-[100%] font-inter">Contact</Link></li>
          </ul>

        </nav>
        <div className="flex items-center justify-between gap-x-[30px]">
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
    </>
  )
}

export default Header