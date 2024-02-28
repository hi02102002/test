import { Heart, ShoppingCart } from 'lucide-react';
import React, { useLayoutEffect } from 'react';
import { Button } from './btn';

type Props = {
   product: {
      name: string;
      price: number;
      image: string;
      desc: string;
   };
};

const ProductItem = ({ product }: Props) => {
   const { name, price, image, desc } = product;

   const btnRef = React.useRef<HTMLDivElement>(null);
   const itemRef = React.useRef<HTMLDivElement>(null);

   useLayoutEffect(() => {
      if (!itemRef.current || !btnRef.current) return;

      itemRef.current.style.paddingBottom = `${
         btnRef.current.offsetHeight / 2
      }px`;
   }, []);

   return (
      <div>
         <div className="pt-[4.875rem] relative" ref={itemRef}>
            <img
               src={image}
               alt=""
               className="max-h-[177px] max-w-[242px] w-full h-full object-contain absolute top-0 left-1/2 -translate-x-1/2"
            />
            <div className="p-[1.563rem] w-full min-h-[19.313rem] bg-[#D9D9D9] rounded-tr-[3.125rem] rounded-bl-[3.125rem] pt-[6.25rem]">
               <span className="text-2xl font-bold text-[#071731] line-clamp-2">
                  {name}
               </span>
               <p className="line-clamp-2">{desc}</p>
               <div className="flex items-center justify-center gap-6 mt-[1.563rem]">
                  <button className="bg-[#291E24] w-[2.375rem] h-[2.375rem] flex items-center justify-center rounded-lg text-white">
                     <ShoppingCart size={14} />
                  </button>
                  <button className="bg-[#291E24] w-[2.375rem] h-[2.375rem] flex items-center justify-center rounded-lg text-white">
                     <Heart size={14} />
                  </button>
               </div>
            </div>
            <div
               ref={btnRef}
               className="absolute flex items-center justify-center w-full bottom-0"
            >
               <Button variant="order">
                  {price.toLocaleString('it-IT', {
                     style: 'currency',
                     currency: 'VND',
                  })}
               </Button>
            </div>
         </div>
      </div>
   );
};

export default ProductItem;
