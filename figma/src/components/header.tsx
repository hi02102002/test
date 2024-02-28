import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { cn } from '../utils/cn';
import { ShoppingCart, User } from 'lucide-react';

const NAV_ITEMS = [
   {
      title: 'Home',
      url: '#home',
   },
   {
      title: 'Service',
      url: '#service',
   },
   {
      title: 'Our menu',
      url: '#menu',
   },
   {
      title: 'About us',
      url: '#about-us',
   },
   {
      title: 'Contact',
      url: '#contact',
   },
];

const Header = () => {
   const [active, setActive] = useState('#home');

   useEffect(() => {
      setActive(window.location.href.split('/').pop() || '#home');
   }, []);

   return (
      <header className="flex items-center fixed top-0 left-0 right-0 z-50 ">
         <div className="app-container">
            <div className="flex items-center justify-between  border-b border-[#CADAD4] pt-[2.875rem] pb-[1.264rem]">
               <a
                  href="/"
                  className=" w-[4.125rem] flex items-center justify-center"
               >
                  <img
                     src={logo}
                     alt="Logo"
                     className="w-full h-full object-contain"
                  />
               </a>
               <div className="flex items-center  gap-[3.25rem]">
                  <ul className="flex gap-[3.25rem] items-center">
                     {NAV_ITEMS.map((item) => (
                        <li key={item.url}>
                           <a
                              href={item.url}
                              className={cn(
                                 'inline-block text-sm font-medium text-[#071731] relative after:transition-all after:w-0',
                                 {
                                    'after:content-[""] after:w-full after:h-[2px] after:bg-[#071731] after:absolute after:bottom-0 after:left-0 after:right-0':
                                       active.includes(item.url),
                                 }
                              )}
                              onClick={() => setActive(item.url)}
                           >
                              {item.title}
                           </a>
                        </li>
                     ))}
                  </ul>
                  <ul className="flex items-center gap-[0.875rem]">
                     <div className="flex items-end gap-[0.875rem] cursor-pointer">
                        <User size={21} />
                        <span>Account</span>
                     </div>
                     <div className="flex items-end gap-[0.875rem] cursor-pointer">
                        <ShoppingCart size={21} />
                        <span>Cart</span>
                     </div>
                  </ul>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
