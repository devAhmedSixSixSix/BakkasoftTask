import { MainTitleProps } from "@/types/types";
import { memo } from "react";



const MainTitle = ({ title }: MainTitleProps) => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mt-16 mb-8">
      {title}
    </h2>
  );
};

export default memo(MainTitle);
