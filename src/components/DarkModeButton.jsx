import { useEffect, useState } from 'react';
import { Sun, MoonStars } from "@phosphor-icons/react";

const DarkModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (

        <div>        
        <button id="switch"
            onClick={toggleDarkMode}
            className="w-12 z-10 h-5 rounded-2xl bg-light-mode-background/50 dark:bg-dark-mode-background/50 border-surface-light-mode/10 dark:border-surface-dark-mode border border-solid flex items-center transition duration-300 focus:outline-hidden">

            <div className={`relative z-10 ${isDarkMode ? 'translate-x-1' : 'translate-x-11'} duration-500 flex bg-light-mode-background dark:hover:outline-surface-dark-mode-hover outline-surface-light-mode-hover hover:outline-8  transition-all  items-center justify-center rounded-full h-7 w-7 -left-4`}>
                    {isDarkMode ? <MoonStars size={17} className='text-black' /> : <Sun size={17} className='text-black' />}
            </div>
        </button>
        </div>

    );
};

export default DarkModeSwitch;
