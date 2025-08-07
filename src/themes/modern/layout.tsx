import { Settings } from "@/types/types";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainTitle from "@/SharedComponents/MainTitle";
import FilterBTN from "@/SharedComponents/FilterBTN";
import ProductCard from "@/themes/modern/components/ProductCard";
import CategoryCard from "@/themes/modern/components/CategoryCard";
import { useTheme } from "@/context/ThemeContext";
import { useCallback } from "react";
import Brands from "@/SharedComponents/Brands";

export default function Layout({ settings }: { settings: Settings }) {
  const {
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    brands,
    categories,
  } = useTheme();
  const handleCategoryChange = useCallback(
    (category: string) => {
      setSelectedCategory(category);
    },
    [setSelectedCategory]
  );

  return (
    <div>
      <Navbar />
      <main className="mt-[150px]">
        <MainTitle title="Trending now" />
        <FilterBTN
          text={["All", "Shoes", "Dresses"]}
          onClick={handleCategoryChange}
          active={selectedCategory}
        />

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {filteredProducts.map((i, index) => (
            <ProductCard
              key={index}
              img={i.img}
              title={i.title}
              price={i.price}
              category={i.category}
            />
          ))}
        </div>

        <MainTitle title="Actual categories" />
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((i, index) => (
            <CategoryCard
              key={index}
              img={i.img}
              title={i.title}
              description={i.description}
            />
          ))}
        </div>

        <MainTitle title="Only trusted brands" />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}
