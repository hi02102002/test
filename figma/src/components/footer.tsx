import { useLayoutEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

const TiktokIcon = () => {
   return (
      <svg
         stroke="currentColor"
         fill="currentColor"
         stroke-width="0"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
         className="w-4 h-4"
      >
         <path d="M11.0004 2V8.41396C10.5947 8.33909 10.1768 8.3 9.75039 8.3C5.96724 8.3 2.90039 11.3668 2.90039 15.15C2.90039 18.9332 5.96724 22 9.75039 22C13.5335 22 16.6004 18.9332 16.6004 15.15V11.4136C17.6366 11.8539 18.7662 12.1 20.0005 12.1H21.0005V6.5H20.0005C18.0966 6.5 16.6004 4.96259 16.6004 3V2H11.0004ZM13.0004 4H14.688C15.0818 6.22009 16.7673 7.99607 19.0005 8.4091V10.0282C17.9624 9.87602 17.0253 9.48645 16.1567 8.905L14.6004 7.86327V15.15C14.6004 17.8286 12.429 20 9.75039 20C7.07181 20 4.90039 17.8286 4.90039 15.15C4.90039 12.4714 7.07181 10.3 9.75039 10.3C9.83431 10.3 9.91769 10.3021 10.0005 10.3063V11.9095C9.91795 11.9032 9.83454 11.9 9.75039 11.9C7.95547 11.9 6.50039 13.3551 6.50039 15.15C6.50039 16.9449 7.95547 18.4 9.75039 18.4C11.5453 18.4 13.0004 16.9449 13.0004 15.15C13.0004 11.4334 12.9992 7.71665 13.0004 4ZM8.50039 15.15C8.50039 14.4596 9.06003 13.9 9.75039 13.9C10.4407 13.9 11.0004 14.4596 11.0004 15.15C11.0004 15.8404 10.4407 16.4 9.75039 16.4C9.06003 16.4 8.50039 15.8404 8.50039 15.15Z"></path>
      </svg>
   );
};

const FOOTER_COLS: Array<{
   title: string;
   items: Array<{
      name: string;
      url: string;
      Icon?: () => JSX.Element;
   }>;
}> = [
   {
      title: 'Company',
      items: [
         {
            name: 'About us',
            url: '#about-us',
         },
         {
            name: 'Features',
            url: '#features',
         },
         {
            name: 'Watch Our Video',
            url: '#video',
         },
         {
            name: 'Contact Us',
            url: '#contact',
         },
      ],
   },
   {
      title: 'Contact Us',
      items: [
         {
            name: 'Privacy Policy',
            url: '#privacy',
         },
         {
            name: 'Terms of Use',
            url: '#terms',
         },
         {
            name: 'Cookies Policy',
            url: '#cookies',
         },
         {
            name: 'GDPR Policy',
            url: '#gdpr',
         },
         {
            name: 'Refund Policy',
            url: '#refund',
         },
      ],
   },
   {
      title: 'Social Media',
      items: [
         {
            name: 'Facebook',
            url: '#facebook',
            Icon: () => <FacebookIcon size={16} />,
         },
         {
            name: 'Twitter',
            url: '#twitter',
            Icon: () => <TwitterIcon size={16} />,
         },

         {
            name: 'Instagram',
            url: '#instagram',
            Icon: () => <InstagramIcon size={16} />,
         },
         {
            name: 'Tiktok',
            url: '#tiktok',
            Icon: () => <TiktokIcon />,
         },
      ],
   },
];

const Footer = () => {
   const footerRef = useRef<HTMLDivElement>(null);

   useLayoutEffect(() => {
      const inboxSection = document.getElementById('inbox-section');

      if (!footerRef.current || !inboxSection) return;

      footerRef.current.style.paddingTop = `${
         inboxSection.clientHeight / 2 + 72
      }px`;
   });

   return (
      <footer className="bg-black pb-[4.75rem]" ref={footerRef}>
         <div className="app-container">
            <div className="max-w-[1110px] mx-auto">
               <div className="flex items-start gap-[12.75rem]">
                  <div>
                     <img src={logo} className="w-[3.875rem] object-contain" />
                     <p className="text-[#808E98] max-w-[20.125rem] mt-2">
                        Sit amet nisl purus in mollis nunc sed id semper. In
                        vitae turpis massa sed. Sed velit dignissim sodales ut e
                     </p>
                  </div>
                  <div className="grid grid-cols-3 flex-1">
                     {FOOTER_COLS.map((col) => (
                        <div key={col.title}>
                           <span className="text-white text-lg font-bold mb-[1.625rem] uppercase inline-block">
                              {col.title}
                           </span>
                           <ul className="flex flex-col gap-[1.563rem]">
                              {col.items.map((item) => (
                                 <li key={item.name}>
                                    <a
                                       href={item.url}
                                       className="text-[#808E98] flex items-center gap-[0.625rem] hover:underline"
                                    >
                                       {item?.Icon ? (
                                          <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center flex-shrink-0 rounded-full bg-[#272C30]">
                                             {item.Icon()}
                                          </div>
                                       ) : null}
                                       {item.name}
                                    </a>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="w-full h-[1px] bg-white mt-[4.375rem] mb-14"></div>
               <span className="block text-center text-sm text-[#94999C]">
                  © 2022 VoiCoffee - All rights reserved.
               </span>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
