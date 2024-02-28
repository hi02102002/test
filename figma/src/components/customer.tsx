import Review from './review';
import customer from '../assets/customer.png';
import { LeftArrow, RightArrow } from './btn-arrow';
import { cn } from '../utils/cn';
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons, useDotButton } from '../hooks/embla';
import double from '../assets/double.png';

const REVIEWS = [
   {
      name: 'John Doe',
      comment:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5,
      position: 'CEO at Voi Coffee',
   },
   {
      name: 'John Doe',
      comment:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5,
      position: 'CEO at Voi Coffee',
   },
   {
      name: 'John Doe',
      comment:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5,
      position: 'CEO at Voi Coffee',
   },
   {
      name: 'John Doe',
      comment:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5,
      position: 'CEO at Voi Coffee',
   },
];

const CustomerReview = () => {
   const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
   });

   const { onPrevButtonClick, onNextButtonClick } =
      usePrevNextButtons(emblaApi);

   const { selectedIndex, scrollSnaps, onDotButtonClick } =
      useDotButton(emblaApi);

   return (
      <div className="pt-32 pb-[21.75rem]">
         <div className="app-container">
            <h3 className="text-center text-[3.5rem] text-[#071731]">
               Happy Customer
            </h3>
            <p className="text-lg text-[#5F6575] text-center max-w-[645px] mx-auto mt-5">
               So perhaps peopel who are genetically geared to reach to that
               extra cup of coffee could be boosting their health, as well as
               their productivity.
            </p>
            <div className="mt-[3.875rem] flex items-center">
               <div className="flex flex-col items-center mr-[4.5rem] ">
                  <div className="relative w-[17.5rem] ">
                     <div className="w-[17.5rem] rounded-full bg-[#fff7e9] h-[17.5rem] overflow-hidden relative ">
                        <img
                           src={customer}
                           alt=""
                           className="absolute top-0 left-0 w-full h-full object-contain "
                           style={{
                              transform: 'rotateY(180deg)',
                           }}
                        />
                     </div>
                     <img src={double} className="absolute right-0 top-0" />
                  </div>
                  <ul className="flex gap-4 items-center justify-center mt-16">
                     {scrollSnaps.map((snap, index) => {
                        return (
                           <li
                              key={snap}
                              className="flex items-center justify-center"
                           >
                              <div className="w-5 h-5 flex items-center justify-center">
                                 <button
                                    className={cn(
                                       'w-4 h-4 bg-[#AA9584] relative rounded-full',
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

               <div>
                  <div className="overflow-hidden" ref={emblaRef}>
                     <div className="flex items-center backface-visible touch-pan-y ml-[calc(var(--slide-spacing)_*_-1)]">
                        {REVIEWS.map((review, index) => {
                           return (
                              <div
                                 key={index}
                                 style={{
                                    height: 'var(--slide-height)',
                                 }}
                                 className="min-w-0 pl-[var(--slide-spacing)] overflow-hidden basis-full grow-0 shrink-0"
                              >
                                 <Review review={review} />
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex items-start">
               <div className="flex items-center gap-6 ml-auto">
                  <LeftArrow onClick={onPrevButtonClick} />
                  <RightArrow onClick={onNextButtonClick} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default CustomerReview;
