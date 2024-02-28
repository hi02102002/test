import { HTMLProps, useId, useRef, useState } from 'react';
import { cn } from '../cn';

interface Props extends HTMLProps<HTMLTextAreaElement> {
   label?: string;
}

const Input = ({ label, className, ...props }: Props) => {
   const id = useId();
   const [focus, setFocus] = useState<boolean>(false);
   const textareaRef = useRef<HTMLTextAreaElement | null>(null);

   return (
      <div className="w-full">
         <textarea
            className={cn(
               'resize-none overflow-hidden bg-transparent border-0 outline-0 text-black h-[32px] break-words  whitespace-pre-wrap w-full ',
               className
            )}
            id={id}
            ref={textareaRef}
            onFocus={() => {
               setFocus(true);
            }}
            onBlur={() => {
               setFocus(false);
            }}
            onInput={() => {
               if (textareaRef.current) {
                  textareaRef.current.style.height = '32px';
                  textareaRef.current.style.height =
                     textareaRef.current.scrollHeight + 'px';
               }
            }}
            {...props}
         />
         <div
            className="h-1 w-full transition-all cursor-pointer"
            onClick={() => {
               setFocus(true);
               textareaRef.current?.focus();
            }}
            style={{
               boxShadow: focus
                  ? '0 0.25rem 0 0 #303545'
                  : '0 .125rem 0 0 #303545',
            }}
         ></div>
         {label && (
            <label
               htmlFor={id}
               className="mt-[0.625rem] block font-semibold text-neutral-500 uppercase text-[12px]"
            >
               {label}
            </label>
         )}
      </div>
   );
};

export default Input;
