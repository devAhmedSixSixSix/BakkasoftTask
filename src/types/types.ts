export type Settings = {
  primaryColor: string;
  rtl: boolean;
};

export type Theme = 'modern' | 'classic';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  products: Product[];
  categories: Category[];
  brands: Brand[];
}

export type ExtendedThemeContext = ThemeContextType & {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filteredProducts: Product[];
};

export interface Product {
  img: string;
  title: string;
  category: string;
  price: string;
}

export interface Category {
  img: string;
  title: string;
  description: string;
}

export type Brand = string;

export interface FilterBTNProps {
  text: string[];
  onClick: (category: string) => void;
  active: string;
}

export type ProductCardProps = Product;

export interface FooterColProps {
  title: string;
  links: string[];
}

export interface MainTitleProps {
  title: string;
}

export type Props = {
  settings: Settings;
  theme: Theme;
};
