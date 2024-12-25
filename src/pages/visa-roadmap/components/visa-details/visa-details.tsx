import { Sheet } from "@/components";
import { FC } from "react";
import { Props } from "./types";

export const VisaDetails: FC<Props> = ({ open, onClose }) => {
  return (
    <Sheet
      side="right"
      className="min-w-[460px]"
      open={open}
      onClose={onClose}
      title="D-2"
    >
      <div>
        <h3 className=" text-[#0b0b0b] text-xl font-normal font-['Inter Display']">
          Description
        </h3>
        <p className=" text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-relaxed mt-3">
          Educational institutions: Colleges and universities or academic
          research institutions established under the Higher Education Act and
          special laws, and universities or affiliated language schools that
          meet the requirements set by the Minister of Justice. Foreign
          students: Foreigners who wish to study abroad (D-2) and language
          training (D-4-1, D-4-7) at the above institutions for full-time
          education or specific research. Maximum period of stay that can be
          granted once: 2 years.
        </p>
      </div>
    </Sheet>
  );
};
