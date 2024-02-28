import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import slide1 from '../assets/slide.jpg';
import { cn } from '../utils/cn';
import { LeftArrow, RightArrow } from './btn-arrow';
import { useDotButton, usePrevNextButtons } from '../hooks/embla';

const IMAGES = [slide1, slide1, slide1, slide1];

export function HeroSlice() {
   const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
   });

   const { selectedIndex, scrollSnaps, onDotButtonClick } =
      useDotButton(emblaApi);

   const { onPrevButtonClick, onNextButtonClick } =
      usePrevNextButtons(emblaApi);

   return (
      <div className="relative z-10">
         <div className="flex items-center  gap-6">
            <LeftArrow onClick={onPrevButtonClick} />
            <div
               className="max-w-[25.5rem]"
               style={
                  {
                     '--slide-height': '33.75rem',
                     '--slide-spacing': ' 1rem',
                     '--slide-size': '100%',
                  } as React.CSSProperties
               }
            >
               <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex items-center backface-visible touch-pan-y ml-[calc(var(--slide-spacing)_*_-1)]">
                     {IMAGES.map((src, index) => {
                        return (
                           <div
                              key={src + index}
                              style={{
                                 flex: '0 0 var(--slide-size)',
                                 height: 'var(--slide-height)',
                              }}
                              className="min-w-0 pl-[var(--slide-spacing)]  overflow-hidden"
                           >
                              <img
                                 src={src}
                                 alt=""
                                 className="rounded-[30px] object-cover w-full h-full"
                              />
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
            <RightArrow onClick={onNextButtonClick} />
         </div>
         <ul className="flex gap-4 items-center justify-center mt-16">
            {scrollSnaps.map((snap, index) => {
               return (
                  <li key={snap} className="flex items-center justify-center">
                     <div className="w-5 h-5 flex items-center justify-center">
                        <button
                           className={cn(
                              'w-4 h-4 bg-white relative rounded-full',
                              {
                                 'bg-transparent w-5 h-5 border-2 border-black transition-all':
                                    selectedIndex === index,
                              }
                           )}
                           onClick={() => onDotButtonClick(index)}
                        >
                           {selectedIndex === index && (
                              <span className="w-2 h-2 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                           )}
                        </button>
                     </div>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
