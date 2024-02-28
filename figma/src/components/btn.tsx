import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils/cn';

const buttonVariants = cva(
   'inline-flex items-center justify-center font-semibold',
   {
      variants: {
         variant: {
            default:
               'bg-[#AA9585] rounded-tr-2xl rounded-bl-2xl text-white shadow-btn-primary py-[1.313rem] px-[2.625rem]',
            order: 'bg-[#291E24] rounded-[0.625rem] text-white py-2 px-[1.375rem]',
         },
      },
      defaultVariants: {
         variant: 'default',
      },
   }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
   VariantProps<typeof buttonVariants>;
export const Button = ({
   variant,
   className,
   children,
   ...props
}: ButtonProps) => {
   return (
      <button className={cn(buttonVariants({ variant, className }))} {...props}>
         {children}
      </button>
   );
};
