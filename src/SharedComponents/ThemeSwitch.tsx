import { useTheme } from '@/context/ThemeContext';

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
    return (
        <button
        className='bg-[#0b91d4] text-white py-[8px] px-[16px] cursor-pointer rounded-full'
            onClick={() => setTheme(theme === 'modern' ? 'classic' : 'modern')}>
            Theme: {theme}
        </button>
    )
}

export default ThemeSwitch