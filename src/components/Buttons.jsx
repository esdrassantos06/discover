import React from 'react';

const Buttons = () => {

const arrText = [
    { id: 1, name: 'Inscreva-se no NLW' },
    { id: 2, name: 'Baixe meu e-book' },
    { id: 3, name: 'Veja meu portfólio' },
    { id: 4, name: 'Conheça o Explorer' },
];	

return(
    <div className='flex flex-col dark:text-darkModeText text-lightModeText justify-center gap-4'>
        {arrText.map(item => (
            <button key={item.id} className='border w-96 h-12 border-solid dark:border-lightModeBackground border-darkModeBackground hover:border-darkModeBackground hover:border-opacity-100 border-opacity-50  dark:border-opacity-50 bg-surfaceLightMode hover:bg-surfaceLightModeHover dark:bg-surfaceDarkMode dark:hover:bg-surfaceDarkModeHover dark:hover:border-lightModeBackground transition-all ease-out duration-500 font-medium text-sm px-4 py-2 rounded-md focus:outline-none'>
                {item.name}
            </button>
        ))}
    </div>
 );




}

export default Buttons;