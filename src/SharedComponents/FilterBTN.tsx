import { memo } from "react";
import { FilterBTNProps } from "@/types/types";

const FilterBTN = ({ text, onClick, active }: FilterBTNProps) => {
  return (
    <div className="flex gap-3 justify-center my-6 cursor-pointer">
      {text.map((item) => {
        const isActive = active === item;
        return (
          <button
            key={item}
            onClick={() => onClick(item)}
            className={`cursor-pointer px-4 py-2 border rounded-full outline-0 transition-colors duration-300 ${
              isActive
                ? "bg-[#0b91d4] text-white"
                : "bg-white text-black hover:bg-[#0b91d4] hover:text-white"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default memo(FilterBTN);
