import { FooterColProps } from "@/types/types";
import { memo } from "react";


const FooterCol = ({ title, links }: FooterColProps) => {
  return (
    <div className="text-left min-w-[150px]">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li
            key={`${title}-${link}-${index}`} // slightly better than index-only key
            className="text-sm text-gray-500 hover:text-[#0b91d4] cursor-pointer transition-colors duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(FooterCol);
