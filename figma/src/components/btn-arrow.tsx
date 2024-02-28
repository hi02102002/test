import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png';
import { cn } from '../utils/cn';

type Props = {
   onClick?: () => void;
   className?: string;
};

export const LeftArrow = (props: Props) => {
   const { onClick, className } = props;
   return (
      <button className="flex-shrink-0" onClick={onClick}>
         <img
            src={arrowLeft}
            alt="left"
            className={cn('w-20 h-20', className)}
            draggable={false}
         />
      </button>
   );
};

export const RightArrow = (props: Props) => {
   const { onClick, className } = props;
   return (
      <button className="flex-shrink-0" onClick={onClick}>
         <img
            src={arrowRight}
            alt="left"
            className={cn('w-20 h-20', className)}
            draggable={false}
         />
      </button>
   );
};
