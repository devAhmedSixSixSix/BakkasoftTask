import { Category } from "@/types/types";
import Image from "next/image";
import { memo } from "react";


const CategoryCard = ({ img, title, description }: Category) => {
  return (
    <div className="w-full max-w-[320px] mx-auto text-center cursor-pointer group mb-10">
      <div className="relative w-full aspect-[1/1] overflow-hidden transition-all duration-300">
        <Image
          src={img}
          alt="Category Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
          className="object-cover object-bottom transition-transform duration-300 group-hover:scale-105"
          // loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="cursor-pointer px-4 py-2 text-sm font-medium text-white border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
            Explore Now
          </button>
        </div>
      </div>
      <h2 className="mt-4 text-lg font-semibold text-gray-800 truncate">{title}</h2>
      <p className="mt-2 text-sm text-gray-500 line-clamp-2">{description}</p>
    </div>
  );
};

export default memo(CategoryCard);
