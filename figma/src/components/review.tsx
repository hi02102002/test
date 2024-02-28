import { Star } from 'lucide-react';
import double from '../assets/double.png';
import { cn } from '../utils/cn';

type Props = {
   review: {
      name: string;
      comment: string;
      rating: number;
      position: string;
   };
};

const Review = ({ review }: Props) => {
   const { name, comment, rating, position } = review;
   return (
      <div className="flex items-center">
         <div>
            <p className="italic text-[1.875rem] font-medium text-[#071731]">
               "{comment}"
            </p>
            <div className="mt-[4.875rem] flex items-center gap-[5.625rem]">
               <div className="flex flex-col">
                  <span className="text-[#071731] text-lg font-semibold">
                     {name}
                  </span>
                  <span className="text-[#5F6575]">{position}</span>
               </div>
               <div className="flex items-center">
                  {[...Array(rating)].map((_, index) => {
                     return (
                        <Star
                           key={index}
                           size={20}
                           className={cn({
                              'text-yellow-500': index <= rating,
                           })}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Review;
