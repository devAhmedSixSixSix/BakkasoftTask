import ModernLayout from '../themes/modern/layout';
import ClassicLayout from '../themes/classic/layout';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { Props } from '@/types/types';

export default function Home({ settings, theme }: Props) {

  const LayoutWithTheme = () => {
    const { theme } = useTheme();
    const Layout = theme === 'modern' ? ModernLayout : ClassicLayout;
    return <Layout settings={settings} />;

  };

  return (
    <ThemeProvider initialTheme={theme}>
      <LayoutWithTheme />
    </ThemeProvider>
  );
}

export const getServerSideProps =  () => {
  return {
    props: {
      theme: 'classic',
      settings: {
        primaryColor: '#4A90E2',
        rtl: false,
      },
    },
  };
};
