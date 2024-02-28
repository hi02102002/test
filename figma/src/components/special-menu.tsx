import { LeftArrow, RightArrow } from './btn-arrow';
import ProductItem from './product-item';
import coffee1 from '../assets/cofffe-1.png';
import coffee2 from '../assets/coffe-2.png';
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons } from '../hooks/embla';

const PRODUCTS = [
   {
      name: 'Cappuccino',
      price: 120000,
      image: coffee1,
      desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   },
   {
      name: 'Cappuccino',
      price: 120000,
      image: coffee2,
      desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   },
   {
      name: 'Cappuccino',
      price: 120000,
      image: coffee1,
      desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   },
   {
      name: 'Cappuccino',
      price: 120000,
      image: coffee1,
      desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   },
];

const SpecialMenu = () => {
   const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
      slidesToScroll: 3,
   });

   const { onPrevButtonClick, onNextButtonClick } =
      usePrevNextButtons(emblaApi);

   return (
      <div className="bg-[#F8FAFC] pt-[9.25rem] pb-[5.5rem] relative">
         <div className="app-container">
            <div className="flex items-center justify-between">
               <div>
                  <h3 className="text-[3.5rem] mb-5 font-bold text-[#071731]">
                     Specical menu for you
                  </h3>
                  <p className="text-[#5F6575] text-lg max-w-[45.313rem]">
                     Drinking Cofffe Can Do Much More Than Provide An Energy
                     Boost. It May Also Reduce The Risk Of Several Health
                     Issues.
                  </p>
               </div>
               <div className="flex items-center gap-6">
                  <LeftArrow onClick={onPrevButtonClick} />
                  <RightArrow onClick={onNextButtonClick} />
               </div>
            </div>
            <div
               style={
                  {
                     '--slide-spacing': '8.438rem',
                  } as React.CSSProperties
               }
            >
               <div className="overflow-x-hidden" ref={emblaRef}>
                  <div className="flex items-center backface-visible touch-pan-y ml-[calc(var(--slide-spacing)_*_-1)]">
                     {PRODUCTS.map((product, index) => (
                        <div
                           key={product.name + index}
                           className="min-w-0 pl-[var(--slide-spacing)]  overflow-x-hidden basis-1/3 shrink-0 grow-0"
                        >
                           <ProductItem product={product} />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SpecialMenu;
