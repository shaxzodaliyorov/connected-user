import { AddResume } from "@/icons";
import { Props } from "./types";
import { VisaDetails } from "../visa-details";
import { useState } from "react";

export const Information: React.FC<Props> = ({ text, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="p-5 transition-all duration-150 cursor-pointer rounded-[15px] bg-white hover:bg-[#0062ff] group hover:!text-white flex flex-col gap-y-8"
      >
        <div className="w-full flex justify-between items-center">
          <h2 className="text-[#0b0b0b] text-2xl font-semibold group-hover:text-white font-['Inter Display'] leading-9">
            {title}
          </h2>
          <AddResume className="group-hover:text-white text-[#737373]" />
        </div>
        <p className="group-hover:text-white text-neutral-500 text-xl font-normal font-['Inter Display'] leading-7">
          {text}
        </p>
      </div>
      <VisaDetails open={open} onClose={() => setOpen(false)} />
    </>
  );
};
