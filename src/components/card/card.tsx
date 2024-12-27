import { MainCard } from "../main-card";
import { Props } from "./types";

export const Card: React.FC<Props> = ({
  title,
  salary,
  location,
  status,
  logo,
}) => (
  <MainCard className="flex justify-between shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15)] items-start">
    <div className="flex items-center gap-x-4">
      <div className="border-[2px] border-gray-200 rounded-full">
        <img
          src={logo}
          alt="Company Logo"
          className="w-[68px] h-[68px] rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <div className="pt-1">
          <p className="text-gray-500">{salary}</p>
        </div>
        <div className="pt-4">
          <p className="text-gray-400 text-sm">{location}</p>
        </div>
      </div>
    </div>
    <span
      className={`text-base font-medium px-[19px] py-2 capitalize font-['Inter Display'] rounded-lg leading-normal ${
        status === "applied"
          ? "bg-[#0062ff]/5 text-[#0062ff]  "
          : status === "declined"
          ? "bg-[#f13225]/5 text-[#f13225]"
          : status === "hired"
          ? "bg-[#12b669]/5 text-[#12b669]"
          : status === "offer"
          ? "bg-[#0062ff]/5 text-[#0062ff]  "
          : status === "interview"
          ? " bg-[#f79009]/5 text-[#f79009]"
          : ""
      }`}
    >
      {status}
    </span>
  </MainCard>
);
