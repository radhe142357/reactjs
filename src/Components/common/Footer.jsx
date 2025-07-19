import { Link } from "react-router-dom"

const Footer = () => {
  return (
      <footer className="py-[35px]">
        {/* Menu Container ---------------------- */}
        <div className="max-w-[1360px] m-auto flex justify-between px-5 gap-5 flex-wrap">
          <div className="max-w-[485px] ">
            <Link to={'/'}>
              <img src="/Icons/logo.svg" alt="Logo" className="mb-6 max-w-[205px]" />
            </Link>
            <p className="font-inter font-normal text-xl leading-[130%] mb-6 text-[#555555]">CoWorkMate helps you find and book the perfect coworking space anywhere, anytime.</p>
            <p className="font-normal text-base md:text-lg leading-[100%] font-inter mb-3.5 inline-block text-[#555555]">Email: <span className="text-[#765AFF]"> support@coworkmate.com</span> </p>
            <p className="font-normal text-base md:text-lg  leading-[100%] font-inter mb-3.5 text-[#555555]">Phone: <a href="tel:+91 98765 43210"></a>+91 98765 43210</p>
            <p className="font-normal text-base md:text-lg leading-[100%] font-inter text-[#555555]">Address : Mumbai, India</p>
          </div>

          <ul className=" ">
            <li className="font-inter font-semibold text-lg leading-[130%] mb-6">Quick Links</li>
            <li><Link to={'/'} className="font-normal text-lg leading-[100%] font-inter mb-3.5 inline-block text-[#555555]">Home</Link></li>
            <li><Link to={'/about'} className="font-normal text-lg leading-[100%] font-inter mb-3.5 inline-block text-[#555555]">Browse Workspaces</Link></li>
            <li><Link to={'/work'} className="font-normal text-lg leading-[100%] font-inter mb-3.5 inline-block text-[#555555]" >How It Works</Link></li>
            <li><Link to={'/blog'} className="font-normal text-lg leading-[100%] font-inter mb-3.5 inline-block text-[#555555]">Blog</Link></li>
            <li><Link to={'/contact'} className="font-normal text-lg leading-[100%] font-inter text-[#555555]">Contact</Link></li>
          </ul>

          <ul className=" ">
            <li className="font-inter font-medium text-lg leading-[130%]  mb-6">Explore</li>
            <li><Link to={'/'} className="font-normal text-lg leading-[100%] font-inter mb-3.5 inline-block text-[#555555]">For Freelancers</Link></li>
            <li><Link to={'/about'} className="font-normal text-lg leading-[100%] font-inter mb-3.5 inline-block text-[#555555]">For Teams</Link></li>
            <li><Link to={'/work'} className="font-normal text-lg leading-[100%] font-inter mb-3.5 inline-block text-[#555555]">Private Cabins</Link></li>
            <li><Link to={'/blog'} className="font-normal text-lg leading-[100%] font-inter mb-3.5 inline-block text-[#555555]">Daily Passes</Link></li>
            <li><Link to={'/contact'} className="font-normal text-lg leading-[100%] font-inter text-[#555555]">Book by City</Link></li>
          </ul>

          <ul className=" ">
            <li className="font-inter font-medium text-lg leading-[130%]  mb-6">Support</li>
            <li><Link to={'/'} className="font-normal text-lg leading-[100%] font-inter mb-3.5 inline-block">FAQ</Link></li>
            <li><Link to={'/about'} className="font-normal text-lg leading-[100%] font-inter mb-3.5 inline-block text-[#555555]">Help Center</Link></li>
            <li><Link to={'/work'} className="font-normal text-lg leading-[100%] font-inter mb-3.5 inline-block text-[#555555]">Cancellation Policy</Link></li>
            <li><Link to={'/blog'} className="font-normal text-lg leading-[100%] font-inter mb-3.5 inline-block text-[#555555]">Privacy Policy</Link></li>
            <li><Link to={'/contact'} className="font-normal text-lg leading-[100%] font-inter text-[#555555]">Terms & Conditions  </Link></li>
          </ul>
        </div>

        {/* Copy Right Container ---------------------- */}
        <span className="border-t border-[#55555533] block mt-44" ></span>
        <div className="flex justify-between items-center max-w-[1320px] m-auto px-5">

          <p className=" ">© 2025 CoWorkMate. All rights reserved.</p>

          {/* Social Icons ---------------------- */}
          <div className="flex">
            <a href="#"><img src="/Icons/bell.svg" alt="Logo" className="h-10 w-6" /></a>
            <a href="#"><img src="/Icons/user.svg" alt="Logo" className="h-10 w-6" /></a>
            <a href="#"><img src="/Icons/search.svg" alt="Logo" className="h-10 w-6" /></a>
            <a href="#"><img src="/Icons/search.svg" alt="Logo" className="h-10 w-6" /></a>
            <a href="#"><img src="/Icons/search.svg" alt="Logo" className="h-10 w-6" /></a>
          </div>
        </div>

      </footer>
  )
}

export default Footer