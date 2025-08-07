import { ProductCardProps } from "@/types/types";
import Image from "next/image";
import { memo } from "react";


const ProductCard = ({ img, title, price, category }: ProductCardProps) => {
  return (
    <div className="group text-left w-full max-w-[300px] mx-auto cursor-pointer transition-transform hover:scale-[1.015]">
      <div className="relative h-[416px] rounded-xl overflow-hidden shadow-md">
        <div className="relative w-full aspect-[276/416]">
          <Image
            src={img}
            alt="Product Image"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 300px"
            // priority
          />
        </div>

        <div className="absolute top-3 right-3 z-10 bg-white/90 p-2 rounded-full shadow-md transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#0b91d4"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
              2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09 
              C13.09 3.81 14.76 3 16.5 3 
              19.58 3 22 5.42 22 8.5 
              c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            height="48"
            viewBox="0 0 24 24"
            width="48"
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 
              6 7.5 11 7.5s9.27-3.11 
              11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 
              13c-3.04 0-5.5-2.46-5.5-5.5S8.96 
              6.5 12 6.5s5.5 2.46 5.5 
              5.5S15.04 17.5 12 17.5zm0-9c-1.93 
              0-3.5 1.57-3.5 3.5S10.07 15.5 12 
              15.5s3.5-1.57 3.5-3.5S13.93 8.5 
              12 8.5z" />
          </svg>
        </div>
      </div>

      <div className="mt-4 space-y-1 px-1">
        <h2 className="text-base font-semibold text-gray-800 truncate">{title}</h2>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-sm font-bold text-[#0b91d4]">{price} $</p>
      </div>
    </div>
  );
};

export default memo(ProductCard);
