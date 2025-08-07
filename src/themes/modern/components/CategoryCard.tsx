import { Category } from "@/types/types";
import Image from "next/image";
import { memo } from "react";


const CategoryCard = ({ img, title, description }: Category) => {
  return (
    <div className="text-center cursor-pointer">
      <div className="relative mx-auto w-full max-w-[312px] h-[318px] group overflow-hidden shadow-md">
        <Image
          src={img}
          alt="Category Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 312px"
          className="object-cover object-bottom"
          // loading="lazy"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="px-4 text-center">
            <button className="cursor-pointer mb-4 px-5 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition">
              Explore Now
            </button>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm mt-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CategoryCard);
