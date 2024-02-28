import { useLayoutEffect, useRef } from 'react';
import { Button } from './btn';

const Inbox = () => {
   const inboxSectionRef = useRef<HTMLDivElement>(null);

   useLayoutEffect(() => {
      if (!inboxSectionRef.current) return;

      inboxSectionRef.current.style.transform = `translateY(-${
         inboxSectionRef.current.clientHeight / 2
      }px)`;
   }, []);

   return (
      <div id="inbox-section" ref={inboxSectionRef} className="absolute w-full">
         <div className="app-container">
            <div className="py-20 w-full bg-[#F8FAFC]  rounded-tr-[3.75rem] rounded-bl-[3.75rem]">
               <h3 className="text-[#071731] text-center rounded-tr-[3.75rem] rounded-bl-[3.75rem] text-5xl font-semibold ">
                  Deliciousness to your inbox
               </h3>
               <p className="max-w-[38.75rem] mx-auto text-[#5F6575] text-center mt-[0.625rem] mb-16">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim ad minim
               </p>
               <div
                  className="max-w-[30rem] mx-auto bg-white p-[0.625rem]
            rounded-tr-3xl rounded-bl-3xl flex items-stretch 
            "
               >
                  <input
                     type="text"
                     className="w-full placeholder:text-[rgba(95, 101, 117, 0.40)] placeholder:font-medium placeholder:text-sm focus:outline-none ml-8"
                     placeholder="Your email address..."
                  />
                  <Button className="bg-black max-w-40 max-h-[3.75rem]">
                     Subscribe
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Inbox;
