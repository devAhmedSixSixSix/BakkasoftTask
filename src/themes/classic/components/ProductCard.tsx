import { ProductCardProps } from "@/types/types";
import Image from "next/image";
import { memo } from "react";


const ProductCard = ({ img, title, price, category }: ProductCardProps) => {
  return (
    <div className="group border rounded-xl transition-all duration-300 bg-white">
      <div className="relative w-full h-[416px] rounded-t-xl overflow-hidden">
        <Image
          src={img}
          alt="Product Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 276px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      <div className="p-4 text-left space-y-2">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-md font-bold text-[#0b91d4]">{price} $</p>
        <button className="cursor-pointer w-full mt-2 py-2 rounded-full border border-[#0b91d4] text-[#0b91d4] font-medium hover:bg-[#0b91d4] hover:text-white transition-colors duration-300">
          View Product
        </button>
      </div>
    </div>
  );
};

export default memo(ProductCard);
