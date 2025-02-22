const Buttons = () => {

const arrText = [
    { id: 1, name: 'Inscreva-se no NLW' },
    { id: 2, name: 'Baixe meu e-book' },
    { id: 3, name: 'Veja meu portfólio' },
    { id: 4, name: 'Conheça o Explorer' },
];	

return(
    <div className='flex flex-col dark:text-dark-mode-text text-light-mode-text justify-center gap-4'>
        {arrText.map(item => (
            <button key={item.id} className='border w-96 h-12 border-solid dark:border-light-mode-background border-dark-mode-background/50
            hover:border-dark-mode-background   bg-surface-light-mode hover:bg-surface-light-mode dark:bg-surface-dark-mode dark:hover:bg-surface-dark-mode-hover dark:hover:border-light-mode-background transition-all ease-out duration-500 font-medium text-sm px-4 py-2 rounded-md focus:outline-hidden'>
                {item.name}
            </button>
        ))}
    </div>
 );




}

export default Buttons;