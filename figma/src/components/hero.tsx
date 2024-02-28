import React from 'react';
import mouseIcon from '../assets/mouse.svg';
import ratingIcon from '../assets/rating.svg';
import { Button } from './btn';
import { HeroSlice } from './hero-slide';

const Hero = () => {
   return (
      <div className="relative min-h-[872px]">
         <div className="w-1/2 bg-[#AA9585] absolute top-0 bottom-0 left-1/2" />
         <div className="flex flex-1 app-container">
            <div className="pt-[14.75rem] w-1/2">
               <h1 className="text-[5rem] font-semibold leading-[5.125rem] uppercase max-w-[453px]">
                  enjoy life sip by sip
               </h1>
               <p className="mt-[1.125rem] text-[#5F6575] text-lg max-w-[516px]">
                  <span className="text-[#AA9585]">Voi Coffee</span> is aimed at
                  everyone, especially young, active, busy people. The brand is
                  committed to providing customers with great coffee
                  experiences, even when they are in a hurry.
               </p>
               <div className="flex items-center mt-[1.625rem]">
                  <img src={mouseIcon} alt="" />
                  <div className="h-[5.25rem] w-[2px] bg-[#dbdcdf] ml-[1.375rem] mr-[1.875rem]" />
                  <div>
                     <span className="text-[#181B1D] text-lg font-medium">
                        Trusted Users
                     </span>
                     <img
                        src={ratingIcon}
                        alt=""
                        className="mt-[0.625rem] mb-3"
                     />
                     <p className="text-lg text-[#5F6575] ">
                        Over{' '}
                        <span className="text-[#BB8B67] underline">13.5K</span>{' '}
                        happy users all over the world
                     </p>
                  </div>
               </div>
               <Button className="mt-7">Order now</Button>
            </div>
            <div className="pt-[12.063rem]">
               <div className="ml-[2.438rem]">
                  <HeroSlice />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
