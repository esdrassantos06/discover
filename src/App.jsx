import './App.css'
import Me from './assets/photo/me.jpeg';
import DarkModeButton from './components/DarkModeButton';
import Buttons from './components/Buttons';
import SocialMediaIcons from './components/Icons';
import { Heart } from "@phosphor-icons/react";
import React from 'react';


function App() {

  return (
    <>
      <main className='__main flex flex-col items-center justify-center dark:text-darkModeText text-lightModeText'>

        <div className='__photo-and-name select-none gap-2 flex flex-col items-center justify-center'>
          <img src={Me} alt='Esdras' className='w-24 h-24 transition-transform ease-in-out dark:border-darkModeStroke border-lightModeStroke  border-opacity-50 border-2 border-solid rounded-full object-cover overflow-hidden' />
          <a href='https://www.instagram.com/esdras.snts/' className='inter text-sm' target='_blank'>@esdras.snts</a>
        </div>

        <div className='__darkModeSwitch mt-4'>
          <DarkModeButton />
        </div>

        <div className='__buttons mt-5'>
          <Buttons />
        </div>
        <div className='__social-buttons mt-6'>
          <SocialMediaIcons />
        </div>
        <div className='mt-4 inter flex items-center space-x-2'>
          <p className='text-center flex items-center text-md'>
            Feito com</p>
          <Heart weight="fill" />
          <p className='text-center text-md'>por</p>
            <a
              href='https://www.instagram.com/esdras.snts/'
              target='_blank'
              className='underline'
            >
              @esdras.snts                              
            </a>

        </div>
      </main>
    </>
  )
}

export default App;
