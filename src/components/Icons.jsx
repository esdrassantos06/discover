import { Github, Instagram, Youtube, Linkedin } from 'lucide-react';

const SocialMediaIcons = () => {

    return (
        <div className='flex space-x-4'>
            <div className='hover:bg-surfaceLightModeHover dark:hover:bg-surfaceDarkModeHover transition-all duration-700 ease-in-out p-2 rounded-full'>
                <Github size={26} />
            </div>
            <div className='hover:bg-surfaceLightModeHover dark:hover:bg-surfaceDarkModeHover transition-all duration-700 ease-in-out p-2 rounded-full'>
                <Instagram size={26} />
            </div>
            <div className='hover:bg-surfaceLightModeHover dark:hover:bg-surfaceDarkModeHover transition-all duration-700 ease-in-out p-2 rounded-full'>
            <Youtube size={26} />
            </div>
            <div className='hover:bg-surfaceLightModeHover dark:hover:bg-surfaceDarkModeHover transition-all duration-700 ease-in-out p-2 rounded-full'>
            <Linkedin size={26} />
            </div>
        </div>


    )
}

export default SocialMediaIcons;