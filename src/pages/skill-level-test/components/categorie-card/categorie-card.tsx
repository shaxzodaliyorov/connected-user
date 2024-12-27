import { Props } from "./types";

export const CategoryCard: React.FC<Props> = ({ icon, title, description }) => (
  <div className="w-[272px] transition-all duration-150 h-[280px] rounded-[15px] bg-white p-5 group hover:bg-[#0062FF]">
    <div className="p-[15px] w-[60px] flex justify-center items-center h-[60px] text-[#fff] bg-[#0062FF] group-hover:text-[#0062FF] group-hover:bg-white gap-0 opacity-[0.05px] rounded-[15px] left-[172px] top-[726px]">
      {icon}
    </div>
    <div className="pt-[44px]">
      <h4 className="text-xl font-semibold line-clamp-1 group-hover:text-white">
        {title}
      </h4>
    </div>
    <div className="pt-4">
      <h4 className="text-[16px] group-hover:text-white text-[#7D7D7D] line-clamp-4 font-normal">
        {description}
      </h4>
    </div>
  </div>
);
