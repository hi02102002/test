import { Plus, Trash } from 'lucide-react';
import {
   ChangeEvent,
   FormEvent,
   useCallback,
   useEffect,
   useRef,
   useState,
} from 'react';
import Input from './input';

export type IFlashcard = {
   id: string;
   lexicon: string;
   definition: string;
   imgUrl: string;
};

interface Props {
   index: number;
   value: IFlashcard;
   onChange?: (input: IFlashcard) => void;
   onRemove?: () => void;
}

const Study = ({ index, value, onChange, onRemove }: Props) => {
   const [chooseImage, setChooseImage] = useState('');
   const inputFileImageRef = useRef<HTMLInputElement | null>(null);

   const handleChange = useCallback(
      (e: FormEvent<HTMLTextAreaElement>) => {
         onChange?.({
            ...value,
            [e.currentTarget.name]: e.currentTarget.value,
         });
      },
      [value, onChange]
   );

   const handleUploadOwnImage = useCallback(
      async (e: ChangeEvent<HTMLInputElement>) => {
         const file = e.target.files?.[0];

         if (file) {
            const reader = new FileReader();
            reader.onload = () => {
               setChooseImage(reader.result as string);
            };
            reader.readAsDataURL(file);
         }

         if (inputFileImageRef.current) {
            inputFileImageRef.current.value = '';
         }
      },
      []
   );

   const handleRemoveUploadedOwnImage = useCallback(() => {
      setChooseImage('');
   }, []);

   useEffect(() => {
      if (chooseImage) {
         onChange?.({
            ...value,
            imgUrl: chooseImage,
         });
      }
   }, [chooseImage]);

   return (
      <div className="rounded-lg bg-white shadow-card">
         <div className="flex items-center justify-between font-bold text-[#939bb4] p-3 border-b-2 border-solid border-neutral-200  ">
            <span className="w-10 flex items-center justify-center">
               {index}
            </span>
            <button
               className="w-9 h-9 flex items-center justify-center"
               onClick={onRemove}
            >
               <Trash className="w-4 h-4" />
            </button>
         </div>
         <div className="p-3 pb-6 flex items-start md:flex-row flex-col">
            <div className="w-full p-3 md:pr-6">
               <Input
                  label="Term"
                  placeholder="Enter term"
                  onChange={handleChange}
                  value={value.lexicon}
                  name="lexicon"
               />
            </div>
            <div className="w-full p-3 md:pl-6">
               <div className="flex items-start space-x-6">
                  <Input
                     label="Definition"
                     placeholder="Enter definition"
                     onChange={handleChange}
                     name="definition"
                     value={value.definition}
                  />
                  {chooseImage ? (
                     <div className=" w-[5.25rem] h-[3.75rem] cursor-zoom-in relative">
                        <img
                           src={chooseImage}
                           alt=""
                           className="w-full h-full object-cover rounded"
                        />
                        <button
                           className="absolute w-7 h-7 flex items-center justify-center bg-[#303545] rounded right-[2px] top-[2px]"
                           onClick={handleRemoveUploadedOwnImage}
                        >
                           <Trash className="w-4 h-4 text-white" />
                        </button>
                     </div>
                  ) : (
                     <button
                        className="flex flex-col items-center justify-center  p-[5px] border-2 border-dashed rounded w-[5.25rem] h-[3.75rem] hover:border-[#ffcd1f] group transition-all"
                        onClick={() => {
                           inputFileImageRef.current?.click();
                        }}
                     >
                        <input
                           type="file"
                           ref={inputFileImageRef}
                           className="hidden"
                           onChange={handleUploadOwnImage}
                           accept="image/*"
                        />
                        <Plus className="h-5 w-5 group-hover:text-[#ffcd1f] transition-all" />
                        <span className="text-xs font-semibold">Ảnh</span>
                     </button>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Study;
