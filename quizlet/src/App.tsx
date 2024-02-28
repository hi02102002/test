import { useState } from 'react';
import { Button } from './components/button';
import Input from './components/input';
import Study, { IFlashcard } from './components/study';

function App() {
   const [data, setData] = useState<{
      title: string;
      description: string;
      school: string;
      course: string;
      flashcards: IFlashcard[];
   }>({
      title: '',
      description: '',
      school: '',
      course: '',
      flashcards: [
         {
            id: '1',
            lexicon: 'This is a lexicon',
            definition: 'This is a definition',
            imgUrl: '',
         },
         {
            id: '2',
            lexicon: 'This is a another lexicon',
            definition: 'This is a another definition',
            imgUrl: '',
         },
      ],
   });

   const handleChangeFlashcards = (input: IFlashcard, index: number) => {
      setData((prev) => {
         const newFlashcards = [...prev.flashcards];
         newFlashcards[index] = input;
         return {
            ...prev,
            flashcards: newFlashcards,
         };
      });
   };

   const handleRemoveCard = (id: string) => {
      setData((prev) => {
         return {
            ...prev,
            flashcards: prev.flashcards.filter((item) => item.id !== id),
         };
      });
   };

   const handleAddCard = () => {
      setData((prev) => {
         return {
            ...prev,
            flashcards: [
               ...prev.flashcards,
               {
                  id: Math.random().toString(36).substr(2, 9),
                  lexicon: '',
                  definition: '',
                  imgUrl: '',
               },
            ],
         };
      });
   };

   const handleChangeTextField = (field: keyof typeof data, value: string) => {
      setData((prev) => {
         return {
            ...prev,
            [field]: value,
         };
      });
   };

   const onSubmit = () => {
      if (data.title.trim() === '' || data.flashcards.length > 2) {
         window.alert('Hãy điền tiêu đề và ít nhất 2 thẻ');
         return;
      }

      if (
         data.flashcards.some(
            (item) =>
               item.lexicon.trim() === '' || item.definition.trim() === ''
         )
      ) {
         window.alert('Hãy điền đầy đủ thông tin cho thẻ');
         return;
      }

      window.alert(JSON.stringify(data, null, 2));

      setData({
         title: '',
         description: '',
         school: '',
         course: '',
         flashcards: [
            {
               id: '1',
               lexicon: 'This is a lexicon',
               definition: 'This is a definition',
               imgUrl: '',
            },
            {
               id: '2',
               lexicon: 'This is a another lexicon',
               definition: 'This is a another definition',
               imgUrl: '',
            },
         ],
      });
   };

   return (
      <div className="p-6 bg-stone-100 min-h-svh">
         <div className="h-[6.875rem]">
            <div className=" bg-stone-100">
               <div className="flex items-center justify-between gap-4 h-[6.875rem]  ui-container">
                  <h2 className="text-xl font-bold">Tạo học phần mới</h2>
                  <Button
                     className="py-[0.375rem] px-[0.875rem] rounded-sm"
                     onClick={onSubmit}
                  >
                     Tạo
                  </Button>
               </div>
            </div>
         </div>
         <div className="mb-8">
            <div className="flex md:items-start md:flex-row flex-col justify-between gap-4">
               <div className="space-y-2 w-full flex-1 ">
                  <Input
                     label="Tiêu đề"
                     placeholder="Nhập tiêu đề, ví dụ 'Sinh học - Chương 22: Tiến hoá'"
                     value={data.title}
                     onChange={(e) =>
                        handleChangeTextField('title', e.currentTarget.value)
                     }
                  />
                  <div className="flex items-start w-full gap-6">
                     <Input
                        label="Mô tả"
                        placeholder="Thêm mô tả"
                        className="min-h-[127px]"
                        value={data.description}
                        onChange={(e) =>
                           handleChangeTextField(
                              'description',
                              e.currentTarget.value
                           )
                        }
                     />
                     <div className="w-1/2 flex-shrink-0 flex flex-col gap-6">
                        <Input
                           label="Tên trường"
                           placeholder="Thêm tên trường"
                           value={data.school}
                           onChange={(e) =>
                              handleChangeTextField(
                                 'school',
                                 e.currentTarget.value
                              )
                           }
                        />
                        <Input
                           label="Khoá học"
                           placeholder="Thêm khoá học"
                           disabled={!data.school}
                           value={data.course}
                           onChange={(e) =>
                              handleChangeTextField(
                                 'course',
                                 e.currentTarget.value
                              )
                           }
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <ul>
               {data.flashcards.map((item, index) => {
                  return (
                     <li key={item.id} className="mb-5">
                        <Study
                           index={index + 1}
                           value={item}
                           onChange={(input) => {
                              handleChangeFlashcards(input, index);
                           }}
                           onRemove={() => {
                              handleRemoveCard(item.id);
                           }}
                        />
                     </li>
                  );
               })}
            </ul>
            <div className="min-h-[120px] flex items-center justify-center bg-white rounded-lg shadow-card mb-5">
               <button
                  className="transition-all border-b-[0.3125rem] border-blue-400 pb-3 uppercase font-bold tracking-[0.075rem] text-[.9375rem] hover:text-yellow-500 hover:border-b-yellow-500"
                  onClick={handleAddCard}
               >
                  Thêm thẻ mới
               </button>
            </div>
            <div className="flex items-center justify-end">
               <Button
                  className="py-5 px-8 rounded-sm h-[unset]"
                  onClick={onSubmit}
               >
                  Tạo
               </Button>
            </div>
         </div>
      </div>
   );
}

export default App;
