import { useState } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import SpecialMenu from './components/special-menu';
import banner from './assets/banner.png';
import CustomerReview from './components/customer';
import Inbox from './components/inbox';
import Footer from './components/footer';

function App() {
   return (
      <>
         <Header />
         <Hero />
         <SpecialMenu />
         <div
            className="min-h-[511px] flex items-center"
            style={{
               backgroundImage: `url(${banner})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
            }}
         >
            <div className="app-container">
               <div className="flex items-center justify-end">
                  <h3 className="max-w-[492px] text-[3.5rem] font-bold text-end uppercase text-white">
                     more than just a coffee shop
                  </h3>
               </div>
            </div>
         </div>
         <div className="relative app-container">
            <CustomerReview />
            <Inbox />
         </div>
         <Footer />
      </>
   );
}

export default App;
