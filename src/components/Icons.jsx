import { Github, Instagram, Youtube, Linkedin } from 'lucide-react';

const SocialMediaIcons = () => {

    return (
        <div className='flex space-x-4'>
            <div className='hover:bg-surfaceLightModeHover dark:hover:bg-surfaceDarkModeHover transition-all duration-700 ease-in-out p-2 rounded-full'>

                <a href="https://github.com" target='_blank'>
                    <Github size={26} />
                </a>
            </div>
            <div className='hover:bg-surfaceLightModeHover dark:hover:bg-surfaceDarkModeHover transition-all duration-700 ease-in-out p-2 rounded-full'>
                <a href="https://instagram.com" target='_blank'>
                    <Instagram size={26} />
                </a>
            </div>
            <div className='hover:bg-surfaceLightModeHover dark:hover:bg-surfaceDarkModeHover transition-all duration-700 ease-in-out p-2 rounded-full'>
                <a href="https://youtube.com" target='_blank'>
                    <Youtube size={26} />
                </a>
            </div>
            <div className='hover:bg-surfaceLightModeHover dark:hover:bg-surfaceDarkModeHover transition-all duration-700 ease-in-out p-2 rounded-full'>
                <a href="https://linkedin.com" target='_blank'>
                    <Linkedin size={26} />
                </a>
            </div>
        </div>


    )
}

export default SocialMediaIcons;