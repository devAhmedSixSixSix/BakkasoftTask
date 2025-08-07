import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import mockData from '@/MockData/MockData.json';
import { Theme, ExtendedThemeContext } from '@/types/types';

const ThemeContext = createContext<ExtendedThemeContext>({
  theme: 'modern',
  setTheme: () => {},
  products: [],
  categories: [],
  brands: [],
  selectedCategory: 'All',
  setSelectedCategory: () => {},
  filteredProducts: [],
});

export const ThemeProvider = ({
  initialTheme,
  children,
}: {
  initialTheme: Theme;
  children: ReactNode;
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const products = mockData.products;
  const categories = mockData.categories;
  const brands = mockData.brands;

  const filteredProducts = useMemo(() => {
    return selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        products,
        categories,
        brands,
        selectedCategory,
        setSelectedCategory,
        filteredProducts,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
