import { Pencil } from "@/icons";
import { Props } from "./types";
import { EditModal } from "../edit-modal";
import { useState } from "react";

export const ListItem = ({ education, resume }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`py-6 transition-all duration-300 relative border-b border-b-neutral-100  `}
    >
      <h1 className="text-lg font-semibold lg:leading-[28.8px] text-left text-[#161C1C]">
        {education.university}
      </h1>
      <div className="flex gap-x-2 text-[#7C8493] items-center">
        <p className="text-base font-normal lg:leading-[25.6px] text-left">
          {education?.major}, {education.category}
        </p>
      </div>
      <p className="text-base text-[#7C8493] font-normal lg:leading-[25.6px] text-left">
        {education.admission_year} - {education.admission_year}
      </p>
      <p className="text-base font-normal text-[#161C1C] w-[60%] lg:leading-[25.6px] text-left">
        {education?.description}
      </p>
      <button
        onClick={() => setOpen(true)}
        className="absolute text-[#6E86FF] top-6 right-0 p-[8px] rounded-[8px]"
      >
        <Pencil />
      </button>
      <EditModal
        resume={resume}
        education={education}
        open={open}
        close={() => setOpen(false)}
      />
    </div>
  );
};
